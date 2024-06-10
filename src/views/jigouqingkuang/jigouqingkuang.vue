<!--
 * @Description: 工作人员年龄
-->
<script setup>
import { ref } from 'vue'
import JiGouShuLiangCengJiFenBu from './components/JiGouShuLiangCengJiFenBu.vue'

import GuanAiTuiYiJunRenJiJinHui from './components/GuanAiTuiYiJunRenJiJinHui.vue'
import GongZuoRenYuanLeiXingFenBu from './components/GongZuoRenYuanLeiXingFenBu.vue'
import ShiFanChuangJianZongTiQingKuang from './components/ShiFanChuangJianZongTiQingKuang.vue'
import HongSeFuWuZhan from './components/HongSeFuWuZhan.vue'
import GongZuoRenYuanXueLiQingKuang from './components/GongZuoRenYuanXueLiQingKuang.vue'
import GongZuoRenYuanNianLing from './components/GongZuoRenYuanNianLing.vue'
import GongZuoRenYuanDiQuFenBu from './components/GongZuoRenYuanDiQuFenBu.vue'
import MemberHeatMap from './components/MemberHeatMap.vue'
import MemberDatas from './components/MemberDatas.vue'
import masker from '@/assets/images/masker.png'
import memberBg from '@/assets/images/member/member-bg.png'

const autoScale = true
const bgWidth = '140%'

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
          <WrapperTitle title="机构数量层级分布" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <JiGouShuLiangCengJiFenBu />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="关爱退役军人基金会" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <GuanAiTuiYiJunRenJiJinHui />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="工作人员类型分布" :bgWidth="bgWidth"  />
          <div class="wrapper-content">
            <GongZuoRenYuanLeiXingFenBu />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="工作人员地区分布" :bgWidth="bgWidth"  />
          <div class="wrapper-content">
            <GongZuoRenYuanDiQuFenBu class="map-bar-charts"/>
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas pageType="narrow"/>
        <MemberHeatMap pageType="narrow"/>
      </div>
      <div class="right-container">
        <div class="wrapper-item right-wrapper-one">
          <WrapperTitle title="工作人员学历情况" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <GongZuoRenYuanXueLiQingKuang />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="红色服务站" />
          <div class="wrapper-content">
            <HongSeFuWuZhan  />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-three">
          <WrapperTitle title="全省示范创建总体情况" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <ShiFanChuangJianZongTiQingKuang />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="工作人员年龄段情况" :bgWidth="bgWidth" />
          <div class="wrapper-content">
            <GongZuoRenYuanNianLing  />
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
  height: 1872px; // 2060 - 24 - 24 - 140
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
  .num-box {
    width: 120px;
    min-width: 120px;
      padding-left: 40px;
    flex: 1;
    .data-item {
      padding-left: 0px;
      color: #C0C0C0;
      font-size: 26px;
      margin-bottom: 14px;
    }
    .data-item-number2 {
      color: #f1ba3f;
      font-size: 38px;
      margin-bottom: 14px;
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
