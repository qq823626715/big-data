<script setup>
import { PieChartOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="content-main">
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">诉求总量</div>
      </div>
      <div class="item-number">2368人</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">当日总次数</div>
      </div>
      <div class="item-number">46次</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">当日重复访</div>
      </div>
      <div class="item-number">12次</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">当日集体访</div>
      </div>
      <div class="item-number">28次</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">上访总量</div>
      </div>
      <div class="item-number">245次</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <PieChartOutlined />
        <div class="item-text">当日个访</div>
      </div>
      <div class="item-number">34次</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  .content-item {
    width: 31%;
    height: 160px;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    margin: 6px;
    margin-top: 26px;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: linear-gradient(to bottom, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
    border-top: 1px solid #23F0FF;
    border-bottom: 1px solid #23F0FF;
    .item-image {
      width: 82px;
      height: 95px;
      margin-right: 12px;
    }
    .item-number {
      width: 70%;
      font-size: 46px;
      color: #23F0FF;
    }
    .anticon {
      display: block;
      font-size: 24px;
      height: 24px;
      line-height: 24px;
    }
    .item-text {
      color: #ffffff;
      font-size: 28px;
      height: 32px;
      line-height: 32px;
    }
    .content-item-title {
      width: 80%;
      display: flex;
      font-size: 28px;
      color: #00d2ff;
      height: 32px;
      margin-bottom: 18px;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
  }
}
</style>
