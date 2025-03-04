import Nullstack, { NullstackClientContext, NullstackNode, type BaseNullstackClientContext } from 'nullstack'

import '../tailwind.css'
import { Home } from './Home'
import { Lobby } from './Lobby'
import { Login } from './Login'

declare function Head(): NullstackNode

class Application extends Nullstack {

  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  hydrate(context: BaseNullstackClientContext<unknown>) {
    window.Neutralino.window.show()
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body class="bg-gray-900 text-white font-figtree">
        <Head />

        <Login route="/" />

        <Home route="/home" />
        <Home route="/profile" />
        <Home route="/collection" />
        <Lobby route="/lobby" />

        <script src="/js/neutralino.js" />
        <script src="/js/main.js" />
      </body>
    )
  }

}

export default Application
