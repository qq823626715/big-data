<!--
 * @Description:
-->
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
  '抗美援越': '#03DF9E',
  '抗美援朝': '#23F0FF',
  '解放战争': '#007FFD',
  '其他': '#FF8A37'
}
const chartData = reactive({
  list: [],
})
const builderJson = {
  all: 70223 + 32123 + 12123 + 10023 + 302,
  charts: {
    '其他': 10023,
    '抗美援越': 12123,
    '抗日战争': 30200,
    '抗美援朝': 32123,
    '解放战争': 70223
  }
}
const option = ref({
  grid: {
    top: 10,
    left: 0,
    width: 180,
    height: 130
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
        position: [0, -10],
        show: true,
        fontSize: 10,
        formatter: '{b}',
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key]
      }),
      barWidth: 8,
      barGap: 90,
      itemStyle: {
        borderRadius: [8, 0, 0, 8],
        color: function (param) {
          return colors[param.name] || '#5470c6'
        }
      }
    },
    {
      type: 'bar',
      stack: 'chart',
      silent: true,
      itemStyle: {
        color: '#eee',
        borderRadius: [0, 10,10, 0]
      },
      label: {
        position: 'right',
        show: true,
        formatter: function({ value}) {
          return `${ builderJson.all - value}人`
        },
        fontSize: 12,
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
  height: 180px;
  margin: 10px auto;
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
