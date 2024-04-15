<template>
    <div class="chart-wapper">
        <v-chart
            ref="chartRef"
            class="chart charts"
            :option="option"
            autoresize
        />
    </div>
    <div class="message-rank">
        <div>
            <div class="title">就业军官</div>
            <div class="number">
                <CountTo
                  :startVal="startVal.value"
                  :endVal="endVal.valueTwo"
                  :durantion="durantion"
                ></CountTo>
                <span>人</span>
            </div>
        </div>
        <div>
            <div class="title">转业军官随调家属</div>
            <div class="number">
                <CountTo
                    :startVal="startVal.value"
                    :endVal="endVal.valueTwo"
                    :durantion="durantion"
                ></CountTo>
                <span>人</span>
            </div>
        </div>
        <div>
            <div class="title">复原军官</div>
            <div class="number">
                <CountTo
                    :startVal="startVal.value"
                    :endVal="endVal.valueTwo"
                    :durantion="durantion"
                ></CountTo>
                <span>人</span>
            </div>
        </div>
        <div>
            <div class="title">安排工作退役士兵</div>
            <div class="number">
                <CountTo
                    :startVal="startVal.value"
                    :endVal="endVal.valueTwo"
                    :durantion="durantion"
                ></CountTo>
                <span>人</span>
            </div>
        </div>
        <div>
            <div class="title">计划移交残疾军人</div>
            <div class="number">
                <CountTo
                    :startVal="startVal.value"
                    :endVal="endVal.valueTwo"
                    :durantion="durantion"
                ></CountTo>
                <span>人</span>
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
import { randomPieSeries } from '../../jiuyechuanye/center/utils'

const arrays = [
  { size: 15, axis: [100,110] },
  { size: 25, axis: [260,90] },
  { size: 40, axis: [260,180] },
  { size: 30, axis: [180,260] },
  { size: 15, axis: [350,270] },
  { size: 15, axis: [230,310] },
  { size: 10, axis: [280,270] },
  { size: 15, axis: [290,340] },
  { size: 10, axis: [160,90] },
  { size: 10, axis: [190,150] },
  { size: 10, axis: [230,120] },
]

echarts.registerMap('Map', xiaMenMapData)
const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 12 }
  },
  title: { show: false },
  series: [
    ...arrays.map(item => {
      const axis = item.axis
      axis[0] = axis[0] + 65
      axis[1] = axis[1] * 0.9 + 40
      const size = item.size
      const series = {
        tooltip: {
          position: function (point, params, dom, rect, size) {
            const { height } = rect
            const { data: { center } } = params
            const [x, y] = center
            return [x - 75, y + (height / 2) + 7]
          },
          formatter:(params, ticket) => {
            return `
              <div>就业军官：${params.data.value}人</div>
              <div>转业军官随调家属: ${params.data.value}人</div>
              <div>复原军官: ${params.data.value}人</div>
              <div>安排工作退役士兵: ${params.data.value}人</div>
              <div>计划移交残疾军人: ${params.data.value}人</div>
              `
          },
          backgroundColor: '#2d81b7',
          textStyle: { color: '#fff' },
          borderWidth: 0,
          extraCssText: 'width: 150px;height: 110px;padding:10px;',
        },
      }
      return randomPieSeries(axis, size, series)
    }),
    {
      name: '浙江省',
      type: 'map',
      map: 'Map',
      data: [],
      zlevel: 10,
      itemStyle: {
        areaColor: 'rgb(3, 45, 75)',
        borderColor: '#094f74',
        borderWidth: '1',
      },
      emphasis: {
        disable: false,
        itemStyle: { areaColor: 'rgb(3, 45, 75)' },
        label: { show: false }
      },
      label: {
        show: false,
        fontSize: 8,
        color: '#fff'
      },
      boundingCoords: [
        [117.880412,35.957975],
        [120.472644,31.480706]
      ],
      silent: true,
    },
  ],
})

const chartRef = ref()
const startVal = ref(0)
const endVal = { value: 2000, valueTwo: 1500 }
const durantion = 800
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value
    endVal.value = Math.random() * 1500 + 200
    endVal.valueTwo = Math.random() * 800 + 200
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
    position: relative;
}
.message-rank {
    position: absolute;
    width: 140px;
    height: 240px;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      background-image: url('@/assets/images/member/distribution-bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
    }

    .title {
        font-size: 10px;
        margin: 0 4%;
        color: white;
    }
    .number {
        flex: 1;
        padding-right: 8px;
        font-size: 10px;
        border-radius: 4px;
        text-align: right;
        color: #4798df;
    }
}
</style>
