---
title: <flux:form.option.static /> | flux | fluidtypo3
---

# <flux:form.option.static />

Form static caching option ViewHelper

Use this only when your Flux form is 100% static and will work when cached.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| value | boolean | `null` | Yes | Configures caching of the DS resulting from the form. Default when used is TRUE which enables caching |

### Examples

```xml
<flux:form.option.static value="true" />
```