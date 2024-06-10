<!--
 * @Description: 纪念设施分级
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

const color = ['#007FFD', '#03DF9E', '#FF8A37']
const labels = ['国家', '省级', '市级', '县级', '其他']
const chartData = reactive({
  list: [],
})

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    top: 10,
    right: 0,
    itemWidth: 8,
    itemHeight: 4,
    textStyle: {
      align: 'left',
      backgroundColor: 'transparent',
      fontSize: 10,
    },
    orient: 'vertical'
  },
  series: [
    {
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['0','50%'],
      avoidLabelOverlap: false,
      emphasis: { scale: true },
      markPoint: { symbol: 'circle' },
      data: chartData.list,
      label: {
        show: true,
        position: 'outside',
        fontSize: 10,
        borderWidth: 0,
        color: '#fff',
        formatter: '{b}:{d}%'
      },
      labelLine: { show: true },
      selectedMode:'multiple',
      selectedOffset: 1,
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: {
      data: [
        {
          name: '国家',
          value: 3,
          selected: true
        },
        {
          name: '省级',
          value: 10,
          selected: true
        },
        {
          name: '市级',
          value: 12,
          selected: true
        },
        {
          name: '县级',
          value: 30,
          selected: true
        },
        {
          name: '其他',
          value: 45,
          selected: true
        }
      ]
    },
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
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
