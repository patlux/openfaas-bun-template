FROM ghcr.io/openfaas/of-watchdog:0.9.11 as watchdog
FROM oven/bun:0.6.8 as builder

WORKDIR /app

COPY function ./function
RUN bun build ./function/index.ts --outfile=handler --target=bun --minify --compile

FROM debian:11.6-slim as runner

WORKDIR /app

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
COPY --from=builder /app/handler ./

ENV fprocess="./handler"
ENV mode="http"
ENV upstream_url="http://localhost:3000"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
