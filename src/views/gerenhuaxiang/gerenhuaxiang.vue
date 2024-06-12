<!--
 * @Description: 个人画像
-->
<script setup>
import { ref } from 'vue'
import pageBg from '@/assets/images/pageBg.png'
import WordCloud from './components/WordCloud.vue'
import TreeCharts from './components/TreeCharts.vue'
import InfoCard from './components/InfoCard.vue'
import Guanxitupu from './components/guanxitupu.vue'
import SkillUp from './components/SkillUp.vue'
import WorkList from './components/WorkList.vue'
import ZhiXiangFuWu from './components/ZhiXiangFuWu.vue'
import YongJunZuJi from './components/YongJunZuJi.vue'
import PageHeader from '../../components/Header/PageHeader.vue'
import { SearchOutlined  } from '@ant-design/icons-vue'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

import { infosData, typeEnum, chartsEnum, wordcloudData, footerMenuEnum } from '@/data/gerenhuaxiang'

const autoScale = true
// const autoScale = false
const timeEnum = ['当月', '季度', '半年', '一年']
const themeEnum = ['全景', '安置', '优抚', '就业', '培训', '双拥', '诉求', '褒扬']
const viewEnum = [
  '焦点视图',
  '网格视图',
  // '报告视图'
]

const title = '个人画像'

const keyWord = ref('')
const infoList = ref(infosData)
const activeInfo = ref(infosData[0])
function handleInfoCardClick(info) {
  activeInfo.value = info
}
const activeChart = ref('全景画像')
const activeTime = ref('当月')
const activeTheme = ref('全景')
const activeView = ref('焦点视图')
const activeFooterMenu = ref('单维')
const treeChartsShow = ref(false)
const dateRange = ref(['2020-01-01', '2024-01-01'])
const wordcloudData25 = wordcloudData.filter(item => {
  return ['资金异常', '重点关注', '先锋模范', '就业困难'].includes(item.name)
}).sort((a, b) => { a.value - b.value }).filter((item, index) => index < 25)

function handleChartsEnumClick(item) {
  activeChart.value = item
}
function handleTimeEnumClick(item) {
  activeTime.value = item
}
function handleThemeEnumClick(item) {
  activeTheme.value = item
}
function handleViewEnumClick(item) {
  activeView.value = item
}
function handleFooterMenuEnumClick(item) {
  activeFooterMenu.value = item
}
function handleWordCloundTagClick(item) {
  const mainData = [
    '重点关注',
    '先锋模范',
    '就业困难',
    '资金异常'
  ]
  treeChartsShow.value = mainData.includes(item.name)
}
</script>
<template>
  <v-scale-screen
    :autoScale="autoScale"
    :width="1280"
    :height="720"
    :boxStyle="{
      background: '#020c1b',
      overflow: autoScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="{
      background: `url(${pageBg}) no-repeat`,
      backgroundSize: '100% 100%',
      backgroundAttachment: 'fixed'
    }"
  >
    <PageHeader :subTitle="title">
      <template #title>
        <img
          class="title-image"
          src="@/assets/images/member/member-title.png"
        />
      </template>
    </PageHeader>
    <div class="content">
      <div class="wapper-contain">
        <div class="left">
          <div class="left-top">
            <a-input v-model:value="keyWord" placeholder="请输入内容">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
            <a-button type="text" size="small">搜索</a-button>
          </div>
          <div  class="left-bottom">
            <div class="tabs-box">
              <span v-for="item in typeEnum" :key="item">{{ item }}</span>
            </div>
            <div class="info-box">
              <InfoCard
                v-for="info in infoList"
                :key="info.certno"
                :data="info"
                :class="{'active': info.certno === activeInfo.certno}"
                @click="handleInfoCardClick(info)"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-top">
            <div
              v-for="item in chartsEnum"
              :key="item"
              class="tab-item custom-tab"
              :class="{ 'active': item === activeChart }"
              @click="handleChartsEnumClick(item)"
            >{{ item }}</div>
          </div>
          <template v-if="activeChart === '关系图谱'">
            <div class="right-bottom">
              <Guanxitupu />
            </div>
          </template>
          <template v-else-if="activeChart === '全景画像'">
            <div  class="right-bottom">
              <div class="menu-box">
                <div class="menu-box_left">
                  <div class="menu-box_item">
                    <p class="label">时间：</p>
                    <div
                      v-for="item in timeEnum"
                      :key="item"
                      class="subtab-item custom-tab"
                      :class="{ 'active': item === activeTime }"
                      @click="handleTimeEnumClick(item)"
                    >{{ item }}</div>
                    <div class="subtab-item_time custom-tab" :class="{ 'active': 'custom' === activeTime }" @click="handleTimeEnumClick('custom')">
                      <span>{{ dateRange[0] }}</span>
                      <span>到</span>
                      <span>{{dateRange[1]}}</span>
                      <!-- <a-range-picker v-model:value="dateRange" :local="locale" format="YYYY-MM-DD" valueFormat="YYYY-MM-DD" :bordered="false" locale="">

                      </a-range-picker> -->
                    </div>
                  </div>
                  <div class="menu-box_item">
                    <p class="label">主题：</p>
                    <div
                      v-for="item in themeEnum"
                      :key="item"
                      class="subtab-item custom-tab"
                      :class="{ 'active': item === activeTheme }"
                      @click="handleThemeEnumClick(item)"
                    >{{ item }}</div>
                  </div>
                </div>
                <div class="menu-box_right">
                  <div
                    v-for="item in viewEnum"
                    :key="item"
                    class="view-tab"
                    :class="{ 'active': item === activeView }"
                    @click="handleViewEnumClick(item)"
                  >{{ item }}</div>
                </div>
              </div>
              <template v-if="activeView === '焦点视图'">
                <div class="charts-box">
                  <div>
                    <WordCloud @tag-click="handleWordCloundTagClick"/>
                  </div>
                  <div>
                    <TreeCharts v-if="treeChartsShow" />
                  </div>
                </div>
              </template>
              <template v-if="activeView === '网格视图'">
                <div class="grid-box">
                  <div v-for="item in wordcloudData25" :key="item" class="grid-item">
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </template>
              <template v-if="activeView === '报告视图'">
                <div class="list-box">
                  <a-form
                    ref="formRef"
                    name="advanced_search"
                    size="small"
                  >
                  <a-row :gutter="10">
                    <a-col :span="8" v-for="item in wordcloudData" :key="item.name">
                      <a-form-item :label="item.name">
                        <p>{{ item.value }}</p>
                      </a-form-item>
                    </a-col>
                  </a-row>
                  </a-form>
                </div>
              </template>
            </div>
            <div class="footer-menu">
              <div class="footer-menu_left">
                <p>画像名字：{{ activeInfo.name }}</p>
                <p>电话信息：{{ activeInfo.mobile }}</p>
              </div>
              <div v-if="treeChartsShow" class="footer-menu_right">
                <div
                  v-for="menu in footerMenuEnum"
                  :key="menu"
                  :class="{'active': menu === activeFooterMenu}"
                  @click="handleFooterMenuEnumClick(menu)"
                  >{{ menu }}</div>
              </div>
            </div>
          </template>
          <template v-else-if="activeChart === '技能成长'">
            <div class="right-bottom">
              <SkillUp />
            </div>
          </template>
          <template v-else-if="activeChart === '就业去向'">
            <div class="right-bottom">
              <WorkList />
            </div>
          </template>
          <template v-else-if="activeChart === '智享服务'">
            <div class="right-bottom">
              <ZhiXiangFuWu />
            </div>
          </template>
          <template v-else-if="activeChart === '拥军足迹'">
            <div class="right-bottom">
              <YongJunZuJi />
            </div>
          </template>
        </div>
      </div>
    </div>
  </v-scale-screen>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  height: 670px;
  margin-top: 50px;
  padding: 12px;
  border-radius: 20px;
  opacity: 0.9;
  .wapper-contain {
    width: 100%;
    height: 100%;
    // background: linear-gradient(to right, rgb(3, 54, 148, 0.2),rgb(2, 178, 248, 0.1));
    display: flex;
    justify-content: space-between;
    > div {
      height: 100%;
    }
  }
  .left {
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    ::-webkit-scrollbar {
      width: 0;
    }
    &-top {
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .ant-input-affix-wrapper {
        background-color: #062656;
        color: #FFFFFF;
        border-color: #2D6998;
        margin-right: 10px;
        font-size: 11px;
        ::v-deep {
          .ant-input {
            background-color: #062656;
            color: #FFFFFF;
            font-size: 11px;
            &::placeholder {
              color: #909090;
            }
          }
          .anticon-search {
            color: #909090;
          }
        }
      }
      .ant-btn {
        background: linear-gradient(#8A9CA6, #2580A5);
        font-size: 11px;
      }
    }
    &-bottom {
      height: 600px;
      overflow: hidden;
      .tabs-box {
        height: 30px;
        span {
          color: #909090;
          margin-right: 15px;
          line-height: 20px;
          font-size: 11px;
        }
      }
      .info-box {
        height: 570px;
        flex: 1;
        overflow-y: auto;
      }
      .info-card {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &.active {
          background-color: #062656;
          border-color: #2D6998;
        }
      }
    }
  }

  .right {
    width: 860px;
    background: #0D2B46;
    position: relative;
    overflow: hidden;
    &-top {
      height: 42px;
      padding: 6px 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .tab-item {
        width: 80px;
        height: 28px;
        line-height: 28px;
        font-size: 11px;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
    &-bottom {
      height: 604px;
      padding: 12px;
      .menu-box {
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        color: #9FAAB4;
        font-size: 11px;
        &_item {
          display: flex;
          justify-self: flex-start;
          align-items: center;
          margin-bottom: 10px;
          .label {
            color: #FFFFFF;
            margin-right: 10px;
          }
        }
        .subtab-item {
          width: 50px;
          height: 25px;
          line-height: 25px;
          &_time {
            width: 210px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            > span {
              margin: 0 5px;
            }
          }
          &:not(:last-child) {
            margin-right: 4px;
          }
        }
        &_right {
          display: flex;
          justify-self: flex-start;
          align-items: center;
          .view-tab {
            background-color: #1E355E;
            height: 28px;
            line-height: 28px;
            width: 80px;
            text-align: center;
            color: #9FAAB4;
            margin-left: 10px;
            border-radius: 4px;
            font-size: 11px;
            cursor: pointer;
            &.active {
              background-color: #0E3C8A;
              color: #FFFFFF;
            }
          }
        }
      }
      .charts-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .grid-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        .grid-item {
          width: 140px;
          height: 70px;
          padding: 15px 20px;
          line-height: 20px;
          text-align: center;
          border: 1px solid #284058;
          background: #1E355E;
          margin-bottom: 20px;
          border-radius: 4px;
          display: flex;
          color: #FFFFFF;
          font-weight: blod;
          align-items: center;
          justify-content: center;
        }
      }
      .list-box {
        .ant-form-item {
          margin-bottom: 0;
          color: #9FAAB4;
          :deep(.ant-form-item-label >label) {
            color: #9FAAB4;
          }
        }
      }
    }
    .footer-menu {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      font-size: 11px;
      &_left {
        height: 40px;
        width: 500px;
        border-top-right-radius: 40px;
        border: 1px solid #143872;
        background: linear-gradient(to top, #123262, #264D86);
        display: flex;
        justify-content: space-around;
        align-items: center;
        > p {
          color: #E0E0E0;
          font-size: 12px;
          text-shadow: #FFFFFF 2px 2px 5px;
        }
      }
      &_right {
        position: absolute;
        width: 280px;
        height: 28px;
        right: 20px;
        bottom: 10px;
        background: linear-gradient(#8A9CA6, #2580A5);
        border-radius: 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
        > div {
          color: #456e81;
          cursor: pointer;
          &.active {
            color: #000000;
          }
        }
      }
    }
  }
}
.border {
  border: 1px solid #c0c0c0;
}
.custom-tab {
  color: #9FAAB4;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  &.active {
    background-color: #4BA9CE;
    color: #070852;
  }
}
</style>
