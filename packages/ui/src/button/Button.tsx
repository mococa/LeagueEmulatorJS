/* ---------- External ---------- */
import type { HTMLAttributes } from "nullstack";
import { twMerge } from "tailwind-merge";

/* ---------- Interfaces ---------- */
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
}

/* ---------- Component ---------- */
/**
 * @description
 * UI Button component made with Tailwind CSS and extendable classes.
 * 
 * @returns JSX for button
 */
export const Button = ({ children, ...props }: ButtonProps) => {
    const backgroundColors = {
        primary: "bg-gradient-to-b from-yellow-400 to-orange-700 disabled:from-[#999999] disabled:to-[#59585b]",
        secondary: "bg-gradient-to-b from-blue-600 to-blue-900 disabled:from-[#999999] disabled:to-[#59585b]",
    }

    const bgColor = props.primary ? backgroundColors.primary : backgroundColors.secondary;

    return (
        <button
            {...props}
            class={twMerge([
                "block",
                bgColor,
                "hover:brightness-110 active:brightness-90 disabled:brightness-100",
                "disabled:cursor-not-allowed",
                "px-[36px] py-[6px]",
                "rounded-[4px] drop-shadow-md",
                "transition-all duration-100",
                "text-white",
                props.class
            ])}
            style={`box-shadow: inset 0 9px 2px -8px #ffffff40; ${props.style}`}
        >
            {children}
        </button>
    );
}
