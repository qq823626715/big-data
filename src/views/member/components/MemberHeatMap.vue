<template>
  <div class="map-cover">
    <v-chart ref="chartRef" class="chart charts" :option="option" autoresize />
    <div class="cover-left"></div>
    <div class="cover-right"></div>
    <div class="cover-top"></div>
    <div v-if="historyRef.name" class="map-tooltip" :class="{ 'map-tooltip-narrow': pageType === 'narrow'}">
      <div class="title">{{ historyRef.name }}</div>
      <Citycharts :city="historyRef.name" />
    </div>
    <div class="message-rank" :class="{ 'message-rank-narrow': pageType === 'narrow'}">
      <Messagerank />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import xiaMenMapData from '@/assets/map/jiangsu.json'
import chinaMapData from '@/assets/map/china_new.json'
import Citycharts from '../components/Citycharts.vue'
import Messagerank from '../components/Messagerank.vue'

const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港'
const city = cityStr.split('、').map(i => i + '市')

const props = defineProps({
  pageType: {
    type: String,
    default: '',
  },
})
echarts.registerMap('Map', xiaMenMapData)
echarts.registerMap('chinaMap', chinaMapData)
const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 36 }
  },
  title: { show: false },
  series: [
    {
      name: '浙江省',
      type: 'map',
      map: 'Map',
      data: [],
      zlevel: 10,
      itemStyle: {
        areaColor: 'rgb(8,50,116, 0.6)',
        borderColor: '#00D2FF',
        borderWidth: '1',
        shadowColor: 'rgba(106, 208, 246, 0.2)',
        shadowOffsetX: -10,
        shadowOffsetY: 10,
        shadowBlur: 65,
      },
      emphasis: {
        disable: false,
        itemStyle: {
          areaColor: 'rgb(8,50,116, 1)',
        },
        label: { show: false }
      },
      label: {
        show: true,
        fontSize: 28,
        color: '#fff'
      },
      boundingCoords: [
        [113.880412,35.557975],
        [125.472644,30.780706]
      ]
    },
    {
      silent: true,
      type: 'map',
      map: 'chinaMap',
      data: [],
      zlevel: 1,
      itemStyle: {
        areaColor: 'rgba(0,0,0,0.1)',
        borderColor: '#fff',
        borderWidth: '1',
      },
      tooltip: { show: false },
      label: { show: false },
      boundingCoords: [
        [113.880412,35.557975],
        [125.472644,30.780706]
      ]
    },
  ],
})

const chartRef = ref()
const historyRef = reactive({ name: '' })

const randomCity = () => {
  const len = city.length
  let name = city[Math.floor(Math.random() * len)]
  while (name === historyRef.value) {
    name = city[Math.floor(Math.random() * len)]
  }
  chartRef.value.dispatchAction({
    type: 'downplay',
    name: historyRef.name,
  })
  chartRef.value.dispatchAction({
    type: 'highlight',
    name,
  })
  historyRef.name = name
}
const test = () => {
  setTimeout(() => {
    randomCity()
    test()
  }, 3000)
}

setTimeout(() => {chartRef.value.setOption({
  series: [],
})
test()
})
</script>

<style lang="scss" scoped>
.map-cover {
  height: 1930px;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 130px;
  left: -50px;
}
.cover-left {
  position: absolute;
  min-width: 200px;
  height: 100%;
  margin-left: -5px;
  background: linear-gradient(to right, #020b1bff, #00000000);
}

.cover-right {
  position: absolute;
  min-width: 200px;
  height: 100%;
  right: 0;
  margin-right: -5px;
  background: linear-gradient(to left, #020b1bff, #ffffff00);
}

.cover-top {
  position: absolute;
  width: 100%;
  min-height: 200px;
  margin-top: -5px;
  background: linear-gradient(to bottom, #020b1bff, #00000000);
}
.charts {
  position: absolute;
}
.map-tooltip {
  position: absolute;
  width: 850px;
  height: 500px;
  background: linear-gradient(to bottom, rgb(3, 54, 148, 0.4),rgb(2, 178, 248, 0.2));
  top: 450px;
  right: 1700px;
  &.map-tooltip-narrow {
    right: 830px;
    top: 350px;
  }
  .title {
    width: 100%;
    height: 100px;
    font-size: 40px;
    padding: 12px 90px;
    font-weight: 800;
    color: #C0C0C0;
    white-space: nowrap;
    align-content: center;
  }
}
.message-rank {
  position: absolute;
  width: 600px;
  height: 700px;
  background: rgba(33, 156, 204, 0.2);
  bottom: 0;
  left: 1760px;
  &.message-rank-narrow {
    left: 960px;
  }
}
</style>
