---
displayed_sidebar: notesSideBar
---

# Git

# Renaming Folders
If we rename certain folder and the name is case-sensitive, e.g.
```
Folder -> folder
```
The changes might not be reflected in the repo (somehow).

We have to use the command
```
git mv <old name> <new name>
```
and on top of that,
```
//Rename to tmp
git mv Folder tmp

//Remame to lower case
git mv tmp folder
```
