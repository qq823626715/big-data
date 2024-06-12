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
const leftViewEnum1 = [
  '安置总览',
  '待安置分布'
]
const leftViewEnum2 = [
  '军休总览',
  '安置趋势'
]
const leftViewEnum3 = [
  '总体情况',
  '分类汇总'
]
const rightViewEnum1 = [
  '年活动情况',
  '年培训情况'
]
const rightViewEnum2 = [
  '优抚总览',
  '分类汇总'
]
const rightViewEnum3 = [
  '诉求汇总',
  '分类汇总'
]
const leftActiveView1 = ref('安置总览')
const leftActiveView2 = ref('军休总览')
const leftActiveView3 = ref('总体情况')
const rightActiveView1 = ref('年活动情况')
const rightActiveView2 = ref('优抚总览')
const rightActiveView3 = ref('诉求汇总')
function handleLeftViewEnumClick(item, index) {
  if (index === '1') {
    leftActiveView1.value = item
  } else if (index === '2') {
    leftActiveView2.value = item
  } else if (index === '3') {
    leftActiveView3.value = item
  }
}
function handleRightViewEnumClick(item, index) {
  if (index === '1') {
    rightActiveView1.value = item
  } else if (index === '2') {
    rightActiveView2.value = item
  } else if (index === '3') {
    rightActiveView3.value = item
  }
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
        <div class="wrapper-item left-wrapper-one">
          <WrapperTitle title="移交安置" />
          <div class="view-enum-box">
            <div
              v-for="item in leftViewEnum1"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === leftActiveView1 }"
              @click="handleLeftViewEnumClick(item, '1')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : leftActiveView1 === leftViewEnum1[1]}">
            <div class="wrapper-content">
              <Yijiaoanzhi />
            </div>
            <div class="wrapper-content">
              <Daianzhirenyuan />
            </div>
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="军休安置" />
          <div class="view-enum-box">
            <div
              v-for="item in leftViewEnum2"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === leftActiveView2 }"
              @click="handleLeftViewEnumClick(item, '2')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : leftActiveView2 === leftViewEnum2[1]}">
            <div class="wrapper-content">
              <Junxiuqingkuang />
            </div>
            <div class="wrapper-content">
              <Junxiurenyuanbianhuaqushi />
            </div>
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="创业就业" />
          <div class="view-enum-box">
            <div
              v-for="item in leftViewEnum3"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === leftActiveView3 }"
              @click="handleLeftViewEnumClick(item, '3')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : leftActiveView3 === leftViewEnum3[1]}">
            <div class="wrapper-content">
              <Chuanyejiuye />
            </div>
            <div class="wrapper-content">
              <Chuanjiuyerenyuanleixing />
            </div>
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas pageType="narrow"/>
        <MemberHeatMap pageType="narrow"/>
      </div>
      <div class="right-container">
        <div class="wrapper-item right-wrapper-one">
          <WrapperTitle title="教育培训" />
          <div class="view-enum-box">
            <div
              v-for="item in rightViewEnum1"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === rightActiveView1 }"
              @click="handleRightViewEnumClick(item, '1')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : rightActiveView1 === rightViewEnum1[1]}">
            <div class="wrapper-content">
              <Nianduhuodongqingkuang />
            </div>
            <div class="wrapper-content">
              <Niandupeixunqingkuang  />
            </div>
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="拥军优抚" />
          <div class="view-enum-box">
            <div
              v-for="item in rightViewEnum2"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === rightActiveView2 }"
              @click="handleRightViewEnumClick(item, '2')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : rightActiveView2 === rightViewEnum2[1]}">
            <div class="wrapper-content">
              <Yongjunyoufu />
            </div>
            <div class="wrapper-content">
              <Youfuduixiangleixing />
            </div>
          </div>
        </div>
        <div class="wrapper-item right-wrapper-three">
          <WrapperTitle title="权益诉求" />
          <div class="view-enum-box">
            <div
              v-for="item in rightViewEnum3"
              :key="item"
              class="view-tab"
              :class="{ 'active': item === rightActiveView3 }"
              @click="handleRightViewEnumClick(item, '3')"
            >{{ item }}</div>
          </div>
          <div class="wrapper-flex-box" :class="{'tab-right' : rightActiveView3 === rightViewEnum3[1]}">
            <div class="wrapper-content">
              <Xingfangqingkuang />
            </div>
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
  height: 1920px;
  margin-top: 140px;
  overflow: hidden;
  padding: 36px;
  .wrapper-item {
    width: 100%;
    overflow: hidden;
  }
}
.wrapper-flex-box {
  display: flex;
  flex-wrap: wrap;
  width: 1456px;
  transition: all 0.5s linear;
  &.tab-right {
    transform: translateX(-728px);
  }
  .wrapper-content {
    width: 728px;
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
  justify-content: center;
  align-items: center;
  .view-tab {
    background-color: #1E355E;
    height: 42px;
    line-height: 42px;
    width: 160px;
    text-align: center;
    color: #9FAAB4;
    margin-left: 15px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    &.active {
      background-color: #0E3C8A;
      color: #FFFFFF;
    }
  }
}
</style>
