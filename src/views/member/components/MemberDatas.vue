<script setup>
import { reactive, toRefs, ref } from 'vue'
import { getRetailMember } from '@/apis/apiMember'
import { CountTo } from 'vue3-count-to'

const datas = reactive({
  retail: 0,
  dateAdd: null,
  memberNum: null,
})
defineProps({
  pageType: {
    type: String,
    default: ''
  }
})
getRetailMember().then(({ code, data }) => {
  if (code === 200 && data) {
    datas.retail = data.retail.toString()
    datas.dateAdd = data.dateAdd
    datas.memberNum = data.memberNum.total.toString()
  }
})

const { retail, dateAdd, memberNum } = toRefs(datas)

const startVal = ref(0);
const endVal = { value: 50000 };
const durantion = 3000;
const test = () => {
  setTimeout(() => {
    startVal.value = endVal.value;
    endVal.value = Math.random() * 50000;
    test();
  }, 10000);
}
test()
</script>

<template>
  <div class="datas-wrapper" :class="{ 'datas-wrapper-narrow': pageType === 'narrow'}">
    <div class="wrapper-center">
      <div class="wrapper-left">
        <img class="border-image" src="../../../assets/images/border-left.png" />
      </div>
      <div class="center-row-two" v-if="dateAdd">
        <div class="member-data-item" v-if="dateAdd.day">
          <div class="data-left">
            <span class="data-item-title">服务对象总数</span>
            <h2 class="data-item-number">
              <CountTo :startVal="startVal.value" :endVal="endVal.value" :durantion="durantion"></CountTo>
              <!-- <span style="font-size: 30px;">人</span> -->
            </h2>
          </div>
        </div>
        <div class="member-data-item" v-if="dateAdd.month">
          <div class="data-left">
            <span class="data-item-title">服务机构总数</span>
            <h2 class="data-item-number">
              <CountTo :startVal="startVal.value" :endVal="endVal.value" :durantion="durantion"></CountTo>
              <!-- <span style="font-size: 30px;">个</span> -->
            </h2>
          </div>
        </div>
        <div class="member-data-item" v-if="dateAdd.year">
          <div class="data-left">
            <span class="data-item-title">服务次数累计</span>
            <h2 class="data-item-number single">
              <CountTo :startVal="startVal.value" :endVal="endVal.value" :durantion="durantion"></CountTo>
              <!-- <span style="font-size: 30px;">个</span> -->
            </h2>
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <img class="border-image" src="../../../assets/images/border-right.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datas-wrapper {
  display: flex;
  padding-right: 50px;
  .wrapper-left {
    .border-image {
      width: 60px;
      height: 424px;
    }
  }
  .wrapper-center {
    z-index: 2;
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 400px;
    .center-row-one {
      display: flex;
      justify-content: space-around;
      .row-item {
        .data-title {
          font-size: 48px;
          color: #fff;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 30px;
        }
        .number-wrapper {
          font-size: 50px;
          color: #fff;
          font-weight: bold;
          .number-item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            width: 81px;
            height: 117px;
            border-radius: 6px;
            background: linear-gradient(
              rgba(0, 161, 254, 0.5),
              rgba(0, 0, 0, 0.1),
              rgba(0, 161, 254, 0.5)
            );
          }
        }
      }
    }
    .center-row-two {
      display: flex;
      margin-right: 10px;
      gap: 56px;
      justify-content: center;
      align-items: center;
      .member-data-item {
        width: 640px;
        height: 200px;
        display: inline-flex;
        padding: 10px 0;
        box-sizing: border-box;
        // background: linear-gradient(to bottom, rgb(41, 109, 236), #07837d00);
        .data-left {
          width: 100%;
          margin-left: 40px;
          text-align: center;
          .data-item-number {
            color: #f1ba3f;
            font-size: 70px;
            margin: 10px 0 0 0;
            > span {
              margin-left: 4px;
            }
            &::after {
              content: '次';
              font-size: 30px;
            }
          }
          .data-item-number.single {
            &::after {
              content: '个';
            }
          }
          .data-item-title {
            display: inline-block;
            font-size: 36px;
            color: #00d2ff;
            margin-top: 15px;
          }
        }
        .line {
          display: inline-block;
          width: 2px;
          height: 80px;
          margin: 18px 20px 0 20px;
          background: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 161, 254, 1),
            rgba(0, 0, 0, 0.5)
          );
        }
        .data-right {
          line-height: 28px;
          padding: 0;
          margin-top: 10px;
          margin-left: 10px;
          .data-area-item {
            font-size: 15px;
            .area-title {
              color: #00d2ff;
              margin-right: 10px;
            }
            .area-number {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .wrapper-left,
  .wrapper-right {
    display: flex;
    justify-content: center;
    .border-image {
      width: 60px;
      width: 60px;
      height: 70%;
      margin: auto 50px;
    }
  }
}
.datas-wrapper.datas-wrapper-narrow {
  .wrapper-center .center-row-two .member-data-item {
    width: 450px;
  }
}
</style>
