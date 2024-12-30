/* ---------- External ---------- */
import type { HTMLAttributes } from "nullstack";
import { twMerge } from "tailwind-merge";

/* ---------- Interfaces ---------- */
interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
}

/* ---------- Component ---------- */
/**
 * @description
 * UI Checkbox component made with Tailwind CSS and extendable classes.
 * 
 * @returns JSX for checkbox
 */
export const Checkbox = ({ label, class: className, ...props }: CheckboxProps) => {
    return (
        <label
            class={twMerge([
                "flex items-center gap-2",
                "pl-[2px]",
                className
            ])}
        >
            <input type="checkbox" {...props} />

            {label && <span class="text-white">{label}</span>}
        </label>
    );
}
