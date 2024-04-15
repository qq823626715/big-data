<script setup>
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#267cff', '#77fa86', '#2cb5f0']
const labels = ['军队离退休干部','退休士官','无军籍退休退职职工','其他']
const chartData = reactive({ list: [] })

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: { show: false },
  series: [
    {
      type: 'pie',
      radius: ['50%', '65%'],
      avoidLabelOverlap: false,
      emphasis: { scale: false },
      markPoint: { symbol: 'circle' },
      labelLine: { show: true },
      data: chartData.list,
      label: {
        show: true,
        position: 'outside',
        fontSize: 8,
        borderWidth: 0,
        color: '#fff',
        formatter: '{b}\n{d}%'
      },
    },{
      type: 'pie',
      radius: ['0%', '25%'],
      avoidLabelOverlap: false,
      silent: false,
      label: { show: false },
      emphasis: { scale: false },
      markPoint: { symbol: 'circle' },
      labelLine: { show: false },
      roseType: 'radius',
      emptyCircleStyle: { color: '#1a77ff' }
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: {
      data: labels.map(name => ({
        name,
        value: Math.floor(Math.random() * 20 + 15),
      }))
    },
  })
})
const test = () => {
  setTimeout(() => {
    chartRef.value.setOption({
      series: {
        data: labels.map(name => ({
          name,
          value: Math.floor(Math.random() * 60 + 10),
        }))
      },
    })
    test()
  }, 3000)
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
</template>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
