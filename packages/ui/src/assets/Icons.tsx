import { SVGAttributes } from 'nullstack'

type IconProps = SVGAttributes<SVGSVGElement> & { size?: number }

const Minimize = ({ size, ...props }: IconProps) => (
    <svg
        width={size || "12"}
        height={size || "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
    >
        <path
            d="M2.5 6H9.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
)

const Cogs = ({ size, ...props }: IconProps) => (
    <svg
        width={size || "12"}
        height={size || "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
    >
        <g clip-path="url(#clip0_214_319)">
            <path
                d="M6.11 1H5.89C5.62478 1 5.37043 1.10536 5.18289 1.29289C4.99536 1.48043 4.89 1.73478 4.89 2V2.09C4.88982 2.26536 4.84353 2.43759 4.75577 2.58942C4.66801 2.74124 4.54187 2.86732 4.39 2.955L4.175 3.08C4.02298 3.16777 3.85054 3.21397 3.675 3.21397C3.49946 3.21397 3.32702 3.16777 3.175 3.08L3.1 3.04C2.87053 2.90763 2.59792 2.87172 2.342 2.94015C2.08608 3.00859 1.86778 3.17577 1.735 3.405L1.625 3.595C1.49263 3.82447 1.45672 4.09708 1.52515 4.353C1.59359 4.60892 1.76077 4.82722 1.99 4.96L2.065 5.01C2.21614 5.09726 2.34181 5.22254 2.42953 5.37342C2.51724 5.52429 2.56395 5.69549 2.565 5.87V6.125C2.5657 6.30121 2.51983 6.47448 2.43202 6.62725C2.34422 6.78003 2.21761 6.9069 2.065 6.995L1.99 7.04C1.76077 7.17278 1.59359 7.39108 1.52515 7.647C1.45672 7.90292 1.49263 8.17553 1.625 8.405L1.735 8.595C1.86778 8.82423 2.08608 8.99141 2.342 9.05985C2.59792 9.12828 2.87053 9.09237 3.1 8.96L3.175 8.92C3.32702 8.83223 3.49946 8.78603 3.675 8.78603C3.85054 8.78603 4.02298 8.83223 4.175 8.92L4.39 9.045C4.54187 9.13268 4.66801 9.25876 4.75577 9.41058C4.84353 9.56241 4.88982 9.73464 4.89 9.91V10C4.89 10.2652 4.99536 10.5196 5.18289 10.7071C5.37043 10.8946 5.62478 11 5.89 11H6.11C6.37522 11 6.62957 10.8946 6.81711 10.7071C7.00464 10.5196 7.11 10.2652 7.11 10V9.91C7.11018 9.73464 7.15647 9.56241 7.24423 9.41058C7.33199 9.25876 7.45813 9.13268 7.61 9.045L7.825 8.92C7.97702 8.83223 8.14946 8.78603 8.325 8.78603C8.50054 8.78603 8.67298 8.83223 8.825 8.92L8.9 8.96C9.12947 9.09237 9.40208 9.12828 9.658 9.05985C9.91392 8.99141 10.1322 8.82423 10.265 8.595L10.375 8.4C10.5074 8.17053 10.5433 7.89792 10.4748 7.642C10.4064 7.38608 10.2392 7.16778 10.01 7.035L9.935 6.995C9.7824 6.9069 9.65578 6.78003 9.56798 6.62725C9.48018 6.47448 9.4343 6.30121 9.435 6.125V5.875C9.4343 5.69879 9.48018 5.52552 9.56798 5.37275C9.65578 5.21997 9.7824 5.0931 9.935 5.005L10.01 4.96C10.2392 4.82722 10.4064 4.60892 10.4748 4.353C10.5433 4.09708 10.5074 3.82447 10.375 3.595L10.265 3.405C10.1322 3.17577 9.91392 3.00859 9.658 2.94015C9.40208 2.87172 9.12947 2.90763 8.9 3.04L8.825 3.08C8.67298 3.16777 8.50054 3.21397 8.325 3.21397C8.14946 3.21397 7.97702 3.16777 7.825 3.08L7.61 2.955C7.45813 2.86732 7.33199 2.74124 7.24423 2.58942C7.15647 2.43759 7.11018 2.26536 7.11 2.09V2C7.11 1.73478 7.00464 1.48043 6.81711 1.29289C6.62957 1.10536 6.37522 1 6.11 1Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_214_319">
                <rect width="12" height="12" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
)

const Close = ({ size, ...props }: IconProps) => (
    <svg
        width={size || "12"}
        height={size || "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
    >
        <path d="M9 3L3 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 3L9 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)

const AddUser = ({ size, ...props }: IconProps) => (
    <svg
        width={size || "12"}
        height={size || "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
    >
        <path
            d="M1 10.5C0.999958 9.73014 1.22207 8.97665 1.63967 8.32992C2.05728 7.68319 2.65264 7.17071 3.3543 6.85398C4.05596 6.53725 4.83412 6.42973 5.59538 6.54432C6.35664 6.6589 7.06866 6.99073 7.646 7.49998"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        <path
            d="M5 6.5C6.38071 6.5 7.5 5.38071 7.5 4C7.5 2.61929 6.38071 1.5 5 1.5C3.61929 1.5 2.5 2.61929 2.5 4C2.5 5.38071 3.61929 6.5 5 6.5Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        <path
            d="M9.5 8V11"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        <path
            d="M11 9.5H8"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
)

const Search = ({ size, ...props }: IconProps) => (
    <svg
        width={size || "12"}
        height={size || "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}              >
        <path
            d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        <path
            d="M10.5001 10.5L8.3501 8.34998"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
)

const RightChevron = ({ size, ...props }: IconProps) => (
    <svg width={size || 14} height={size || 14} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5.25 11L8.75 7.5L5.25 4" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const Icons = {
    Minimize,
    Cogs,
    Close,
    AddUser,
    Search,
    RightChevron
}

export type Icon = keyof typeof Icons