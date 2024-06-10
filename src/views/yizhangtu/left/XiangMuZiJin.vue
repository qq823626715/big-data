<!--
 * @Description: 办结数量统计
-->
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
  grid: {
    width: 220,
    height: 80,
    bottom: 26,
    left: 35
  },
  xAxis: {
    type: 'category',
    data: ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'],
    axisLabel: {
      fontSize: 6,
      rotate: 45
    },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLabel: {
      fontSize: 6
    }
  },
  tooltip: {
    trigger: 'item',
    show:true,
    textStyle: {
      fontSize: 8
    },
  },
  series: [
    {
      data: [1528, 485, 535, 438, 1538, 685, 286, 2046, 236, 964, 396, 189, 2379],
      type: 'bar',
      barWidth: 6,
      name: '',
      label: {
        show: true,
        position: 'top',
        fontSize: 6,
        borderWidth: 0
      },
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
