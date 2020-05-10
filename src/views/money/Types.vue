<template>
  <ul class="types">
    <li class="active">支出</li>
    <li >收入</li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Types extends Vue {}

</script>

<style scoped lang="scss">
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    line-height: 64px;
    height: 64px;
    position: relative;
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
}
</style>
