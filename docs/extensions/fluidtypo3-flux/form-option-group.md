---
title: <flux:form.option.group /> | flux | fluidtypo3
---

# <flux:form.option.group />

Form group option ViewHelper

Defines a logical group name for the Flux form, which can then be read by extensions supporting Flux forms. How the setting gets used is specific to the extension reading the Flux form - please consult that documentation to learn if/how the extension supports this option.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| value | string | `null` | Yes | Name of the group |

### Examples

```xml
<flux:form.option.group value="Example Group" />
```