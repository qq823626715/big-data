<script setup>
import PieChartBg from './PieChartBg.vue'
import { WalletOutlined } from '@ant-design/icons-vue'
import { ref, reactive, provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent } from 'echarts/components'
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent])

provide(THEME_KEY, 'dark')

const color = ['#17b7fc', '#f8a529', '#bce45e', '#83eae7']
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
            width: 130,
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
      radius: [95, 120],
      center: ['47%', '40%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10
      },
      label: { show: false },
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
      labelLine: { show: false },
      data: chartData.list,
    },
  ],
})

const chartRef = ref()
setTimeout(() => {
  const data = {
    list: [
      { name: '<50人', value: 55 },
      { name: '50-100人', value: 25 },
      { name: '100-150人', value: 5 },
      { name: '>150人', value: 15 }
    ],
    total: 24453
  }
  chartData.list = data.list
  chartRef.value.setOption({
    series: { data: data.list },
  })
})
</script>

<template>
  <div style="display: flex;">
    <div class="chart-wrapper" style="margin-left: 40px;margin-right: 40px;margin-top: 100px;">
      <PieChartBg />
      <div class="icon qian">
        <WalletOutlined  />
        <div>32次</div>
      </div>
      <div class="text">年度活动总量</div>
    </div>
    <div class="chart-wrapper" style="width: 400px;height: 440px;margin-bottom: 40px;">
      <v-chart
        v-if="chartData.list"
        ref="chartRef"
        class="chart"
        :option="option"
        autoresize
      />
      <div class="icon qian" style="position: absolute;font-size: 30px;margin-top: -90px;margin-left: -30px;">
        <div style="color: darkgrey;">50-100人</div>
        <div>164次</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
  width: 260px;
  height: 260px;
  margin: 40px auto 140px;
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 26px;
  color: #E0E0E0;;
  > .icon {
    flex: 1;
    font-size: 48px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -6px;
    > div {
      margin-top: 12px;
    }
  }
  > .ren {
    color: #FF8A37;
  }
  > .qian {
    color: #23F0FF;
  }
  .text {
    position: absolute;
    font-size: 28px;
    top: 290px;
  }
}
</style>
