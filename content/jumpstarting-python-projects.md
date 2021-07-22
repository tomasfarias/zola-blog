+++
title = "Jumpstarting Python projects"
slug = "jumpstarting-python-projects"
date = "2021-07-19"
author = "Tomás Farías Santana"
[taxonomies]
tags = ["python"]
draft = true
+++

## 

It's amazing to reflect on how much has the Python ecosystem evolved since I was learning the language almost 10 years ago: type hints and static type checking with [`mypy`](https://pypi.org/project/mypy/) were not widely adopted; `pip`,`virtualenv`, and `setup.py` files were all you used for packaging and dependency management; and [PEP8](https://www.python.org/dev/peps/pep-0008/) was our only tool to coordinate a consistent style. Nowadays, starting a new Python project with an expected size of more than a couple of scripts involves setting up static type checking, automated code formatting, and relying on [Poetry](https://python-poetry.org/) or [Pipenv](https://pipenv.pypa.io/) for packaging and dependency management.

Checking out the [`pre-commit`](https://pre-commit.com/) hooks and CI/CD pipelines of new repositories I'm browsing usually ends up being a very rewarding experience, as it leads to discovering new tools to incorporate into my own workflow, as well as to new ideas on how can they be optimized for a given workflow. However, learning this tooling can be a daunting task for new developers who are not familiar with the standards that are **slowly** forming in the Python world: from their point-of-view, they just see annoying failing checks in their pull requests and an increase in time required to set-up their local development environments.

Hence, the idea behind this post is to serve as a review of the existing development workflow tooling, as well as to provide an example of a basic setup of a project to get anybody going; already available as the [`python-package-template`](https://github.com/tomasfarias/python-package-template). That being said, each tool could merit a blog post just on it's own (and maybe some of them will have!), so it would not be possible to cover each one of them in-depth; there will be links to official documentation to cover needs for further reading. At the very least, I hope I can show you a practical workflow to get you coding ASAP that leverages some of the most used tools in the Python ecosystem.

## Styling and code formatting

Styling discussions are a waste of time. Engineering teams have enough problems in their hands to afford time for styling discussions. But adhering to a common style is not without its benefits, most of which boild down to lowering the barriers of entry to a particular project as new engineers can work with a style they are already used to. Luckily for us, styling discussions are, for the most part, deprecated: there is already a style guide for Python that we can all follow and have a consistent style across all codebases: [PEP8](https://www.python.org/dev/peps/pep-0008/).
