================
angular-gravatar
================


This is a simple AngularJS directive that takes an email address (and optionally some other parameters) to pull Gravatar images.

Getting Started
============

Load this directive with the following code:

```html
<script src="angular-md5.js"></script>
<script src="angular-gravatar.js"></script>
```

Add the following dependencies to the module in your own module.
```js
var myModule = angular.module('MyModule', ['angular.md5', 'angular.gravatar']);
```

Usage
=====

Use the directive in your HTML files with the following code using the custom `<gravatar>` tag:
```html
<gravatar email="your@email.com"></gravatar>
```

There are several optional attributes that you can provide to the tag:

```html
<gravatar email="your@email.com" size="200" class="myClass1 myClass2" default="monsterid" rating="g"></gravatar>
```

Here are the optional paramaters to customize your gravatar tag:

- **size:** Size of the avatar in pixel.
- **default:** The default value of the avatar if email address has no matching gravatar. You can provide an image url or add from the following themes: `'404'`, `'mm'`, `'identicon'`, `'monsterid'`, `'wavatar'`, `'retro'`, `'blank'`.
- **rating:** Gravatar allows users to self-rate their images so that they can indicate if an image is appropriate for a certain audience, options are: `'g'`, `'pg'`, `'r'`, `'x'`.

For detailed information of these parameters, please see [Gravatar documentation](https://en.gravatar.com/site/implement/images/).

Todo
============
- Write testing
