interface LinkProps {
    href: string
    text: string
}

const Link = ({ href, text }: LinkProps) => (
    <a class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-white" href={href}>
        {text}
    </a>
)

const Logo = () => (
    <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-[26.35px] h-[27.84px] relative"
        preserveAspectRatio="none"
    >
        <mask
            id="mask0_214_305"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="27"
            height="28"
        >
            <path d="M26.3458 0.079834H0V27.9202H26.3458V0.079834Z" fill="white"></path>
        </mask>
        <g mask="url(#mask0_214_305)">
            <path
                d="M1.58656 8.56238C0.575347 10.3779 0 12.457 0 14.6678C0 16.8787 0.575347 18.9596 1.58656 20.7751V8.56238Z"
                fill="white"
            ></path>
            <path
                d="M13.1731 1.83899C12.1044 1.83899 11.0673 1.96693 10.0723 2.19915V4.21808C11.0577 3.94301 12.0966 3.79204 13.1731 3.79204C19.3398 3.79204 24.3397 8.64618 24.3397 14.6352C24.3397 17.3322 23.3227 19.7989 21.6444 21.6963L21.3261 22.803L20.6216 25.2525C24.0788 22.9406 26.3479 19.0633 26.3479 14.671C26.346 7.58234 20.4485 1.83899 13.1731 1.83899Z"
                fill="white"
            ></path>
            <path
                d="M10.0723 21.326H20.176H20.3969C22.1068 19.586 23.1599 17.2299 23.1599 14.6352C23.1599 9.27954 18.6896 4.93909 13.1737 4.93909C12.0908 4.93909 11.0499 5.10989 10.0729 5.41759V21.326H10.0723Z"
                fill="black"
                fill-opacity="0.15"
            ></path>
            <path
                d="M8.87764 0.079834H1.36133L2.78065 2.94959V25.0523L1.36133 27.9202H18.6108L20.1754 22.489H8.87764V0.079834Z"
                fill="white"
            ></path>
        </g>
    </svg>
)

export const Navbar = () => (
    <nav
        class="
            flex justify-start items-center gap-16
            w-full h-[72px]
            relative 
            px-12 py-2.5
            border-t-0 border-r-0 border-b border-l-0 border-white/10
        "
    >
        <Logo />

        <Link href="/home" text="Home" />
        <Link href="/profile" text="Profile" />
        <Link href="/collection" text="Collection" />
    </nav>
)