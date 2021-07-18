FROM balthek/zola:0.13.0

WORKDIR blog/

COPY . .

CMD ["serve", "-i", "0.0.0.0", "-p", "8080"]
