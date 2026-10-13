---
displayed_sidebar: notesSideBar
---

# Goland

When Code insight is not activated due to huge file size (like `pb` files), pb structs might show as error in function calls. To fix:
- Go to Help > Edit Custom Properties

```
# custom GoLand properties (expand/override 'bin/idea.properties')
idea.max.intellisense.filesize=99999
```

- Restart Goland