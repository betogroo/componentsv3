import store from '@/store'

export default [
  {
    path: '/courses',
    name: 'Courses',
    component: () =>
      import(/* webpackChunkName: "course" */ './views/CourseList'),
    beforeEnter: () => {
      store.dispatch('home/setContextualAppBar', false)
    },
    //beforeEnter: requireAuth,
    meta: {
      title: 'Cursos',
      inNav: true
    }
  },
  {
    path: '/courses/:id',
    name: 'Course',
    component: () => import(/* webpackChunkName: "course" */ './views/Course'),
    beforeEnter: () => {
      store.dispatch('home/setContextualAppBar', true)
    },
    props: true,
    meta: {
      title: 'Curso'
    }
  },
  {
    path: '/courses/:id/lessons/:idLesson',
    name: 'Lesson',
    component: () => import(/* webpackChunkName: "course" */ './views/Lesson'),
    beforeEnter: () => {
      store.dispatch('home/setContextualAppBar', true)
    },
    props: true,
    meta: {
      title: 'Lesson',
      requireAuth: true
    }
  }
]
