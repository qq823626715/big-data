<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from './wapperTitle.vue'
import jiniansheshi from './left/jiniansheshi.vue'
import jinianshishefenji from './left/jinianshishefenji.vue'
import lieshifenlei from './left/lieshifenlei.vue'

import jinianhuodongrenci from './right/jinianhuodongrenci.vue'
import jinianhuodongleixin from './right/jinianhuodongleixin.vue'
import Citycharts from './right/Citycharts.vue'

import MemberDatas from './center/MemberDatas.vue'
import MemberHeatMap from './center/MemberHeatMap.vue'

const autoScale = true
// const autoScale = false

const title = '褒扬纪念'
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
            <WapperTitle :title="'纪念设施'" />
            <jiniansheshi />
          </div>
          <div>
            <WapperTitle :title="'纪念设施分级'" />
            <jinianshishefenji />
          </div>
          <div>
            <WapperTitle :title="'烈士分类'" />
            <lieshifenlei />
          </div>
        </div>
        <div class="center">
          <div class="charts-wapper">
            <WapperTitle :title="'纪念活动'" />
            <MemberDatas />
            <MemberHeatMap />
          </div>
        </div>
        <div class="right">
          <div>
            <WapperTitle :title="'纪念活动人次'" />
            <jinianhuodongrenci />
          </div>
          <div>
            <WapperTitle :title="'纪念活动类型'" />
            <jinianhuodongleixin />
          </div>
          <div>
            <WapperTitle :title="'参加培训情况'" />
            <Citycharts />
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
    .right >div {
      height: 200px;
    }
  }
}
</style>
