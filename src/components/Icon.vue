<template>
  <svg class="icon">
    <use :xlink:href="svgName"/>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import '../assets/icons/index'

@Component({})
export default class Icon extends Vue {
  @Prop(String) readonly name!: string
  get svgName(): string {
    return `#${ this.name }`
  }
}

</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
