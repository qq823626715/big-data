<template>
  <div class="chart-wapper">
    <v-chart
      ref="chartRef"
      class="chart charts"
      :option="option"
      autoresize
    />
  </div>
  <div class="message-rank-box">
    <div class="message-rank">
      <div class="title">全省诉求服务站</div>
      <div class="number">
          <CountTo
              :startVal="startVal.value"
              :endVal="endVal.value"
              :durantion="durantion"
          ></CountTo>
          <span style="font-size: 14px;">个</span>
      </div>
    </div>
    <div class="message-rank">
      <div class="title">全省访件数量</div>
      <div class="number">
          <CountTo
            :startVal="startVal.value"
            :endVal="endVal.valueTwo"
            :durantion="durantion"
          ></CountTo>
          <span style="font-size: 14px;">个</span>
      </div>
    </div>
    <div class="message-rank">
      <div class="title">诉求总数</div>
      <div class="number">
        <CountTo
            :startVal="startVal.value"
            :endVal="1672"
            :durantion="durantion"
        ></CountTo>
      </div>
    </div>
    <div class="message-rank">
      <div class="title">待处理</div>
      <div class="number">
        <CountTo
            :startVal="startVal.value"
            :endVal="72"
            :durantion="durantion"
        ></CountTo>
        </div>
    </div>
    <div class="message-rank">
      <div class="title">已处理</div>
      <div class="number">
        <CountTo
            :startVal="startVal.value"
            :endVal="1600"
            :durantion="durantion"
        ></CountTo>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import { CountTo } from 'vue3-count-to'
import xiaMenMapData from '@/assets/map/jiangsu.json'
import chinaMapData from '@/assets/map/china_new.json'
import { randomPieSeries } from '../../jiuyechuanye/center/utils'

const arrays = [
  { size: 4, axis: [240,100] },
  { size: 4, axis: [250,230] },
  { size: 4, axis: [250,265] },
  { size: 4, axis: [305,325] },
  { size: 4, axis: [225,160] },
  { size: 8, axis: [250,230] },
]

echarts.registerMap('Map', xiaMenMapData)
echarts.registerMap('chinaMap', chinaMapData)
const color =['#1e72e7', '#1a9ddc', '#40b0e5']
const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港'
const city = cityStr.split('、').map(i => i + '市')
const min = 500000
const max = 38000000
const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 12 }
  },
  title: { show: false },
  series: [
    {
      id: 'Map',
      name: '浙江省',
      type: 'map',
      map: 'Map',
      data: city.map((name,index) => {
        const item = {
          name,
          itemStyle: { areaColor: color[index % 3] },
          label: {
            color: name === '扬州市' ? 'rgba(255,0,0,1)' : 'rgba(0,0,0,1)',
          }
        }
        console.log(name === '扬州市')
        return item
      }),
      zlevel: 10,
      itemStyle: {
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: '1',
      },
      label: { show: true, fontSize: 8 },
      boundingCoords: [
        [117.880412,35.557975],
        [120.472644,31.080706]
      ],
      silent: true,
    },
    {
      type: 'map',
      map: 'chinaMap',
      zlevel: 1,
      silent: true,
      itemStyle: {
        areaColor: '#0d2e47',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: '1',
      },
      tooltip: { show: false },
      label: { show: false },
      boundingCoords: [
        [117.880412,35.557975],
        [120.472644,31.080706]
      ]
    },
    ...arrays.map(item => {
      const axis = item.axis
      axis[0] = axis[0] + 150
      axis[1] = axis[1] * 0.9 + 20
      const size = item.size
      const series = {
        silent: true,
        tooltip: { show: false },
        label: { show: false },
        itemStyle: {
          color: size ===4 ? '#fff' : 'rgba(255,255,255,0.3)'
        },
        data: [{ value: 1 }],
        visualMap: false,
      }
      return randomPieSeries(axis, size, series)
    }),
  ],
})

const chartRef = ref()
const startVal = ref(0)
const endVal = { value: 2000, valueTwo: 1500, valueThree: 50 }
const durantion = 800
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value
    endVal.value = Math.random() * 1500 + 200
    endVal.valueTwo = Math.random() * 800 + 200
    endVal.valueThree = Math.random() * 50 + 50
    test()
  }, 4000)
}
test()
</script>

<style lang="scss" scoped>
.chart-wapper {
  height: 100%;
  margin: 0;
  width: 100%;
  color: rgb(2, 43, 75);
}
.message-rank-box {
  position: absolute;
  margin-top: 50px;
  margin-left: 10px;
}
.message-rank {
  width: 235px;
  height: 28px;
  display: flex;
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
  > div {
    height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    border-radius: 4px;
    color: #E0E0E0;
    // gap: 4px;
  }

  .title {
    width: 100px;
    min-width: 100px;
    text-align: left;
    font-size: 12px;
    line-height: 28px;
  }
  .number {
    width: 50%;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    background: #2b74a4;
    height: 100%;
    border-radius: 4px;
    color: white;
    gap: 4px;
  }
}
</style>
