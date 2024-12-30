/* ---------- Database ---------- */
import type { Database } from "../database/database";

/* ---------- Services ---------- */
import { Authentication } from "./authentication";

/* ---------- Interfaces ---------- */
interface ServiceProps {
    database: Database;
}

export class Services {
    private database: Database;
    authentication: Authentication;

    constructor({ database }: ServiceProps) {
        this.database = database;
        this.authentication = new Authentication(this.database);
    }
}
