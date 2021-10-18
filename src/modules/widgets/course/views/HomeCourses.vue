<template>
  <h1>Cursos</h1>
  <div class="d-flex flex-column align-center">
    <course-card
      v-for="course in courses"
      :key="course.id"
      :course="course"
    ></course-card>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CourseCard from '../components/CourseCard'

export default {
  name: 'HomeCourses',

  components: {
    CourseCard
  },

  setup() {
    const store = useStore()

    const courses = computed(() => {
      return store.state.course.courses
    })

    console.log(courses)

    return { courses }
  }
}
</script>

<style></style>
