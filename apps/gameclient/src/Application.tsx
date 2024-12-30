import Nullstack, { NullstackClientContext, NullstackNode, type BaseNullstackClientContext } from 'nullstack'

import '../tailwind.css'
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
      <body class="bg-gray-900 font-quadrat">
        <Head />

        <Login route="/" />

        <script src="/js/neutralino.js" />
        <script src="/js/main.js" />
      </body>
    )
  }

}

export default Application
