<template>
  <h1>{{ `Aula ${lesson.title} do curso ${course.title}` }}</h1>

  <app-btn variant="text" @click="$router.back">Voltar</app-btn>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Class',

  props: {
    idClass: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const store = useStore()
    const course = computed(() => {
      return store.state.course.courses.find((item) => item.id === props.id)
    })
    const lesson = computed(() => {
      return course.value.classes.find((item) => item.id === props.idClass)
    })

    return { course, lesson }
  }
}
</script>

<style></style>
