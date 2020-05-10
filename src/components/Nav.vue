<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="active">
      <Icon name="money"/>
      <p>记账</p>
    </router-link>
    <router-link to="/labels" class="item" active-class="active">
      <Icon name="tag"/>
      <p>标签</p>
    </router-link>
    <router-link to="/statistics" class="item" active-class="active">
      <Icon name="statistics"/>
      <p>统计</p>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Nav extends Vue {}

</script>

<style scoped lang="scss">
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  > .item {
    font-weight: bold;
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0 ;
    font-size: 12px;
    .icon {
      width: 22px;
      height: 22px;
    }
  }
  .active {
    color: red;
  }
}
</style>
