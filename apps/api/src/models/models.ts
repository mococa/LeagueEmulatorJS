export namespace Models {
    class Base {
        /** Unique auto-incremented ID */
        id: number;

        /** Date of creation in milliseconds since Jan 1st 1970. */
        createdAt: number;

        /** Date of last update in milliseconds since Jan 1st 1970. */
        updatedAt: number;

        /**
         * @description
         * Deserialization function that edits the row
         * from SQL to match the TypeScript model (snake_case
         * to camelCase)
         * 
         * @example
         * "user_id" // turns into userId
         * 
         * @param row SQL row
         * @returns new row edited
         */
        static deserialize(row: Record<string, unknown>) { }
    }

    export class Account extends Base {
        /** Account username */
        username: string;
        /** Hashed password */
        password: string;

        static deserialize(row: Record<string, unknown>) {
            if (row['created_at']) {
                row.createdAt = Number(row['created_at']);
                delete row['created_at'];
            }

            if (row['updated_at']) {
                row.updatedAt = Number(row['updated_at']);
                delete row['updated_at'];
            }

            return row as unknown as Models.Account;
        }
    }

    export class User extends Base {
        /** ID that refers to the account that owns this user */
        accountId: number;
        /** Unique nickname */
        nickname: string;
        /** Path to the user's avatar */
        avatar: string;

        static deserialize(row: Record<string, unknown>) {
            if (row['account_id']) {
                row.accountId = Number(row['account_id']);
                delete row['account_id'];
            }

            if (row['created_at']) {
                row.createdAt = Number(row['created_at']);
                delete row['created_at'];
            }

            if (row['updated_at']) {
                row.updatedAt = Number(row['updated_at']);
                delete row['updated_at'];
            }

            return row as unknown as Models.User;
        }
    }

    export class Friend extends Base {
        /** ID of user that sent the friend request */
        userId: number;
        /** ID of user that received the friend request */
        friendId: number;
        /** Status of the friend request */
        status: 'pending' | 'accepted' | 'rejected';

        static deserialize(row: Record<string, unknown>) {
            if (row['user_id']) {
                row.userId = Number(row['user_id']);
                delete row['user_id'];
            }

            if (row['friend_id']) {
                row.friendId = Number(row['friend_id']);
                delete row['friend_id'];
            }

            if (row['created_at']) {
                row.createdAt = Number(row['created_at']);
                delete row['created_at'];
            }

            if (row['updated_at']) {
                row.updatedAt = Number(row['updated_at']);
                delete row['updated_at'];
            }

            return row as unknown as Models.Friend;
        }
    }
}
