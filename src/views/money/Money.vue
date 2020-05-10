<template>
  <Layout>
    <div class="money-content">
      <Tag :tags="tags"/>
      <Notes />
      <Types />
      <NumberPad/>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NumberPad from './NumberPad.vue'
import Types from './Types.vue'
import Notes from './Notes.vue'
import Tag from './Tag.vue'

@Component({
  components: {NumberPad, Types, Notes, Tag}
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行']
}

</script>

<style scoped lang="scss">
.money-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
</style>
