# webManifest

Use this ViewHelper to add PWA (Progressive Web App) support to your site. This requires the vite plugin `vite-plugin-pwa`.

### Attributes

| Attribute | Type | Default | Required | Description |
|:---------:|:----:|:-------:|:--------:|:-----------:|
| extension | string | `null` | Yes | Name of the extension folder |
| config | string | vite.config.js | False | Name of the vite config |

### Examples

```xml
<vite:webManifest extension="dummy_extension" config="vite.config.js" />
```