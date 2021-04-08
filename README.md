# arrow-line
![GitHub package.json version](https://img.shields.io/github/package-json/v/stanko-arbutina/arrow-line?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/arrow-line?style=plastic)
![NPM](https://img.shields.io/npm/l/arrow-line?style=plastic)

Draw arrows between html elements in browser using SVG. Based on [this article](https://www.beyondjava.net/how-to-connect-html-elements-with-an-arrow-using-svg). 

Get it from CDN: https://cdn.jsdelivr.net/npm/arrow-line/dist/arrow-line.min.js

\
![Example](https://raw.githubusercontent.com/stanko-arbutina/arrow-line/master/example-screenshot.png)

## Quick start

__With npm/webpack:__

```bash
npm install arrow-line # in terminal
```

```javascript
import * as arrowLine from 'arrow-line'; // to import, or
const arrowLine = require('arrow-line'); // if using commonjs
```

__Or, add directly via \<script> tag:__

```html
<script src="https://cdn.jsdelivr.net/npm/arrow-line/dist/arrow-line.min.js">
```    

__Connect elements:__

```javascript
const arrow = arrowLine('#firstId', '#secondId');
```
___

+ [Introduction](#introduction)
+ [Installation](#installation)
+ [Usage](#usage)
    + [Construction](#construction)
    + [Methods](#methods)
    + [Options](#options)
+ [Development notes](#development-notes)
+ [Similar projects](#similar-projects)
+ [License](#license)


## Introduction

Recently I was doing an interactive presentation for which I wanted to draw diagram-like arrows 
between cells of a html table.  I've found an article from an author who had similar problem
and [summarized](https://www.beyondjava.net/how-to-connect-html-elements-with-an-arrow-using-svg) a 
solution nicely -  this is my effort to extract it in a library.

Basically, we create an SVG element in the top left corner of the page, and try to find the coordinates of the elements we wish to connect (relative to the origin of svg coordinate system). We then draw a bezier curve between the points (and use a _marker_ for arrowhead).

## Installation

_Using npm:_ 

```bash        
npm install arrow-line 
```

_Using yarn:_ 

```bash        
yarn add arrow-line
```

_or simply download `dist/arrow-line.min.js` and include it in your page._


## Usage

The library can be added directly to the page with a script tag:

```html
<script src="arrow-line.min.js"></script>    
```
which exposes it as a global variable (`arrowLine`), or it can be used as UMD (CommonJS/AMD/ES6) module.

### Construction

Draw an arrow with:

```
arrowLine(<source>, <destination>, [options object]);
```

or, alternatively:    

```    
arrowLine({
    source: <source>,
    destination: <destination>,
    ...[other options]
});
```
 

for example:

```javascript    
const arrow = arrowLine('#box1', '#box2', { color: 'blue' });
const arrow = arrowLine({source: '#box1', destination: '#box2', thickness: 3, style: 'dot'});
const arrow = arrowLine({x: 5, y: 10}, {x: 100, y: 80}, {curvature: 1.5, endpoint: {type: 'squares' }});
```

`<source>` and `<destination>` are either [css/query selector strings](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or objects `{x: .., y:..}` containing pairs of coordinates. Resulting arrow begins at `<source>` and ends at `<destination>`. You can provide further options (described below) to customize the arrow.

### Methods

`arrowLine` function returns an object (`arrow` in the examples) with two methods:

+ `arrow.remove()` - deletes an arrow from the screen.
+ `arrow.update([options])` - updates the original arrow options. `[options]` object is of the same type as the one provided to the constructor except for the `svgParentSelector` (see below) option which is not allowed in this context. Some examples:

```javascript    
    arrow.update({source: {x: 10, y: 8} });
    arrow.update({color: 'blue', style: 'dot'});
```

+ `arrow.getParentSvgId()` - returns an id of SVG element containing the arrow (if it has one)
+ `arrow.getRawSvgPath()` - returns the actual SVG [`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) element (`arrow` is essentially just a wrapper around this element)   
    
    
### Options

+ `source` - css (query) selector string of the element from which the arrow starts. Alternatively, an object containing coordinates `{x:.. ,y: ...}` is accepted. 
This option is only available if source element is not already provided as the first argument (that is, _options_ object is the only argument to constructor).
+ `destination` - css (query) selector string of the element at which the arrow ends. Alternatively, an object containing coordinates `{x:.. ,y: ...}` is accepted. 
This option is only available if destination element is not already provided as the second argument (that is, _options_ object is the only argument to constructor).
+ `sourcePosition` - one of _topLeft_, _topRight_, _topCenter_, _middleRight_, _middleLeft_, _bottomLeft_, _bottomCenter_  and _bottomRight_. Specifies the part of the source element on which the arrow starts. When not specified, center of one side (depending on the position in relation to destination) of the source rectangle is selected. Only used when having a css selector as a source.
+ `destinationPosition` - one of _topLeft_, _topRight_, _topCenter_, _middleRight_, _middleLeft_, _bottomLeft_, _bottomCenter_  and _bottomRight_. Specifies the part of the destination element at which the arrow ends. When not specified, center of one side (depending on the position in relation to source) of the destination rectangle is selected. Only used when having a css selector as a destination.
+ `color` - string representing the color of the arrow. Valid values include _blue_, _#00F_ and _rgb(0,0,255)_ - [similar](https://css-tricks.com/almanac/properties/s/stroke/#values) to representing the color in css. Default is _black_.  
+ `curvature` - number representing how curved should the arrow be. Default is 1. Set to 0 if you want straight lines. 
+ `pivots` - a pair of coordinates `[{x:..., y: ...}, {x:..., y: ...}]` containing the pivots of the arrow (relative to start point and end point). Arrow is drawn as a [Cubic Bezier Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves) - it's pivots are normally calculated automatically based on `curvature` and direction of the arrow.
+ `style` - can be one of _dot_, _dash_, _solid_ and _dot-dash_. Line style of the arrow. Default is _solid_.
+ `thickness` - number representing the thickness of the arrow. Default is 1.
+ `forceDirection` - can be _horizontal_ or _vertical_. By default, weather the arrow is oriented along horizontal or vertical axis is decided based on source and destination position.
+ `svgParentSelector` - string, containing the css/query selector of an `<svg>` element on which to draw arrows. If this option is not specified, an `<svg>` element is created in the top left corner of the page the first time `arrowLine` is called, and reused after that. 
+ `endpoint` - an object, containing options for drawing the arrow endpoint. Can be one of:    
    + `type` - shape of the endpoint. Can be one of _arrowHeadFilled_, _arrowHead_, _squares_, _circles_, _custom_, and _none_. If _custom_ is specified, `markerIdentifier` (see below) is required. Default is _arrowHeadFilled_. 
    + `markerIdentifier` - css (query) selector of a [marker svg element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker) to be used as endpoint. Only allowed with _custom_ endpoint `type`.
    + `fillColor` - string representation of the endpoint fill color (e.g. 'red', '#FF0000'). Default is the same as arrow `color`.
    + `size` - positive number representing ths endpoint size. Default is 1. 
    + `position` - can be _start_, _end_ or _both_. Should endpoint be drawn at the beginning of the arrow, end, or both sides? Default is _end_ for markers of type _arrowHead_ and _arrowHeadFilled_ and _both_ for _squares_ and _circles_ 

## Development notes

For ease of local development, there is a very minimal web page (`index.html`) in the repository root. The following `package.json` scripts are available:

- `build` - builds the production(minified) version of the library (`dist/arrow-line.min.js`)
- `watch` - watches the source and dynamically rebuilds the development version (`dist/arrow-line.js`)
- `start` - serves development version locally (port 8080 by default)
- `karma` - runs unit and integration tests with [karma](https://karma-runner.github.io/latest/index.html)   

`dist` folder is included in the repo for user convenience. Similarily, a small chunk of [lodash](https://lodash.com/) is bundled-in directly. 

The project in its current iteration covers my use-case adequately. If it were to be developed further, the first major milestone would be to add some kind of framework for detecting visual regressions.

## Similar projects

- [LeaderLine](https://anseki.github.io/leader-line/) - like arrow-line, but much more powerful
- [Curved line arrow angular](https://github.com/MelekDamak/curved-line-arrow-angular) - angular directive for drawing arrows. Uses HTML Canvas
- [react-arrow](https://github.com/jcoreio/react-arrow), [react-archer](https://github.com/pierpo/react-archer) and [react-xarrows](https://github.com/Eliav2/react-xarrows) - react components

## License

[MIT](LICENSE)


