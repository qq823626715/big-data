<script setup>
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const chartData = reactive({
  list: [],
})
const option = ref({
  backgroundColor: 'transparent',
  xAxis: {
    type: 'category',
    data: ['在职', '下岗', '无业', '离休', '创业', '务农', '学生'],
    axisLabel: {
      fontSize: 24
    }
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLabel: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'item',
    show:true,
    textStyle: {
      fontSize: 26
    },
  },
  series: [
    {
      data: [48, 30, 35, 42, 32, 40, 28],
      type: 'bar',
      barWidth: 32,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          { offset: 0, color: '#0c244d' },
          { offset: 1, color: '#08c7f6' },
        ])
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
    for (let i = 0;i < 7;i++){
      totalData.push(Math.ceil(Math.random() * 30 + 20))
    }
    chartRef.value.setOption({
      series: [{ data: totalData }]
    });
    setOption();
  }, 15000)
}
setOption();
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
  width: 900px;
  height: 440px;
  margin: 0 auto;
  padding: 5px 90px 5px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
