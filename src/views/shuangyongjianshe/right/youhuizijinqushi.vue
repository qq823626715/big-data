<!--
 * @Description:
-->
<script setup>
import { ref, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const months = new Array(12).fill(0).map((__, index) => (1 + index))
// const numbers = new Array(5).fill(0).map((__, index) =>  - index * 10)
const datas = months.map(() => Math.ceil(Math.random() * 2000 + 1000))
const datasLine = months.map(() => Math.ceil(Math.random() * 2000 + 1000))

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 230,
    height: 110,
    top: 13,
    left: 35
  },
  xAxis: {
    name: '月',
    type: 'category',
    data: months,
    axisLabel: {
      fontSize: 8
    },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    type: 'value',
    // data: numbers,
    axisLabel: {
      show:true,
      fontSize: 8
    },
    axisLine: { show: true },
    splitLine: { show: false },
    splitNumber: 4,
  },
  tooltip: {
    trigger: 'item',
    show:true,
  },
  series: [
    {
      name: '金额',
      type: 'bar',
      data: datas,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: '#0295e9',
          },
          {
            offset: 1,
            color: '#4bb9f6',
          },
        ])
      },
      barWidth: 14,
      barGap: 6,
    },
    {
      name: '趋势率',
      data: datasLine,
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 1,
        color: '#ff8c00',
      },
      itemStyle: {
        color: '#ff8c00',
        width:1
      }
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})

const setOption = () => {
  setTimeout(() => {
    const totalData = []
    const totalDataTwo = []
    for (let i = 0;i < months.length;i++){
      totalData.push(Math.ceil(Math.random() * 2000 + 1000))
      totalDataTwo.push(Math.ceil(Math.random() * 2000 + 1000))
    }
    chartRef.value.setOption({
      series: [
        { data: totalData },
        { data: totalDataTwo },
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
  <div class="tooltip-div">

    <div></div>
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
    border-top: 1px solid rgba(255,255,255,0.1);
    margin-top: 6px;
}
.tooltip-div {
    width: 85px;
    height: 12px;
    position: absolute;
    margin-left: 188px;
    margin-top: 6px;
    background: url('@/assets/images/tooltip.png') no-repeat;
    background-size: 83px 12px;
}
</style>
