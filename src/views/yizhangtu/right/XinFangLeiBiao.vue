<!--
 * @Description: 
-->
<script setup>
import { reactive } from 'vue'
import {ref} from 'vue'


const data = [
  { id: 1, 'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '未处置' },
  { id: 2,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '未处置' },
  { id: 3,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 4,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 5,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 6,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 7,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 8,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 9,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 10,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 11,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 12,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 13,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 14,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 15,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 16,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 17,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 18,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 19,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' },
  { id: 20,'type': '安置安排', 'value': '未按约定安排就业，多次申报无答复', status: '已处置' }
]

const dataList = ref(data)

</script>

<template>
  <div class="sales-ranking">
    <div  class="row">
      <div v-for="item in dataList" :key="item.name" class="row-item">
        <div class="rank-left">
          <div class="rank-tag" :class="item.status === '未处置'?'rank-tag_danger':'rank-tag_success'">{{ item.status }}</div>
        </div>
        <div class="rank-right">
          <div class="rank-info">
            <p class="rank-title">{{ item.value }}</p>
            <p class="rank-info-value">类型：{{ item.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sales-ranking {
  padding: 8px 5px;
  box-sizing: border-box;
  overflow: hidden;
  .row {
    animation-duration: 20s;
    animation-name: scroll;
    animation-iteration-count: infinite;
  }
  .row-item {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .rank-left {
    width: 20px;
    font-size: 9px;
  }
  .rank-right {
    display: inline-flex;
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    vertical-align: top;
    .rank-info {
      font-size: 10px;
      color: #23F0FF;
      display: inline-flex;
      padding: 3px;
      display: flex;
      flex-direction: column;
      .rank-title {
        color: #C0C0C0;
        font-size: 10px;
        font-weight: 800;
        margin-bottom: 8px;
      }
    }
    .rank-progress {
      width: 100%;
      margin-top: 2px;
    }
  }
  .rank-tag {
    width: 14px;
    text-align: center;
    border-radius: 2px;
  }
  .rank-tag_danger {
    border: 1px solid #ce4100;
    color: #ce4100;
    background-color: #ce410039;
  }
  .rank-tag_success {
    border: 1px solid #00b409;
    color: #00b409;
    background-color: #00b40939;
  }
}
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes scroll {
  from {
    margin-top: 0;
  }

  to {
    margin-top: -600px;
  }
}
</style>
