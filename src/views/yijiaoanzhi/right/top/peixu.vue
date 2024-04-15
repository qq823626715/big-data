<script setup>
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#267cff', '#77fa86', '#2cb5f0'];
const labels = ['学历教育', '技能培训', '未参加'];
const chartData = reactive({ list: [] })

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    bottom: 0,
    itemWidth: 8,
    itemHeight: 4,
    textStyle: {
      align: 'left',
      backgroundColor: 'transparent',
      fontSize: 8,
    },
  },
  series: [
    {
        type: 'pie',
        radius: [0, 45],
        avoidLabelOverlap: false,
        label: { show: true, position: 'outside' },
        emphasis: { scale: false },
        markPoint: { symbol: 'circle' },
        labelLine: { show: true },
        data: chartData.list,
        roseType: 'radius',
        label: {
            show: true,
            position: 'outside',
            fontSize: 6,
            borderWidth: 0,
            color: '#fff',
            formatter: '{d}%'
        },
        labelLine: { length: 3 },
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
        test();
    }, 3000)
}
test();
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
