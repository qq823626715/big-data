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
const labels = ['就业培训', '创业培训', '未参加', '适应性培训', '职业技能培训', '学历教育', '其他培训', '个性化培训']
const chartData = reactive({
  list: [],
})

const option = ref({
  color: color,
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    top: 10,
    right: 0,
    itemWidth: 4,
    itemHeight: 4,
    textStyle: {
      align: 'left',
      backgroundColor: 'transparent',
      fontSize: 8,
    },
    orient: 'vertical'
  },
  series: [
    {
      type: 'pie',
      radius: ['45%','60%'],
      center: [70, '50%'],
      avoidLabelOverlap: false,
      emphasis: { scale: false },
      markPoint: { symbol: 'circle' },
      label: {
        show: true,
        position: 'outside',
        fontSize: 8,
        borderWidth: 0,
        color: '#fff',
        formatter: '{d}%'
      },
      labelLine: { show: true, length: 3 },
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: {
      data: labels.map(name => ({
        name,
        value: Math.floor(Math.random() * 60 + 10),
      }))
    },
  })
})
const test = () => {
  setTimeout(() => {
    chartRef.value.setOption({
      series: {
        data: labels.map(name => ({
          name,
          value: Math.floor(Math.random() * 60 + 10),
        }))
      },
    })
    test()
  }, 3000)
}
test()
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
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
