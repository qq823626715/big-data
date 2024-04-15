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

const color = ['#23F0FF', '#007FFD', '#03DF9E', '#FF8A37']
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
            width: 120,
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
      radius: [45, 130],
      center: ['50%', '45%'],
      roseType: 'radius',
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#000',
        borderWidth: 2,
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
      { name: '求职创业', value: 15 },
      { name: '住房需求', value: 25 },
      { name: '活动规划', value: 40 },
      { name: '其他需求', value: 55 }
    ],
  }
  chartData.list = data.list
  chartRef.value.setOption({
    series: { data: data.list },
  })
})


const setOption = () => {
  setTimeout(() => {
    const data = [
      { name: '求职创业', value: Math.random() * 60 + 10 },
      { name: '住房需求', value: Math.random() * 60 + 10 },
      { name: '活动规划', value: Math.random() * 60 + 10 },
      { name: '其他需求', value: Math.random() * 60 + 10 }
    ]
    chartRef.value.setOption({
      series: [{ data: data }]
    });
    setOption();
  }, 10000)
}
setOption();
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
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
}
</style>
