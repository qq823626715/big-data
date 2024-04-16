<script setup>
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

let autoScale;
// autoScale = false
autoScale = true

</script>

<template>
  <v-scale-screen
    :autoScale="autoScale"
    :width="5800"
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
    <Header>
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
          <WrapperTitle title="移交安置" />
          <div class="wrapper-content">
            <Yijiaoanzhi />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-one">
          <WrapperTitle  title="待安置分布" />
          <div class="wrapper-content">
            <Daianzhirenyuan />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="拥军优抚" />
          <div class="wrapper-content">
            <Yongjunyoufu />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="优抚对象分类TOP5" :style="{ backgroundSize: '115% 144%', }" />
          <div class="wrapper-content">
            <Youfuduixiangleixing />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="军休情况" />
          <div class="wrapper-content">
            <Junxiuqingkuang />
          </div>
        </div>
        <div class="wrapper-item left-wrapper-two">
          <WrapperTitle title="军休变化趋势" :style="{ backgroundSize: '110% 144%', }" />
          <div class="wrapper-content">
            <Junxiurenyuanbianhuaqushi />
          </div>
        </div>
      </div>
      <div class="center-container">
        <MemberDatas />
        <MemberHeatMap />
      </div>
      <div class="right-container">
        <div class="wrapper-item right-wrapper-one">
          <WrapperTitle title="创业就业" />
          <div class="wrapper-content">
            <Chuanyejiuye />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-one">
          <WrapperTitle title="就业分类" />
          <div class="wrapper-content">
            <Chuanjiuyerenyuanleixing />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="年活动情况" />
          <div class="wrapper-content">
            <Nianduhuodongqingkuang />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-two">
          <WrapperTitle title="年度培训情况" />
          <div class="wrapper-content">
            <Niandupeixunqingkuang  />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-three">
          <WrapperTitle title="诉求情况" />
          <div class="wrapper-content">
            <Xingfangqingkuang />
          </div>
        </div>
        <div class="wrapper-item right-wrapper-three">
          <WrapperTitle title="诉求类型情况" :style="{ backgroundSize: '110% 144%', }" />
          <div class="wrapper-content">
            <Xinfangsuqiuleixingqingkuang />
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
  z-index: 2;
  width: 1600px;
  min-width: 1600px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 200px;
  // border: 1px solid red;
  padding: 36px;

  > .wrapper-item {
    width: 48%;
  }
}
.left-container {
  background: linear-gradient(to right, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
}
.right-container {
  background: linear-gradient(to left, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
}
</style>
