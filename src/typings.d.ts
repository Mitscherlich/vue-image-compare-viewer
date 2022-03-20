declare module 'image-compare-viewer' {
  export interface LabelOptions {
    before?: string
    after?: string
    onHover?: boolean
  }

  export interface ImageCompareOptions {
    // Mount options
    container?: string | HTMLElement

    // UI Theme Defaults
    controlColor?: string
    controlShadow?: boolean
    addCircle?: boolean
    addCircleBlur?: boolean

    // Label Defaults
    showLabels?: boolean
    labelOptions?: LabelOptions

    // Smoothing
    smoothing?: boolean
    smoothingAmount?: number

    // Other options
    hoverStart?: boolean
    verticalMode?: boolean
    startingPoint?: number
    fluidMode?: boolean
  }

  export default class ImageCompare {
    constructor(container: HTMLElement, options?: ImageCompareOptions)

    mount(): void
  }
}
