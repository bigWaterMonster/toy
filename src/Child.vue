<template>
  <div>
    {{name}}
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "@vue/composition-api";

const Child = defineComponent({
  name: 'child',
  props: {
    name: {
      type: String
    }
  },
  setup(props, context) {
    console.log(context)
    watchEffect(() => {
      console.log('name is ' + props.name)
      // context.emit('changeHead')
    })
  }
})

export default Child
</script>

