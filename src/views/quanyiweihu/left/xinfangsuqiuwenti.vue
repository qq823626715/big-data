<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { initBubbleChart } from '../../jiuyechuanye/right/utils'
const arrays =[
  { label: '待遇不公', number: '55', axis: [-170,-20] },
  { label: '租户条件差', number: '60', axis: [-115,-35] },
  { label: '待遇低', number: '55', axis: [-90, 15] },
  { label: '资格认定不通过', number: '90', axis: [-30,-20] },
  { label: '失业', number: '55', axis: [40,-40] },
  { label: '无医保', number: '55', axis: [40, 15] },
  { label: '优抚标准', number: '40', axis: [80, -15] },
  { label: '身份认证', number: '45', axis: [120, 10] },
  { label: '安置政策不落实', number: '60', axis: [130, -40] },
  { label: '特俗困难', number: '40', axis: [170, -10] },
];
arrays.forEach((item) => {
  item.value = Number(item.number) * 2;
})
const options = initBubbleChart(
  arrays,
  ['label', 'number'],
  arrays.map(a => a.axis),
)

const chartRef = ref();
setTimeout(() => {
  chartRef.value.setOption(options)
})
</script>
<template>
    <div class="chart-wrapper">
      <v-chart
        ref="chartRef"
        class="chart"
        :option="options"
        autoresize
      />
    </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100%;
  flex: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
