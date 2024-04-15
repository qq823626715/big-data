<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

const years = new Array(5).fill(0).map((__, index) => 2009 + index)
const numbers = new Array(5).fill(0).map((__, index) => 20000 - index * 5000)

const option = ref({
  backgroundColor: 'transparent',
  legend: {
    show: true,
    top: -5,
    right: 0,
    itemWidth: 6,
    itemHeight: 4,
    textStyle: { fontSize: 8, color: '#fff' },
    lineStyle: { width:1 }
  },
  grid: {
    width: 330,
    height: 57,
    top: 25,
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
          const str = Math.floor(value / 10000)
          return str + 'w'
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
      name: '残辅器具新增',
      type: 'bar',
      data: [],
      itemStyle: { color:  '#67daff' },
      barWidth: 16,
    },{
      name: '残辅器具更新',
      type: 'bar',
      data: [],
      itemStyle: { color: '#e59d50' },
      barWidth: 16,
    },
    {
      data: [],
      type: 'line',
      showSymbol: true,
      symbol: 'circle',
      lineStyle: { width: 1, color: '#76fc7f' },
      itemStyle: { color: '#76fc7f' },
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  const totalData = []
  const totalData1 = []
  const totalData2 = []
  for (let i = 0;i < 5;i++){
    totalData.push(Math.ceil(Math.random() * 35000 + 5000))
    totalData1.push(Math.ceil(Math.random() * 35000 + 5000))
    totalData2.push(Math.ceil(Math.random() * 35000 + 5000))
  }
  chartRef.value.setOption({
    series: [
      { data: totalData },
      { data: totalData1 },
      { data: totalData2 },
    ],
  })
})

const setOption = () => {
  setTimeout(() => {
    const totalData = []
    const totalData1 = []
    const totalData2 = []
    for (let i = 0;i < 5;i++){
      totalData.push(Math.ceil(Math.random() * 35000 + 5000))
      totalData1.push(Math.ceil(Math.random() * 35000 + 5000))
      totalData2.push(Math.ceil(Math.random() * 35000 + 5000))
    }
    chartRef.value.setOption({
      series: [
        { data: totalData },
        { data: totalData1 },
        { data: totalData2 },
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
