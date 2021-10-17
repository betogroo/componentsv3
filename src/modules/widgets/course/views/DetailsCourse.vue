<template>
  <h1>Curso {{ course.title }} - {{ countClasses }} aulas</h1>
  <p>{{ course.description }}</p>
  <ul>
    <router-link
      v-for="item in course.classes"
      :key="item.id"
      :to="{
        name: 'Class',
        params: {
          id: course.id,
          idClass: item.id
        }
      }"
    >
      <li>{{ item.title }}</li>
    </router-link>
  </ul>
  <app-btn variant="text" @click="router.back">Voltar</app-btn>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'DetailsCourse',

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
      return courses.find((item) => item.id === props.id)
    })
    const countClasses = computed(() => {
      return course.value.classes.length
    })

    return { router, course, countClasses }
  }
}
</script>

<style></style>
