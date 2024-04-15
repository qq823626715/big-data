<!--
 * @Description: 关系图谱
-->
<script setup>
import { ref, provide, watch } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'

import * as echarts from 'echarts/core'
import { TooltipComponent } from 'echarts/components'
import { GraphChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TooltipComponent, GraphChart, CanvasRenderer])

provide(THEME_KEY, 'dark')

import { graphChartsDataJson } from '@/data/gerenhuaxiang.js'

const chartsData = []
const chartsLinks = []
const chartsCategories = []
function formatData(dataArr, category, index = 0) {
  if (!dataArr || dataArr.length ===  0) {
    return
  }
  chartsData.push(...dataArr.map(item => {
    if (item.category) {
      chartsCategories.push({ name: item.name })
      return {
        name: item.name,
        value: 0,
        category: item.category || category,
        symbol: 'image://images/avatar.png',
        symbolSize: chartsCategories.length === 1 ? 50 : 30
      }
    }  else {
      return {
        name: item.name,
        value: 0,
        category: category,
        symbolSize: index ? Math.max(40 - index * 10, 5) : 30
      }
    }
  }))
  dataArr.forEach(item => {
    if (item.children) {
      chartsLinks.push(...item.children.map(item2 => ({ source: item.name, target: item2.name })))
      formatData(item.children, item.category || category, item.category?1:index + 1)
    }
  })
}
formatData(graphChartsDataJson)
const option = ref({
  // title: {
  //   text: 'Les Miserables',
  //   subtext: 'Default layout',
  //   top: 'bottom',
  //   left: 'right'
  // },
  zoom: 0.2,
  center: ['50%', '50%'],
  tooltip: {
    formatter: (params) => { return params.data.category + '-' + params.name },
  },
  legend: [
    {
      // selectedMode: 'single',
      data: chartsCategories
    }
  ],
  // edgeLabel: {
  //   show: true,
  //   formatter: '{b}'
  // },
  // label: {
  //   show: true,
  //   position: 'right',
  //   formatter: '{b}'
  // },
  labelLayout: {
    // hideOverlap: true
  },
  series: [
    {
      name: '',
      type: 'graph',
      layout: 'force',
      data: chartsData, // 数据
      links: chartsLinks, // 连线
      categories: chartsCategories, // 分组
      roam: true,
      label: {
        show: true,
        position: 'center',
        formatter: '{b}'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      },
      force: {
        edgeLength: 60,
        initLayout: 'circular',
        repulsion: 200
      }
    }
  ]
})

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
  chartRef.value.chart.on('click', function(params) {
    console.log(params)
  })
})

const props = defineProps(['data'])
watch(() => props.data, () => {
  chartRef.value.setOption({
    series: [
      {
        data: props.data || [],
      }
    ]
  })
})

</script>
<template>
  <div class="chart-wrapper">
    <v-chart
      ref="chartRef"
      class="chart"
      :option="option"
      autoresize
    />
  </div>
</template>

<style lang="scss" scoped>
.chart {
  height: 580px;
  width: 830px;
}
</style>