# Nuxt Custom Config Schema 

# `appConfig`

## `nuxtIcon`

### `size`
- **Type**: `string | false`
- **Default**: `"1em"`

> Icon Size


Set the default icon size. Set to false to disable the sizing of icon in style.


### `class`
- **Type**: `string`
- **Default**: `""`

> CSS Class


Set the default CSS class


### `aliases`

## `prose`

### `copyButton`

#### `iconCopy`
- **Type**: `string`
- **Default**: `"ph:copy"`

> Icon displayed to copy


#### `iconCopied`
- **Type**: `string`
- **Default**: `"ph:check"`

> Icon displayed when copied


### `headings`

#### `icon`
- **Type**: `string|false`
- **Default**: `"ph:link"`

> Default icon for anchor link on hover


### `h1`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h2`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h3`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h4`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h5`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h6`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


## `docus`

### `title`
- **Type**: `string`
- **Default**: `"Docus"`

> Website title, used as header default title and meta title.


### `titleTemplate`
- **Type**: `string`
- **Default**: `"%s · Docus"`

> The website title template, to overwrite the default one.


### `description`
- **Type**: `string`
- **Default**: `"The best place to start your documentation."`

> Website description, used for meta description.


### `image`
- **Type**: `string`
- **Default**: `"https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png"`

> Cover image.


### `socials`

#### `twitter`
- **Type**: `string`
- **Default**: `""`

> Twitter social handle


#### `github`
- **Type**: `string`
- **Default**: `""`

> GitHub org or repository


#### `facebook`
- **Type**: `string`
- **Default**: `""`

> Facebook page url


#### `instagram`
- **Type**: `string`
- **Default**: `""`

> Instagram page url


#### `youtube`
- **Type**: `string`
- **Default**: `""`

> Instagram page url


#### `medium`
- **Type**: `string`
- **Default**: `""`

> Medium page url


### `layout`
- **Type**: `'default'|'page'`
- **Default**: `"default"`

> Theme layout configuration.


### `aside`

#### `level`
- **Type**: `number`
- **Default**: `0`

> Aside navigation level


Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.


#### `collapsed`
- **Type**: `boolean`
- **Default**: `false`

> Specify if default collapsibles state globally for aside navigation.


#### `exclude`
- **Type**: `string[]`
- **Default**: `[]`

> Paths to be excluded from aside navigation.


### `header`

#### `title`
- **Type**: `string`
- **Default**: `""`

> Website title


Title to be displayed in header or as aria-label if logo is defined.
Default to docus.title


#### `logo`
- **Type**: `boolean`
- **Default**: `false`

> Logo configuration


Boolean to disable or use the `Logo.vue` component.
String to be used as a name of a component.


#### `showLinkIcon`
- **Type**: `boolean`
- **Default**: `false`

> Header links


Toggle links icons in the header.


#### `exclude`
- **Type**: `string[]`
- **Default**: `[]`

> Paths to be excluded from header links.


#### `fluid`
- **Type**: `boolean`
- **Default**: `false`

> Makes the content of the header fluid.


### `main`

#### `fluid`
- **Type**: `boolean`
- **Default**: `false`

> Makes the content of the main container fluid.


#### `padded`
- **Type**: `boolean`
- **Default**: `true`

> Makes the content of the main container padded.


### `footer`

#### `credits`

##### `icon`
- **Type**: `string`
- **Default**: `"IconDocus"`

> Icon to show on credits


##### `text`
- **Type**: `string`
- **Default**: `"Powered by Docus"`


##### `href`
- **Type**: `string`
- **Default**: `"https://docus.dev"`


#### `textLinks`
- **Type**: `array`

> Text links


Will be added into center section of the footer.


#### `iconLinks`
- **Type**: `array`

> Icon links


Icons to be added to Social Icons in footer.


#### `fluid`
- **Type**: `boolean`
- **Default**: `true`

> Makes the content of the footer fluid.


### `github`

#### `dir`
- **Type**: `string`
- **Default**: `""`

> Directory


Your GitHub repository root directory.


#### `branch`
- **Type**: `string`
- **Default**: `""`

> Branch


Your GitHub repository branch.


#### `repo`
- **Type**: `string`
- **Default**: `""`

> Repository


Your GitHub repository name.


#### `owner`
- **Type**: `string`
- **Default**: `""`

> Owner


Your GitHub repository owner.


#### `edit`
- **Type**: `boolean`
- **Default**: `false`

> EditOnGithub


Display EditOnGithub button.
