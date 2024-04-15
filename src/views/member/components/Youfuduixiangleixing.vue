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

const color = ['#23F0FF', '#007FFD', '#03DF9E', '#FF8A37']
const colors = {
  '退役士兵': '#03DF9E',
  '三红': '#23F0FF',
  '干部': '#007FFD',
  '三属': '#FF8A37',
  '烈士': '#ff0000',
}
const chartData = reactive({
  list: [],
})
const builderJson = {
  all: 500,
  charts: {
    '退役士兵': 345,
    '三红': 298,
    '干部': 246,
    '三属': 166,
    '烈士': 109,
  }
}
const option = ref({
  grid: {
    top: 70,
    width: 495,
  },
  color: color,
  backgroundColor: 'transparent',
  xAxis: [
    {
      type: 'value',
      max: builderJson.all,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      }
    },
  ],
  yAxis: [
    {
      show: false,
      type: 'category',
      data: Object.keys(builderJson.charts),
      splitLine: {
        show: false
      }
    },
  ],
  series: [
    {
      type: 'bar',
      stack: 'chart',
      z: 3,
      label: {
        position: 'top',
        show: true,
        fontSize: 26,
        formatter: '{b}',
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key]
      }),
      barWidth: 14,
      barGap: 80,
      itemStyle: {
        borderRadius: [14, 0, 0, 14],
        color: function (param) {
          return colors[param.name] || '#5470c6';
        }
      }
    },
    {
      type: 'bar',
      stack: 'chart',
      silent: true,
      itemStyle: {
        color: '#42657e',
        borderRadius: [0, 14,14, 0]
      },
      label: {
        position: 'right',
        show: true,
        formatter: function({ value}) {
          return `${ builderJson.all - value}人`
        },
        fontSize: 22,
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return  builderJson.all - builderJson.charts[key]
      }),
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})
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
  height: 490px;
  margin: 20px auto;
  padding: 5px 90px 5px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
