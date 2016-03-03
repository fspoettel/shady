# Shady

> :waxing_crescent_moon: Customizable vignettes for your images

 1. [Install](https://github.com/fspoettel/shady#install)
 2. [Usage](https://github.com/fspoettel/shady#usage)
   1. [Mixin](https://github.com/fspoettel/shady#mixin)
   2. [Options](https://github.com/fspoettel/shady#options)
   3. [Presets](https://github.com/fspoettel/shady#presets)
 3. [Build](https://github.com/fspoettel/shady#build)

## Install

``` bash
npm install --save sass-shady
```

## Usage

Shady is intended to be used as a semantic mixin on media containers. It works by wrapping the media with a pseudo-element that holds the vignette as a CSS3 Gradient. The markup needed should look somewhat like this (semantics and class-names are up to you):

```html
<!--The image-container will have position:relative applied to it and work as an achor for vignette-->
<figure class="vignette-container">
  <img src="img/test.jpg" alt="Test Image">
  <!-- The caption will be staying readable no matter what when positioned ontop of the vignette-->
  <figcaption class="vignette-caption">
    <p>Shady Test Caption</p>
  </figcaption>
</figure>
```

### Mixin

```scss

// Basic example
// This will apply the vignette referenced as "bottom" in $shady-presets
.vignette-container {
  @include shady("bottom");
}

// Default vignette
// This will apply the vignette defined
.vignette-container {
  @include shady;
}

// Custom vignette
// You can apply custom vignettes that are not defined in a preset by using @content and passing "custom" to the mixin
.vignette-container {
  @include shady("custom") {
    background: linear-gradient(from top, red 0%, green 100%);
  }

// Custom properties
// You can apply other css-value to the vignette directly by passing them as @content
.vignette-container {
  @include shady("bottom") {
    mix-blend-mode: multiply;
  }
}
```

### Options

```scss
/// Color used in the default presets
/// @property {String}
$shady-preset-color: #000f14;

/// Available presets
/// @property {Map}
$shady-presets:
  (
    "bottom": $shady-bottom,
    "bottomTop": $shady-bottomTop,
    "full": $shady-full,
    "top": $shady-top,
  );

/// Default preset
/// @property {String}
$shady-default-preset: "bottom";

/// Shady can expose each preset as a class
/// By default, the class will be named: .shady--{preset}
/// @property {Boolean}
$shady-expose: false;
```
### Presets

The default presets are defined in `./scss/shady/_presets`. They are gradients bound to variables grouped under the `$shady-preset` namespace. You can supply your own presets by specifying them in the mentioned file or before shady is imported.

```scss
// Sample preset
$shady-preset-dracula: linear-gradient(to top, red 0%, white 100%);
```

**Default Presets:**

 - `bottom`: Bottom shaded
 - `bottomTop`: Bottom & Top shaded
 - `full`: Fully shaded
 - `top`: Top Shaded

## Build:

You can develop shady locally by using the supplied gulpfile and the test-folder. You can build a sassdoc-reference for this repository by running `gulp sassdoc`.
