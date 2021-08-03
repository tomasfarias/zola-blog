FROM caddy:2.4.3-alpine

RUN apk add zola --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/
RUN apk add git

WORKDIR /blog

COPY . .
RUN git submodule update --init
RUN zola build --base-url /

CMD ["caddy", "file-server", "--root", "public", "--listen", "localhost:8080"]
