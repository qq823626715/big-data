<!--
 * @Description: 纪念设施
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
        <div class="item-text">纪念设施</div>
        <div class="item-number" style="color: #23F0FF;">22015<span class="item-unit">个</span></div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-2.png" />
      <div class="item-text-div">
        <div class="item-text">烈士陵园</div>
        <div class="item-number" style="color: #007FFD;">187<span class="item-unit">座</span></div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-3.png" />
      <div class="item-text-div">
        <div class="item-text">烈士墓</div>
        <div class="item-number" style="color: #03DF9E;">10973<span class="item-unit">处</span></div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-4.png" />
      <div class="item-text-div">
        <div class="item-text">纪念设施</div>
        <div class="item-number" style="color: #FF8A37;">2450<span class="item-unit">个</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  flex-wrap: wrap;
  margin: 0 auto 0;
  .content-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .item-image {
      width: 26px;
      height: 32px;
      margin-right: 4px;
    }
    .item-number {
      font-size: 12px;
      line-height: 12px;
      height: 12px;
    }
    .item-unit {
      font-size: 8px;
      padding-left: 2px;
    }
    .item-text {
      color: #fff;
      font-size: 10px;
      line-height: 10px;
      height: 10px;
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
