---
title: <% tp.file.title %>
draft: false
tags: 
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
##### [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|Previous Day]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Next Day]] | [[<% tp.date.now("MM", 0, tp.file.title, "YYYY-MM-DD") %>|This Month]]

---
# <% tp.date.now("dddd, Do of MMMM YYYY ",0, tp.file.title, "YYYY-MM-DD") %>

---
