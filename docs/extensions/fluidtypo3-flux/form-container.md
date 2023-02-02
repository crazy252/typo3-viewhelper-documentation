---
title: <flux:form.container /> | flux | fluidtypo3
---

# <flux:form.container />

Use around other Flux fields to make these fields nested visually and in variable scopes (i.e. a field called "name" inside a palette called "person" would end up with "person" being an array containing the "name" property, rendered as {person.name} in Fluid.

The field grouping can be hidden or completely removed. In this regard this element is a simpler version of the Section and Object logic.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| name | string | `null` | Yes | Name of the attribute, FlexForm XML-valid tag name string |
| label | string | `null` | No | Label for the attribute, can be LLL: value. Optional - if not specified, Flux tries to detect an LLL label named "flux.fluxFormId.fields.foobar" based on field name, in scope of extension rendering the Flux form. If field is in an object, use "flux.fluxFormId.objects.objectname.foobar" where "foobar" is the name of the field |
| name | array | `[]` | No | Freestyle variables which become assigned to the resulting Component - can then be read from that Component outside this Fluid template and in other templates using the Form object from this template |
| name | string | `null` | No | If provided, enables overriding the extension context for this and all child nodes. The extension name is otherwise automatically detected from rendering context |

### Examples

```xml
<flux:form.container name="settings.name" label="Name">
	<flux:field.input name="firstname" label="First name"/>
	<flux:field.input name="lastname" label="Last name"/>
</flux:form.container>
```

```xml
Name: {settings.name.firstname} {settings.name.lastname}
```