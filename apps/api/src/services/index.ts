/* ---------- Database ---------- */
import type { Database } from "../database/database";

/* ---------- Services ---------- */
import { Authentication } from "./authentication";
import { Users } from "./users";

/* ---------- Interfaces ---------- */
interface ServiceProps {
    database: Database;
}

export class Services {
    private database: Database;
    authentication: Authentication;
    users: Users;

    constructor({ database }: ServiceProps) {
        this.database = database;
        this.authentication = new Authentication(this.database);
        this.users = new Users(this.database);
    }
}
