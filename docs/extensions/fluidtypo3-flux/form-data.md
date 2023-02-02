---
title: <flux:form.data /> | flux | fluidtypo3
---

# <flux:form.data />

Converts raw flexform xml into an associative array, and applies any transformation that may be configured for fields/objects.

### Attributes

| Name | Type | Default | Required | Description |
|:-----|:----:|:-------:|:--------:|:------------|
| table | string | `null` | Yes | Name of table that contains record with Flux field |
| field | string | `null` | Yes | Name of Flux field in table |
| uid | integer | `null` | No | UID of record to load (used if "record" attribute not used) |
| record | array | `null` | No | Record containing Flux field (used if "uid" attribute not used) |
| as | string | `null` | No | Optional name of variable to assign in tag content rendering |

### Examples

Since the page variable is available in fluidcontent elements, we can use it to access page configuration data.

```xml
<flux:form.data table="pages" field="tx_fed_page_flexform" record="{page}" />
```

Data of disabled and deleted pages cannot be loaded with flux:form.data and lead to an TYPO3FluidFluidCoreViewHelperException. To prevent this exception, check if the page is accessible by generating a link to it.

```xml
<f:if condition="{f:uri.page(pageUid: myUid)}">
	<flux:form.data table="pages" field="tx_fed_page_flexform" uid="{myUid}" as="pageSettings">
		<!-- your code -->
	</flux:form.data>
</f:if>
```