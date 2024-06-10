<script setup>
import { ref, reactive } from 'vue'
import { FullscreenOutlined, FullscreenExitOutlined, PlayCircleOutlined  } from '@ant-design/icons-vue'
import { useDateFormat, useNow, onClickOutside } from '@vueuse/core'
import { RouterLink } from 'vue-router'

const nowDateTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

defineProps({
  pageType: {
    type: String,
    default: ''
  }
})

const navModel = ref()
const modalVisible = ref(false)
const nav = reactive({
  show: false,
  list:  [
    {
      name: '移交安置',
      routePath: '/yijiaoanzhi'
    },
    {
      name: '军休安置',
      routePath: '/junxiuanzhi'
    },
    {
      name: '权益维护',
      routePath: '/quanyiweihu'
    },
    {
      name: '优抚优待',
      routePath: '/youfu'
    },
    {
      name: '褒扬纪念',
      routePath: '/baoyangjinian'
    },
    {
      name: '双拥建设',
      routePath: '/shuangyongjianshe'
    },
    {
      name: '就业创业',
      routePath: '/jiuyechuanye'
    }
  ],
})

const toggleNav = ({ name }) => {
  if (name === '主题分析') {
    nav.show = !nav.show
  } else if (name === '建设成果') {
    modalVisible.value = true
  }
}

onClickOutside(navModel, (event) => {
  nav.show = false
  event.stopPropagation()
})

const openFullScreen = () => {
  const ele = document.body
  if (ele.requestFullscreen) {
    ele.requestFullscreen()
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen()
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen()
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen()
  }
}

const closeFullScreen = () => {
  const ele = document
  if (ele.exitFullScreen) {
    ele.exitFullScreen()
  } else if (ele.mozCancelFullScreen) {
    ele.mozCancelFullScreen()
  } else if (ele.webkitExitFullscreen) {
    ele.webkitExitFullscreen()
  } else if (ele.msExitFullscreen) {
    ele.msExitFullscreen()
  }
}

const list = [{
  name: '建设成果',
  routePath: ''
},{
  name: '重点工作',
  routePath: '/'
},
// {
//   name: '一张图',
//   routePath: '/'
// },
{
  name: '主题分析',
  routePath: ''
},{
  name: '个人画像',
  routePath: '/gerenhuaxiang'
}]
</script>

<template>
  <div class="header-container" :class="{'header-container-narrow': pageType === 'narrow'}">
    <!-- 左侧 -->
    <div class="header-left">
      <div class="head-button-div">
        <div v-for="item in list" :key="item.name">
          <component :is="item.name === '主题分析' || item.name === '建设成果' ?'div':'router-link'" :to="item.routePath">
            <span
              class="nav-item-text"
              :style="`${ item.name === '主题分析' && nav.show ? 'color: #1cd0d8;' : '' }`"
              @click.stop="toggleNav(item)"
            >
              {{ item.name }}
            </span>
          </component>
        </div>
      </div>
    </div>
    <!-- 中间标题 -->
    <div class="header-center">
      退役军人事务决策支持平台
    </div>
    <!-- 右侧 -->
    <div class="header-right">
      <span class="header-time">{{ nowDateTime }}</span>
      <span class="header-time" style="margin-left: 48px;">多云 23~25℃</span>
      <span class="header-time" style="margin-left: 48px;cursor: pointer;">
        <FullscreenOutlined @click="openFullScreen" />
      </span>
      <span class="header-time" style="margin-left: 24px;cursor: pointer;">
        <FullscreenExitOutlined @click="closeFullScreen" />
      </span>
    </div>
  </div>
  <div v-if="nav.show" class="nav-model" ref="navModel">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in nav.list" :key="index">
        <RouterLink :to="item.routePath">
          <span class="nav-item-text">{{ item.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
  <a-modal v-model:open="modalVisible" width="60%" wrap-class-name="full-modal" :footer="null">
    <!-- <template #footer>
      <a-button key="back" @click="handleCancel">关闭</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
    </template> -->
    <PlayCircleOutlined />
  </a-modal>
</template>

<style lang="scss" scoped>
.header-container {
  position: absolute;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 230px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('../../assets/images/header-bg.png') center center/cover;
    opacity: 0.8;
    z-index: -1;
  }
  .header-left {
    width: 1620px;
    display: ipxnline-flex;
    align-items: center;
    color: #00d2ff;
    .nav-wrapper {
      margin-right: 30px;
      cursor: pointer;
    }
    .line {
      width: 2px;
      height: 26px;
      background: #00d2ff;
    }
    .logo-wrapper {
      margin-left: 30px;
      .logo-image {
        width: 110px;
        height: 36px;
      }
    }
  }
  .header-center {
    flex: 1;
    text-align: center;
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
    background: linear-gradient(180deg, #e5f8fd, #0862e7);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 30px;
    .title-image {
      width: 376px;
      height: 75px;
    }
  }
  .header-right {
    width: 1500px;
    display: inline-flex;
    justify-content: flex-end;
    padding-top: 105px;
    .header-time {
      color: #00d2ff;
      font-size: 38px;
    }
  }
}
.header-container-narrow {
  height: 120px;
  .header-left {
    width: 860px;
  }
  .header-right {
    width: 860px;
    padding-top: 65px;
  }
  .header-center {
    font-size: 48px;
  }
}
.nav-model {
  position: fixed;
  top: 120px;
  left: 500px;
  z-index: 99;
  padding: 18px;
  width: 358px;
  height: 627px;
  background: url('../../assets/images/nav-bg.png') center center/100% 627px no-repeat;
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 20px 50px;
    background-size: 100% 100%;
    .nav-item {
      color: #fff;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px dashed #00d2ff;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      &:last-child {
        border-bottom: none;
      }
      .nav-item-text {
        color: #1cd0d8;
        font-size: 36px;
      }
    }
  }
}

.head-button-div {
    flex: 1;
    display: flex;
    width: 100%;
    margin-top: 68px;
}
.head-button-div > div {
    flex: 1;
    text-align: center;
    padding-bottom: 12px;

    .nav-item-text {
      line-height: 46px;
      color: #00d2ff;
      font-size: 32px;

      &:hover {
        color: #1cd0d8;
        cursor: pointer;
      }
    }
}
.head-button-div.right > div:hover {
    color: rgb(8, 98, 231);
    border-bottom: 0;
}
.head-button-div.right > .f11 {
    flex: none;
}
.head-button-div.right > .weather {
    flex: none;
    cursor: default;
}
.head-button-div.right > .date {
    flex: content;
    text-align: right;
    white-space: pre-wrap;
    cursor: default;
}
</style>
<style lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0 auto;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
    background: url("/src/assets/images/member/member-bg.png");
  }
  .ant-modal-body {
    flex: 1;
  }
  .ant-modal-close-icon {
    color: #C0C0C0;
  }
  .anticon-play-circle {
    display: block;
    color: #768cab;
    font-size: 100px;
    margin: 50% auto;
    cursor: pointer;
  }
}
</style>