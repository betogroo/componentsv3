import router from '@/router/'
// import { v4 as uuid4 } from 'uuid'

const routes = router.options.routes
class Utils {
  breakpointSize(data, width = {}) {
    let val = ''
    const xs = width.xs || '90vw'
    const sm = width.sm || 400
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

  useRoute() {
    return router.app._route
  }
  /* uuid4() {
    return uuid4()
  } */

  delay(amount = 2000) {
    return new Promise((resolve) => setTimeout(resolve, amount))
  }

  filteredRoutes(filter) {
    const filteredRoutes = routes.filter(
      (item) => item.meta && item.meta[filter] === true
    )
    return filteredRoutes
  }
  randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  randomBoolean() {
    return this.randomInt(1, 10) % 2 === 0
  }

  getIndex(data, id) {
    const index = data.findIndex((item) => item.id === id)
    return index
  }

  getOptions(options, key) {
    const opt = options
      .split(key)
      .map((item) => {
        return {
          type: item
        }
      })
      .reduce((obj, item) => {
        return {
          ...obj,
          [item['type']]: true
        }
      }, {})

    return opt
  }
}
export default new Utils()
