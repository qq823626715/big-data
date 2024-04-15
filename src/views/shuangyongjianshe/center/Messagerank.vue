<script setup>
import { reactive } from 'vue'
import {ref} from 'vue'
import {getSalesRankingData} from '@/apis/apiBrand'
import {MessageOutlined} from '@ant-design/icons-vue'

const dataList = ref([])
const data = [
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
  { 'product_name': '最新处置', 'sale_qty': '诉求内容诉求内容诉求内容诉求内容' },
]
const getData = () => {
  const list = data
  for (let i = 0; i < list.length; i++) {
    const data = {}
    data.name = list[i].product_name
    data.value = list[i].sale_qty
    dataList.value.push(data)
  }
}

getData()

const config = reactive({
  data: dataList,
  // waitTime: 100000,
  unit: '元',
})
</script>

<template>
  <div class="sales-ranking">
    <div class="title">
      <MessageOutlined />
      消息通知
    </div>
    <ScrollRankingBoard :config="config" style="width: 100%; height: 500px">
      <template v-slot="{ item }">
        <div class="row-item">
          <div class="rank-right">
            <div class="rank-info">
              <span class="rank-title">{{ item.name }}</span>
              <span class="rank-info-value">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </template>
    </ScrollRankingBoard>
  </div>
</template>

<style lang="scss" scoped>
.sales-ranking {
  padding: 30px 20px;
  box-sizing: border-box;
  .title {
    width: 100%;
    height: 100px;
    font-size: 40px;
    padding: 12px;
    font-weight: 800;
    color: white;
    white-space: nowrap;
    align-content: center;
  }
  .row-item {
    transition: all 0.3s;
  }
  .rank-left {
    display: inline-flex;
    vertical-align: top;
    .rank-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #ffdc50;
    }
  }
  .rank-right {
    display: inline-flex;
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    vertical-align: top;
    .rank-info {
      height: 100px;
      font-size: 22px;
      color: rgb(35, 240, 255);
      display: inline-flex;
      padding: 12px;
      display: flex;
      flex-direction: column;
      font-size: 32px;
      .rank-title {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 4px;
      }
    }
    .rank-progress {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
