import { Icons } from "@repo/ui";
import Nullstack from "nullstack";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

export class Lobby extends Nullstack {
    render() {
        return (
            <main class="flex flex-col items-center relative z-10 bg-bg bg-contain h-screen w-screen">
                {/* {this.renderNavbar()} */}

                <div class="grid grid-cols-2 w-full h-full" style="grid-template-columns: 1fr auto;">
                    <div class="flex flex-col gap-5 w-full h-full">
                        <Navbar />

                        <a href="/home" class="flex items-center gap-2.5 mx-12">
                            <Icons.RightChevron class="rotate-180" />

                            <b class="text-base">Normal mode | Summoner’s Rift</b>
                        </a>
                    </div>

                    <Sidebar />
                </div>
            </main>
        );
    }
}