FROM alpine:latest

RUN apk add zola --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/
RUN apk add git

WORKDIR /blog

COPY . .
RUN git submodule update --init

CMD ["zola", "serve", "-p", "8080"]
