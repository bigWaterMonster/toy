<template>
  <Layout>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new-tag">
      </div>
    </div>
    <div class="notes">
      <label for="tip">
        <span>备注</span>
      </label>
      <input type="text" name="" id="tip">
    </div>
    <ul class="types">
      <li>支出</li>
      <li>收入</li>
    </ul>
    <div class="number-pad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Money extends Vue {}

</script>

<style scoped lang="scss">

</style>
