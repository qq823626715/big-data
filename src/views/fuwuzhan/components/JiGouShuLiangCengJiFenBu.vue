<!--
 * @Description: 机构数量层级分布
-->
<script setup>
import { reactive } from 'vue'
import { getCultivate } from '@/apis/apiMember'
</script>

<template>
  <div class="content-main">
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-1.png" />
      <div class="item-text-div">
        <div class="item-text">省级</div>
        <div class="item-number" style="color: #23F0FF;">11</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-2.png" />
      <div class="item-text-div">
        <div class="item-text">市级</div>
        <div class="item-number" style="color: #007FFD;">140</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-3.png" />
      <div class="item-text-div">
        <div class="item-text">县级</div>
        <div class="item-number" style="color: #03DF9E;">30080</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-4.png" />
      <div class="item-text-div">
        <div class="item-text">乡级</div>
        <div class="item-number" style="color: #FF8A37;">30004</div>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-4.png" />
      <div class="item-text-div">
        <div class="item-text">村级</div>
        <div class="item-number" style="color: #f1ba3f;">10006</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  padding: 10px 50px;
  margin: 0 auto 0;
  .content-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .item-image {
      width: 68px;
      height: 74px;
      margin-right: 12px;
    }
    .item-number {
      font-size: 30px;
    }
    .item-text {
      color: #E0E0E0;;
      font-size: 26px;
      margin-right: 12px;
      margin-right: 40px;
    }
    .item-text-div {
      width: 620px;
      height: 74px;
      display: flex;
      padding: 0 0 0 105px;
      border-top: 1px solid #23F0FF;
      border-bottom: 1px solid #23F0FF;
      border-right: 1px solid #23F0FF;
      background: linear-gradient(to bottom, rgba(3, 54, 148, 0.2), rgba(2, 178, 248, 0.1));
      margin-left: -50px;
      align-items: center;
      border-radius: 0 16px 16px 0;
    }
  }
}
</style>
