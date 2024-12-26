---
title: <% tp.file.title %>
draft: false
aliases: 
tags: 
MOC: 
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
published: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.date.now("dddd, Do of MMMM YYYY",0, tp.file.title, "YYYY-MM-DD") %>


---
## Metrics for the Month

```dataview
TABLE WITHOUT ID
  file.link as Date,
  choice(mood > 30, "✅", "❌") as Mood,
  choice(caffeine >= 1, "✅", "❌") as Caffeine,
  choice(Exercise >= 30, "✅", "❌") as Exercise
FROM "notes/daily"
WHERE file.day <= <% tp.file.title %>-31 AND file.day >= <% tp.file.title %>-01
SORT file.day ASC
```

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

---
## Tasks

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website

## Tasks Due 

```tasks
not done
due <% tp.file.title) %>
```

## Tasks Completed

```tasks
done
due <% tp.file.title) %>
```
