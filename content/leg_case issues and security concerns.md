---
title: leg_case issues and security concerns
draft: true
tags: 
MOC: 
created: 2025-05-14
modified: 2025-05-14
---
## Issue Tracker

list of issues and proposed solutions

- something
- another thing

## Security Concerns

1. **Hardcoded Credentials in [config.php]**:
    - The file contains hardcoded MySQL credentials (`MYSQL_USER`, `MYSQL_PASSWORD`) and LDAP server details. This is a security risk as it exposes sensitive information. These should be stored in environment variables or a secure configuration management system.

2. **SQL Injection Risks**:
    - In files like [edit_security.php] and [add_security.php], user inputs from `$_REQUEST` are directly used in SQL queries. While prepared statements are used, it's crucial to validate and sanitize all inputs to prevent SQL injection.

3. **Cross-Site Scripting (XSS) Risks**:
    - In files like [file_info.php] and [customer_info.php], user-generated content is displayed using `print` or concatenation. While `htmlspecialchars` is used in some places, ensure it is consistently applied to all user inputs before rendering them in the HTML.

4. **Session Management**:
    - The use of `$_SESSION` for user IDs in files like [edit_security.php] and [add_security.php] is noted. Ensure that session data is properly secured and validated to prevent session hijacking.

5. **Error Handling**:
    - In files like [edit_security.php], error messages are directly outputted as JSON. Avoid exposing internal error details to the client, as this can provide attackers with useful information.

6. **Lack of CSRF Protection**:
    - Forms in files like [add_security.php]and [edit_securities.php]do not appear to have CSRF tokens implemented. This makes the application vulnerable to Cross-Site Request Forgery attacks.

7. **Wrong Use of `$_REQUEST`**:
    - The use of `$_REQUEST` in multiple files (e.g., [edit_security.php] [add_security.php]is risky as it combines `$_GET`, `$_POST`, and `$_COOKIE`. Use `$_POST` or `$_GET` explicitly based on the context.

8. **Disabled SQL Modes**:
    - In files like [add_security.php], the SQL mode is explicitly disabled (`SET SESSION sql_mode = ''`). This can lead to unexpected behaviour and should be avoided unless absolutely necessary.