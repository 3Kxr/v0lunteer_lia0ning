<script setup>
/* 固定页面 */
import HeaderCom from '../components/3KxrHeader.vue'
import FooterCom from '../components/3KxrFooterView.vue'
</script>

<template>
  <HeaderCom></HeaderCom>
  
  <RouterView/>
  <FooterCom></FooterCom>
</template>

<style scoped>
.header {
  width: 100%;
  top: 0;
  z-index: 1;
}
.banner {
  width: 100%;
}
</style>
