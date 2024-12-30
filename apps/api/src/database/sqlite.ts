/* ---------- External ---------- */
import Database, { Database as TDatabase } from "better-sqlite3";

/* ---------- Database ---------- */
import { Database as AbstractDatabase } from "./database";

export class SQLite extends AbstractDatabase {
    db: TDatabase;

    constructor() {
        super();
        this.db = new Database('database.db', { verbose: console.log });
    }

    async migrate() {
        await this.query('CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
    }

    async connect() {
        await this.migrate();

        console.log('Connected to the SQLite database.');
    }

    async disconnect() {
        this.db.close();
    }

    async query<T>(query: string, params: (string | number | boolean)[] = []): Promise<T> {
        const stmt = this.db.prepare(query);
        if (!params.length) return stmt.run() as T;
        if (query.includes('SELECT')) return stmt.all(params) as T;
        return stmt.run(params) as T;
    }
}
