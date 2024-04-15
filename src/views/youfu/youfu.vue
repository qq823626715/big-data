<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from '../jiuyechuanye/wapperTitle.vue'
import Quanshengyoufuduixfenbu from './left/quanshengyoufuduixfenbu.vue'
import Youfuduixiangleixingzhanbi from './left/youfuduixiangleixingzhanbi.vue'
import Leixingduiyingyiliao from './left/leixingduiyingyiliao.vue'
import Shinianfuyouduixiangqushi from './right/shinianfuyouduixiangqushi.vue'
import Youfusuqiu from './right/youfusuqiu.vue'
import Shangcanfuxu from './right/shangcanfuxu.vue'
import Youfushiyedanwei from './right/youfushiyedanwei.vue'

let autoScale
// autoScale = false
autoScale = true

const title = '优抚主题分析'

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
              <WapperTitle :title="'全省优抚对象分布图'" />
              <Quanshengyoufuduixfenbu />
            </div>
            <div class="bottom">
              <div class="question">
                <WapperTitle :title="'优抚对象类型占比情况'" />
                <Youfuduixiangleixingzhanbi />
              </div>
              <div class="people">
                <WapperTitle :title="'优抚保障情况'" />
                <Leixingduiyingyiliao />
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <WapperTitle :title="'近10年优抚对象增长趋势'" />
              <Shinianfuyouduixiangqushi />
            </div>
            <div>
              <WapperTitle :title="'伤残抚恤情况'" />
              <Shangcanfuxu />
            </div>
            <div>
              <WapperTitle :title="'优抚事业单位'" />
              <Youfushiyedanwei />
            </div>
            <div>
              <WapperTitle :title="'优待服务机构'" />
              <Youfusuqiu />
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
          width: 49.5%;
          height: 100%;
          padding: 12px;
          display: flex;
          flex-direction: column;
          background: rgb(2, 178, 248, 0.1);
        }
      }
    }
    .left {
      width: 65%;

      .chart {
        height: 60%;
      }
      .bottom {
        height: 38%;
      }
    }
    .right {
      width: 33%;

      > div {
        height: 24%;
      }
    }
  }
}
</style>
