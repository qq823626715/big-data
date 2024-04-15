<script setup>
import { ref, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const years = ['1个月','3个月','半年','1年','一年半','两年以上'];
const numbers = new Array(5).fill(0).map((__, index) => 20000 - index * 5000);
const getRandomDatas = () => {
    const array = years.map(() => Math.ceil(Math.random() * 14000 + 5000));
    array.unshift(array[0] - 2000);
    array.push(array[array.length - 1] + 3000);
    return array;
}
const datasLine = getRandomDatas();

const option = ref({
  backgroundColor: 'transparent',
  grid: {
    width: 550,
    height: 95,
    top: 16,
    left: 35,
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
    name: '年收入',
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
  legend: {
    show: true,
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
            color: '#e7db64',
        },
        itemStyle: {
            color: '#e7db64',
            width: 4
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    { offset: 0, color: 'rgb(231, 219, 100, 1)' },
                    { offset: 1, color: 'rgb(231, 219, 100, 0)' }
                ],
                global: false
            }
        },
        symbolSize: function (data,param) {
            if (param.dataIndex === 0 || param.dataIndex === 7) {
                return 0;
            } else {
                return 4;
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
