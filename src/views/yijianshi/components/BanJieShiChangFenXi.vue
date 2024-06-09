<!--
 * @Description: 办结时长分析
-->
<script setup>
import { ref, reactive, provide, watch } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'
const props = defineProps({
  type: {
    type: String,
    default: '士兵'
  }
})
const datas = {
  '士兵': {
    '自主就业': [5, 6, 8, 5, 8, 8, 6, 5, 6, 5, 5, 5, 4],
    '灵活就业': [4, 5, 7, 5, 7, 7, 5, 6, 6, 4, 4, 5, 4],
    '逐月领取': [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  '军官': {
    '自主就业': [5, 5, 7, 5, 8, 8, 6, 5, 6, 5, 5, 4, 4],
    '灵活就业': [4, 5, 7, 5, 6, 7, 5, 6, 6, 6, 5, 5, 4],
    '逐月领取': [4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
}

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const chartData = reactive({
  list: [],
})


const option = ref({
  backgroundColor: 'transparent',
  legend: {
    data: ['自主就业', '灵活就业', '逐月领取']
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
      data: datas[props.type]['自主就业'],
      type: 'line',
      symbolSize: 8,
      name: '自主就业',
      color: '#007a31'
    },
    {
      data: datas[props.type]['灵活就业'],
      type: 'line',
      symbolSize: 8,
      name: '灵活就业',
      color: '#08c7f6'
    },
    {
      data: datas[props.type]['逐月领取'],
      type: 'line',
      symbolSize: 8,
      name: '逐月领取',
      color: '#c79a33'
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})

watch(() => props.type, (value, oldValue) => {
  console.log(value)
  chartRef.value.setOption({
    series: [
      { name: '自主就业', data: datas[value]['自主就业']},
      { name: '灵活就业', data: datas[value]['灵活就业']},
      { name: '逐月领取', data: datas[value]['逐月领取']},
    ]
  })
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
