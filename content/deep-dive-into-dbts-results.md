+++
title = "Deep dive into dbt's results"
slug = "deep-dive-into-dbts-results"
date = "2021-07-26"
author = "Tomás Farías Santana"
draft = true
[taxonomies]
tags = ["python", "dbt", "data-engineering"]
+++

[`dbt`](https://www.getdbt.com/product/what-is-dbt/) is usually used as a CLI, and that's the best way to interact with the tool most of the time. However, with only the CLI the only information we get from a run comes from the logs, which require parsing to be of any use. This information may be accessed by diving into the result object that the main dbt functions operate with to build the logs in the first place.

