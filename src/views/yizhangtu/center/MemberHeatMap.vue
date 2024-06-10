<template>
  <div class="map-cover">
    <v-chart ref="chartRef" class="chart charts" :option="option" autoresize />
    <div class="cover-left"></div>
    <div class="cover-right"></div>
    <div class="cover-top"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import xiaMenMapData from '@/assets/map/jiangsu.json'
import chinaMapData from '@/assets/map/china_new.json'

const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港'
const city = cityStr.split('、').map(i => i + '市')

echarts.registerMap('Map', xiaMenMapData)
echarts.registerMap('chinaMap', chinaMapData)
const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 12 }
  },
  title: { show: false },
  geo: [
    {
      silent: true,
      type: 'map',
      map: 'chinaMap',
      data: [],
      zlevel: 1,
      zoom: 1.5,
      itemStyle: {
        areaColor: 'rgba(0,0,0,0.1)',
        borderColor: '#808080',
        borderWidth: '1',
      },
      tooltip: { show: false },
      label: { show: false },
      boundingCoords: [
        [113.880412, 35.557975],
        [125.472644, 30.780706]
      ]
    },
    {
      name: '浙江省',
      type: 'map',
      map: 'Map',
      data: [],
      zlevel: 2,
      zoom: 1.5,
      itemStyle: {
        areaColor: 'rgb(8,50,116, 0.6)',
        borderColor: '#00D2FF',
        borderWidth: '1',
        // shadowColor: 'rgba(106, 208, 246, 0.2)',
        // shadowOffsetX: 10,
        // shadowOffsetY: 10,
        // shadowBlur: 35,
      },
      // emphasis: {
      //   disable: false,
      //   itemStyle: {
      //     areaColor: 'rgb(8,50,116, 1)',
      //   },
      //   label: { show: false },
      //   tooltip: { show: false }
      // },
      label: {
        show: true,
        fontSize: 12,
        color: '#808080'
      },
      tooltip: { show: false },
      boundingCoords: [
        [113.880412,35.557975],
        [125.472644,30.780706]
      ]
    }
  ],
  legend: {
    bottom: '20px',
    width: '350px',
    zlevel: 3,
    textStyle: { color: '#E0E0E0' },
    data: ['退役军人', '信访事件', '服务中心站', '服务保障机构', '军休机构', '军供站', '资金项目']
  },
  color: ['#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#3ba172', '#fc8352'],
  series: [
    {
      type: 'scatter',
      name: '退役军人',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['退役军人', 120.437895, 33.633365],
        ['退役军人', 118.837129, 33.161133],
        ['退役军人', 120.102817, 32.555716],
        ['退役军人', 120.504219, 31.416964],
        ['退役军人', 119.291211, 32.456849],
        ['退役军人', 120.182558, 31.163505]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '信访事件',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['信访事件', 118.803895, 34.163765],
        ['信访事件', 119.807129, 33.049133],
        ['信访事件', 120.802827, 32.955716],
        ['信访事件', 121.104219, 32.461964],
        ['信访事件', 118.891611, 31.856849],
        ['信访事件', 121.719558, 31.665005]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '服务中心站',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['服务中心站1', 119.803895, 32.955765],
        ['服务中心站2', 118.807129, 33.061133],
        ['服务中心站3', 120.902817, 32.955716],
        ['服务中心站4', 120.122159, 32.469164],
        ['服务中心站5', 120.895151, 31.553489],
        ['服务中心站6', 120.789558, 31.826505]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '服务保障机构',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['服务保障机构', 118.803895, 34.623765],
        ['服务保障机构', 119.807129, 33.061213],
        ['服务保障机构', 120.802517, 32.955716],
        ['服务保障机构', 121.104319, 32.42364],
        ['服务保障机构', 118.893211, 31.851149],
        ['服务保障机构', 121.789258, 31.996505]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '军休机构',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['军休机构', 118.813895, 34.043765],
        ['军休机构', 119.802129, 33.061233],
        ['军休机构', 120.802217, 32.955716],
        ['军休机构', 121.105219, 32.42964],
        ['军休机构', 118.891311, 31.256849],
        ['军休机构', 121.782558, 31.861505]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '军供站',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['军供站', 118.813795, 34.042765],
        ['军供站', 119.803129, 33.061213],
        ['军供站', 120.802387, 32.951716],
        ['军供站', 121.105279, 32.42764],
        ['军供站', 118.891611, 31.256449],
        ['军供站', 121.781558, 31.861405]
      ]
    },
    {
      show: false,
      type: 'scatter',
      name: '资金项目',
      symbolSize: 6,
      zlevel: 3,
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      geoIndex: 1,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0],
        lng: 1,
        lat: 2
      },
      data: [
        ['资金项目', 118.813195, 34.045765],
        ['资金项目', 119.802529, 33.061733],
        ['资金项目', 120.812217, 32.951716],
        ['资金项目', 121.115219, 32.22964],
        ['资金项目', 118.895311, 31.216849],
        ['资金项目', 121.684558, 31.861905]
      ]
    }
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
  chartRef.value.dispatchAction({
    type: 'legendInverseSelect'
  })
  chartRef.value.dispatchAction({
    type: 'legendSelect',
    // 图例名称
    name: '退役军人'
  })
  historyRef.name = name
}
// const test = () => {
//   setTimeout(() => {
//     randomCity()
//     test()
//   }, 3000)
// }

setTimeout(() => {chartRef.value.setOption({
  series: [],
})
randomCity()
})
</script>

<style lang="scss" scoped>
.map-cover {
  height: 560px;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0;
}
.cover-left {
  position: absolute;
  min-width: 120px;
  height: 610px;
  margin-left: 0px;
  margin-top: -50px;
  background: linear-gradient(to right, #020b1bff, #00000000);
}

.cover-right {
  position: absolute;
  min-width: 120px;
  height: 610px;
  right: 0;
  margin-right: 0;
  margin-top: -50px;
  background: linear-gradient(to left, #020b1bff, #ffffff00);
}

.cover-top {
  position: absolute;
  width: 100%;
  min-height: 120px;
  margin-top: -50px;
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
  .title {
    width: 100%;
    height: 100px;
    font-size: 40px;
    padding: 12px 90px;
    font-weight: 800;
    color: white;
    white-space: nowrap;
    align-content: center;
  }
}
.message-rank {
  position: absolute;
  width: 600px;
  height: 700px;
  background: rgba(33, 156, 204, 0.2);
  bottom: 170px;
  left: 1760px;
}
</style>
