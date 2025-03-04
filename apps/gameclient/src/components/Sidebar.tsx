import { Icons } from "@repo/ui"
import type { NullstackNode, SVGAttributes } from "nullstack"
import { twMerge } from "tailwind-merge"

interface BadgeProps {
    text: string | number
}

const Badge = ({ text }: BadgeProps) => (
    <div class="
        flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5
        h-3.5 w-3.5 
        relative
        rounded-[40px]
        bg-[#b27c10]"
    >
        <p class="flex-grow-0 flex-shrink-0 text-[9px] font-bold text-center uppercase text-white">
            {text}
        </p>
    </div>
)

interface CircleProps extends SVGAttributes<SVGSVGElement> {
    size: number
}

const Circle = ({ size, ...props }: CircleProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        {...props}
    >
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="currentColor"></circle>
    </svg>
)

interface WindowButtonsProps {
    close?: () => void
    minimize?: () => void
    opensettings?: () => void
}

const WindowButtons = ({ close, opensettings, minimize }: WindowButtonsProps) => (
    <div
        class="
            flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5
            absolute right-0 top-2.5
            px-3
        "
    >
        <Icons.Minimize class="flex-grow-0 flex-shrink-0 w-3 h-3 relative" onclick={minimize} />

        <Icons.Cogs class="flex-grow-0 flex-shrink-0 w-3 h-3 relative" onclick={opensettings} />

        <Icons.Close class="flex-grow-0 flex-shrink-0 w-3 h-3 relative" onclick={close} />
    </div>
)

interface HeaderProps {
    avatar: string
    nickname: string
    status: string
    children?: NullstackNode
}

const Header = ({ avatar, nickname, status, children }: HeaderProps) => (
    <header
        class="
            flex justify-start items-center gap-2.5
            w-full h-[72px]
            px-3 py-2.5
            border-t-0 border-r-0 border-b border-l-0 border-white/10
            "
    >
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <img
                src={avatar}
                class="flex-grow-0 flex-shrink-0 w-9 h-9 rounded-3xl object-contain"
            />
            <div
                class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-1"
            >
                <p class="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white">
                    {nickname}
                </p>

                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <Circle size={6} class="flex-grow-0 flex-shrink-0 text-[#40E2C1]" />

                    <p class="flex-grow-0 flex-shrink-0 text-[9px] text-left text-[#40e2c1]">
                        {status}
                    </p>
                </div>
            </div>
        </div>

        {children}
    </header>
)

interface FriendsListHeaderProps {
    adduser?: () => void
    searchuser?: () => void
}

const FriendsListHeader = ({ adduser, searchuser }: FriendsListHeaderProps) => (
    <div
        class="
            flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0
            px-3 mt-5
        "
    >
        <p class="flex-grow-0 flex-shrink-0 text-xs font-bold text-left uppercase text-white">
            Social
        </p>

        <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[38px]">
            <Icons.AddUser class="flex-grow-0 flex-shrink-0 w-3 h-3" onclick={adduser} />

            <Icons.Search class="flex-grow-0 flex-shrink-0 w-3 h-3" onclick={searchuser} />
        </div>
    </div>
)

interface FriendRequests {
    amount: number
}

const FriendRequests = ({ amount }: FriendRequests) => (
    <div
        class="
            flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0
            px-3 mt-3 mb-5
        "
    >
        <p class="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-white">
            Friend Requests
        </p>

        <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[38px] gap-3.5">
            {amount >= 1 && <Badge text={amount} />}
        </div>
    </div>
)

interface FriendProps {
    avatar: string
    nickname: string
    status: 'online' | 'ingame' | 'away' | 'offline'
}

const Friend = ({ avatar, nickname, status }: FriendProps) => {
    const statusText: Record<typeof status, string> = {
        online: 'Online',
        ingame: 'In Game',
        away: 'Away',
        offline: 'Offline',
    }

    const statusColors: Record<typeof status, string> = {
        'online': "text-[#40e2c1]",
        'ingame': "text-[#4094e2]",
        'away': "text-[#e24040]",
        'offline': "text-[#808080]",
    }

    return (
        <div
            class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
        >
            <img
                src={avatar}
                class="flex-grow-0 flex-shrink-0 w-7 h-7 rounded-3xl object-contain border border-white"
            />

            <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-white">
                    {nickname}
                </p>

                <p class={`flex-grow-0 flex-shrink-0 text-[10px] font-bold text-left ${statusColors[status]}`}>
                    {statusText[status]}
                </p>
            </div>

            {status !== 'offline' && (
                <Circle
                    class={twMerge(
                        "absolute left-[21px] bottom-0.5",
                        statusColors[status],
                    )}
                    size={6}
                />
            )}
        </div>
    )
}

interface FriendsListProps {
    friends: FriendProps[]
}

const FriendsList = ({ friends }: FriendsListProps) => (
    <div
        class="
            flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[9px] 
            w-[143px]
            px-3
        ">
        {friends.map((friend) => (
            <Friend {...friend} />
        ))}
    </div>
)

export const Sidebar = () => (
    <aside
        class="
            flex flex-col flex-grow-0 flex-shrink-0 
            w-[236px] h-full
            relative overflow-hidden
            bg-black/30 backdrop-blur-[25px]
        "
    >
        <Header
            avatar="/static/avatar.webp"
            nickname="Nickname"
            status="Online"
        >
            <WindowButtons opensettings={null} minimize={null} />
        </Header>

        <FriendsListHeader adduser={null} searchuser={null} />

        <FriendRequests amount={1} />

        <FriendsList
            friends={[
                {
                    avatar: "/static/avatar.webp",
                    nickname: "Cool friend",
                    status: "online",
                },
                {
                    avatar: "/static/avatar.webp",
                    nickname: "Awesome friend",
                    status: "online",
                },
                {
                    avatar: "/static/avatar.webp",
                    nickname: "Incredible friend",
                    status: "ingame",
                },
                {
                    avatar: "/static/avatar.webp",
                    nickname: "Amazing friend",
                    status: "away",
                },
                {
                    avatar: "/static/avatar.webp",
                    nickname: "Top friend",
                    status: "offline",
                },
            ]}
        />
    </aside>
)