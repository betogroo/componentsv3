import store from '@/store'

export default [
  {
    path: '/courses',
    name: 'Courses',
    component: () =>
      import(/* webpackChunkName: "course" */ './views/HomeCourses'),
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
    component: () =>
      import(/* webpackChunkName: "course" */ './views/DetailsCourse'),
    beforeEnter: () => {
      store.dispatch('home/setContextualAppBar', true)
    },
    props: true,
    meta: {
      title: 'Curso'
    }
  },
  {
    path: '/courses/:id/classes/:idClass',
    name: 'Class',
    component: () => import(/* webpackChunkName: "course" */ './views/Class'),
    beforeEnter: () => {
      store.dispatch('home/setContextualAppBar', true)
    },
    props: true,
    meta: {
      title: 'Class'
    }
  }
]
