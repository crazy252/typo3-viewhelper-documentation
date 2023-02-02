---
title: <flux:form.object /> | flux | fluidtypo3
---

# <flux:form.object />

Use this inside `flux:form.section` to name and divide the fields into individual objects that can be inserted into the section.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| name | string | `null` | Yes | Name of the section object, FlexForm XML-valid tag name string |
| label | string | `null` | No | Label for section object, can be LLL: value. Optional - if not specified, Flux tries to detect an LLL label named "flux.fluxFormId.objects.foobar" based on object name, in scope of extension rendering the Flux form |
| variables | array | `[]` | No | Freestyle variables which become assigned to the resulting Component - can then be read from that Component outside this Fluid template and in other templates using the Form object from this template |
| extensionName | string | `null` | No | If provided, enables overriding the extension context for this and all child nodes. The extension name is otherwise automatically detected from rendering context |
| inherit | boolean | `false` | No | If TRUE, the value for this particular field is inherited - if inheritance is enabled by the ConfigurationProvider |
| inheritEmpty | boolean | `false` | No | If TRUE, allows empty values (specifically excluding the number zero!) to be inherited - if inheritance is enabled by the ConfigurationProvider |
| transform | string | `null` | No | Set this to transform your value to this type - integer, array (for csv values), float, DateTime, Vendor\MyExt\Domain\Model\Object or ObjectStorage with type hint |
| contentContainer | boolean | `false` | No | If TRUE, each object that is created of this type results in a content column of the same name, with an automatic colPos value |