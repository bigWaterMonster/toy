<template>
  <ul class="types">
    <li
      :class="{active: type === oneType.type }"
      v-for="oneType of types"
      :key="oneType.type"
      @click="selectType(oneType.type)"
    >{{ oneType.label }}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
})
export default class Types extends Vue {
  @Prop(String) defaultType: string | undefined
  types = [{ type: '-', label: '支出' }, { type: '+', label: '收入' }]
  type = '-'
  created() {
    if (this.defaultType) {
      this.type = this.defaultType
    }
  }
  selectType(type: string): void {
    if (type !== '-' && type !== '+') {
      throw Error('type is known')
    }
    this.type = type
  }
}

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
