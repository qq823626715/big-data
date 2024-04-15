<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { initBubbleChart } from '../../jiuyechuanye/right/utils'
const arrays =[
  { label: '银行', number: '55', axis: [-170,-20] },
  { label: '公交', number: '60', axis: [-115,-35] },
  { label: '运营商', number: '55', axis: [-90, 15] },
  { label: '酒店', number: '90', axis: [-30,-20] },
  { label: '饭店', number: '55', axis: [35,-35] },
  { label: '休闲', number: '55', axis: [40, 15] },
  { label: '景区', number: '40', axis: [80, -15] },
  { label: '律所', number: '45', axis: [120, 10] },
  { label: '中间', number: '60', axis: [130, -35] },
  { label: '其他', number: '40', axis: [170, -10] },
];
arrays.forEach((item) => {
  item.number = Number(item.number) * 0.7;
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
