<template>
  <course-details :course="course"></course-details>
  <app-btn variant="text" @click="router.back">Voltar</app-btn>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import CourseDetails from '../components/CourseDetails.vue'
export default {
  name: 'Course',

  components: {
    CourseDetails
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const router = useRouter()

    const store = useStore()
    const course = computed(() => {
      const courses = store.state.course.courses
      const course = courses.find((item) => item.id === props.id)
      const count = course.lessons.length
      return { ...course, count }
    })

    return { router, course }
  }
}
</script>

<style></style>
