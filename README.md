## Motivation

In some cases you need to set dynamically calculated styles for different elements, and for realise it, you have to inline them into your html element like that `document.body.style = '--viewportHeight: ' + window.innerHeight ' + 'px;'`
But in during of development anybody can change it one more time and just drop your changes.

In another case you can set dynamically calculated styles in separated DOM style element, but if you have a lot of them, google page speed won't like it.
So this is simple singleton way to solve two typical troubles in during of development.

## Installation

Use the package manager [npm](https://docs.npmjs.com/about-npm/) for installation.

```
$ npm install dynamic-styles-service
```

## Usage

```js

import { dynamicStylesService } from  'dynamic-styles-service';

dynamicStylesService.setStyles({ id: 'some-id', selector: 'body', css: ` --viewport-height: ${window.innerHeight}px` })

```

## API

### dynamicStylesService.setStyles(optionsObject);

#### id

*Required*<br>
Type: `string`

It is uses to identify your style rule, if you provide same id several times, service will apply only the last of them

#### selector

*Required*<br>
Type: `string`

CSS selector which will append to your rule.

#### css

CSS rules for setting your rule.

*Required*<br>
Type: `string`

### dynamicStylesService.remove(id);

#### id

*Required*<br>
Type: `string`


## License
[MIT](https://choosealicense.com/licenses/mit/)
