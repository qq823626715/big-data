<!--
 * @Description: 智享服务
-->
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
import nanJinMapData from '@/assets/map/nanjin.json'
import jiangSuMapData from '@/assets/map/jiangsu.json'
// import chinaMapData from '@/assets/map/china_new.json'
// import Citycharts from './Citycharts.vue'
// import Messagerank from './Messagerank.vue'

echarts.registerMap('jsMap', jiangSuMapData)
echarts.registerMap('njMap', nanJinMapData)
// echarts.registerMap('chinaMap', chinaMapData)

const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 12 }
  },
  title: { show: false },
  geo: {
    type: 'map',
    map: 'njMap',
    zoom: 15,
    roam: true,
    itemStyle: {
      areaColor: 'rgb(8,50,116, 0.6)',
      borderColor: '#00D2FF',
      borderWidth: '1',
      shadowColor: 'rgba(106, 208, 246, 0.2)',
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowBlur: 35,
    },
    label: {
      show: true,
      fontSize: 12,
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    center: [118.802817, 32.055716],
  },
  series: [
    {
      type: 'scatter',
      name: '智享服务',
      symbolSize: 20,
      coordinateSystem: 'geo',
      label: {
        show: true
      },
      geoIndex: 0,
      tooltip: {
        show: true
      },
      labelLine: { show: true },
      encode: {
        label: [0],
        tooltip: [0,1,2],
        lng: 3,
        lat: 4
      },
      data: [
        ['公交', '免费', '2023-11-01 10:25:09', 118.803895, 32.063765],
        ['好吃龙虾店', '优惠80%',  '2024-01-01 11:25:09', 118.807129, 32.061133],
        ['公交', '免费', '2024-02-02 16:25:09', 118.802817, 32.055716],
        ['好玩景区', '免费', '2024-03-02 10:25:09', 118.804219, 32.06964],
        ['好看电影院', '优惠70%',  '2024-03-07 20:22:09', 118.791211, 32.056849],
        ['公交', '免费', '2024-03-29 14:07:09', 118.789558, 32.06505]
      ]
    }
  ],
})

const chartRef = ref()

setTimeout(() => {
  chartRef.value.setOption({
    series: [],
  })
})
</script>

<style lang="scss" scoped>
.map-cover {
  height: 578px;
  margin: 0;
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.cover-left {
  position: absolute;
  min-width: 100px;
  height: 578px;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #020b1bff, #00000000);
}

.cover-right {
  position: absolute;
  min-width: 100px;
  height: 578px;
  right: 0;
  top: 0;
  background: linear-gradient(to left, #020b1bff, #ffffff00);
}

.cover-top {
  position: absolute;
  width: 100%;
  min-height: 120px;
  top: 0;
  left: 0;
  right: 0;
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

