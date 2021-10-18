<template>
  <h1>Curso {{ course.title }} - {{ course.count }} aulas</h1>
  <p>{{ course.description }}</p>
  <ul>
    <router-link
      v-for="item in course.lessons"
      :key="item.id"
      :to="{
        name: 'Lesson',
        params: {
          id: course.id,
          idLesson: item.id
        }
      }"
    >
      <li>{{ item.title }}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'CourseDetails',

  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
