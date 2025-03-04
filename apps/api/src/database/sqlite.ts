/* ---------- External ---------- */
import Database, { Database as TDatabase } from "bun:sqlite";

/* ---------- Database ---------- */
import { Database as AbstractDatabase } from "./database";

export class SQLite extends AbstractDatabase {
    db: TDatabase;

    constructor() {
        super();
        this.db = new Database('database.db');
    }

    async migrate() {
        await this.query(`
            CREATE TABLE IF NOT EXISTS accounts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT, 
                password TEXT,
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL
            );
        `);

        await this.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                account_id INTEGER UNIQUE NOT NULL REFERENCES accounts(id),
                nickname TEXT UNIQUE NOT NULL,
                avatar TEXT NOT NULL,
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL
            );
        `);

        await this.query(`
            CREATE TABLE IF NOT EXISTS friends (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id),
                friend_id INTEGER NOT NULL REFERENCES users(id),
                status TEXT NOT NULL,
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL
            );
        `);
    }

    async connect() {
        await this.migrate();

        console.log('Connected to the SQLite database.');
    }

    async disconnect() {
        this.db.close();
    }

    async query<T>(query: string, params: (string | number | boolean | null)[] = []): Promise<T> {
        const stmt = this.db.prepare(query);
        return stmt.all(...params) as T;
    }
}
