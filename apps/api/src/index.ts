/* ---------- External ---------- */
import { node } from '@elysiajs/node'
import { Elysia } from 'elysia'

/* ---------- Database ---------- */
import { SQLite } from './database/sqlite'

/* ---------- DTOs ---------- */
import { dtos } from './dtos'

/* ---------- Services ---------- */
import { Services } from './services'

const database = new SQLite()
database.connect();

new Elysia({ adapter: node() })
    .state({ services: new Services({ database }) })
    // Authentication
    .post('/sign-up', async ({ store, body }) =>
        await store.services.authentication.signup(body),
        dtos.signUp
    )
    .post('/sign-in', async ({ store, body }) =>
        await store.services.authentication.signin(body),
        dtos.signIn
    )
    .listen(3000, ({ hostname, port }) => {
        console.log(`🦊 Elysia is running at ${hostname}:${port}`)
    })
