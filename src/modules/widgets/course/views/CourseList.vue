<template>
  <h1>Cursos</h1>
  {{ coursesPending }}
  <v-row no-gutters class="d-flex justify-space-around">
    <course-card
      v-for="course in courses"
      :key="course.id"
      :course="course"
    ></course-card>
  </v-row>
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
