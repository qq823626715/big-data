<script setup>
import { ref } from 'vue'
import PieChartBg from './PieChartBg.vue'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons-vue'
import { CountTo } from 'vue3-count-to'
const startVal = ref(0);
const endVal = { value: 4567 };
const startValTwo = ref(0);
const endValTwo = { value: 2222 };
const durantion = 3000;
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value;
    endVal.value = Math.random() * 3000 + 1000;
    startValTwo.value = endVal.value;
    endValTwo.value = Math.random() * 3000 + 1000;
    test();
  }, 9000);
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
          <span style="font-size: 30px;">人</span>
        </div>
      </div>
      <div class="text">军休人员</div>
    </div>
    <div class="chart-wrapper">
      <PieChartBg />
      <div class="icon qian">
        <UserAddOutlined />
        <div>
          <CountTo :startVal="startValTwo.value" :endVal="endValTwo.value" :durantion="durantion"></CountTo>
          <span style="font-size: 30px;">人</span>
        </div>
      </div>
      <div class="text">新增军休人员</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
  width: 260px;
  height: 260px;
  margin: 115px auto 110px;
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
    font-size: 48px;
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
    color: #23F0FF;
  }
  > .qian {
    color: #FF8A37;
  }
  .text {
    position: absolute;
    font-size: 28px;
    top: 290px;
    color: #E0E0E0;
  }
}
</style>
