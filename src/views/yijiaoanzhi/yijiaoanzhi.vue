<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from '../jiuyechuanye/wapperTitle.vue'
import Shengjianzhidanwei from './left/shengjianzhidanwei.vue'
import Zhuanyeanzhiganbu from './left/zhuanyeanzhiganbu.vue'
import Jiuyedanwei from './right/top/jiuyedanwei.vue'
import Xuelizhanbi from './right/top/xuelizhanbi.vue'
import Peixu from './right/top/peixu.vue'
import Anzhiganbuqushitongji from './right/anzhiganbuqushitongji.vue'
import Peixunxuelijiaoyuremenzhuanye from './right/peixunxuelijiaoyuremenzhuanye.vue'

let autoScale
// autoScale = false
autoScale = true

const title = '移交安置专题'

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
              <WapperTitle :title="'转业安置干部分布图'" />
              <Zhuanyeanzhiganbu />
            </div>
            <div class="bottom">
              <WapperTitle :title="'安置企事业单位'" />
              <Shengjianzhidanwei />
            </div>
          </div>
          <div class="right">
            <div class="pie-wapper">
              <div>
                <WapperTitle :title="'转业军官去向'" />
                <Jiuyedanwei />
              </div>
              <div>
                <WapperTitle :title="'安置人员年龄分布'" />
                <Xuelizhanbi />
              </div>
              <div>
                <WapperTitle :title="'安置人员培训情况'" />
                <Peixu />
              </div>
            </div>
            <div>
              <WapperTitle :title="'安置趋势统计（近10年）'" />
              <Anzhiganbuqushitongji />
            </div>
            <div>
              <WapperTitle :title="'非干部就业岗位分布（近5年）'" />
              <Peixunxuelijiaoyuremenzhuanye />
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
      width: 49%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        width: 100%;
        height: 200px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        background: rgb(2, 178, 248, 0.1);
      }
    }
    .left {
      .chart {
        height: 410px;
      }
    }
    .right {
      .pie-wapper {
        background: rgb(2, 178, 248, 0);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        > div {
          width: 32%;
          height: 100%;
          background: rgb(2, 178, 248, 0.1);
          padding: 12px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
