---
title: <vite:asset /> | typo3_vite | crazy252
---

# <vite:asset />

Use this ViewHelper to add an file to your site.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| extension | string | `null` | Yes | Name of the extension folder |
| entry | string | `null` | Yes | Name of the file |

### Examples

```xml
<vite:asset extension="dummy_extension" entry="main.ts" />
```