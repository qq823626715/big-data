<template>
    <div class="chart-wapper">
        <v-chart
            ref="chartRef"
            class="chart charts"
            :option="option"
            autoresize
        />
    </div>
    <div class="message-rank one">
        <div class="title">就业人数</div>
        <div class="number">
            <CountTo
                :startVal="startVal.value"
                :endVal="52303"
                :durantion="durantion"
            ></CountTo>
            <span style="font-size: 14px;">人</span>
        </div>
    </div>
    <div class="message-rank two">
        <div class="title">创业人数</div>
        <div class="number">
            <CountTo
                :startVal="startVal.value"
                :endVal="13982"
                :durantion="durantion"
            ></CountTo>
            <span style="font-size: 14px;">人</span>
        </div>
    </div>
    <div class="message-rank three">
        <div class="title">培训人次</div>
        <div class="number">
            <CountTo
                :startVal="startVal.value"
                :endVal="32651"
                :durantion="durantion"
            ></CountTo>
            <span style="font-size: 14px;">次</span>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts/index.blank'
import { CountTo } from 'vue3-count-to'
import xiaMenMapData from '@/assets/map/jiangsu.json'
import { randomPieSeries } from './utils'

  
echarts.registerMap('Map', xiaMenMapData);
const option = ref({
    tooltip: {
      trigger: 'item',
      textStyle: { fontSize: 12 }
    },
    title: { show: false },
    series: [
        randomPieSeries([100,110], 15, { itemStyle: { color: '#005ddf' } }),
        randomPieSeries([260,90], 25, { itemStyle: { color: '#005ddf' } }),
        randomPieSeries([260,180], 40, { itemStyle: { color: '#03DF9E' } }),
        randomPieSeries([180,260], 30, { itemStyle: { color: '#005ddf' } }),
        randomPieSeries([350,270], 15, { itemStyle: { color: '#03DF9E' } }),
        randomPieSeries([230,310], 15, { itemStyle: { color: '#005ddf' } }),
        randomPieSeries([280,270], 10, { itemStyle: { color: '#03DF9E' } }),
        randomPieSeries([290,340], 15, { itemStyle: { color: '#005ddf' } }),
        randomPieSeries([160,90], 10, { itemStyle: { color: '#FF8A37' } }),
        randomPieSeries([190,150], 10, { itemStyle: { color: '#FF8A37' } }),
        randomPieSeries([230,120], 10, { itemStyle: { color: '#FF8A37' } }),
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
                disable: true,
                itemStyle: { areaColor: 'rgb(3, 45, 75)' },
                label: { show: false, }
            },
            label: {
                show: false,
                fontSize: 8,
                color: '#fff'
            },
            boundingCoords: [
                [120.880412,35.057975],
                [120.472644,31.180706]
            ]
        },
    ],
})
  
const chartRef = ref()
const startVal = ref(0);
const endVal = { value: 2000, valueTwo: 1500 };
const durantion = 800;
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value;
    endVal.value = Math.random() * 1500 + 200;
    endVal.valueTwo = Math.random() * 800 + 200;
    test();
  }, 4000);
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
.message-rank {
    position: absolute;
    width: 220px;
    height: 32px;
    margin-left: 350px;
    display: flex;

    &.one {
        margin-top: 80px;

        > .number {
            color: #005ddf;
        }
    }
    &.two {
        margin-top: 120px;

        > .number {
            color: #03DF9E;
        }
    }
    &.three {
        margin-top: 160px;

        > .number {
            color: #FF8A37;
        }
    }

    > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        gap: 4px;
    }

    .title {
        font-size: 14px;
        margin: 0 4%;
    }
    .number {
        width: 60%;
        font-size: 24px;
        // background: #2b74a4;
        height: 100%;
        border-radius: 4px;
        color: white;
        gap: 4px;
    }
}
</style>
  