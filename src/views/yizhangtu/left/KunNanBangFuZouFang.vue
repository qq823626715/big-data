<!--
 * @Description: 困难帮扶走访
-->
<script setup>
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
// 按需加载
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#007FFD', '#03DF9E', '#FF8A37']
const chartData = reactive({
  list: [],
})

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  grid: {
    width: 200,
    height: 100,
    top: 13,
    left: 35
  },
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
    axisLabel: {
      fontSize: 8
    },
    // axisPointer: {
    //   type: 'line',
    //   snap: true
    // },
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    name: '',
    splitLine: { show: false },
    axisLabel: {
      fontSize: 8
    }
  },
  tooltip: {
    trigger: 'axis',
    show:true,
    textStyle: {
      fontSize: 8
    },
  },
  series: [
    {
      data: [203, 327, 421, 381, 401, 458],
      type: 'line',
      symbolSize: 4,
      name: '',
      lineStyle: {
        width: 1,
        color: '#ff8c00',
      },
      itemStyle: {
        color: '#ff8c00',
        width: 3
      }
    }
  ]
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
  margin-top: 10px;
  width: 100%;
  height: 130px;
}
</style>
