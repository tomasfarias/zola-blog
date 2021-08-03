# zola-blog

This is my personal blog, powered by [zola](https://www.getzola.org/) and served by [caddy](https://caddyserver.com/). I use a customized theme based on [zerm](https://github.com/ejmg/zerm). Visit it at [tomasfarias.dev](tomasfarias.dev)!.

# Why zola?

I was looking into a static file site generator that could work with Markdown files and the two best options I could find where [zola](https://github.com/getzola/zola) and [hugo](https://github.com/gohugoio/hugo). Due to my familiarity with [Tera](https://github.com/Keats/tera) templates, and my urge to try out a new Rust tool, I went with the former. That being said, I don't think there was a wrong choice in that decision.

# How to run

There's multiple ways to run the blog. If you wish to run a development server with `zola` you can simply do:

``` sh
zola serve
```

Running with the included Dockerfile is also an option:

``` sh
docker build tomasfarias/zola-blog:latest .
docker run --net=host -d tomasfarias/zola-blog:latest
```

The blog should be available at `localhost:8080` by default.

Future releases should probably use a vanilla `caddy`  image and attach the files `zola` builds with a container.

# License

The contents of this project are licensed under the ![MIT license](LICENSE).
This blog relies on the following MIT licensed projects:
* The zola [zerm](https://github.com/ejmg/zerm) theme.
* The [Nord](https://github.com/arcticicestudio/nord) color palette.

Exceptions may apply to static files, images, and other content. Said exceptions will be documented here.
