/* ---------- External ---------- */
import Elysia from "elysia";

/* ---------- Types ---------- */
import type { ElysiaSingleton } from "../@types/ElysiaSingleton";

/* ---------- DTOs ---------- */
import { dtos } from "../dtos";

export const UsersController = new Elysia<'/users', ElysiaSingleton>({
    name: 'users',
    prefix: '/users'
})
    .post('/', async ({ store, body }) =>
        await store.services.users.createUser(body),
        dtos.users.create
    )
    .get('/find-by-nickname', async ({ store, query }) =>
        await store.services.users.findUserByNickname(query.nickname),
        dtos.users.findByNickame
    )