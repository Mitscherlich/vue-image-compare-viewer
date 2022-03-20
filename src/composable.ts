import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, watch } from 'vue'
import type { noop } from './utils'

export type Destroyer = () => void
export type EffectFn = () => Destroyer | void

export const useEffect = (fn: EffectFn, deps: Ref<any>[] = []) => {
  let cb: typeof noop

  const effect = () => {
    const response = fn()
    if (typeof response === 'function')
      cb = response
  }

  const stopWatch = watch(deps, effect)

  const stop = () => {
    stopWatch()
    cb?.()
  }

  onMounted(effect)

  onBeforeUnmount(stop)
}
