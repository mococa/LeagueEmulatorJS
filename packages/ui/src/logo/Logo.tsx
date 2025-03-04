

/* ---------- External ---------- */
import type { HTMLAttributes } from "nullstack";
import { twMerge } from "tailwind-merge";

/* ---------- Interfaces ---------- */
interface LogoProps extends HTMLAttributes<HTMLImageElement> { }

/* ---------- Component ---------- */
/**
 * @description
 * UI Logo component made with Tailwind CSS and extendable classes.
 * 
 * @returns JSX for Logo
 */
export const Logo = ({ ...props }: LogoProps) => {
    return (
        <img
            class={twMerge([
                "object-contain",
                "select-none",
                "drop-shadow-lg",
                props.class,
            ])}
            draggable="false"
            src="/static/lol-banner.png"
        // style="filter: drop-shadow(2px 4px 6px black);"
        />
    );
}
