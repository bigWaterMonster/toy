<template>
  <Layout>
    <div v-for="n of 100" :key="n">Money</div>
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
