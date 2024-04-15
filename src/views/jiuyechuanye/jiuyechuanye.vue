<script setup>
import pageBg from '@/assets/images/pageBg.png'
import PageHeader from '../../components/Header/PageHeader.vue'
import WapperTitle from './wapperTitle.vue'
import Quanshengtuiyi from './left/quanshengtuiyi.vue'
import Shinianjiuyequshi from './left/shinianjiuyequshi.vue'
import Shinianchuanyexingshi from './left/shinianchuanyexingshi.vue'
import Nianshouruzhanbi from './left/nianshouruzhanbi.vue'
import Jiuyerenmenhangye from './right/jiuyerenmenhangye.vue'
import Xueliyuchuanye from './right/xueliyuchuanye.vue'
import Canjiapeixunqingkuang from './right/canjiapeixunqingkuang.vue'
import Peixunremenhangye from './right/peixunremenhangye.vue'
import Peixunyushouruqingkuang from './center/peixunyushouruqingkuang.vue'
import Tuiyishibingzongshu from './center/tuiyishibingzongshu.vue'

let autoScale;
// autoScale = false
autoScale = true

const title = '就业创业主题分析';

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
              <WapperTitle :title="'未就业/待业原因分析'" />
              <Quanshengtuiyi />
            </div>
            <div>
              <WapperTitle :title="'近10年就业形势'" />
              <Shinianjiuyequshi />
            </div>
            <div>
              <WapperTitle :title="'近10年创业形式'" />
              <Shinianchuanyexingshi />
            </div>
            <div>
              <WapperTitle :title="'年收入占比情况'" />
              <Nianshouruzhanbi />
            </div>
          </div>
          <div class="center">
            <div class="charts-wapper">
              <WapperTitle :title="'就业创业总览'" />
              <Tuiyishibingzongshu />
            </div>
            <div class="bottom">
              <WapperTitle :title="'培训与收入情况分析'" />
              <Peixunyushouruqingkuang />
            </div>
          </div>
          <div class="right">
            <div>
              <WapperTitle :title="'就业热门行业'" />
              <Jiuyerenmenhangye />
            </div>
            <div>
              <WapperTitle :title="'学历与创业'" />
              <Xueliyuchuanye />
            </div>
            <div>
              <WapperTitle :title="'参加培训情况'" />
              <Canjiapeixunqingkuang />
            </div>
            <div>
              <WapperTitle :title="'培训热门专业'" />
              <Peixunremenhangye />
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
      .charts-wapper,
      .bottom {
        width: 100%;
        height: 180px;
        background: rgb(2, 178, 248, 0.1);
        padding: 12px;
        display: flex;
        flex-direction: column;
      }
      .charts-wapper {
        height: 425px;
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
        height: 145px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        background: rgb(2, 178, 248, 0.1);
      }
    }
  }
}
</style>
