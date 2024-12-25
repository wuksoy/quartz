---
title: <% tp.file.title %>
draft: true
tags:
MOC: "[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("MMMM YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
##### [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|Previous Day]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Next Day]] | [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|This Month]]

---
# <% tp.date.now("dddd, Do of MMMM YYYY",0, tp.file.title, "YYYY-MM-DD") %>


## Tasks

### Current tasks from across the vault

>[!bug]- Note
>the following code is meant for Obsidian DataView plugin and currently does not work on the website

```tasks
not done
due <% tp.date.now("YYYY-MM-DD") %>
```

### Add new tasks here

---
## Agenda

- Morning:
- Afternoon:
- Evening:

---
## Highlights

- Wins:
- Challenges:

---
## Notes and Insights

- new notes are here

---
## Metrics and Habits

- Sleep:
- Mood:
- Water intake:
- Steps:
- ADD more metrics to track here

---
## Reflection

end of day reflection goes here

---
## Additional Links

- some links go here
- 