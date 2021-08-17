import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import beforeEach from './beforeEach'
// import afterEach from './afterEach'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(beforeEach)
// router.afterEach(afterEach)

export default router
