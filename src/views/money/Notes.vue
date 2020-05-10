<template>
  <div class="notes">
    <label for="tip">
      备注
    </label>
    <input type="text" class="name" id="tip" placeholder="在这里输入备注">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Notes extends Vue {}

</script>

<style scoped lang="scss">
.notes {
  background: #f5f5f5;
  font-size: 16px;
  display: flex;
  padding-left: 16px;
  label {
    padding-right: 16px;
    line-height: 64px;
  }
  .name {
    flex-grow: 1;
    height: 64px;
    background: transparent;
    border: none;
  }
}
</style>
