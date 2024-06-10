<!--
 * @Description: 办结时长统计
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
const bardata = [4.5, 5.2, 7.7, 4.4, 7.0, 7.5, 5.8, 5.6, 6.1, 4.6, 4.7, 4.7, 3.7]
const average = bardata.reduce((a, b) => a+ b, 0) / bardata.length
const averageData = bardata.map(() => average)
const option = ref({
  backgroundColor: 'transparent',
  legend: {
    data: ['各地区办结时长', '全省平均水平']
  },
  xAxis: {
    type: 'category',
    data: ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'],
    axisLabel: {
      fontSize: 20,
      rotate: 45
    }
  },
  yAxis: {
    type: 'value',
    name: '单位：天',
    splitLine: { show: false },
    axisLabel: {
      fontSize: 20
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
      data: bardata,
      type: 'bar',
      barWidth: 24,
      name: '各地区办结时长',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          { offset: 0, color: '#0c244d' },
          { offset: 1, color: '#08c7f6' },
        ])
      }
    },
    {
      data: averageData,
      type: 'line',
      name: '全省平均水平',
      color: '#c79a33'
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})

// const setOption = () => {
//   setTimeout(() => {
//     const totalData = []
//     for (let i = 0;i < 7;i++){
//       totalData.push(Math.ceil(Math.random() * 30 + 20))
//     }
//     chartRef.value.setOption({
//       series: [{ data: totalData }]
//     });
//     setOption();
//   }, 15000)
// }
// setOption();
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
  height: 480px;
  margin: 0 auto;
  padding: 5px 90px 5px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
