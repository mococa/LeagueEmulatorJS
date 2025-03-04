/* ---------- External ---------- */
import Nullstack, { CssClass, NullstackClientContext, NullstackNode } from "nullstack";
import { twMerge } from "tailwind-merge";

/* ---------- Interfaces ---------- */
interface TabViewProps {
    children: NullstackNode;
    class?: CssClass;
}

interface TabControllerProps {
    children: (NullstackNode | View) | View[];
    items: string[];
    class?: CssClass;
}

class View extends Nullstack<TabViewProps> {
    render({ children, ...props }: NullstackClientContext<TabViewProps>) {
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
}

class Controller extends Nullstack<TabControllerProps> {
    selectedTab: number = 0

    render({ children, items, class: className }: NullstackClientContext<TabControllerProps>) {
        return (
            <div class="flex flex-col gap-5">
                <ul class={twMerge("flex", className)}>
                    {items.map((item, index) => (
                        <li
                            class="cursor-pointer pb-0.5 px-4 first:pl-0 last:pr-0"
                            onclick={() => this.selectedTab = index}
                        >
                            <p
                                class={twMerge(
                                    "border-b-2 pb-1 transition-all duration-100",
                                    index === this.selectedTab ?
                                        "border-white border-b-2 text-white" :
                                        "text-[#808080] border-[#00000000]",
                                )}
                            >
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>

                {children.map((child, index) => (
                    <div class={twMerge(index === this.selectedTab ? "" : "hidden")}>
                        {child}
                    </div>
                ))}
            </div>
        )
    }
}

export const Tab = {
    View,
    Controller
}