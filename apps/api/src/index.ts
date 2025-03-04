/* ---------- External ---------- */
import { node } from '@elysiajs/node'
import { Elysia } from 'elysia'

/* ---------- Database ---------- */
import { SQLite } from './database/sqlite'

/* ---------- Controllers ---------- */
import { AuthController, FriendsController, UsersController } from './controllers'

/* ---------- Services ---------- */
import { Services } from './services'

const database = new SQLite()
database.connect();

new Elysia({ adapter: node() })
    .state({ services: new Services({ database }) })
    .use([AuthController, FriendsController, UsersController])
    .onRequest(({ request }) => {
        console.log('request done.', request.body)
    })
    .listen(3000, ({ hostname, port }) => {
        console.log(`🦊 Elysia is running at ${hostname}:${port}`)
    })
