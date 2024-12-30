# League game server emulator

Yet another lol server,
created with the help of the [LeagueSandbox](https://github.com/LeagueSandbox/GameServer) code,
written in JavaScript ([nodejs](https://nodejs.org/en/)).  
This project is being created as just for fun and learn and will be discontinued soon or will be developed very rarely,
anyway making it in JS is not the best idea.  
At the moment, it ~~does not support multiplayer~~ and there is no game flow yet.

# Client

```bash
yarn # (if you haven't already)
yarn build # Or yarn workspace @repo/gameclient build
```

then open binary on apps/gameclient/dist/LeagueClient/

# Running

```
# download and install git (optional) - https://git-scm.com/download
# download and install nodejs - https://nodejs.org/en/download/
# download and install yarn - https://classic.yarnpkg.com/en/docs/install

git clone https://github.com/mococa/LeagueEmulatorJS
cd LeagueEmulatorJS
yarn
yarn dev
```

```
# download game client (4.20) here - https://github.com/LeagueSandbox/GameServer#manual-setup-windowsmac
# copy runLol.bat to client directory and run
# say `.help` ingame to get list of available commands
```

# Tools

### Packet inspector

```
# download replay from /issues/2 and put to ./temp/replays/
npm run pi
# open browser at http://127.0.0.1/
```
