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
  legend: {
    data: ['申请办理数', '已办结总数']
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
      data: [1528, 485, 535, 438, 1538, 685, 286, 2046, 236, 964, 396, 189, 2379],
      type: 'bar',
      barWidth: 12,
      name: '申请办理数',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          { offset: 0, color: '#0c244d' },
          { offset: 1, color: '#08c7f6' },
        ])
      }
    },
    {
      data: [1508, 445, 515, 428, 1508, 655, 264, 2027, 230, 957, 384, 174, 2334],
      type: 'bar',
      barWidth: 12,
      name: '已办结总数',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          { offset: 0, color: '#c79a33' },
          { offset: 1, color: '#f1ba3f' },
        ])
      }
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
