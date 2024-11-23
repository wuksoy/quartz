---
date: 2023-10-03
tags:
  - cheatsheet
MOC: "[[Cheat Sheets]]"
---
# Git Cheat Sheet

this is a cheat sheet for all the most common commands in git as a helpful reminder and a reference for git version control
## Git Basics

| Command                       | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `git init <directory>`        | create empty git repo in directory (directory is optional)      |
| `git clone <repo>`            | clone repo located at onto local machine                        |
| `git config user.name <name>` | Define author name to be used for all commits in current repo   |
| `git add <directory>`         | Stage all changes in for the next commit                        |
| `git commit -m "<message>"`   | Commit the staged snapshot, use \<message> to add message       |
| `git status`                  | List which files are staged, unstaged, and untracked.           |
| `git log`                     | Display the entire commit history using the default format      |
| `git diff`                    | Show upstaged changes between your index and working directory. |

## Undoing Changes

| **Command**           | **Description**                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|
| `git revert <commit>` | Create a new commit that undoes all the changes made in the specified commit, then applies it to the current branch. |
| `git reset <file>`    | Remove the file from the staging area but leave the working directory unchanged. This unstages the file without overwriting changes. |
| `git clean -n`        | Shows which files would be removed from the working directory. Use the `-f` flag to force the clean operation.        |

## Rewriting Git History

| Command                 | Description                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| `git commit --amend` | Replace the last commit with the staged changes and last commit combined. nothing staged = edit message |
| `git rebase <base>`  | Rebase the current branch onto \<base> (commit ID, branch name, tag, reference to HEAD)                 |
| `git reflog`         | Show a log of changes to the local repository's HEAD -all tag to see all                                                                                                        |

## Git Branches

| Command                       | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| `git branch`               | List all of the branches in your repo. Add \<branch> to create new branch |
| `git checkout -b <branch>` | create and checkout a new branch                                          |
| `git merge <branch>`       | Merge \<branch> into the current branch                                                                         |

## Remote Repositories

| Command                          | Description                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `git remote add <name> <url>` | Create a new connection to a remote repo. use \<name> as shortcut in other commands               |
| `git fetch <remote> <branch>` | Fetches a specific \<branch>, from the repo. remove \<branch> to fetch all refs                   |
| `git pull <remote>`           | Fetch the specified remote’s copy of current branch and immediately merge it into the local copy. |
| `git push <remote> <branch>`  |      Push the branch to , along with necessary commits and objects                                                                                             |


## Additional Options +

### Git Config

| Command                                                  | Description                                                                                       |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `git config --global user.name <name>`                    | Define the author name to be used for all commits by the current user.                            |
| `git config --global user.email <email>`                  | Define the author email to be used for all commits by the current user.                            |
| `git config --global alias.<alias-name> <git-command>`    | Create a shortcut for a Git command. E.g. `alias.glog` sets `git glog` equivalent to `git log --graph --oneline`. |
| `git config --system core.editor <editor>`                | Set the text editor used by commands for all users on the machine. `<editor>` should be the command that launches the desired editor (e.g., `vi`). |
| `git config --global --edit`                              | Open the global configuration file in a text editor for manual editing.                             |


### Git Log

| Command                                       | Description                                                                                           |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `git log`                                     | Display the commit history for the current branch, showing commit messages, authors, and dates.    |
| `git log <file>`                              | View the commit history for a specific file, including changes made to that file over time.        |
| `git log --oneline`                           | Show a condensed, one-line summary of each commit in the history.                                   |
| `git log --graph`                            | Display the commit history as a text-based graph, showing branching and merging visually.           |
| `git log --since=<date>`                      | View commits since a specific date, e.g., `git log --since=2023-01-01`.                             |
| `git log --author=<author>`                   | Filter the commit history by the author's name or email, e.g., `git log --author="John Smith"`.     |
| `git log --grep=<search-term>`                | Search commit messages for a specific keyword or phrase, e.g., `git log --grep="bug fix"`.          |
| `git log --stat`                             | Display a summary of changes (insertions and deletions) made in each commit.                         |
| `git log --follow <file>`                    | Track the history of a file even if it has been renamed or moved.                                     |
| `git log --merges`                           | Show only merge commits in the commit history.                                                       |
| `git log --no-merges`                        | Exclude merge commits from the commit history.                                                         |
| `git log --pretty=format:"<format>"`         | Customize the log output format using placeholders, e.g., `git log --pretty=format:"%h %s"`.       |
| `git log <branch1>..<branch2>`               | Display the commits that are in `branch2` but not in `branch1`, showing the branch's divergence.     |
| `git log --graph --decorate --oneline --all` | A comprehensive view that combines graph visualization with additional details and all branches.     |


### Git Diff

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `git diff HEAD`  | Show difference between working dir and last commit |
| `git diff --cached` |  Show difference between staged changes and last commit                                                    |

### Git Reset

| Command                        | Description                                                                                                               |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `git reset`                    | Reset staging area to match most recent commit, but leave the working directory unchanged.                               |
| `git reset --hard`             | Reset staging area and working directory to match most recent commit and overwrites all changes in the working directory. |
| `git reset <commit>`           | Move the current branch tip backward to `<commit>`, reset the staging area to match, but leave the working directory alone. |
| `git reset --hard <commit>`    | Same as previous, but resets both the staging area & working directory to match. Deletes uncommitted changes, and all commits after `<commit>`. |
### Git Rebase

| Command                  | Description                                                                                                                |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `git rebase -i <base>`  | Interactively rebase the current branch onto `<base>`. Launches an editor to enter commands for how each commit will be transferred to the new base. |

### Git Pull

| Command                            | Description                                                                                                             |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `git pull --rebase <remote>`       | Fetch the remote's copy of the current branch and rebase it into the local copy. Uses `git rebase` instead of merge to integrate the branches. |

### Git Push

| Command                                      | Description                                                                                              |
|----------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `git push <remote> --force`                 | Forces the git push even if it results in a non-fast-forward merge. Do not use the `--force` flag unless you're absolutely sure you know what you're doing. |
| `git push <remote> --all`                   | Push all of your local branches to the specified remote.                                                |
| `git push <remote> --tags`                  | Tags aren't automatically pushed when you push a branch or use the `--all` flag. The `--tags` flag sends all of your local tags to the remote repo.     |
