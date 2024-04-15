<template>
  <div class="chart-wrapper">
    <v-chart ref="chartRef" class="chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'

const xData = []
const totalData = []
for (let i = 0;i < 10;i++){
  xData.push(2011 + i)
  totalData.push(Math.ceil(Math.random() * 80 + 20))
}

const chartRef = ref()
const option = ref({
  grid: {
    top: 80,
    width: 650,
    left: 100,
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b}: {c}人',
    textStyle: { fontSize: 24 }
  },
  color: ['#00FBF4'],
  legend: {
    show: false,
  },
  xAxis: {
    type: 'category',
    data: xData,
    axisLabel: {
      fontSize: 24,
      color: '#fff',
      margin: 8
    },
    splitLine: { show: false, },
  },
  yAxis: {
    name: '数量',
    type: 'value',
    nameTextStyle: {
      fontSize: 24,
      color: '#ffff',
      padding: [15, 0],
    },
    axisLabel: {
      fontSize: 24,
      color: '#fff',
    },
    splitLine: {
      show: false,
      lineStyle: {
        width:1
      }
    },
  },
  series: [
    {
      data: totalData,
      type: 'line',
      smooth: true,
      lineStyle: { width: 5, color: '#3d75a3' },
      showSymbol: false,
    },
  ],
})

setTimeout(() => {
    chartRef.value.setOption(option)
  })
const setOption = () => {
  setTimeout(() => {
    const totalData = []
    for (let i = 0;i < 10;i++){
      totalData.push(Math.ceil(Math.random() * 80 + 20))
    }
    chartRef.value.setOption({
      series: [{ data: totalData }]
    });
    setOption();
  }, 10000)
}
setOption();
</script>

<style lang="scss" scoped>
.chart-wrapper {
  margin-top: 10px;
  height: 500px;
}
</style>
