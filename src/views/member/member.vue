<!--
 * @Description: 首页窄屏
-->
<script setup>
import { ref } from 'vue'
import Yijiaoanzhi from './components/Yijiaoanzhi.vue'
import Chuanyejiuye from './components/Chuanyejiuye.vue'
import Xingfangqingkuang from './components/Xingfangqingkuang.vue'
import Yongjunyoufu from './components/Yongjunyoufu.vue'
import Chuanjiuyerenyuanleixing from './components/Chuanjiuyerenyuanleixing.vue'
import Junxiuqingkuang from './components/Junxiuqingkuang.vue'
import Nianduhuodongqingkuang from './components/Nianduhuodongqingkuang.vue'
import Daianzhirenyuan from './components/Daianzhirenyuan.vue'
import Youfuduixiangleixing from './components/Youfuduixiangleixing.vue'
import Junxiurenyuanbianhuaqushi from './components/Junxiurenyuanbianhuaqushi.vue'
import Niandupeixunqingkuang from './components/Niandupeixunqingkuang.vue'
import Xinfangsuqiuleixingqingkuang from './components/Xinfangsuqiuleixingqingkuang.vue'
import MemberHeatMap from './components/MemberHeatMap.vue'
import MemberDatas from './components/MemberDatas.vue'
import masker from '@/assets/images/masker.png'
import memberBg from '@/assets/images/member/member-bg.png'

let autoScale = true
// autoScale = false
const leftViewEnum = [
  '数据视图一',
  '数据视图二'
]
const rightViewEnum = [
  '数据视图一',
  '数据视图二'
]
const leftActiveView = ref('数据视图一')
const rightActiveView = ref('数据视图一')
function handleLeftViewEnumClick(item) {
  leftActiveView.value = item
}
function handleRightViewEnumClick(item) {
  rightActiveView.value = item
}
</script>

<template>
  <v-scale-screen
    :autoScale="autoScale"
    :width="3660"
    :height="2060"
    :boxStyle="{
      background: `url(${memberBg})`,
      overflow: autoScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="{
      // backgroundColor: '#000414',
      background: `url(${masker}) 100% 100%`,
    }"
  >
    <Header pageType="narrow">
      <template #title>
        <img
          class="title-image"
          src="@/assets/images/member/member-title.png"
        />
      </template>
    </Header>
    <div class="content">
      <div class="left-container">
        <div class="view-enum-box">
          <div
            v-for="item in leftViewEnum"
            :key="item"
            class="view-tab"
            :class="{ 'active': item === leftActiveView }"
            @click="handleLeftViewEnumClick(item)"
          >{{ item }}</div>
        </div>
        <div class="wrapper-flex-box" :class="{'tab-right' : leftActiveView === '数据视图二'}">
          <div class="wrapper-item left-wrapper-one">
            <WrapperTitle title="移交安置" />
            <div class="wrapper-content">
              <Yijiaoanzhi />
            </div>
          </div>
          <div class="wrapper-item left-wrapper-one">
            <WrapperTitle  title="待安置分布" />
            <div class="wrapper-content">
              <Daianzhirenyuan />
            </div>
          </div>
          <div class="wrapper-item left-wrapper-two">
            <WrapperTitle title="拥军优抚" />
            <div class="wrapper-content">
              <Yongjunyoufu />
            </div>
          </div>
          <div class="wrapper-item left-wrapper-two">
            <WrapperTitle title="优抚对象分类TOP5" :style="{ backgroundSize: '115% 144%', }" />
            <div class="wrapper-content">
              <Youfuduixiangleixing />
            </div>
          </div>
          <div class="wrapper-item left-wrapper-two">
            <WrapperTitle title="军休情况" />
            <div class="wrapper-content">
              <Junxiuqingkuang />
            </div>
          </div>
          <div class="wrapper-item left-wrapper-two">
            <WrapperTitle title="军休变化趋势" :style="{ backgroundSize: '110% 144%', }" />
            <div class="wrapper-content">
              <Junxiurenyuanbianhuaqushi />
            </div>
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas />
        <MemberHeatMap pageType="narrow"/>
      </div>
      <div class="right-container">
        <div class="view-enum-box">
          <div
            v-for="item in rightViewEnum"
            :key="item"
            class="view-tab"
            :class="{ 'active': item === rightActiveView }"
            @click="handleRightViewEnumClick(item)"
          >{{ item }}</div>
        </div>
        <div class="wrapper-flex-box" :class="{'tab-right' : rightActiveView === '数据视图二'}">
          <div class="wrapper-item right-wrapper-one">
            <WrapperTitle title="创业就业" />
            <div class="wrapper-content">
              <Chuanyejiuye />
            </div>
          </div>
          <div class="wrapper-item right-wrapper-one">
            <WrapperTitle title="就业分类" />
            <div class="wrapper-content">
              <Chuanjiuyerenyuanleixing />
            </div>
          </div>
          <div class="wrapper-item right-wrapper-two">
            <WrapperTitle title="年活动情况" />
            <div class="wrapper-content">
              <Nianduhuodongqingkuang />
            </div>
          </div>
          <div class="wrapper-item right-wrapper-two">
            <WrapperTitle title="年度培训情况" />
            <div class="wrapper-content">
              <Niandupeixunqingkuang  />
            </div>
          </div>
          <div class="wrapper-item right-wrapper-three">
            <WrapperTitle title="诉求情况" />
            <div class="wrapper-content">
              <Xingfangqingkuang />
            </div>
          </div>
          <div class="wrapper-item right-wrapper-three">
            <WrapperTitle title="诉求类型情况" :style="{ backgroundSize: '110% 144%', }" />
            <div class="wrapper-content">
              <Xinfangsuqiuleixingqingkuang />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-scale-screen>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  padding: 24px 58px;
  justify-content: space-between;
  .center-container {
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.left-container,
.right-container {
  z-index: 3;
  width: 800px;
  min-width: 800px;
  height: 100%;
  margin-top: 200px;
  overflow: hidden;
  // border: 1px solid red;
  padding: 36px;
}
.wrapper-flex-box {
  display: flex;
  flex-wrap: wrap;
  width: 1600px;
  transition: all 0.5s linear;
  &.tab-right {
    transform: translateX(-800px);
  }
  .wrapper-item {
    width: 48%;
  }
}
.left-container {
  background: linear-gradient(to right, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
}
.right-container {
  background: linear-gradient(to left, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
}
.view-enum-box {
  display: flex;
  justify-self: flex-start;
  align-items: center;
  .view-tab {
    background-color: #1E355E;
    height: 56px;
    line-height: 56px;
    width: 160px;
    text-align: center;
    color: #9FAAB4;
    margin-left: 20px;
    border-radius: 8px;
    font-size: 22px;
    cursor: pointer;
    &.active {
      background-color: #0E3C8A;
      color: #FFFFFF;
    }
  }
}
</style>
