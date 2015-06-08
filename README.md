[Angular EZ Plus](http://igorlino.github.io/angular-elevatezoom-plus/)
================================

[Angular EZ Plus](http://igorlino.github.io/angular-elevatezoom-plus/) is directive for the [ElevateZoom Plus](http://igorlino.github.io/elevatezoom-plus/) library.

## Features

- Image Zooming
- Easing
- Angular directive

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install angular-ez-plus
```

Via [Bower](http://bower.io/):

```bash
bower install angular-ez-plus
```

In a browser:

```html
<script src="jquery.ez-plus.js"></script>
<script src="angular-ezplus.js"></script>
```

## Getting Started

Include the ezPlus plug-in and the directive on a page.

```html
<img
    ez-plus 
    ezp-model="{thumb:IMGPATH, small:IMGPATH, large:IMGPATH}"
    ezp-options="{scrollZoom: true, easing: true}"
     id="zoom_01" src='images/large/image1.png' />
```

For more information on how to setup and customise, [check the examples](http://igorlino.github.io/angular-elevatezoom-plus/).

## License
Licensed under MIT license.
