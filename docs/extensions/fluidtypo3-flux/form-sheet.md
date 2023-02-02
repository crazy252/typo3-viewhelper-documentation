---
title: <flux:form.sheet /> | flux | fluidtypo3
---

# <flux:form.sheet />

Groups FlexForm fields into sheets.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| name | string | `null` | Yes | Name of the group, used as FlexForm sheet name, must be FlexForm XML-valid tag name string |
| label | string | `null` | No | Label for the field group - used as tab name in FlexForm. Optional - if not specified, Flux tries to detect an LLL label named "flux.fluxFormId.sheets.foobar" based on sheet name, in scope of extension rendering the Flux form |
| variables | array | `[]` | No | Freestyle variables which become assigned to the resulting Component - can then be read from that Component outside this Fluid template and in other templates using the Form object from this template |
| description | string | `null` | No | Optional string or LLL reference with a desription of the purpose of the sheet |
| shortDescription | string | `null` | No | Optional shorter version of description of purpose of the sheet, LLL reference supported |
| extensionName | string | `null` | No | If provided, enables overriding the extension context for this and all child nodes. The extension name is otherwise automatically detected from rendering context |