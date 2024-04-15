<script setup>
import { ref, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const years = new Array(10).fill(0).map((__, index) => 2010 + index)
const numbers = new Array(5).fill(0).map((__, index) => 20000 - index * 5000)
const getRandomDatas = () => {
  const array = years.map(() => Math.ceil(Math.random() * 14000 + 5000))
  array.unshift(array[0] - 2000)
  array.push(array[array.length - 1] + 3000)
  return array
}
const datasLine = getRandomDatas()

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 330,
    height: 110,
    top: 15,
    left: 40,
    bottom: 20
  },
  xAxis: {
    type: 'category',
    data: ['', ...years, ''],
    axisLabel: {
      fontSize: 8
    },
    axisTick: { show: false },
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    data: numbers,
    axisLabel: {
      show:true,
      fontSize: 8,
      formatter: function (value) {
        const str = value === '0' ? value : `${value}万`
        return str
      }
    },
    axisLine: { show: true },
    splitLine: { show: false },
    splitNumber: 4,
    nameTextStyle: {
      verticalAlign: 'top',
      color: '#fff',
      fontSize: 6,
    },
  },
  tooltip: {
    trigger: 'item',
    show: true,
  },
  legend: {
    show: false,
    top: -5,
    right: 0,
    itemWidth: 16,
    itemHeight: 4,
    textStyle: {
      fontSize: 8
    },
    lineStyle: {
      width:1
    }
  },
  series: [
    {
      name: '趋势率',
      data: datasLine,
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 1,
        color: '#e59d50',
      },
      itemStyle: {
        color: '#e59d50',
        width: 1
      },
      areaStyle: { color: '#e59d50', opacity: 1 },
      showSymbol: false,
      symbolSize: function (data,param) {
        if (param.dataIndex === 0 || param.dataIndex === 7) {
          return 0
        } else {
          return 4
        }
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
    chartRef.value.setOption({
      series: [{ data: getRandomDatas() }],
    })
    setOption()
  }, 5000)
}
setOption()
</script>

<template>
  <div class="chart-wrapper">
    <v-chart
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
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
.tooltip-div {
  width: 85px;
  height: 12px;
  position: absolute;
  margin-left: 188px;
  margin-top: 6px;
  background: url('@/assets/images/tooltip.png') no-repeat;
  background-size: 83px 12px;
}
</style>
