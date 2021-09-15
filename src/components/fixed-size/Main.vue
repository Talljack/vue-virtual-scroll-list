<template>
  <div class="example">
    <github-corner />
    <introduction description="The size of each item is equal." />

    <div class="example-content">
      <div v-show="isShowView">
        <virtual-list class="list scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"

          :estimate-size="50"
          :item-class="'list-item-fixed'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import Code from './Code.vue'
import VirtualList from '../../../packages/index';
const TOTAL_COUNT = 10000
const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: 'dadfdf',
    id: `${index}$${Math.random().toString(16).substr(9)}`,
  })
}
export default {
  name: 'fix-size',
  components: {
    codeblock: Code,
    VirtualList
  },
  data () {
    return {
      total: TOTAL_COUNT.toLocaleString(),
      items: DataItems,
      itemComponent: Item,
      isShowView: true
    }
  },
}
</script>

<style lang="less">
.list {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  .list-item-fixed {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>