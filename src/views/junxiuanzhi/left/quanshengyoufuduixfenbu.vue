<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'
import { CountTo } from 'vue3-count-to'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港'
const citys = cityStr.split('、')
const numbers = citys.map(() => Math.random() * 10000 + 5000)

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 700,
    height: 280,
    top: 10,
    left: 40,
  },
  xAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLabel: { fontSize: 8, color: '#fff' },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    type: 'category',
    data: citys,
    splitLine: { show: false },
    axisTick: { show: false },
    axisLabel: { fontSize: 8, color: '#fff' },
  },
  series: [
    {
      name: 'city',
      type: 'bar',
      barWidth: 10,
      data: numbers,
      itemStyle: { color: '#36b2f8' },
      stack: 'total',
    },{
      name: 'city',
      type: 'bar',
      barWidth: 10,
      data: numbers,
      itemStyle: { color: '#72f2ec' },
      stack: 'total',
    },{
      name: 'city',
      type: 'bar',
      barWidth: 10,
      itemStyle: { color: '#fffa5f' },
      stack: 'total',
    },
  ]
})

const chartRef = ref()
setTimeout(() => {
  const numbers = citys.map(() => Math.random() * 3000 + 1000)
  const numbers1 = citys.map(() => Math.random() * 500 + 300)
  const numbers2 = citys.map(() => Math.random() * 500 + 300)
  chartRef.value.setOption({
    series: [
      { data: numbers },
      { data: numbers1 },
      { data: numbers2 },
    ]
  })
})

const setOption = () => {
  setTimeout(() => {
    const numbers = citys.map(() => Math.random() * 3000 + 1000)
    const numbers1 = citys.map(() => Math.random() * 500 + 300)
    const numbers2 = citys.map(() => Math.random() * 500 + 300)
    chartRef.value.setOption({
      series: [
        { data: numbers },
        { data: numbers1 },
        { data: numbers2 },
      ]
    })
  }, 5000)
}
setOption()

const startVal = ref(0)
const endVal = { value: 20000 }
const durantion = 800
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value
    endVal.value = Math.random() * 25000 + 5000
    test()
  }, 4000)
}
test()
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
  <div class="message-rank">
    <div class="title">全省军休安置人数</div>
    <div class="number">
      <CountTo
        :startVal="startVal.value"
        :endVal="endVal.value"
        :durantion="durantion"
      ></CountTo>
      <span style="font-size: 14px;">人</span>
    </div>
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
.message-rank {
    position: absolute;
    width: 235px;
    height: 32px;
    margin-left: 530px;
    margin-top: 0px;
    display: flex;

    &.next {
        margin-top: 90px;
    }

    > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        gap: 4px;
    }

    .title {
        width: 130px;
        text-align: left;
        font-size: 14px;
        margin: 0 4%;
        align-self: flex-start;
    }
    .number {
        width: 50%;
        font-size: 24px;
        background: #2b74a4;
        height: 100%;
        border-radius: 4px;
        color: white;
        gap: 4px;
    }
    &.tooltip {
        width: 180px;
        height: 86px;
        margin-left: 540px;
        margin-top: 180px;
        background: #2e7fb4;
        border-radius: 4px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
