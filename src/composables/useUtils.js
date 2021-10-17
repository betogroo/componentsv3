import router from '@/router'

const useUtils = () => {
  const delay = (amount = 2000) => {
    console.log(`Delay de ${amount / 1000} segundos`)
    return new Promise((resolve) => setTimeout(resolve, amount))
  }

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

  const filteredRoutes = (filter) => {
    const routes = router.options.routes
    console.log(router.options.routes)
    const filteredRoutes = routes.filter(
      (item) => item.meta && item.meta[filter] === true
    )
    const data = filteredRoutes.map((item) => {
      return {
        // id: this.uuid4(),
        title: item.meta.title,
        name: item.name,
        path: item.path,
        icon: item.meta.icon || ''
      }
    })
    return data
  }

  return { breakpointCardSize, delay, filteredRoutes }
}

export default useUtils
