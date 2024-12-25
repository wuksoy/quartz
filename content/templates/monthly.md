---
title: <% tp.file.title %>
draft: true
aliases: 
tags: 
MOC: 
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
published: <% tp.date.now("YYYY-MM-DD") %>
---

# Year <% tp.file.title %>


---
## Daily Notes

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website

```dataview
table file.mtime as "Last Modified"
from "notes/daily"
WHERE contains(file.name, "<% tp.file.title %>")
sort file.name asc
```
