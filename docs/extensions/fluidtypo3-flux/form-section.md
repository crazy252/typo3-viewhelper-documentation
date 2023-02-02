---
title: <flux:form.section /> | flux | fluidtypo3
---

# <flux:form.section />

FlexForm field section ViewHelper.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| name | string | `null` | Yes | Name of the attribute, FlexForm XML-valid tag name string |
| label | string | `null` | No | Label for section, can be LLL: value. Optional - if not specified, Flux tries to detect an LLL label named "flux.fluxFormId.sections.foobar" based on section name, in scope of extension rendering the form |
| variables | array | `[]` | No | Freestyle variables which become assigned to the resulting Component - can then be read from that Component outside this Fluid template and in other templates using the Form object from this template |
| extensionName | string | `null` | No | If provided, enables overriding the extension context for this and all child nodes. The extension name is otherwise automatically detected from rendering context |
| inherit | boolean | `null` | No | If TRUE, the value for this particular field is inherited - if inheritance is enabled by the ConfigurationProvider |
| inheritEmpty | boolean | `null` | No | If TRUE, allows empty values (specifically excluding the number zero!) to be inherited - if inheritance is enabled by the ConfigurationProvider |
| gridMode | string | `null` | No | Defines how section objects which are marked as content containers, get rendered as a grid. Valid values are either "rows" or "columns". Default is to render as rows |

### Examples

Using a section to let a user add many elements

```xml
<flux:form.section name="settings.numbers" label="Telephone numbers">
	<flux:form.object name="mobile" label="Mobile">
		<flux:field.input name="number"/>
	</flux:form.object>
	<flux:form.object name="landline" label="Landline">
		<flux:field.input name="number"/>
	</flux:form.object>
</flux:form.section>
```

Reading section element values

```xml
<f:for each="{settings.numbers}" as="obj" key="id">
	Number #{id}:
	<f:if condition="{obj.landline}">mobile, {obj.landline.number}</f:if>
	<f:if condition="{obj.mobile}">landline, {obj.mobile.number}</f:if>
	<br/>
</f:for>
```