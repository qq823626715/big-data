<!--
 * @Description: 拥军足迹
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
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import chinaMapData from '@/assets/map/china_new.json'
echarts.registerMap('chinaMap', chinaMapData)

const option = ref({
  tooltip: {
    trigger: 'item',
    textStyle: { fontSize: 12 }
  },
  title: { show: false },
  geo: {
    type: 'map',
    map: 'chinaMap',
    roam: true,
    zoom: 4,
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
      color: '#C0C0C0'
    },
    tooltip: {
      show: false
    },
    center: [106.81457, 32.06806]
  },
  series: [
    {
      type: 'lines',
      name: '红军长征路线',
      symbolSize: 12,
      symbol: 'circle',
      coordinateSystem: 'geo',
      label: {
        show: false
      },
      polyline: true,
      geoIndex: 0,
      tooltip: {
        show: false
      },
      lineStyle: {
        color: 'rgb(200, 35, 45)',
        opacity: 0.8,
        width: 3
      },
      data: [
        { coords: [
          [116.02709, 25.88562],
          [115.41544, 25.95184],
          [116.32573, 26.83729],
          [115.01161, 25.86076],
          [ 115.786, 25.60039],
          [ 114.92285, 25.38617],
          [ 113.68493, 25.55036],
          [ 113.34746, 25.13014],
          [ 112.94887, 25.39957],
          [ 111.60007, 25.52753],
          [ 111.16083, 25.48932],
          [ 111.07304, 25.92861],
          [ 110.67147, 25.61169],
          [ 110.01149, 25.79809],
          [ 109.78449, 26.15794],
          [ 109.13718, 26.22924],
          [ 107.47106, 27.0779],
          [ 107.88825, 27.22536],
          [ 106.82922, 27.53625],
          [ 106.82502, 28.13321],
          [ 106.40156, 27.79234],
          [ 106.20385, 28.3274],
          [ 105.69744, 28.59055],
          [ 105.04818, 27.840693],
          [ 104.25485, 25.67422],
          [ 102.47145, 25.55128],
          [ 102.24457, 26.65527],
          [ 102.17678, 28.55018],
          [ 102.35944, 29.22799],
          [ 102.23471, 29.91412],
          [ 102.81457, 30.36806],
          [ 102.3644, 30.99918],
          [ 102.20644, 31.90585],
          [ 102.54438, 32.79087],
          [ 103.59893, 32.63813],
          [ 102.96187, 33.57586],
          [ 103.22175, 34.05587],
          [ 104.03697, 34.43811],
          [ 105.24219, 35.21087],
          [ 105.05334, 35.69291],
          [ 105.72911, 35.96385],
          [ 107.60128, 37.59454],
          [ 108.17587, 36.92728]
        ] }
      ]
    },
    {
      type: 'scatter',
      name: '红军长征途径点',
      symbolSize: 10,
      coordinateSystem: 'geo',
      label: {
        show: true,
        position: 'top',
        color: '#FFFFFF'
      },
      itemStyle: {
        color: 'rgb(200, 35, 45)'
      },
      geoIndex: 0,
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
        ['瑞金市（长征起点）', 116.02709, 25.88562],
        ['于都县', 115.41544, 25.95184],
        ['广昌县', 116.32573, 26.83729],
        ['赣县', 115.01161, 25.86076],
        ['会昌县', 115.786, 25.60039],
        ['信丰县', 114.92285, 25.38617],
        ['汝城县', 113.68493, 25.55036],
        ['乐昌市', 113.34746, 25.13014],
        ['宣章县', 112.94887, 25.39957],
        ['道县', 111.60007, 25.52753],
        ['灌阳县', 111.16083, 25.48932],
        ['全州县', 111.07304, 25.92861],
        ['兴安县', 110.67147, 25.61169],
        ['龙胜各族自治县', 110.01149, 25.79809],
        ['通道桐族自治县', 109.78449, 26.15794],
        ['黎平县', 109.13718, 26.22924],
        ['瓮安县', 107.47106, 27.0779],
        ['余庆县', 107.88825, 27.22536],
        ['遵义市', 106.82922, 27.53625],
        ['桐梓县', 106.82502, 28.13321],
        ['仁怀市', 106.40156, 27.79234],
        ['习水县', 106.20385, 28.3274],
        ['赤水市', 105.69744, 28.59055],
        ['扎西镇（威信县）', 105.04818, 27.840693],
        ['富源县', 104.25485, 25.67422],
        ['禄劝彝族苗族自治县', 102.47145, 25.55128],
        ['会理市', 102.24457, 26.65527],
        ['冕宁县', 102.17678, 28.55018],
        ['石棉县', 102.35944, 29.22799],
        ['泸定县', 102.23471, 29.91412],
        ['宝兴县', 102.81457, 30.36806],
        ['小金县', 102.3644, 30.99918],
        ['马尔康市', 102.20644, 31.90585],
        ['红原县', 102.54438, 32.79087],
        ['松潘县', 103.59893, 32.63813],
        ['若尔盖县', 102.96187, 33.57586],
        ['迭部县', 103.22175, 34.05587],
        ['崐县', 104.03697, 34.43811],
        ['通渭县', 105.24219, 35.21087],
        ['会宁县', 105.05334, 35.69291],
        ['西吉县', 105.72911, 35.96385],
        ['定边县', 107.60128, 37.59454],
        ['吴起县', 108.17587, 36.92728]
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

