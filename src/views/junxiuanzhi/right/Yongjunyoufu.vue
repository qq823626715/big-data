<!--
 * @Description:
-->
<script setup>
import { ref } from 'vue'
import PieChartBg from './PieChartBg.vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { CountTo } from 'vue3-count-to'
const startVal = ref(0)
const endVal = { value: 5000 }
const startValTwo = ref(0)
const endValTwo = { value: 3000 }
const startValThree = ref(0)
const endValThree = { value: 200 }
const durantion = 3000
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value
    endVal.value = Math.random() * 3000 + 1000
    startValTwo.value = endValTwo.value
    endValTwo.value = Math.random() * 3000 + 1000
    startValThree.value = endValThree.value
    endValThree.value = Math.random() * 100 + 100
    test()
  }, 7000)
}
test()
</script>

<template>
  <div style="display: flex;">
    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon ren">
        <UserOutlined />
        <div>
          <CountTo :startVal="startVal.value" :endVal="endVal.value" :durantion="durantion"></CountTo>
          <span style="font-size: 16px;">人</span>
        </div>
      </div>
      <div class="text">先进军休干部</div>
    </div>
    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon ren">
        <UserOutlined />
        <div>
          <CountTo :startVal="startValThree.value" :endVal="endValThree.value" :durantion="durantion"></CountTo>
          <span style="font-size: 16px;">所</span>
        </div>
      </div>
      <div class="text">先进军休工作单位</div>
    </div>

    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon ren">
        <UserOutlined />
        <div>
          <CountTo :startVal="startValTwo.value" :endVal="endValTwo.value" :durantion="durantion"></CountTo>
          <span style="font-size: 16px;">人</span>
        </div>
      </div>
      <div class="text">先进军休工作个人</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100px;
  height: 100px;
  margin: 20px auto 0;
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 26px;
  color: white;
  > .icon {
    flex: 1;
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -6px;
    > div {
      margin-top: 12px;
    }
  }
  > .ren {
    color: #FF8A37;
  }
  > .qian {
    color: #23F0FF;
  }
  .text {
    position: absolute;
    font-size: 12px;
    top: 108px;
  }
}
</style>
