import Nullstack, { NullstackServerContext } from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application) as NullstackServerContext

context.start = async function start() {
  // context.settings.neutralino = require('public/js/neutralino.js')
  // https://nullstack.app/application-startup
}

export default context
