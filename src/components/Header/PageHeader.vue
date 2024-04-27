<script setup>
import { defineProps  } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { FullscreenOutlined, RollbackOutlined   } from '@ant-design/icons-vue'
import { useDateFormat, useNow } from '@vueuse/core'

const nowDateTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

const props = defineProps(['subTitle'])

let fullScreen = false

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
  fullScreen = true
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
  fullScreen = false
}

const onFullClick = () => {
  if (fullScreen) {
    closeFullScreen()
  } else {
    openFullScreen()
  }
}

const back = () => {
  window.history.back()
}
function goHome() {
  router.push('/member')
}
</script>

<template>
  <div class="header-container">
    <!-- 左侧 -->
    <div class="header-left">
      <span @click="goHome" style="cursor: pointer;">首页</span> > {{ props.subTitle || 'SubTitle' }}
    </div>
    <!-- 中间标题 -->
    <div class="header-center">
      退役军人大数据分析平台
    </div>
    <!-- 右侧 -->
    <div class="header-right">
      <span class="header-time">{{ nowDateTime }}</span>
      <span class="header-time" style="margin-left: 12px;">多云 23~25℃</span>
      <span class="header-time" style="margin-left: 12px;cursor: pointer;">
        <FullscreenOutlined @click="onFullClick" />
      </span>
      <span class="header-time" style="margin-left: 12px;cursor: pointer;">
        <RollbackOutlined @click="back()"  />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  position: absolute;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 50px;
  // background: url('../../assets/images/top.png') no-repeat;
  // background-size: 100% 100%;
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
    background: url('../../assets/images/header-bg.png') center center/1400px 50px no-repeat;
    opacity: 0.8;
    z-index: -1;
  }
  .header-left {
    width: 400px;
    color: #006076;
    padding-left: 12px;
    font-size: 13px;
  }
  .header-center {
    flex: 1;
    text-align: center;
    line-height: 2;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(180deg, #e5f8fd, #0862e7);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
  }
  .header-right {
    width: 400px;
    display: inline-flex;
    justify-content: flex-end;
    padding-right: 12px;
    .header-time {
      color: #006076;
    }
  }
}

</style>
