<template>
  <app-card
    class="pa-2"
    width="300"
    height="200"
    @click="$router.push({ name: 'Course', params: { id: course.id } })"
  >
    <v-card-title>{{ course.title }}</v-card-title>
    <p class="text-justify text-body-2">
      {{ course.description.substring(0, 150) }}. ..
    </p>
    <v-divider></v-divider>
    <div class="mt-2">Total de aulas: {{ course.lessons.length }}</div>
  </app-card>
</template>

<script>
export default {
  name: 'CourseCard',

  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
