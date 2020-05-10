<template>
  <div class="tags">
    <ul class="current">
      <li v-for="(tag,index) of tags" :key="index">{{tag}}</li>
    </ul>
    <div class="new-tag">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Tag extends Vue {
  @Prop(Array)readonly tags!: string[]
}

</script>

<style scoped lang="scss">
.tags {
  flex-grow: 1;
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > .current {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-right: -12px;
    align-content: flex-start;
    >li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      line-height: $h;
    }
  }
  > .new-tag {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>
