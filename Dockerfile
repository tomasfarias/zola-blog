FROM alpine:latest AS builder

RUN apk add zola --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/
RUN apk add git

WORKDIR /blog

COPY . .
RUN git submodule update --init
RUN zola build -o /public

FROM caddy:latest

COPY --from=builder /public/ public/

CMD ["caddy", "file-server", "--listen", ":8080", "--root", "public/"]
