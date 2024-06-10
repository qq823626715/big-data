<!--
 * @Description: 纪念活动人次
-->
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
      fontSize: 12
    },
    itemGap: 12,
    bottom: 0,
  },
  legend: {
    top: 'bottom',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      align: 'left',
      backgroundColor: 'transparent',
      rich: {
        b: {
          fontSize: 8,
          // width: 60,
          height: 12,
        }
      }
    },
    formatter: ['{b|{name}}'].join('\n')
  },
  series: [
    {
      name: '会员分布情况',
      type: 'pie',
      radius: [35, 52],
      center: ['50%', '38%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10
      },
      label: { show: false },
      emphasis: {
        scale: true,
        scaleSize: 6,
        label: {
          show: false,
          fontSize: 12,
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
    <div class="chart-wrapper first">
      <PieChartBg />
      <div class="icon qian">
        <WalletOutlined  />
        <div>32次</div>
      </div>
      <div class="text">年度活动总量</div>
    </div>
    <div class="chart-wrapper scren">
      <v-chart
        v-if="chartData.list"
        ref="chartRef"
        class="chart"
        :option="option"
        autoresize
      />
      <div class="icon qian" style="position: absolute;font-size: 12px;margin-top: -20px;margin-left: 0px;">
        <div style="color: darkgrey;">50-100人</div>
        <div>164次</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-wrapper {
  margin: 0 auto;
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  color: white;
  &.first {
    width: 90px;
    height: 90px;
    margin-top: 20px;
  }
  &.scren {
    width: 150px;
    height: 160px;
  }
  > .icon {
    flex: 1;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -6px;
    > div {
      margin-top: 4px;
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
    font-size: 12px;
    top: 90px;
    margin: 0 auto;
  }
}
</style>
