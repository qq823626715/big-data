<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from '../jiuyechuanye/wapperTitle.vue'
import Fangjianliangqushi from './right/fangjianliangqushi.vue'
import Fangjianyanzhongxing from './right/fangjianyanzhongxing.vue'
import Xinfangrenyuanfenlei from './left/xinfangrenyuanfenlei.vue'
import Xinfangsuqiuwenti from './left/xinfangsuqiuwenti.vue'
import Relitu from './left/relitu.vue'
import Rank from './right/rank.vue'

let autoScale;
// autoScale = false
autoScale = true

const title = '权益维护主题分析';

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
            <div class="chart">
              <WapperTitle :title="'全省诉求处置总览'" />
              <Relitu />
            </div>
            <div class="bottom">
              <div class="question">
                <WapperTitle :title="'诉求问题类型'" />
                <Xinfangsuqiuwenti />
              </div>
              <div class="people">
                <WapperTitle :title="'诉求人员占比'" />
                <Xinfangrenyuanfenlei />
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <WapperTitle :title="'访件量趋势图（2024）'" />
              <Fangjianliangqushi />
            </div>
            <div>
              <WapperTitle :title="'访件类型占比'" />
              <Fangjianyanzhongxing />
            </div>
            <div class="rank">
              <Rank></Rank>
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
    justify-content: space-around;
    > div {
      height: 100%;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      > div {
        width: 100%;
        height: 200px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        background: rgb(2, 178, 248, 0.1);
      }

      .bottom {
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        > div {
          height: 100%;
          padding: 12px;
          display: flex;
          flex-direction: column;
          background: rgb(2, 178, 248, 0.1);
        }
        .question {
          width: 60%;
        }
        .people {
          width: 39%;
        }
      }
    }
    .left {
      width: 65%;

      .chart {
        height: 65%;
      }
      .bottom {
        height: 33%;
      }
    }
    .right {
      width: 33%;

      > div {
        height: 30%;

        &:last-child {
          height: 37%;
        }
      }
    }
  }
}
</style>
