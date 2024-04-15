<script setup>
// import titleBg from '@/assets/images/title-bg.png'
import titleBg from '@/assets/images/title-bg-new.png'
const props = defineProps(['title', 'subtitle', 'background', 'width', 'style','titleStyle'])
const emit = defineEmits(['click'])
const { title, subtitle, background, width, titleStyle, style } = props

const _background = background ? `url(${background})` : `url(${titleBg})`
const _width = width ? width : '100%'

const subtitleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="wrapper-title" :style="style">
    <span class="title-text"  :style="titleStyle">{{ title }}</span>
    <slot name="subtitle">
      <span class="subtitle-text" v-if="subtitle" @click="subtitleClick">
        {{ subtitle }}
      </span>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: v-bind(_width);
  height: 75px;
  padding: 0 50px 0 90px;
  // background: v-bind('_background');
  // background-repeat: no-repeat;;
  // background-size: cover;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: v-bind(_width);
    height: 75px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: v-bind('_background');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    z-index: -1;
  }
  .title-text {
    font-size: 30px;
    color: #C0C0C0;
    margin-left: 80px;
  }
  .subtitle-text {
    font-size: 18px;
    color: #C0C0C0;
  }
}
</style>
