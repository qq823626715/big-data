<script setup>
import { ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { CountTo } from 'vue3-count-to'
import PieChartBg from './PieChartBg.vue'

const startVal = ref(0)
const endVal = { value: 20000 }
const startValTwo = ref(0)
const endValTwo = { value: 3000 }
const durantion = 3000
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value
    endVal.value = Math.random() * 20000 + 5000
    startValTwo.value = endVal.value
    endValTwo.value = Math.random() * 3000 + 1000
    test()
  }, 7000)
}
test()
</script>

<template>
  <div class="contain">
    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon ren">
        <UserOutlined />
        <div style="margin-top: 10px;">
          <CountTo :startVal="startVal.value" :endVal="25365" :durantion="durantion"></CountTo>
          <span>人</span>
        </div>
      </div>
      <div class="text">志愿者数</div>
    </div>
    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon qian">
        <UserOutlined />
        <div style="margin-top: 10px;">
          <CountTo :startVal="startValTwo.value" :endVal="3423" :durantion="durantion"></CountTo>
          <span>次</span>
        </div>
      </div>
      <div class="text">活动总数</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.chart-wrapper {
  width: 120px;
  height: 120px;
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > .icon {
    flex: 1;
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  > .ren {
    color: #FF8A37;
  }
  > .qian {
    color: #23F0FF;
  }
  .text {
    position: absolute;
    color: #E0E0E0;
    font-size: 12px;
    top: 120px;
    padding: 6px 0;
  }
}
</style>
