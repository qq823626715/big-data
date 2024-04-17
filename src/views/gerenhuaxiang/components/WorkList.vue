<!--
 * @Description: 就业去向
-->
<script setup>
import { ref } from 'vue'
import { workList } from '@/data/gerenhuaxiang'
const list = ref(workList)
</script>
<template>
  <div>
    <a-list bordered :data-source="list">
      <template #renderItem="{ item }">
        <a-list-item :class="{ 'line-through': item.status === '已失效' }">
          <span>时间：{{ item.time }}</span>
          <span>公司：{{ item.empName }}</span>
          <span>职位：{{ item.job }}</span>
          <span>结果：{{ item.status }}</span>
        </a-list-item>
      </template>
      <!-- <template #header>
        <div>Header</div>
      </template>
      <template #footer>
        <div>Footer</div>
      </template> -->
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.ant-list-item {
  color: #9FAAB4;
  font-size: 11px;
}
.line-through {
  position: relative;
}
.line-through::before {
  content: '';
  height: 2px;
  background: #9FAAB4;
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
}
</style>
