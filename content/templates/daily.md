---
title: <% tp.file.title %>
draft: true
aliases: 
tags: 
MOC: <% tp.file.title.split("-")[0] %>-<% tp.file.title.split("-")[1] %>
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
published: <% tp.date.now("YYYY-MM-DD") %>
---
###### [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]
# <% tp.file.title %>


