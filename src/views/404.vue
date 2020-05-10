<template>
  <div>
    页面不存在
    <router-link to="/money">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NoMatch extends Vue {}

</script>

<style scoped lang="scss">

</style>
