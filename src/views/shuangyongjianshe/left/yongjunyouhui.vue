<!--
 * @Description: 优惠资金
-->
<script setup>
// import { reactive } from 'vue'
// import { getCultivate } from '@/apis/apiMember'
</script>

<template>
  <div class="content-main">
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-1.png" />
      <div class="item-text-div">
        <div class="item-text">优惠资金</div>
        <div class="item-number" style="color: #23F0FF;">3212万</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-2.png" />
      <div class="item-text-div">
        <div class="item-text">优惠次数</div>
        <div class="item-number" style="color: #007FFD;">1267次</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-3.png" />
      <div class="item-text-div">
        <div class="item-text">拥军组织</div>
        <div class="item-number" style="color: #03DF9E;">317个</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-4.png" />
      <div class="item-text-div">
        <div class="item-text">拥军企业</div>
        <div class="item-number" style="color: #FF8A37;">3572家</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  flex-wrap: wrap;
  margin: 0 auto 0;
  .content-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .item-image {
      width: 26px;
      height: 32px;
      margin-right: 4px;
    }
    .item-number {
      font-size: 12px;
    }
    .item-text {
      color: #fff;
      font-size: 10px;
      margin-right: 3px;
    }
    .item-text-div {
      width: 115px;
      height: 32px;
      display: flex;
      padding: 0 0 0 18px;
      border-top: 1px solid #23F0FF;
      border-bottom: 1px solid #23F0FF;
      border-right: 1px solid #23F0FF;
      background: linear-gradient(to bottom, rgba(3, 54, 148, 0.2), rgba(2, 178, 248, 0.1));
      margin-left: -17px;
      align-items: center;
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
