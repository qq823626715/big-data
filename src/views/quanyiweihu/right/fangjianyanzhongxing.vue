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

const color = ['#ff6f57', '#237bff', '#0fa7f4', '#fb9d05'];
const names = ['严重', '一般', '轻微', '紧急'];

const option = ref({
  color: color,
  grid: { width: 10 },
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    bottom: 0,
    itemWidth: 4,
    itemHeight: 4,
    textStyle: {
        align: 'left',
        backgroundColor: 'transparent',
        fontSize: 8,
    },
  },
  series: [
    {
        name: '会员分布情况',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 0,
            borderColor: '#000',
            borderWidth: 0,
        },
        label: {
            show: true,
            position: 'outside',
            fontSize: 6,
            borderWidth: 0,
            color: '#fff',
            formatter: '{d}%\n{b}'
        },
        labelLine: { length: 3 },
        data: [],
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: { data: names.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
  })
})


const setOption = () => {
  setTimeout(() => {
    chartRef.value.setOption({
        series: { data: names.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
    })
    setOption();
  }, 10000)
}
setOption();


const colorTwo = ['#3086ff', '#74f983', '#0da6f4'];
const namesTwo = ['退役士兵', '退役军官', '军属', '其他'];

const optionTwo = ref({
  color: colorTwo,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    bottom: 0,
    itemWidth: 4,
    itemHeight: 4,
    textStyle: {
        align: 'left',
        backgroundColor: 'transparent',
        fontSize: 8,
    },
  },
  series: [
    {
        name: '会员分布情况',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 0,
            borderColor: '#000',
            borderWidth: 0,
        },
        label: {
            show: true,
            position: 'outside',
            fontSize: 6,
            borderWidth: 0,
            color: '#fff',
            formatter: '{d}%\n{b}'
        },
        labelLine: {
            length: 3,
        },
        data: [],
    },
  ],
})

const chartRefTwo = ref()
setTimeout(() => {
  chartRefTwo.value.setOption({
    series: { data: namesTwo.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
  })
})


const setOptionTwo = () => {
  setTimeout(() => {
    chartRefTwo.value.setOption({
        series: { data: namesTwo.map(key => ({ name: key, value: Math.floor(Math.random() * 60 + 10) })) },
    })
    setOptionTwo();
  }, 10000)
}
setOptionTwo();
</script>

<template>
  <div class="contain">
    <div class="chart-wrapper">
      <v-chart
        ref="chartRef"
        class="chart"
        :option="option"
        autoresize
      />
    </div>
    <div class="chart-wrapper">
      <v-chart
        ref="chartRefTwo"
        class="chart"
        :option="optionTwo"
        autoresize
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  display: flex;
  width: 100%;
  height: 100%;
}
.chart-wrapper {
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
