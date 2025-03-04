export abstract class Database {
    /**
     * @description
     * Connects to the database.
     */
    abstract connect(): Promise<void>;

    /**
     * @description
     * Disconnects from the database.
     */
    abstract disconnect(): Promise<void>;

    /**
     * @description
     * Executes a query.
     * 
     * @param query The query to execute.
     */
    abstract query<T extends Record<string, unknown>>(query: string, params: (string | number | boolean)[]): Promise<T & T[]>;
}
