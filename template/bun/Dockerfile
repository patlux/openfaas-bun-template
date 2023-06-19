FROM ghcr.io/openfaas/of-watchdog:0.9.11 as watchdog
FROM oven/bun:0.6.9 as build

ARG SRC=function

WORKDIR /app/function
COPY ${SRC} ./

RUN bun install
RUN bun run build --outfile=./handler.js

FROM debian:11.6-slim as runner

COPY --from=build /usr/local/bin/bun /usr/local/bin/bun

RUN addgroup --system app && adduser app --system --ingroup app
RUN chown app /home/app

USER app

WORKDIR /home/app

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
COPY --from=build /app/function/handler.js ./

ENV fprocess="bun run ./handler.js"
ENV mode="http"
ENV upstream_url="http://localhost:3000"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
