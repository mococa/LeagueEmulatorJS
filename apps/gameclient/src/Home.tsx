import { Button, Icons, Logo } from "@repo/ui";
import Nullstack, { type NullstackClientContext } from "nullstack";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Tab } from "./components/TabView";

export class Home extends Nullstack {
    renderNavbar() {
        return (
            <nav class="grid grid-cols-3 justify-between items-center px-4 py-2 w-full">
                <div class="flex items-center gap-3">
                    <a href="/home">
                        <Logo class="h-10 hover:brightness-110 active:brightness-90 transition-all duration-150" />
                    </a>
                </div>

                <a class="w-fit justify-self-center" href="/home#game-mode">
                    <img
                        class="object-cover rounded-md hover:brightness-110 active:brightness-90 transition-all duration-100"
                        src="/static/play-button.png"
                        width={130}
                    />
                </a>

                <div class="flex items-center w-96 h-[53px] gap-[1px] justify-self-end">
                    <div class="h-full aspect-square relative cursor-pointer hover:brightness-125">
                        <span class="absolute p-[2px] bottom-0 right-0 text-black text-xs bg-white/50">30</span>

                        <img class="aspect-square h-full object-cover" src="/static/avatar.webp" />
                    </div>

                    <div class="grid grid-cols-4 grid-rows-2 w-full h-full gap-[1px] text-white">
                        <div class="col-span-2 relative">
                            <span class="z-10 relative w-full text-center text-xs px-2">Nickname</span>

                            <div class="bg-xp-bar absolute inset-0 z-0 border-black border" />
                        </div>

                        <div>
                            <span>0</span>
                        </div>

                        <div>
                            <span>276</span>
                        </div>

                        <Button class="p-0" primary>
                            <img src="/static/chest.png" class="mx-auto h-[80%]" />
                        </Button>
                        <Button class="p-0">
                            <img src="/static/profile.png" class="mx-auto h-[80%]" />
                        </Button>
                        <Button class="p-0">
                            <img src="/static/talents.png" class="mx-auto h-[80%]" />
                        </Button>
                        <Button class="p-0">
                            <img src="/static/help.png" class="mx-auto h-[80%]" />
                        </Button>
                    </div>
                </div>
            </nav>
        );
    }

    render({ router }: NullstackClientContext) {
        return (
            <main class="flex flex-col items-center relative z-10 bg-bg bg-contain h-screen w-screen">
                <div class="grid grid-cols-2 w-full h-full" style="grid-template-columns: 1fr auto;">
                    <div class="flex flex-col gap-5 w-full h-full">
                        <Navbar />

                        <div class="flex flex-col mx-12">
                            <Tab.Controller items={["Overview", "Patch notes"]}>
                                <Tab.View class="flex flex-col">
                                    <a href="/lobby" class="mt-14 mb-14">
                                        <button class="flex items-center gap-2.5 rounded-[64px] bg-white pl-16 pr-8 py-2.5 text-[#2D493D]">
                                            <b class="font-extrabold text-4xl">
                                                Play
                                            </b>

                                            <Icons.RightChevron size={30} />
                                        </button>
                                    </a>

                                    <p class="flex flex-col text-[25px] font-light uppercase">
                                        I don't know, something

                                        <b class="text-[64px] font-black leading-none">Impactful</b>
                                    </p>
                                </Tab.View>

                                <Tab.View>
                                    <ul>
                                        <li>
                                            <h2>Alpha 0.0.1</h2>
                                            <p>Initial release</p>
                                        </li>
                                    </ul>
                                </Tab.View>
                            </Tab.Controller>
                        </div>

                    </div>

                    <Sidebar />
                </div>
            </main>
        );
    }
}