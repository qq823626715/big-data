<script setup>
import { ref, provide } from 'vue'
import VChart from 'vue-echarts'
import * as echarts from 'echarts'
import WapperTitle from '../../jiuyechuanye/wapperTitle.vue'

const cityStr = '苏州、无锡、常州、镇江、南京、南通、扬州、泰州、盐城、淮安、宿迁、徐州、连云港';
const citys = cityStr.split('、')
const yAxis = new Array(10).fill(0).map((__, index) => citys[index]);
const randomDatas = () => yAxis.map((__, index) => 40 + index * 10);
const datas = randomDatas();

const OPTION_TEMPLETE = {
  title: { show: false },
  tooltip: { show: false },
  grid: {
    width: 85,
    height: 179,
    top: 5,
    left: 24
  },
  xAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLine: { show: false }, 
    axisLabel: { show: false },
  },
  yAxis: {
    type: 'category',
    data: yAxis,
    splitLine: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: '#fff',
      fontSize: 8,
    }
  },
  series: [
      {
        data: datas,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(255,255,255,0)',
          borderRadius:5,
          borderColor: "#30a7da",
          borderWidth:1,
        },
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgb(37, 185, 235)'
          },{
            offset: 1,
            color: 'rgb(37, 185, 235, 0.6)'
          }]),
          barBorderRadius: [5, 5, 5, 5],
        },
        label: {
          show: true,
          position: [95, 0], 
          color: '#fff',
          fontSize: 8,
          offset: [0,2],
        }
      }
    ]
  }

const getNewOption = (option) => ({ ...JSON.parse(JSON.stringify(OPTION_TEMPLETE)), ...option });
const option = ref(getNewOption({}))
const newOptions = getNewOption({
  grid: {
    width: 125,
    height: 179,
    top: 5,
    left: 24
  },
  series: [
    {
      data: datas,
        type: 'bar',
        backgroundStyle: { borderWidth:0 },
        barWidth: 3,
        itemStyle: { color: '#57c9fa', },
        label: { show: false }
    },
    {
      data: datas.map(number => Math.random() * number),
      type: 'bar',
      backgroundStyle: { borderWidth:0 },
      barWidth: 3,
      itemStyle: { color: '#2d7ef3' },
      label: { show: false }
    }
  ]
});
const optionTwo = ref(newOptions)

const chartRef = ref()
const chartRefTwo = ref()
setTimeout(() => {
  chartRef.value.setOption(option.value)
  chartRefTwo.value.setOption(optionTwo.value)
})
</script>

<template>
  <div class="contain">
    <div class="chart-contain">
      <WapperTitle
        :title="'2024诉求量TOP10服务站'"
        :iconHidden="true"
      />
      <div class="chart-wrapper">
        <div class="rank-icon">
          <div v-for="(__, index) in yAxis" >
            {{ index < 3 ? 'TOP' : '' }}{{ index }}
          </div>
        </div>
        <v-chart
          ref="chartRef"
          class="chart"
          :option="option"
          autoresize
        />
      </div>
    </div>
    <div class="split-line"></div>
    <div class="chart-contain">
      <WapperTitle
        :title="'2024处理时效top10服务站'"
        :iconHidden="true"
      />
      <div class="chart-wrapper">
        <div class="rank-icon">
          <div v-for="(__, index) in yAxis" >
            {{ index < 3 ? 'TOP' : '' }}{{ index }}
          </div>
        </div>
        <v-chart
          ref="chartRefTwo"
          class="chart"
          :option="optionTwo"
          autoresize
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  width: 100%;
  flex: 1;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chart-contain {
    width: 49%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.split-line {
  width: 1px;
  height: calc(100% - 30px);
  background: rgba(255,255,255,0.1);
  margin-top: 30px;
}
.chart-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,0.1);
}
.rank-icon {
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > div {
    width: 12px;
    text-align: center;
    line-height: 1.5;
    border-radius: 4px;
    height: 12px;
    font-size: 8px;
    color: white;
    margin: 3px 4px;
    background-color: #0aa5f5;
    &:first-child {
      margin-top: 7px;
    }
  }
  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3) {
    width: 24px;
    background-color: #ff7054;
  }
}
.chart {
  flex: 1;
}
</style>
