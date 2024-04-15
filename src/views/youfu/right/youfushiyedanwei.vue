<script setup>
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#ff674e', '#faa200', '#0aa4f3'];
const labels = ['优抚医院', '光荣院', '军供站'];
const chartData = reactive({ list: [] })

const getOptions = (item) => {
  return {
    backgroundColor: 'transparent',
    tooltip: { show: false },
    legend: { show: false },
    series: [
      {
          type: 'pie',
          radius: ['65%', '75%'],
          avoidLabelOverlap: false,
          emphasis: { scale: false },
          markPoint: { symbol: 'circle' },
          labelLine: { show: false },
          data: chartData.list,
          label: { show: false },
          silent: false,
      },{
        type: 'pie',
        radius: ['70%', '75%'],
        avoidLabelOverlap: false,
        silent: false,
        label: { show: false },
        emphasis: { scale: false },
        markPoint: { symbol: 'circle' },
        labelLine: { show: false },
      },
    ],
  }
}

const options = labels.map((item) => getOptions(item));

const optionOne = ref(options[0]);
const optionTwo = ref(options[1]);
const optionThree = ref(options[2]);

const chartRefOne = ref()
const chartRefTwo = ref()
const chartRefThree = ref()
const chartRefs = [chartRefOne,chartRefTwo,chartRefThree];
const getRandomDatas = (label, index) => {
  const number = Math.floor(Math.random() * 40 + 10);
  const numberTwo = 100 - number;
  const option = {
    series: {
      data: [
        {
          name: label,
          value: number,
          itemStyle: { color: color[index] },
          label: {
            show: true,
            position: 'center',
            fontSize: 12,
            borderWidth: 0,
            color: '#fff',
            formatter: `${label}\n${number}%`
          } 
        },
        { name: '', value: numberTwo, itemStyle: { color: 'rgba(0,0,0,0)' } }
      ]
    },
  }
  return option;
}
setTimeout(() => {
  labels.forEach((label, index) => {
    chartRefs[index].value.setOption(getRandomDatas(label, index))
  })
})
</script>

<template>
  <div class="chart-wrapper">
    <v-chart
      ref="chartRefOne"
      class="chart"
      :option="optionOne"
      autoresize
    />
    <v-chart
      ref="chartRefTwo"
      class="chart"
      :option="optionTwo"
      autoresize
    />
    <v-chart
      ref="chartRefThree"
      class="chart"
      :option="optionThree"
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
