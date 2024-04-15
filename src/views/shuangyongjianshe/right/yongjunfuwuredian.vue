<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { initBubbleChart } from './utils.js'
const str = '出行、医疗、就业、培训、住房、文旅、休闲、其他'
const array = str.split('、')
const arrayNumbers = ['20','30','25','20','40','25','30','20']
arrayNumbers.forEach((__,index) => {
  arrayNumbers[index] = Number(arrayNumbers[index]) * 1.4
})
const axis = [
  [-150,-20],
  [-90,-30],
  [-90, 34],
  [-37,45],
  [-12,-20],
  [70,-40],
  [60, 25],
  [120, 5]
]
const data = array.map((key, index) => ({
  label: key,
  amount: arrayNumbers[index],
}))
const options = initBubbleChart(data, ['label', 'amount'], axis)

const chartRef = ref()
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
