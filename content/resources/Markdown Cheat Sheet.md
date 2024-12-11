---
title: Markdown Cheat Sheet
draft: false
aliases: 
tags: 
MOC: 
created: 2024-12-05
modified: 2024-12-11
published: 2024-12-11
---

## Syntax

| Syntax                   | Name             | Description                   |
| ------------------------ | ---------------- | ----------------------------- |
| `# Header 1`             | header format    | Create a level 1 header       |
| `## Header 2`            | header format    | Create a level 2 header       |
| `### Header 3`           | header format    | Create a level 3 header       |
| `*italic*` or `_italic_` | italic           | Make text italic              |
| `**bold**` or `__bold__` | bold             | Make text bold                |
| `~~strikethrough~~`      | strikethrough    | Apply strikethrough to text   |
| `* Item 1`               | lists: unordered | Create an unordered list item |
| `1. Item A `              | lists: ordered   | Create an ordered list item   |
| `[Link Text](URL)`       | link: text       | Insert a hyperlink            |
| `![Alt Text](Image URL)` | link: image      | Embed an image                |
| `> Quote`                | blockquote       | Create a blockquote           |
| `` `code` ``             | code: inline     | Format inline code            |
| \````                    | code: block      | Start and end a code block    |
>[!note]
>you can use the character `\` to escape the listed markdown syntaxes

---
## Callouts

Quartz supports the same Admonition-callout syntax as Obsidian.

This includes

- 12 Distinct callout types (each with several aliases)
- Collapsible callouts

| **Admonition Type** | **Aliases**                 |
| ------------------- | --------------------------- |
| Note                | note, info, information     |
| Abstract            | abstract, summary           |
| Tip                 | tip, hint, important        |
| Success             | success, check, done        |
| Question            | question, help, faq         |
| Warning             | warning, caution, attention |
| Failure             | failure, missing, fail      |
| Danger              | danger, error               |
| Bug                 | bug, issue                  |
| Example             | example, case               |
| Quote               | quote, cite                 |

### Examples

#### Note
> [!note]
> This is a **Note** callout. Use it to provide general information or context.

#### Abstract
> [!abstract]
> This is an **Abstract** callout. Use it for summaries or overviews.

#### Tip
> [!tip]
> This is a **Tip** callout. Use it to highlight useful hints or important points.

#### Success
> [!success]
> This is a **Success** callout. Use it to mark accomplishments or successful actions.

#### Question
> [!question]
> This is a **Question** callout. Use it to raise queries or provide FAQs.

#### Warning
> [!warning]
> This is a **Warning** callout. Use it to caution about potential issues.

#### Failure
> [!failure]
> This is a **Failure** callout. Use it to indicate errors or missing items.

#### Danger
> [!danger]
> This is a **Danger** callout. Use it to highlight critical warnings or risks.

#### Bug
> [!bug]
> This is a **Bug** callout. Use it to document issues or report errors.

#### Example
> [!example]
> This is an **Example** callout. Use it to showcase use cases or scenarios.

#### Quote
> [!quote]
> This is a **Quote** callout. Use it to emphasize citations or referenced text.

---