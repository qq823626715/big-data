<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from './wapperTitle.vue'
import FuWuSheShi from './left/FuWuSheShi.vue'
import KunNanBangFuZouFang from './left/KunNanBangFuZouFang.vue'
import XiangMuZiJin from './left/XiangMuZiJin.vue'

import XingFangShiJian from './right/XingFangShiJian.vue'
import XinFangLeiBiao from './right/XinFangLeiBiao.vue'

import MemberHeatMap from './center/MemberHeatMap.vue'
import { CountTo } from 'vue3-count-to'

const autoScale = true
// const autoScale = false

const title = '一张图'
</script>

<template>
  <v-scale-screen
    :autoScale="autoScale"
    :width="1280"
    :height="720"
    :boxStyle="{
      background: '#020c1b',
      overflow: autoScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="{
        background: `url(${pageBg}) no-repeat`,
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed'
    }"
  >
    <PageHeader :subTitle="title">
      <template #title>
        <img
          class="title-image"
          src="@/assets/images/member/member-title.png"
        />
      </template>
    </PageHeader>
    <div class="content">
      <div class="wapper-contain">
        <div class="left">
          <div>
            <WapperTitle title="服务设施统计" />
            <FuWuSheShi />
          </div>
          <div>
            <WapperTitle title="困难帮扶走访" />
            <div class="data-item">
              <span class="data-item-title">累积走访次数</span>
              <span class="data-item-number">
                <CountTo :startVal="0" :endVal="62302" :durantion="durantion"></CountTo>
              </span>
            </div>
            <KunNanBangFuZouFang />
          </div>
          <div>
            <WapperTitle title="项目资金" />
            <div class="data-item">
              <span class="data-item-title">专项资金项目总数</span>
              <span class="data-item-number">
                <CountTo :startVal="0" :endVal="10719" :durantion="durantion"></CountTo>
              </span>
            </div>
            <XiangMuZiJin />
          </div>
        </div>
        <div class="center">
          <div class="charts-wapper">
            <MemberHeatMap />
          </div>
        </div>
        <div class="right">
          <div class="right-first">
            <WapperTitle title="信访事件统计" />
            <XingFangShiJian />
          </div>
          <div class="right-second">
            <WapperTitle title="全部信访事件" />
            <XinFangLeiBiao />
          </div>
        </div>
      </div>
    </div>
  </v-scale-screen>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  height: 670px;
  margin-top: 50px;
  padding: 12px;
  border-radius: 20px;
  .wapper-contain {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
    padding: 18px;
    display: flex;
    justify-content: space-between;

    > div {
      height: 100%;
    }

    .center {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .charts-wapper {
        width: 100%;
        height: 620px;
        background: rgb(2, 178, 248, 0.1);
        padding: 12px;
        display: flex;
        flex-direction: column;
        position: relative;
      }
    }

    .left,
    .right {
      width: 24%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        width: 100%;
        padding: 12px;
        display: flex;
        flex-direction: column;
        background: rgb(2, 178, 248, 0.1);
      }
    }
    .left >div {
      height: 210px;
      &:first-child {
        height: 180px
      }
    }
    .right {
      .right-first {
        height: 120px;
      }
      .right-second {
        height: 485px;
      }
    }
  }
  .data-item {
    width: 100%;
    .data-item-title {
      display: inline-block;
      font-size: 10px;
      color: #00d2ff;
      margin-right: 4px;
    }
    .data-item-number {
      color: #f1ba3f;
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>
