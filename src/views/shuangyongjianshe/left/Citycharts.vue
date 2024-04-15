<!--
 * @Description:
-->
<script setup>
import { ref, reactive, provide, watch } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const props = defineProps(['city'])

const chartData = reactive({
  list: [],
})
const builderJson = {
  all: 150,
  charts: {
    '走访慰问': 45,
    '立功喜报': 98,
    '光荣牌发放': 46,
    '困难帮扶': 36,
    '其他': 19,
  }
}
const option = ref({
  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#0c244d' },
    { offset: 1, color: '#22c7e4' },
  ]),
  backgroundColor: 'transparent',
  height: 120,
  bootom: 10,
  top: 0,
  grid: {
    top: '10%'
  },
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
      type: 'category',
      show: false,
      data: Object.keys(builderJson.charts),
      splitLine: {
        show: false
      },
      splitNumber: 5,
    },
  ],
  series: [
    {
      type: 'bar',
      z: 3,
      label: {
        position: 'right',
        show: true,
        fontSize: 12,
        formatter: '{b}',
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key]
      }),
      barWidth: 10,
      itemStyle: {
        borderRadius: [14, 0, 0, 14],
      }
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})

watch(() => props.city, () => {
  let max = 0
  const newArray = Object.keys(builderJson.charts).map(function (key) {
    const number = Math.floor(Math.random() * 300 + 200)
    max = Math.max(max, number)
    return number
  })
  chartRef.value.setOption({
    xAxis: [
      {
        type: 'value',
        max: max * 1.5,
      }
    ],
    series: [
      {
        data: newArray,
      }
    ]
  })
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
.chart-wrapper, .chart {
  width: 260px;
  height: 160px;
}
</style>
