<template>
  <h1>Cursos</h1>
  {{ coursesPending }}
  <div class="d-flex flex-column align-center">
    <course-card
      v-for="course in courses"
      :key="course.id"
      :course="course"
    ></course-card>
  </div>
</template>

<script>
// import { computed } from 'vue'
import CourseCard from '../components/CourseCard'
import getItems from '@/composables/getItems'

export default {
  name: 'CourseList',

  components: {
    CourseCard
  },

  setup() {
    const {
      items: courses,
      error: coursesError,
      load: loadCourses,
      isPending: coursesPending
    } = getItems()

    loadCourses('courses')

    return {
      courses,
      coursesError,
      coursesPending
    }
  }
}
</script>

<style></style>
