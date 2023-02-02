---
title: <flux:form.option.icon /> | flux | fluidtypo3
---

# <flux:form.option.icon />

Sets the icon option in the Flux form, which can then be read by extensions using Flux forms. Consult the documentation of extensions which use the icon setting to learn more about how icons are used.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| value | string | `null` | Yes | Absolute path and name of the icon file |

### Examples

```xml
<flux:form.option.icon value="/typo3conf/ext/myext/Resources/Public/Icons/Element.svg" />
```