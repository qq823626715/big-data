<!--
 * @Description: 办理方式统计
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
  legend: {
    data: ['人数']
  },
  xAxis: {
    type: 'category',
    data: ['在编人员', '兼职人员', '编外聘用'],
    axisLabel: {
      fontSize: 22
    }
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLabel: {
      fontSize: 22,
      rotate: 45
    }
  },
  tooltip: {
    trigger: 'item',
    show:true,
    textStyle: {
      fontSize: 26
    },
  },
  label: {
    show: true,
    fontSize: 24,
    position: 'top'
  },
  series: [
    {
      data: [100000, 80000, 90000],
      type: 'bar',
      barWidth: 32,
      name: '人数',
      itemStyle: {
        borderRadius: 4,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          { offset: 0, color: '#0c244d' },
          { offset: 1, color: '#08c7f6' }
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
  width: 900px;
  height: 420px;
  margin: 0 auto;
  padding: 5px 90px 5px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
