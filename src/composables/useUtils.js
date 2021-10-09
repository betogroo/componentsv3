const useUtils = () => {
  const breakpointCardSize = (data, width = {}) => {
    let val = ''
    const xs = width.xs || '90vw'
    const sm = width.sm || 540
    const md = width.md || 400
    const lg = width.lg || 400
    const xl = width.xl || 400
    const xxl = width.xxl || 400
    switch (data) {
      case 'xs':
        val = xs
        break
      case 'sm':
        val = sm
        break
      case 'md':
        val = md
        break
      case 'lg':
        val = lg
        break
      case 'xl':
        val = xl
        break
      case 'xxl':
        val = xxl
    }
    return val
  }

  return { breakpointCardSize }
}

export default useUtils
