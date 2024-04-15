<!--
 * @Description:拥军组织类型
-->
<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
const str = '银行、公交、医院、运营商、酒店、饭店、休闲、学校、景区、律所、中间、其他'
const array = str.split('、')
const option = {
  backgroundColor: 'transparent',
  series: [
    {
      width: '100%',
      height: '100%',
      type: 'treemap',
      selectedMode: false,
      legend: { show: false },
      breadcrumb : { show: false },
      data: array.map(name => ({ name, value: Math.floor(Math.random()*20 + 5) })),
      label: {
        show: true,
        position: 'inside',
        fontSize: 6,
        borderWidth: 0,
        color: '#fff',
      },
    }
  ]
}


const test = () => {
  setTimeout(() => {
    chartRef.value.setOption({
      series: {
        data: array.map(name => ({ name, value: Math.floor(Math.random()*20 + 5) }))
      },
    })
    test()
  }, 3000)
}
test()

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption({
    series: [
      {
        data: array.map(name => ({ name, value: Math.floor(Math.random()*20 + 5) }))
      },
    ]
  })
})
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
