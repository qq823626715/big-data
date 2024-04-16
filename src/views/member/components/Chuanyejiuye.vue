<script setup>
</script>

<template>
  <div class="content-main">
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-1.png" />
      <div class="item-text-div">
        <span class="item-text">创业人数</span>
        <span class="item-number" style="color: #23F0FF;">965人</span>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-2.png" />
      <div class="item-text-div">
      <span class="item-text">就业人数</span>
      <span class="item-number" style="color: #007FFD;">2576人</span>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-3.png" />
      <div class="item-text-div">
      <span class="item-text">创就业率</span>
      <span class="item-number" style="color: #03DF9E;">94%</span>
      </div>
    </div>
    <div class="content-item">
      <img class="item-image" src="@/assets/images/member/cultivate-4.png" />
      <div class="item-text-div">
      <span class="item-text">全省排名</span>
      <span class="item-number" style="color: #FF8A37;">NO.1</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  margin: 80px auto 0;
  .content-item {
    width: 48%;
    display: flex;
    align-items: center;
    margin-bottom: 56px;
    .item-image {
      width: 68px;
      height: 84px;
      margin-right: 12px;
    }
    .item-number {
      font-size: 28px;
      line-height: 32px;
      vertical-align: text-bottom;
    }
    .item-text {
      color: #E0E0E0;
      font-size: 24px;
      line-height: 32px;
      margin-right: 12px;
      vertical-align: text-bottom;
    }
    .item-text-div {
      width: 270px;
      height: 84px;
      padding: 25px 0 25px 60px;
      border-top: 1px solid #23F0FF;
      border-bottom: 1px solid #23F0FF;
      border-right: 1px solid #23F0FF;
      background: linear-gradient(to bottom, rgba(3, 54, 148, 0.2), rgba(2, 178, 248, 0.1));
      margin-left: -50px;
      border-radius: 0 16px 16px 0;
      vertical-align: text-bottom;
    }
  }
}
</style>
