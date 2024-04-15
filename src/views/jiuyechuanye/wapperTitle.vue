<script setup>
import { defineProps } from 'vue'
import { ProfileOutlined } from '@ant-design/icons-vue'

let autoScale;
// autoScale = false
autoScale = true

const props = defineProps(['title', 'iconHidden']);

</script>

<template>
  <div class="title">
    <ProfileOutlined v-if="!props.iconHidden" />
    {{ props.title }}
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: white;
  padding: 4px 0;
  font-size: 12px;
  .anticon {
    margin-right: 4px;
  }
}
</style>
