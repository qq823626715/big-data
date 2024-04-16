<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from './wapperTitle.vue'
import yongjunyouhui from './left/yongjunyouhui.vue'
import zoufanghuodongcishu from './left/zoufanghuodongcishu.vue'
import Citycharts from './left/Citycharts.vue'

import youhuizijinqushi from './right/youhuizijinqushi.vue'
import yongjunfuwuredian from './right/yongjunfuwuredian.vue'
import yongjunzuzhileixing from './right/yongjunzuzhileixing.vue'

import MemberDatas from './center/MemberDatas.vue'
import MemberHeatMap from './center/MemberHeatMap.vue'

const autoScale = true
// const autoScale = false

const title = '双拥建设'
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
            <WapperTitle :title="'拥军建设'" />
            <yongjunyouhui />
          </div>
          <div>
            <WapperTitle :title="'走访活动次数'" />
            <zoufanghuodongcishu />
          </div>
          <div>
            <WapperTitle :title="'走访活动类型'" />
            <Citycharts />
          </div>
        </div>
        <div class="center">
          <div class="charts-wapper">
            <WapperTitle :title="'走访活动描点'" />
            <MemberDatas />
            <MemberHeatMap />
          </div>
        </div>
        <div class="right">
          <div>
            <WapperTitle :title="'优惠资金趋势'" />
            <youhuizijinqushi />
          </div>
          <div>
            <WapperTitle :title="'拥军服务热点'" />
            <yongjunfuwuredian />
          </div>
          <div>
            <WapperTitle :title="'拥军组织类型'" />
            <yongjunzuzhileixing />
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
  height: 680px;
  margin-top: 40px;
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
        height: 630px;
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
