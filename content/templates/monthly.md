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
##### [[<% tp.date.now("YYYY-MM", "P-1M", tp.file.title, "YYYY-MM-DD") %>|Previous Month]] | [[<% tp.date.now("YYYY-MM", "P+1M", tp.file.title, "YYYY-MM-DD") %>|Next Month]] | [[<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>|This Year]]

---
# <% tp.date.now("MMMM YYYY",0, tp.file.title, "YYYY-MM-DD") %>

---
## Monthly Metrics

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
> ```dataview
> TABLE WITHOUT ID
>   file.link as Date,
>   choice(mood >= 5, "✅", "❌") as Mood,
>   choice(caffeine >= 1, "✅", "❌") as Caffeine,
>   choice(Exercise >= 30, "✅", "❌") as Exercise,
>   choice(Git >= 1, "✅", "❌") as Git
> FROM "notes/daily"
> WHERE contains(file.name, "<% tp.file.title %>")
> SORT file.day ASC
> ```

---
## Daily Notes

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
> ```dataview
> table without ID
> file.link as Link,
> "["+file.name +"]]" as Date
> from "notes/daily"
> WHERE contains(file.name, "<% tp.file.title %>")
> sort file.name ASC
> ```

---
## Tasks

### Due

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
>
> ```tasks
> not done
> due <% tp.file.title %>
> ```

### Completed

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
>
> ```tasks
> done
> due <% tp.file.title %>
> ```

---
## Moments of the Month

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website
> ```dataview
> TABLE WITHOUT ID
>   file.link as Date,
>   mood as Mood
> FROM "notes/daily"
> WHERE contains(file.name, "<% tp.file.title %>")
> SORT file.day ASC
> ```
### Highs
- list
### Lows
- list

---
## Reflections of the Month

### Liked

### Learned

### Lacked

### Longed

