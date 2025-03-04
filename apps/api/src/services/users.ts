/* ---------- Database ---------- */
import type { Database } from "../database/database";
import { Models } from "../models/models";


/**
 * @description
 * Users service for handling friends, profiles, etc.
 */
export class Users {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    async createUser({ accountId, nickname }: Pick<Models.User, 'accountId' | 'nickname'>) {
        const user = await this.database.query(`
            INSERT INTO users (account_id, nickname, avatar, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(account_id) DO NOTHING
            RETURNING *
        `, [accountId, nickname, '/static/avatars/1.png', Date.now(), Date.now()]);

        if (!user) throw ExistingUser;

        return Models.User.deserialize(user);
    }

    async findUserByAccountId(accountId: Models.User['accountId']) {
        const [user] = await this.database.query(`
            SELECT * FROM users WHERE account_id = ?
        `, [accountId]);

        if (!user) throw UserNotFound;

        return Models.User.deserialize(user);
    }

    async findUserById(id: Models.User['id']) {
        const [user] = await this.database.query(`
            SELECT * FROM users WHERE id = ?
        `, [id]);

        if (!user) throw UserNotFound;

        return Models.User.deserialize(user);
    }

    async findUserByNickname(nickname: Models.User['nickname']) {
        const [user] = await this.database.query(`
            SELECT * FROM users WHERE nickname = ?
        `, [nickname]);

        if (!user) throw UserNotFound;

        return Models.User.deserialize(user);
    }

    async getFriendlist(userId: Models.User['id']) {
        const friends = await this.database.query(`
            SELECT u.*
            FROM friends f
            JOIN users u 
            ON u.id = CASE 
                WHEN f.user_id = ? THEN f.friend_id 
                ELSE f.user_id 
            END
            WHERE (f.user_id = ? OR f.friend_id = ?) 
            AND f.status = 'accepted'`, [userId, userId, userId]);

        return friends.map(Models.User.deserialize);
    }

    async addFriend({ userId, friendId }: Pick<Models.Friend, 'userId' | 'friendId'>) {
        const [friend] = await this.database.query(`
            INSERT INTO friends (user_id, friend_id, status, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(user_id, friend_id) DO NOTHING
            RETURNING *
        `, [userId, friendId, 'pending', Date.now(), Date.now()]);

        if (!friend) return UserAlreadyFriends;

        return Models.Friend.deserialize(friend);
    }

    async removeFriend({ userId, friendId }: Pick<Models.Friend, 'userId' | 'friendId'>) {
        const [friend] = await this.database.query(`
            DELETE FROM friends
            WHERE user_id = ? AND friend_id = ?
            ON CONFLICT(user_id, friend_id) DO NOTHING
            RETURNING *
        `, [userId, friendId]);

        if (!friend) throw FriendNotFound;

        return Models.Friend.deserialize(friend)
    }

    async acceptFriend({ userId, friendId }: Pick<Models.Friend, 'userId' | 'friendId'>) {
        const [friend] = await this.database.query(`
            UPDATE friends
            SET status = ?, updated_at = ?
            WHERE user_id = ? AND friend_id = ?
            RETURNING *
        `, ['accepted', Date.now(), userId, friendId]);

        return Models.Friend.deserialize(friend);
    }

    async rejectFriend({ userId, friendId }: Pick<Models.Friend, 'userId' | 'friendId'>) {
        const [friend] = await this.database.query(`
            UPDATE friends
            SET status = ?, updated_at = ?
            WHERE user_id = ? AND friend_id = ?
            RETURNING *
        `, ['rejected', Date.now(), userId, friendId]);

        return Models.Friend.deserialize(friend);
    }
}

/* ---------- Errors ---------- */
class UserNotFound extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'user not found.' }));
        const name = 'UserNotFound';
        this.name = name;
        this.key = name;
        this.status = 404;
    }
}

class ExistingUser extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'user already exists.' }));
        const name = 'ExistingUser';
        this.name = name;
        this.key = name;
        this.status = 400;
    }
}

class UserAlreadyFriends extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'users are already friends.' }));
        const name = 'UserAlreadyFriends';
        this.name = name;
        this.key = name;
        this.status = 400;
    }
}

class FriendNotFound extends Error {
    code: string;
    key: string;
    status: number;

    constructor() {
        super(JSON.stringify({ "message": 'friend not found.' }));
        const name = 'FriendNotFound';
        this.name = name;
        this.key = name;
        this.status = 404;
    }
}
