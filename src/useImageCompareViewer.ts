import { ref } from 'vue'
import type { ImageCompareOptions } from 'image-compare-viewer'
import ImageCompare from 'image-compare-viewer'
import 'image-compare-viewer/dist/image-compare-viewer.min.css'

import { useEffect } from './composable'
import { query } from './utils'

export const useImageCompareViewer = (options: ImageCompareOptions = {}) => {
  const containerRef = ref<HTMLElement>()
  let imageCompare: ImageCompare | null = null

  useEffect(() => {
    const container = containerRef.value ?? query(options.container!)
    if (container) {
      imageCompare = new ImageCompare(container, options)
      imageCompare.mount()
    }
  }, [containerRef])

  return containerRef
}
