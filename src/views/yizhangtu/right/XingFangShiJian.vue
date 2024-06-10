<!--
 * @Description: 信访事件
-->
<script setup>
import { FileOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="content-main">
    <div class="content-item">
      <div class="content-item-title">
        <FileOutlined />
        <div class="item-text">信访事件总数</div>
      </div>
      <div class="item-number">1893件</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <FileOutlined />
        <div class="item-text">已处理</div>
      </div>
      <div class="item-number">1890件</div>
    </div>
    <div class="content-item">
      <div class="content-item-title">
        <FileOutlined />
        <div class="item-text">未处置</div>
      </div>
      <div class="item-number">3件</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  .content-item {
    width: 31%;
    height: 40px;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    margin: 3px;
    margin-top: 14px;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: linear-gradient(to bottom, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
    border-top: 1px solid #23F0FF;
    border-bottom: 1px solid #23F0FF;
    .item-image {
      width: 20px;
      height: 24px;
      margin-right: 3px;
    }
    .item-number {
      width: 70%;
      font-size: 12px;
      color: #23F0FF;
    }
    .item-text {
      color: #ffffff;
    }
    .content-item-title {
      width: 80%;
      display: flex;
      font-size: 8px;
      color: #00d2ff;
      height: 13px;
      align-items: flex-start;
      justify-content: center;
      gap: 2px;
    }
  }
}
</style>
