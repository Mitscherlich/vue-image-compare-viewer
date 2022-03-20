export const noop = () => {
  /* noop */
}

export const query = (selector: string | HTMLElement, context = document): HTMLElement | null => {
  if (typeof selector !== 'string')
    return selector

  return context.querySelector(selector)
}
