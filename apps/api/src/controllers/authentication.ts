/* ---------- External ---------- */
import Elysia from "elysia";

/* ---------- Types ---------- */
import type { ElysiaSingleton } from "../@types/ElysiaSingleton";

/* ---------- DTOs ---------- */
import { dtos } from "../dtos";

export const AuthController = new Elysia<'/authentication', ElysiaSingleton>({
    name: 'authentication',
    prefix: '/authentication'
})
    .post('/sign-up', async ({ store, body }) =>
        await store.services.authentication.signup(body),
        dtos.authentication.signUp
    )
    .post('/sign-in', async ({ store, body }) =>
        await store.services.authentication.signin(body),
        dtos.authentication.signIn
    )
