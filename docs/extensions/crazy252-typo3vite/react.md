---
title: <vite:react /> | typo3_vite | crazy252
---

# <vite:react />

Use this ViewHelper to add the react setup to your site.

This need's to be before `<vite:asset />`.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| extension | string | `null` | Yes | Name of the extension folder |

### Examples

```xml
<vite:react extension="dummy_extension" />
```