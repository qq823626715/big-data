<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

const years = new Array(6).fill(0).map((__, index) => 2008 + index * 2)
const numbers = new Array(5).fill(0).map((__, index) => 20000 - index * 5000)

const option = ref({
  backgroundColor: 'transparent',
  legend: {
    show: true,
    top: 0,
    right: 0,
    itemWidth: 8,
    itemHeight: 4,
    textStyle: { fontSize: 8, color: '#fff' },
    lineStyle: { width:1 }
  },
  grid: {
    width: 330,
    height: 130,
    top: 35,
    left: 35,
  },
  xAxis: {
    type: 'category',
    data: years,
    axisLabel: { fontSize: 6, color: '#fff' },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    name: '金额',
    type: 'value',
    data: numbers,
    axisLabel: {
      fontSize: 6,
      color: '#fff',
      formatter: function (value, index) {
        if (value === '0') {
          return value
        } else {
          return value + '万'
        }
      }
    },
    axisLine: { show: true },
    splitLine: { show: false },
    nameTextStyle: { fontSize: 6, color: '#fff', align: 'center' },
    splitNumber: 4,

  },
  tooltip: { trigger: 'item', show:true },
  series: [
    {
      name: '医疗保障',
      type: 'bar',
      data: [],
      itemStyle: { color:  '#48bafd' },
      barWidth: 6,
    },{
      name: '抚恤金',
      type: 'bar',
      data: [],
      itemStyle: { color: '#45f5db' },
      barWidth: 6,
    },{
      name: '其他',
      type: 'bar',
      data: [],
      itemStyle: { color: '#2e61bd' },
      barWidth: 6,
    },{
      data: [],
      name: '发放趋势',
      type: 'line',
      showSymbol: true,
      symbol: 'emptyCircle',
      smooth: true,
      lineStyle: { width: 1, color: '#e59d50' },
      itemStyle: { color: '#e59d50' },
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  const totalData = []
  const totalData1 = []
  const totalData2 = []
  const totalData3 = []
  for (let i = 0;i < years.length;i++){
    totalData.push(Math.ceil(Math.random() * 4500 + 500))
    totalData1.push(Math.ceil(Math.random() * 4500 + 500))
    totalData2.push(Math.ceil(Math.random() * 4500 + 500))
    totalData3.push(Math.ceil(Math.random() * 4500 + 500))
  }
  chartRef.value.setOption({
    series: [
      { data: totalData },
      { data: totalData1 },
      { data: totalData2 },
      { data: totalData3 },
    ],
  })
})

const setOption = () => {
  setTimeout(() => {
    const totalData = []
    const totalData1 = []
    const totalData2 = []
    const totalData3 = []
    for (let i = 0;i < years.length;i++){
      totalData.push(Math.ceil(Math.random() * 4500 + 500))
      totalData1.push(Math.ceil(Math.random() * 4500 + 500))
      totalData2.push(Math.ceil(Math.random() * 4500 + 500))
      totalData3.push(Math.ceil(Math.random() * 4500 + 500))
    }
    chartRef.value.setOption({
      series: [
        { data: totalData },
        { data: totalData1 },
        { data: totalData2 },
        { data: totalData3 },
      ],
    })
    setOption()
  }, 5000)
}
setOption()
</script>

<template>
  <div class="chart-wrapper">
    <v-chart
      ref="chartRef"
      class="chart"
      :option="option"
      autoresize
    />
  </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
    width: 100%;
    flex: 1;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
}
</style>
