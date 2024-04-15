<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { initBubbleChart } from '../../jiuyechuanye/right/utils'
const arrays =[
  { label: '公务员', number: '55', axis: [-170,-20] },
  { label: '政党机关', number: '60', axis: [-130,10] },
  { label: '参公单位', number: '55', axis: [-90, -30] },
  { label: '国有控股', number: '50', axis: [-70,18] },
  { label: '省编办', number: '90', axis: [-20,-20] },
  { label: '国企', number: '55', axis: [40,-40] },
  { label: '省事业单位', number: '55', axis: [40, 10] },
  { label: '机关', number: '50', axis: [80, -15] },
  { label: '省发改', number: '50', axis: [120, -40] },
  { label: '民营企业', number: '60', axis: [130, 5] },
  { label: '央企', number: '40', axis: [170, -30] },
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
