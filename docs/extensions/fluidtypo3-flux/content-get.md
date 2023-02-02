---
title: <flux:content.get /> | flux | fluidtypo3
---

# <flux:content.get />

Gets all child content of a record based on area.

The elements are already rendered, they just need to be output.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| area | string | `null` | Yes | Name or "colPos" value of the content area to render |
| limit | integer | `null` | No | Optional limit to the number of content elements to render |
| offset | integer | `0` | No | Optional offset to the limit |
| order | string | `'sorting'` | No | Optional sort order of content elements - RAND() supported |
| sortDirection | string | `'ASC'` | No | Optional sort direction of content elements |
| as | string | `null` | No | Variable name to register, then render child content and insert all results as an array of records |
| loadRegister | array | `[]` | No | List of LOAD_REGISTER variable |
| render | boolean | `true` | No | Optional returning variable as original table rows |
| hideUntranslated | boolean | `false` | No | Exclude untranslated records |

### Examples

```xml
<flux:content.get area="teaser" />
```

```xml
<f:section name="Configuration">
	<flux:grid>
		<flux:grid.row>
			<flux:grid.column name="teaser" colPos="0" />
		</flux:grid.row>
	</flux:grid>
</f:section>

<f:section name="Main">
	<f:for each="{flux:content.get(area: 'teaser')}" as="element">
		<div style="border: 1px solid red">
			<f:format.raw>{element}</f:format.raw>
		</div>
	</f:for>
</f:section>
```