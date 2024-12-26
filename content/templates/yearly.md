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

```dataview
table month as "Month"
from "notes/monthly" 
where contains(file.name, "<% tp.file.title %>") 
sort file.name asc
```

