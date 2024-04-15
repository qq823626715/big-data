<!--
 * @Description:
-->
<script setup></script>

<template>
  <span class="chart-bg"></span>
</template>

<style lang="scss" scoped>
@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(720deg);
  }
}

.chart-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: url('../../../assets/images/piechart-bg-new.png') round;
  transition: all 0.5s;
  transform-origin: center;
  animation: rotate360 20s infinite alternate-reverse;
  z-index: -999;
}
</style>
