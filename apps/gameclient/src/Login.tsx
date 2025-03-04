/* ---------- External ---------- */
import Nullstack, { type NullstackClientContext } from "nullstack";

/* ---------- UI ---------- */
import { Button, Checkbox, Input, Logo } from "@repo/ui";

/**
 * @description
 * Login start page containing a form and a background video.
 */
export class Login extends Nullstack {
    username = '';
    password = '';
    rememberUsername: boolean;

    /**
     * @description
     * Login authentication handler
     */
    async submit({ router }: Partial<NullstackClientContext>) {
        console.log('submit', this.username, this.password);
        router.path = '/home';
    }

    /**
     * @description
     * Renders the login form
     * 
     * @returns JSX Element containing the login form
     */
    renderForm() {
        return (
            <div class="flex flex-col items-center justify-center relative z-10 px-12">
                <Logo class="px-6 mb-4 h-[170px] w-[460px]" />

                <div
                    class="login-wrapper pt-3 pb-5 px-8 w-full rounded-[4px] border border-[rgba(255,255,255,0.4)] bg-gradient-to-b from-[rgba(12,25,43,0.92)] to-[rgba(0,2,7,0.91)] shadow-lg"
                    style="filter: drop-shadow(2px 3px 2px #000000a8);"
                >
                    <div class="login-title mx-auto">
                        <h1 class="text-shadow-sm text-lg font-normal text-white">Account Login</h1>
                    </div>

                    <hr class="mx-auto my-3 w-[90%] border-t border-white/10 shadow-sm" />

                    <div class="form-wrapper mx-auto mb-4">
                        <form class="space-y-4" onsubmit={this.submit}>
                            <Input label="Username" bind={this.username} class="text-black" />

                            <Input label="Password" type="password" bind={this.password} class="text-black" />

                            <div class="flex items-start justify-between mt-4">
                                <Checkbox label="Remember Username" bind={this.rememberUsername} />

                                <Button primary disabled={!this.username || !this.password}>
                                    Log In
                                </Button>
                            </div>
                        </form>
                    </div>

                    <hr class="mx-auto mt-8 mb-4 w-[90%] border-t border-white/10 shadow-sm" />

                    <div class="login-footer mx-auto mt-5 space-y-2">
                        <span class="block text-white">Don't have an account? <a href="https://example.com/sign-up" target="_blank" class="text-blue-400 hover:underline">Sign up now</a>!</span>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * @description
     * Renders the background video
     * 
     * @todo
     * Move away from youtube and use local video or from a CDN
     * 
     * @returns JSX Element containing the background video
     */
    renderBackground() {
        const parameters = {
            modestbranding: '1',
            autohide: '1',
            showinfo: '0',
            controls: '0',
            autoplay: '1',
            mute: '1',
            loop: '1',
            hd: '1',
            feature: 'oembed',
        };

        const embedId = '5hYnu3FnZBY';

        const uri = `https://www.youtube.com/embed/${embedId}?${new URLSearchParams(parameters).toString()}`;

        return (
            <iframe
                class="absolute inset-0 w-full h-full"
                src={uri}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen />
        )
    }

    render() {
        return (
            <main class="flex items-center justify-start h-screen bg-gradient-to-br font-quadrat from-[#1a1a1a] to-[#000000]">
                {this.renderForm()}
                {this.renderBackground()}
            </main>
        );
    }
}