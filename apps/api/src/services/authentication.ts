/* ---------- External ---------- */
import { compareSync, hashSync } from "bcryptjs";

/* ---------- Database ---------- */
import type { Database } from "../database/database";
import { Models } from "../models/models";

/* ---------- Interfaces ---------- */
interface SignUp {
    username: string;
    password: string;
    confirmPassword: string;
}

interface SignIn {
    username: string;
    password: string;
}

/**
 * @description
 * Authentication service for signing up and signing in.
 * 
 * Passwords are hashed and compared using bcrypt.
 */
export class Authentication {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    /**
     * @description
     * Signs up for a new account, hashing the password 
     * before storing it in the database.
     * 
     * @param {SignUp} params Request body
     */
    async signup({ username, password, confirmPassword }: SignUp) {
        if (password !== confirmPassword) throw new PasswordMismatch();

        const [duplicated] = await this.database.query('SELECT * FROM accounts WHERE username = ?', [username]);
        if (duplicated) throw new UsernameAlreadyExists();

        const [account] = await this.database.query(`
            INSERT INTO accounts (username, password, created_at, updated_at)
            VALUES (?, ?, ?, ?)
            RETURNING id, username, created_at, updated_at;
        `, [username, hashSync(password, 10), Date.now(), Date.now()]);

        Models.Account.deserialize(account);
        return account;
    }

    /**
     * @description
     * Signs in with an existing account, comparing the
     * hashed password from the database with the input.
     * 
     * @param {SignIn} params Request body 
    */
    async signin({ username, password }: SignIn) {
        const [account] = await this.database.query('SELECT * FROM accounts WHERE username = ?', [username]) || [];
        if (!account) throw new InvalidCredentials();

        const user = Models.Account.deserialize(account);

        const match = compareSync(password, user.password);
        if (!match) throw new InvalidCredentials();

        return user;
    }
}

/* ---------- Types ---------- */
type User = { id: number, username: string, password: string };

/* ---------- Errors ---------- */
class InvalidCredentials extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'invalid credentials' }));
        const name = 'InvalidCredentialsError';
        this.name = name;
        this.key = name;
        this.status = 401;
    }
}

class PasswordMismatch extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'passwords do not match' }));
        const name = 'PasswordMismatchError';
        this.name = name;
        this.key = name;
        this.status = 400;
    }
}

class UsernameAlreadyExists extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'username already exists' }));
        const name = 'UsernameAlreadyExistsError';
        this.name = name;
        this.key = name;
        this.status = 400;
    }
}
