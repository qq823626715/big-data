<!--
 * @Description: 个人画像-词云图
-->
<script setup>
import { ref, provide, watch } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import 'echarts-wordcloud'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'

import { maskImageBase64, wordcloudData } from '@/data/gerenhuaxiang.js'

use([CanvasRenderer])


const maskImage = new Image()
maskImage.width = 415
maskImage.height = 415
maskImage.src = maskImageBase64
provide(THEME_KEY, 'dark')

const props = defineProps(['data'])

const colors = ['rgba(101, 220, 222, 80%)', 'rgba(50, 130, 246, 80%)', 'rgba(53, 128, 187, 80%)', 'rgba(159, 252, 253, 80%)']
const option = ref({
  backgroundColor: 'transparent',
  color: colors,
  series: [
    {
      type: 'wordCloud',
      shape: 'circle',
      //maskImage的横纵比为1:1
      keepAspect: true,
      //掩码图像。设置形状为图片的形状。
      maskImage: maskImage,
      left: 0,
      top: 'center',
      width: '100%',
      height: '100%',
      right: 0,
      bottom: 'center',
      //sizeRange ：词云的文字字号范围，默认是[12, 60] ，
      //词云会根据提供原始数据的 value 对文字的字号进行渲染。以默认值为例， value 最小的渲染为 12px ，最大的渲染为 60px ，中间的值按比例计算相应的数值。
      sizeRange: [10, 40],

      //词云中文字的角度，词云中的文字会随机的在 rotationRange 范围内旋转角度，
      //渲染的梯度就是 rotationStep ，这个值越小，词云里出现的角度种类就越多
      rotationRange: [0, 90],
      rotationStep: 45,

      //词云中每个词的间距
      gridSize: 5,
      //是否允许词云在边界外渲染，直接使用默认参数 false 就可以，否则容易造成词重叠。
      drawOutOfBound: false,
      // 过大的文字是否缩小显示，false则隐藏
      shrinkToFit: true,
      // 是否启用布局动画
      layoutAnimation: true,
      //词云中文字的样式， textStyle是初始的样式， emphasis 是鼠标移到文字上的样式。
      textStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textShadowColor: '#FFFFFF',
        textShadowBlur: 8,
        textShadowOffsetX: 8,
        textShadowOffsetY: 8,
        // color: 'transparent',
        // Color can be a callback function or a color string
        color: function (item) {
          // Random color
          const mainData = [
            '重点关注',
            '先锋模范',
            '就业困难',
            '资金异常'
          ]
          return mainData.includes(item.name) ? colors[Math.floor(Math.random() * 4)] : 'rgba(18,60,97,30%)'
        }
      },
      emphasis: {
        focus: 'self',
        textStyle: {
          textShadowBlur: 10,
          textShadowColor: '#333'
        }
      },

      //所有的数据，根据value值的大小进行配置
      data: wordcloudData
    },
  ],
})
const emit = defineEmits(['tag-click'])

const chartRef = ref()
setTimeout(() => {
  chartRef.value.setOption(option)
  chartRef.value.chart.on('click', (params) => {
    emit('tag-click', params)
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
