<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

// const years = new Array(5).fill(0).map((__, index) => 2009 + index)
const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港'
const citys = cityStr.split('、')
const numbers = new Array(citys.length).fill(0).map((__, index) => 20000 - index * 5000)

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
    height: 100,
    top: 25,
    left: 35,
  },
  xAxis: {
    type: 'category',
    data: citys,
    axisLabel: { fontSize: 6, color: '#fff' },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    name: '数量',
    type: 'value',
    data: numbers,
    axisLabel: {
      fontSize: 6,
      color: '#fff',
      // formatter: function (value) {
      //   if (value === '0') {
      //     return value
      //   } else {
      //     const str = Math.floor(value / 10000)
      //     return str
      //   }
      // }
    },
    axisLine: { show: true },
    splitLine: { show: false },
    nameTextStyle: { fontSize: 6, color: '#fff', align: 'center' },
    splitNumber: 4,

  },
  tooltip: { trigger: 'item', show:true },
  series: [
    {
      name: '机构数量',
      type: 'bar',
      data: [],
      itemStyle: { color:  '#67daff' },
      barWidth: 14,
    },
    // {
    //   name: '残辅器具更新',
    //   type: 'bar',
    //   data: [],
    //   itemStyle: { color: '#e59d50' },
    //   barWidth: 8,
    // },
    {
      name: '机构数量趋势变化',
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
  for (let i = 0;i < citys.length;i++){
    totalData.push(Math.ceil(Math.random() * 20 + 10))
    totalData1.push(Math.ceil(Math.random() * 20 + 10))
    totalData2.push(Math.ceil(Math.random() * 20 + 10))
  }
  chartRef.value.setOption({
    series: [
      { data: totalData },
      // { data: totalData1 },
      { data: totalData2 },
    ],
  })
})

const setOption = () => {
  setTimeout(() => {
    const totalData = []
    const totalData1 = []
    const totalData2 = []
    for (let i = 0;i < citys.length;i++){
      totalData.push(Math.ceil(Math.random() * 20 + 10))
      totalData1.push(Math.ceil(Math.random() * 20 + 10))
      totalData2.push(Math.ceil(Math.random() * 20 + 10))
    }
    chartRef.value.setOption({
      series: [
        { data: totalData },
        // { data: totalData1 },
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
