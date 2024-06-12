<!--
 * @Description: 退役军人办理一件事
-->
<script setup>
import { ref } from 'vue'
import BanJieShuLiangTongJi from './components/BanJieShuLiangTongJi.vue'
import BanJieShiChangTongJi from './components/BanJieShiChangTongJi.vue'
import BanLiFangShiTongJi from './components/BanLiFangShiTongJi.vue'
import BanJieShiChangFenXi from './components/BanJieShiChangFenXi.vue'
import BanLiLeiXingFenXiJunGuan from './components/BanLiLeiXingFenXiJunGuan.vue'
import BanLiLeiXingFenXiShiBing from './components/BanLiLeiXingFenXiShiBing.vue'
import MemberHeatMap from './components/MemberHeatMap.vue'
import MemberDatas from './components/MemberDatas.vue'
import masker from '@/assets/images/masker.png'
import memberBg from '@/assets/images/member/member-bg.png'

let autoScale = true
const bgWidth = '140%'
const viewEnum = [
  '士兵',
  '军官'
]
const activeView = ref('士兵')
function handleViewEnumClick(item) {
  activeView.value = item
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
          <WrapperTitle title="办结数量统计" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <BanJieShuLiangTongJi />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="办结时长统计" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <BanJieShiChangTongJi />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="办理方式统计" :bgWidth="bgWidth"  />
          <div class="wrapper-content">
            <BanLiFangShiTongJi />
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas pageType="narrow"/>
        <MemberHeatMap pageType="narrow"/>
      </div>
      <div class="right-container">
        <div class="wrapper-item right-wrapper-one">
          <WrapperTitle title="办理类型分析(士兵)" :bgWidth="bgWidth" />
          <div class="wrapper-content flex-box">
            <div class="content-main">
              <div class="content-item">
                <img class="item-image" src="@/assets/images/member/cultivate-1.png" />
                <div class="item-text-div">
                  <span class="item-text">创业人数</span>
                  <span class="item-number" style="color: #23F0FF;">965人</span>
                </div>
              </div>
              <div class="content-item">
                <img class="item-image" src="@/assets/images/member/cultivate-2.png" />
                <div class="item-text-div">
                <span class="item-text">就业人数</span>
                <span class="item-number" style="color: #007FFD;">2576人</span>
                </div>
              </div>
            </div>
            <div class="cahrt-box">
              <BanLiLeiXingFenXiShiBing />
            </div>
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="办理类型分析(军官)" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <div class="data-item">办结数量/总数：<span class="data-item-number">4/5件</span></div>
            <BanLiLeiXingFenXiJunGuan  />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-three">
          <WrapperTitle title="各类型办结时长分析" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <div class="view-enum-box">
              <div
                v-for="item in viewEnum"
                :key="item"
                class="view-tab"
                :class="{ 'active': item === activeView }"
                @click="handleViewEnumClick(item)"
              >{{ item }}</div>
            </div>
            <BanJieShiChangFenXi :type="activeView" />
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
    width: 728px;
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
.flex-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .content-main {
    width: 220px;
    margin-right: -60px;
    .content-item {
      width: 100%;
      height: 63px;
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      margin: 6px;
      margin-top: 32px;
      justify-content: flex-start;
      text-align: left;
      background: linear-gradient(to bottom, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
      border-top: 1px solid #23F0FF;
      border-bottom: 1px solid #23F0FF;
      .item-image {
        width: 59px;
        height: 63px;
        margin: 0 6px 0 -30px;
      }
      .item-number {
        width: 70%;
        font-size: 24px;
        color: #23F0FF;
      }
      .anticon {
        display: block;
        font-size: 22px;
        height: 24px;
        line-height: 24px;
      }
      .item-text {
        color: #ffffff;
        font-size: 22px;
        height: 24px;
        line-height: 24px;
        margin-right: 8px;
      }
    }
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
.data-item {
  padding-left: 80px;
  color: #00d2ff;
  font-size: 26px;
}
.data-item-number {
  color: #f1ba3f;
  font-size: 26px;
}

</style>
