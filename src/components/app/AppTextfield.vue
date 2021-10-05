<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="modelValue"
    @input="(e) => $emit('update:modelValue', e.target.value)"
  />
</template>

<script>
export default {
  name: 'AppTextField',

  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }

  /* setup() {
    const textfieldDefaults = computed(() => ({
      type: 'password'
    }))

    return { textfieldDefaults }
  } */
}
</script>

<style></style>
