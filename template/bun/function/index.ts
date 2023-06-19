import type { Server, Serve } from 'bun'

export const bunServeOptions: Serve = {
  port: 3000,
  fetch: (request: Request) => {
    const url = new URL(request.url)
    console.log(`>> [${request.method}] ${url.pathname}`)
    return new Response('Hello via Bun!', { status: 200 })
  },
}

// This enables the hot reload mode with `bun --hot`

declare global {
  var server: Server
}

if (!globalThis.server) {
  globalThis.server = Bun.serve(bunServeOptions)
} else {
  globalThis.server.reload(bunServeOptions)
}
