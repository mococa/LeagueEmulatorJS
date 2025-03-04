/* ---------- External ---------- */
import { t } from "elysia";

const authentication = {
    signUp: {
        body: t.Object({
            username: t.String({ minLength: 4, maxLength: 20 }),
            password: t.String({ minLength: 8, maxLength: 20, error: () => ({ message: "Password length must be between 8 and 20." }) }),
            confirmPassword: t.String()
        })
    },
    signIn: {
        body: t.Object({
            username: t.String({ minLength: 4, maxLength: 20, error: () => ({ message: "Username length must be between 4 and 20." }) }),
            password: t.String({ minLength: 8, maxLength: 20, error: () => ({ message: "Password length must be between 8 and 20." }) })
        })
    },
}

const users = {
    create: {
        body: t.Object({
            accountId: t.Number(),
            nickname: t.String({ minLength: 4, maxLength: 20, error: () => ({ message: "Nickname length must be between 4 and 20." }) }),
            avatar: t.String()
        })
    },
    findByNickame: {
        query: t.Object({
            nickname: t.String({ minLength: 8, maxLength: 20, error: () => ({ message: "Nickname length must be between 4 and 20." }) })
        })
    },
}

const friends = {
    add: {
        body: t.Object({
            userId: t.Number(),
            friendId: t.Number(),
            status: t.String()
        })
    },
    changeStatus: {
        body: t.Object({
            userId: t.Number(),
            friendId: t.Number(),
            status: t.String()
        })
    },
    remove: {
        body: t.Object({
            userId: t.Number(),
            friendId: t.Number()
        })
    },
    list: {
        query: t.Object({
            userId: t.Number()
        })
    }
}

export const dtos = {
    authentication,
    users,
    friends,
}
