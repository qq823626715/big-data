<script setup>
// 会员分布情况
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
// 按需加载
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#3086ff', '#005ddf', '#74f983', '#fca701', '#ff7a65', '#0da6f4']
const names = ['3-5万', '5-10万', '10-15万', '15-20万', '20万以上', '30万以上']

const option = ref({
  color: color,
  grid: {
    width: 10,
  },
  backgroundColor: 'transparent',
  tooltip: {},
  legend: { show: false },
  series: [
    {
      name: '会员分布情况',
      type: 'pie',
      radius: ['45%', '70%'],
      roseType: 'radius',
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#000',
        borderWidth: 0,
      },
      label: {
        show: true,
        position: 'outside',
        fontSize: 10,
        borderWidth: 0,
        color: '#fff',
        formatter: '{d}%\n{b}'
      },
      labelLine: {
        length: 3,
      },
      data: [],
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: { data: names.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
  })
})


const setOption = () => {
  setTimeout(() => {
    chartRef.value.setOption({
      series: { data: names.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
    })
    setOption()
  }, 10000)
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
  flex: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
