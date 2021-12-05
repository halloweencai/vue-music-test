<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from './use-scroll'
import { ref } from 'vue'

export default {
  name: 'Srcoll',
  setup() {
    const rootRef = ref(null)
    useScroll()

    return {
      rootRef
    }
  }
}
</script>
