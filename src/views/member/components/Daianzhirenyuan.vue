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

const color = ['#007FFD', '#03DF9E', '#FF8A37']
const chartData = reactive({
  list: [],
})

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    textStyle: {
      fontSize: 26
    },
    itemGap: 36,
    bottom: 0,
  },
  legend: {
    top: 'bottom',
      itemWidth: 20,
      itemHeight: 20,
      textStyle: {
        align: 'left',
        backgroundColor: 'transparent',
        rich: {
          b: {
            fontSize: 26,
            width: 160,
            height: 40,
          }
        }
      },
      formatter: [`{b|{name}}`].join('\n')
  },
  series: [
    {
      name: '会员分布情况',
      type: 'pie',
      radius: [105, 130],
      center: ['45%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: 'rgb(255,255,255,0)',
        borderWidth: 2,
        borderRadius: 10
      },
      label: {
        show: true,
        position: 'outside',
        fontSize: 26
      },
      emphasis: {
        scale: true,
        scaleSize: 12,
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      markPoint: {
        symbol: 'circle'
      },
      labelLine: {
        show: true,

      },
      data: chartData.list,
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  const data = {
    list: [
      { name: '退役士兵', value: 35 },
      { name: '军人干部', value: 20 },
      { name: '军人家属', value: 45 }
    ],
    total: 24453
  }
  chartData.list = data.list
  chartRef.value.setOption({
    series: { data: data.list },
  })
})
const test = () => {
  setTimeout(() => {
    const data = {
      list: [
        { name: '退役士兵', value: Math.floor(Math.random() * 60 + 10) },
        { name: '军人干部', value: Math.floor(Math.random() * 60 + 10) },
        { name: '军人家属', value: Math.floor(Math.random() * 60 + 10) }
      ],
      total: 24453
    }
    chartData.list = data.list
    chartRef.value.setOption({
      series: { data: data.list },
    });
    test();
  }, 3000)
}
test();
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
  width: 100%;
  height: 460px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -45px;
  margin-bottom: 36px;
}
</style>
