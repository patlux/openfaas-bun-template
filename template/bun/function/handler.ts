import type { Serve } from 'bun'

const handler: Serve = {
  fetch: (request: Request) => {
    const url = new URL(request.url)
    console.log(`>> [${request.method}] ${url.pathname}`)
    return new Response('Hello via Bun!', { status: 200 })
  },
}

export default handler
