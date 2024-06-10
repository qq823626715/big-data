<!--
 * @Description: 关爱退役军人基金会
-->
<script setup>
import { ref, reactive, provide } from 'vue'
import { CountTo } from 'vue3-count-to'

</script>

<template>
  <div class="chart-wrapper">
    <div class="member-data-item">
      <div class="data-left">
        <span class="data-item-title">全部</span>
        <h2 class="data-item-number">
          <CountTo :startVal="0" :endVal="27164" :durantion="3000"></CountTo>
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.member-data-item {
  width: 720px;
  height: 200px;
  display: inline-flex;
  padding: 10px 0;
  box-sizing: border-box;
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
        content: '家';
        font-size: 30px;
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
</style>
