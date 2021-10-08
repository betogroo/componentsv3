<template>
  <div class="out">
    <app-icon
      v-if="prependOuterIcon"
      class="mr-1"
      :icon="prependOuterIcon"
    ></app-icon>
    <div class="textfield">
      <app-icon
        v-if="prependIcon"
        :color="color"
        :icon="prependIcon"
      ></app-icon>
      <input
        v-bind="$attrs"
        :placeholder="placeholder"
        :value="modelValue"
        @input="(e) => $emit('update:modelValue', e.target.value)"
      />
      <app-icon
        v-if="apendIcon"
        class="ml-1"
        :color="color"
        :icon="apendIcon"
      ></app-icon>
    </div>
    <app-icon v-if="apendOuterIcon" :icon="apendOuterIcon"></app-icon>
  </div>
</template>

<script>
export default {
  name: 'AppTextField',

  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    prependIcon: {
      type: String,
      default: ''
    },
    apendIcon: {
      type: String,
      default: ''
    },
    prependOuterIcon: {
      type: String,
      default: ''
    },
    apendOuterIcon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
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

<style lang="scss" scoped>
.out {
  margin-right: 4px;
  display: flex;
  align-items: center;
  width: 100%;
}

.textfield {
  padding: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
input {
  padding: 8px;
  background-color: transparent;
  width: 100%;
  height: 32px;
  max-height: 32px;
  border-style: none;
  outline: none;
}
</style>
