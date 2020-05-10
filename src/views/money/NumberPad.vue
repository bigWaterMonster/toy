<template>
  <div class="number-pad">
    <div class="output">100</div>
    <div class="buttons">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">删除</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">清空</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" class="ok">OK</button>
      <button type="button" class="zero">0</button>
      <button type="button">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NumberPad extends Vue {}

</script>

<style scoped lang="scss">
@import '~@/assets/style/helper.scss';

.number-pad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out(black, .6);
  }
  .buttons {
    @extend %clearfix;
    > button {
      border: none;
      width: 25%;
      height: 64px;
      float: left;
      &.ok {
        height: 64*2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
      }
      &:nth-child(14){
        background: darken($bg, 20%);
      }
      &:nth-child(12) {
        background: darken($bg, 24%);
      }
    }
  }
}
</style>
