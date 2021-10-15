export default [
  {
    path: '/courses',
    name: 'Courses',
    component: () =>
      import(/* webpackChunkName: "course" */ './views/HomeCourses'),
    //beforeEnter: requireAuth,
    meta: {
      title: 'Cursos'
    }
  },
  {
    path: '/courses/:id',
    name: 'Course',
    component: () =>
      import(/* webpackChunkName: "course" */ './views/DetailsCourse'),
    props: true,
    meta: {
      title: 'Curso'
    }
  },
  {
    path: '/courses/:id/classes/:idClass',
    name: 'Class',
    component: () => import(/* webpackChunkName: "course" */ './views/Class'),
    props: true,
    meta: {
      title: 'Class'
    }
  }
]
