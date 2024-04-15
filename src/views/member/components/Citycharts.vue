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

const props = defineProps(['city']);

const chartData = reactive({
  list: [],
})
const builderJson = {
  all: 550,
  charts: {
    '服务对象': 345,
    '退役军人': 298,
    '优抚对象': 246,
    '军休人员': 166,
    '服务机构': 109,
  }
}
const option = ref({
  title: {
    textStyle: {
      color: '#C0C0C0'
    }
  },
  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#0c244d' },
    { offset: 1, color: '#22c7e4' },
  ]),
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
        position: 'right',
        show: true,
        fontSize: 26,
        formatter: '{b}',
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key]
      }),
      barWidth: 32,
      barGap: 80,
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
  let max = 0;
  const newArray = Object.keys(builderJson.charts).map(function (key) {
    const number = Math.floor(Math.random() * 300 + 200)
    max = Math.max(max, number);
    return number;
  });
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
.chart-wrapper {
  width: 100%;
  height: 490px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -66px;
}
</style>
