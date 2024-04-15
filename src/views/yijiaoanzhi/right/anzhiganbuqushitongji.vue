<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

const years = new Array(10).fill(0).map((__, index) => 2009 + index);
const numbers = new Array(5).fill(0).map((__, index) => 20000 - index * 5000);

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 550,
    height: 120,
    top: 10,
    left: 35,
  },
  xAxis: {
    type: 'category',
    data: years,
    axisLabel: { fontSize: 8, color: '#fff' },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    type: 'value',
    data: numbers,
    axisLabel: {  fontSize: 8, color: '#fff' },
    axisLine: { show: true },
    splitLine: { show: false },
    splitNumber: 3,
  },
  tooltip: { trigger: 'item', show:true },
  series: [
    {
        name: '人数',
        type: 'bar',
        data: [],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
                offset: 0,
                color: '#0fccad',
            },
            {
                offset: 1,
                color: '#49f9e2',
            },
            ])
        },
        barWidth: 6,
    },{
        name: '人数',
        type: 'bar',
        data: [],
        itemStyle: {
            color: '#267cff',
        },
        barWidth: 6,
    },{
        name: '人数',
        type: 'bar',
        data: [],
        itemStyle: {
            color: '#77fa86',
        },
        barWidth: 6,
    },{
        name: '人数',
        type: 'bar',
        data: [],
        itemStyle: {
            color: '#fc8452',
        },
        barWidth: 6,
    },{
        name: '人数',
        type: 'bar',
        data: [],
        itemStyle: {
            color: '#fb9d05',
        },
        barWidth: 6,
    },
    {
        name: '趋势率',
        data: [],
        type: 'line',
        showSymbol: false,
        lineStyle: { width: 1, color: '#17ccb0' },
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
    const totalData = [];
    const totalData1 = [];
    const totalData2 = [];
    const totalData3 = [];
    const totalData4 = [];
    for (let i = 0;i < 10;i++){
      totalData.push(Math.ceil(Math.random() * 14000 + 5000))
      totalData1.push(Math.ceil(Math.random() * 14000 + 5000))
      totalData2.push(Math.ceil(Math.random() * 14000 + 5000))
      totalData3.push(Math.ceil(Math.random() * 14000 + 5000))
      totalData4.push(Math.ceil(Math.random() * 14000 + 5000))
    }
    chartRef.value.setOption({
        series: [
            { data: totalData },
            { data: totalData1 },
            { data: totalData2 },
            { data: totalData3 },
            { data: totalData4 },
            { data: totalData },
        ],
    });
})

const setOption = () => {
  setTimeout(() => {
    const totalData = []
    for (let i = 0;i < 10;i++){
      totalData.push(Math.ceil(Math.random() * 14000 + 5000))
    }
    chartRef.value.setOption({
        series: [
            { data: totalData },
            { data: totalData },
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
