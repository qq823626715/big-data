<!--
 * @Description: 树状图
-->
<script setup>
import { ref, provide, watch } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'

import * as echarts from 'echarts/core'
import { TooltipComponent } from 'echarts/components'
import { TreeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TooltipComponent, TreeChart, CanvasRenderer])

import {treeChartsData} from '@/data/gerenhuaxiang'
provide(THEME_KEY, 'dark')

const props = defineProps(['data'])

const formatData = formatDataColor(treeChartsData)
function formatDataColor(array) {
  return array.map(item => {
    let color = '#FFFFFF'
    if (item.children && item.children.length > 0) {
      item.children = formatDataColor(item.children)
      item.value = item.children.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
    }
    if (item.value >= 1 && item.value < 3) {
      color = '#4096ff'
    } else if (item.value >= 3 && item.value < 9) {
      color = '#faad14'
    } else if (item.value >= 9) {
      color = '#c62828'
    } else {
      color = '#FFFFFF'
    }
    return {
      ...item,
      label: { color: color},
      tooltip: { textStyle: { color: color !== '#FFFFFF'?'#FFFFFF':'' }, backgroundColor: color },
      itemStyle: { color: color}
    }
  })
}
const option = ref({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    valueFormatter: () => ''
  },
  series: [
    {
      type: 'tree',
      data: formatData,
      top: '0',
      left: '15%',
      bottom: '1%',
      right: '30%',
      symbolSize: 6,
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 10,
        shadowBlur: 0
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          shadowBlur: 0
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
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
  height: 486px;
  width: 415px;
}
</style>
