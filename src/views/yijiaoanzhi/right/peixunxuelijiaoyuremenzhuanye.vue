<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'

const array = ['公共事业','计算机','法律','金融','自动化','其他','国际贸易','信息安全','应用电子技术','工商管理','财税'] 
const option = {
    backgroundColor: 'transparent',
    series: [
        {
            width: '93%',
            height: '93%',
            type: 'treemap',
            selectedMode: false,
            legend: { show: false },
            breadcrumb : { show: false },
            data: array.map(name => ({ name, value: Math.floor(Math.random()*20 + 5) })),
            label: {
                show: true,
                position: 'inside',
                fontSize: 11,
                borderWidth: 0,
                color: '#000',
                formatter: '{c}人\n{b}'
            },
        }
    ]
};


const test = () => {
    setTimeout(() => {
        chartRef.value.setOption({
            series: {
                data: array.map(name => ({ name, value: Math.floor(Math.random()* 300 + 100) }))
            },
        })
        test();
    }, 3000)
}
test();

const chartRef = ref()
setTimeout(() => {
    chartRef.value.setOption({
        series: [
            {
                data: array.map(name => ({ name, value: Math.floor(Math.random()* 300 + 100) }))
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
