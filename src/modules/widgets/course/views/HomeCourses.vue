<template>
  <h1>Cursos</h1>
  <ul>
    <router-link
      v-for="item in courses"
      :key="item.id"
      :to="{ name: 'Course', params: { id: item.id } }"
    >
      <li>{{ item.title }}</li>
    </router-link>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeCourses',

  setup() {
    const store = useStore()

    const courses = computed(() => {
      return store.state.course.courses
    })

    return { courses }
  }
}
</script>

<style></style>
