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

const color = ['#007FFD', '#03DF9E', '#FF8A37'];
const labels = ['专科以下', '专科', '本科', '硕士以上'];
const chartData = reactive({
  list: [],
})

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    top: 10,
    right: 20,
    itemWidth: 8,
    itemHeight: 4,
    textStyle: {
        align: 'left',
        backgroundColor: 'transparent',
        fontSize: 8,
    },
    orient: 'vertical'
  },
  series: [
    {
        type: 'pie',
        center: [95, '50%'],
        avoidLabelOverlap: false,
        label: { show: true, position: 'outside' },
        emphasis: { scale: false },
        markPoint: { symbol: 'circle' },
        labelLine: { show: true },
        data: chartData.list,
        label: {
            show: true,
            position: 'outside',
            fontSize: 6,
            borderWidth: 0,
            color: '#fff',
            formatter: '{d}%'
        },
        labelLine: { length: 3 },
        selectedMode:'multiple',
        selectedOffset: 2,
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
    chartRef.value.setOption({
        series: {
            data: labels.map(name => ({ 
                name, 
                value: Math.floor(Math.random() * 60 + 10),
                selected: true
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
                    selected: true
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
      v-if="chartData.list"
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
