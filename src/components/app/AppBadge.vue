<template>
  <v-badge
    tile
    :offset-x="content > 10 ? '6' : '4'"
    offset-y="1"
    :modelValue="active"
    :content="content"
    v-bind="($attrs, badgeDefaults)"
  >
    <slot />
  </v-badge>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'AppBadge',

  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props) {
    const active = computed(() => {
      if (
        props.content === null ||
        props.content === false ||
        props.content === undefined ||
        props.content === ''
      ) {
        return false
      } else {
        return true
      }
    })

    const badgeDefaults = computed(() => ({
      color: 'primary',
      max: 9
    }))

    return { badgeDefaults, active }
  }
}
</script>
