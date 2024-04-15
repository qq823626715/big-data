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

const years = new Array(12).fill(0).map((__, index) => `${index + 1}月`);
const numbers = new Array(5).fill(0).map((__, index) => 200 - index * 50);
const randomDatas = () => years.map(() => Math.ceil(Math.random() * 150 + 50));
const datas = randomDatas();

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 340,
    height: 90,
    top: 25,
    left: 35,
  },
  xAxis: {
    type: 'category',
    data: years,
    axisLabel: {
      fontSize: 8
    },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    name: '数量（个）',
    type: 'value',
    data: numbers,
    axisLabel: {
        show:true,
      fontSize: 8
    },
    axisLine: { show: true },
    splitLine: { show: false },
    splitNumber: 4,
    nameTextStyle: {
        verticalAlign: 'top',
        color: "#fff",
        fontSize: 7,
    },
  },
  tooltip: {
    trigger: 'item',
    show:true,
  },
  series: [
    {
        name: '人数',
        type: 'bar',
        data: datas,
        itemStyle: {
          color: 'rgb(255,255,255,0)',
          decal: {
            symbol: 'roundRect',
            color: '#1b77ff',
            dashArrayX: [6,2],
            dashArrayY: [4,3],
            maxTileWidth: 100,
            symbolSize: 1.7,
          }
        },
        barWidth: 10,
        barGap: 6,
        label: {
          show: true,
          fontSize: 8,
          position: 'top'
        }
    },
  ]
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
})

const setOption = () => {
  setTimeout(() => {
    chartRef.value.setOption({
        series: [
            { data: randomDatas() },
        ],
    });
    setOption();
  }, 5000)
}
setOption();
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
</style>
