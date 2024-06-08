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
  '移交安置',
  '待安置分布'
]
const leftViewEnum2 = [
  '拥军优抚',
  '优抚对象分类TOP5'
]
const leftViewEnum3 = [
  '军休情况',
  '军休变化趋势'
]
const rightViewEnum1 = [
  '创业就业',
  '就业分类'
]
const rightViewEnum2 = [
  '年活动情况',
  '年度培训情况'
]
const rightViewEnum3 = [
  '诉求情况',
  '诉求类型情况'
]
const leftActiveView1 = ref('移交安置')
const leftActiveView2 = ref('拥军优抚')
const leftActiveView3 = ref('军休情况')
const rightActiveView1 = ref('创业就业')
const rightActiveView2 = ref('年活动情况')
const rightActiveView3 = ref('诉求情况')
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
          <WrapperTitle :title="leftActiveView1" />
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
          <WrapperTitle :title="leftActiveView2" />
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
              <Yongjunyoufu />
            </div>
            <div class="wrapper-content">
              <Youfuduixiangleixing />
            </div>
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle :title="leftActiveView3" />
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
              <Junxiuqingkuang />
            </div>
            <div class="wrapper-content">
              <Junxiurenyuanbianhuaqushi />
            </div>
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas pageType="narrow"/>
        <MemberHeatMap pageType="narrow"/>
      </div>
      <div class="right-container">
        <!-- <div class="wrapper-flex-box" :class="{'tab-right' : rightActiveView === '数据视图二'}"> -->
          <div class="wrapper-item right-wrapper-one">
            <WrapperTitle :title="rightActiveView1" />
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
                <Chuanyejiuye />
              </div>
              <div class="wrapper-content">
                <Chuanjiuyerenyuanleixing />
              </div>
            </div>
          </div>
          <div class="wrapper-item right-wrapper-two">
            <WrapperTitle :title="rightActiveView2" />
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
                <Nianduhuodongqingkuang />
              </div>
              <div class="wrapper-content">
                <Niandupeixunqingkuang  />
              </div>
            </div>
          </div>
          <div class="wrapper-item right-wrapper-three">
            <WrapperTitle :title="rightActiveView3" />
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
  height: 100%;
  margin-top: 140px;
  overflow: hidden;
  // border: 1px solid red;
  padding: 36px;
  .wrapper-item {
    width: 100%;
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
