<!--
 * @Description: 信息卡片
-->
<script setup>
// import {  } from 'vue'
defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <div class="info-card">
    <div class="info-card_left">
      <img class="info-avatar" src="../../../assets/images/gerenhuaxiang/avatar.png"/>
    </div>
    <div class="info-card_right">
      <div class="info-title">
        <p>{{ data.name }}</p>
        <a-tag color="#18607E" size="small">先锋模范</a-tag>
      </div>
      <div class="info-content">
        <div class="info-content_left">
          <p>性别：{{ data.gend }}</p>
          <p>联系电话：{{ data.mobile }}</p>
          <p>身份证号：{{ data.certno }}</p>
        </div>
        <div class="info-content_right">
          <p>民族：{{ data.naty }}</p>
          <p>文化程度：{{ data.education }}</p>
          <p>工作单位：{{ data.empName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #032039;
  border: 1px solid #284058;
  color: #FFFFFF;
  box-sizing: border-box;
  &_left {
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }
  &_right {
    flex: 1;
    margin-left: 10px;
  }
  .info-title {
    color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .ant-tag {
      font-size: 11px;
    }
    & > p {
      line-height: 26px;
      min-width: 50px;
      margin-right: 10px;
      font-size: 11px;
    }
  }
  .info-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9FAAB4;
    font-size: 11px;
    p {
      line-height: 18px;
    }
  }
  .info-avatar {
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }
}
</style>
