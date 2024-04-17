<!--
 * @Description: 技能成长
-->
<script setup>
import { ref } from 'vue'
import { skillList } from '@/data/gerenhuaxiang'
const list = ref(skillList)
console.log(list)
</script>
<template>
  <div>
    <a-timeline mode="alternate">
      <a-timeline-item v-for="(item, index) in list" :key="index">{{ item.time }} {{ item.name}}</a-timeline-item>
    </a-timeline>
  </div>
</template>

<style lang="scss" scoped>
.ant-timeline {
  margin-top: 160px;
  color: #9FAAB4;
  font-size: 11px;
  ::v-deep .ant-timeline-item-tail{
    border-color: #9FAAB4;
  }
}
</style>
