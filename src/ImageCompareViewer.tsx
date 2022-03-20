// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Fragment, defineComponent, h, toRefs } from 'vue'
import PropTypes from 'vue-types'
import omit from 'lodash/omit'
import type { ImageCompareOptions } from 'image-compare-viewer'
import { useImageCompareViewer } from './useImageCompareViewer'

export interface ImageCompareViewerProps extends ImageCompareOptions {
  before?: string
  after?: string
}

export const ImageCompareViewer = defineComponent<ImageCompareViewerProps>((props, ctx) => {
  const options = omit(props, ['before', 'after'])
  const {
    before,
    after,
  } = toRefs(props)
  const { slots } = ctx

  const containerRef = useImageCompareViewer(options)

  const children = slots.default?.()

  const Images = () => <>
    {slots.before ? slots.before() : typeof before?.value === 'string' ? <img src={before?.value} /> : before?.value}
    {slots.after ? slots.after() : typeof after?.value === 'string' ? <img src={after?.value} /> : after?.value}
  </>

  return () => (
    <div ref={containerRef}>
      {children}
      {Images()}
    </div>
  )
})

ImageCompareViewer.props = {
  before: PropTypes.any,
  after: PropTypes.any,
  container: PropTypes.any,
  // UI Theme Defaults
  controlColor: PropTypes.string.def('#fff'),
  controlShadow: PropTypes.bool.def(true),
  addCircle: PropTypes.bool.def(false),
  addCircleBlur: PropTypes.bool.def(true),
  // Label Defaults
  showLabels: PropTypes.bool.def(false),
  labelOptions: PropTypes.object.def({
    before: 'Before',
    after: 'After',
    onHover: false,
  }),
  // Smoothing
  smoothing: PropTypes.bool.def(true),
  smoothingAmount: PropTypes.number.def(100),
  // Other options
  hoverStart: PropTypes.bool.def(false),
  verticalMode: PropTypes.bool.def(false),
  startingPoint: PropTypes.number.def(50),
  fluidMode: PropTypes.bool.def(false),
}
ImageCompareViewer.name = 'ImageCompareViewer'
