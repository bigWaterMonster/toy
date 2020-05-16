<template>
  <div id="app">
    <!-- <router-view /> -->
    <Child :name="name" @changeHead="changeHead"/>
    <button @click="changeName">换头</button>
    {{ count }}
    <button @click="changeCount">计数</button>

  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "@vue/composition-api";
import Child from './Child'

const App = defineComponent({
  name: 'app',
  components: {
    Child
  },
  setup() {
    const name = ref('陈昊') // 浅观察
    const count = reactive({ count: 0 }) // 深观察
    const newCount = reactive({name})
    const nameWrapper = computed(() => name.value)
    function changeName() {
      console.log('开始换头')
      name.value = '超人'
    }
    function changeHead() {
      console.log('头换完了')
    }
    function changeCount() {
      count.count += 1
    }
    return { changeName, name, count, changeHead, changeCount }
  }
})



export default App
</script>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

a {
  text-decoration: none;
  color: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
}
button,
input {
  font: inherit;
}
</style>
