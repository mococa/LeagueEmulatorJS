/* ---------- External ---------- */
import type { HTMLAttributes, InputHTMLAttributes } from "nullstack";
import { twMerge } from "tailwind-merge";

/* ---------- Interfaces ---------- */
interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

/* ---------- Component ---------- */
/**
 * @description
 * UI Input component made with Tailwind CSS and extendable classes.
 * 
 * @returns JSX for Input
 */
export const Input = ({ label, type, ...props }: InputProps) => {
    if (label) return (
        <label class="block">
            <span class="font-medium text-white">Username</span>

            <input
                {...props}
                class={twMerge([
                    "block",
                    "mt-1 px-2 py-1",
                    "w-full",
                    "rounded-sm border",
                    props.class,
                ])}
            />
        </label>
    )

    return (
        <input
            {...props}
            class={twMerge([
                "block",
                "mt-1 px-2 py-1",
                "w-full",
                "rounded-sm border",
                props.class,
            ])}
        />
    );
}
