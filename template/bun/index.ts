import handler from './function/handler'

if (handler.port) {
  console.warn(`You specified "port" in your handler. This will be ignored.`)
}

export default {
  ...handler,
  port: 3000,
}

