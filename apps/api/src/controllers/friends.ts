/* ---------- External ---------- */
import Elysia from "elysia";

/* ---------- Types ---------- */
import type { ElysiaSingleton } from "../@types/ElysiaSingleton";

/* ---------- DTOs ---------- */
import { dtos } from "../dtos";

export const FriendsController = new Elysia<'/friends', ElysiaSingleton>({
    name: 'friends',
    prefix: '/friends'
})
    .get('/', async ({ store, query }) =>
        await store.services.users.getFriendlist(Number(query.userId)),
        dtos.friends.list
    )
    .post('/', async ({ store, body }) =>
        await store.services.users.addFriend(body),
        dtos.friends.add
    )
    .put('/', async ({ store, body }) => {
        if (body.status === 'accept') {
            return await store.services.users.acceptFriend(body)
        } else if (body.status === 'reject') {
            return await store.services.users.rejectFriend(body)
        }

        throw new Error('Invalid status')
    }, dtos.friends.changeStatus)
    .delete('/', async ({ store, body }) =>
        await store.services.users.removeFriend(body),
        dtos.friends.remove
    )