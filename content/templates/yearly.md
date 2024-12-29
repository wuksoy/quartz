---
title: <% tp.file.title %>
draft: false
tags: 
MOC: 
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---

# Year <% tp.file.title %>

---
## Months

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
> ```dataview
> table without ID
> file.link as Link,
> "["+file.name +"]]" as Month
> from "notes/monthly"
> WHERE contains(file.name, "<% tp.file.title %>")
> sort file.name ASC
> ```

---
## Goals and Focus
- list of goals and links to goals here

---
## Moments

### Highs
- list
### Lows
- list

