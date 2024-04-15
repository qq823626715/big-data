<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

const years = ['其他','准备考学','准备创业','家庭原因','无工作意向','暂未找到工作','辞职','被原单位辞退','原公司破产','身体原因'];
const numbers = new Array(5).fill(0).map((__, index) => 200 - index * 50);
const randomDatas = () => years.map(() => Math.ceil(Math.random() * 150 + 50));
const datas = randomDatas();

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 240,
    height: 50,
    top: 15,
    left: 20,
  },
  xAxis: {
    type: 'category',
    data: years,
    axisLabel: { fontSize: 6, rotate: 25 },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    name: '数量（个）',
    type: 'value',
    data: numbers,
    axisLabel: { show:true, fontSize: 6 },
    axisLine: { show: true },
    splitLine: { show: false },
    splitNumber: 4,
  },
  tooltip: { trigger: 'item', show:true },
  series: [
    {
        type: "pictorialBar",
        label: { show: false, },
        symbolSize: [10, 5],
        symbolOffset: [0, 2],
        z: 12,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(31,155,255,1)" },
                { offset: 1, color: "rgba(0,229,255,1)" }
            ])
        },
        data: datas
    },
    {
        name: '人数',
        type: 'bar',
        data: datas,
        backgroundColor: 'transparent',
        itemStyle: {
            color: {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [
                    { "offset": 0, "color": "rgba(0,229,255,0.4)" },
                    { "offset": 1, "color": "#1d62e0" }
                ]
            },
        },
        barWidth: 10,
        barGap: 6,
        label: {
          show: true,
          fontSize: 6,
          color: '#fff',
          position: 'top',
          borderWidth: 0,
          backgroundColor: 'transparent'
        }
    },
    {
        type: "pictorialBar",
        symbolSize: [10, 5],
        symbolOffset: [0, -2],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(31,155,255,1)" },
                { offset: 1, color: "rgba(0,229,255,1)" }
            ], false)
        },
        data: datas
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
    border-top: 1px solid rgba(255,255,255,0.1);
}
</style>
