<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from './Nav.vue'

@Component({
  name: 'Layout',
  components: {Nav}
})
export default class Layout extends Vue {}

</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
