<template>
  <van-swipe :autoplay="2000">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
      <img v-lazy="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props:{
    topImages:{
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
  .van-swipe-item{
    height: 300px;
  }
  .van-swipe-item img{
    width: 100%;
  }
</style>
