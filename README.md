# vue-image-compare-viewer

> Aka vue version of [image-compare-viewer](https://github.com/kylewetton/image-compare-viewer)

A MODERN, LIGHTWEIGHT COMPARISON SLIDER

Compare before and after images, for grading, CGI and other retouching comparisons.

```bash
$ npm install vue-image-compare-viewer --save
```

## HOW TO USE

### Basic example

<ImageCompareViewer before="/assets/before-0.jpg" after="/assets/after-0.jpg" />

```html
<ImageCompareViewer before="..." after="..." />
```

### UI THEME OPTIONS

**ImageCompareViewer** will keep all other elements in the container, as long as you add a **`keep`** class to it, allowing you to place other elements inside the viewer, just remember to set your `z-index` above 10, this example also uses the CSS property `'user-select: none'`.

<ImageCompareViewer
  before="/assets/before-cgi.jpg"
  after="/assets/after-cgi.jpg"
  control-color="#73c781"
  :control-shadow="false"
  add-circle
  add-circle-blur
/>

```html
<ImageCompareViewer
  before="..."
  after="..."
  control-color="#73c781"
  :control-shadow="false"
  add-circle
  add-circle-blur
/>
```

### LABELS

You can style these labels using **`.icv__label`** for both, and **`.icv__label-before`**, **`.icv__label-after`** for the individual labels.

<ImageCompareViewer
  before="/assets/interior-clay.jpg"
  after="/assets/interior-render.jpg"
  show-labels
  :label-options="{
    before: 'Clay',
    after: 'Final render',
    onHover: false // default
  }"
/>

```html
<ImageCompareViewer
  before="..."
  after="..."
  show-labels
  :label-options="{
    before: 'Clay',
    after: 'Final render',
    onHover: false // default
  }"
/>
```

### DISABLE SMOOTHING

Smoothing is automatically disabled on touch enabled screens.

<ImageCompareViewer before="/assets/before-2.jpg" after="/assets/after-2.jpg" :smoothing="false" />

```html
<ImageCompareViewer before="..." after="..." :smoothing="false" />
```

### INCREASE SMOOTHING

Milliseconds – a higher number means more dampening

<ImageCompareViewer before="/assets/before-4.jpg" after="/assets/after-4.jpg" :smoothing-amount="300" />

```html
<ImageCompareViewer before="..." after="..." :smoothing-amount="300" />
```

### START ON HOVER

Clicking will activate manual control.

<ImageCompareViewer
  before="/assets/before-9.jpg"
  after="/assets/after-9.jpg"
  add-circle
  add-circle-blur
  hover-start
/>

```html
<ImageCompareViewer before="..." after="..." hover-start />
```

### VERTICAL MODE

Vertical mode is mobile friendly!

<ImageCompareViewer before="/assets/before-6.jpg" after="/assets/after-6.jpg" vertical-mode style="height: 885px" />

```html
<ImageCompareViewer before="..." after="..." vertical-mode />
```

### STARTING POINT

The percentage to show of the *before* image.

<ImageCompareViewer before="/assets/before-7.jpg" after="/assets/after-7.jpg" :starting-point="75" />

```html
<ImageCompareViewer before="..." after="..." :starting-point="75" />
```

### FLUID MODE

Fluid mode enables the container to have fluid height and width, independent of each other, useful for using Image Compare Viewer in a full screen container for instance. The image is dynamically cropped using the CSS background 'cover' property.

```html
<ImageCompareViewer
  before="..."
  after="..."
  fluid-mode
  style="width: 100%; height: 66vh;"
/>
```

<ImageCompareViewer
  before="/assets/before-5.jpg"
  after="/assets/after-5.jpg"
  fluid-mode
  style="width: 100%; height: 66vh;"
/>

## Options

| props | description | type | required | default |
|:----- |:----------- |:---- |:--------:|:------- |
| container | the container viewer element | string \| HTMLElement | no | -- |
| before | the before image | string \| slot | yes | -- |
| after | the after image | string \| slot | yes | -- |
| controlColor | the controller color | string | no | #fff |
| controlShadow | add shadow to controller | bool | no | true |
| addCircle | add circle to controller | bool | no | false |
| addCircleBlur | add blur to controller circle | bool | no | true |
| showLabels | show labels | bool | no | false |
| labelOptions | the label options | object | no | { before: 'Before', after: 'After', onHover: false } |
| smoothing | if controller move smoothly, automatically disabled on touch enabled screens | bool | no | true |
| smoothingAmount | milliseconds – a higher number means more dampening | number | no | 100 |
| hoverStart | hover to move the controller on start | bool | no | false |
| verticalMode | enable vertical mode | bool | no | false |
| startingPoint | the percentage to show of the before image | number | no | 50 |
| fluidMode | enables the container to have fluid height and width | bool | no | false |

## License

[MIT](https://github.com/Mitscherlich/vue-image-compare-viewer/LICENSE)
