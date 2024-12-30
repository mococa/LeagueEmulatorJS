/* ---------- External ---------- */
import { t } from "elysia";

export const dtos = {
    signUp: {
        body: t.Object({
            username: t.String(),
            password: t.String(),
            confirmPassword: t.String()
        })
    },
    signIn: {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    }
}
