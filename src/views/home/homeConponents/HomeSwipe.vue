<template>
  <van-swipe :autoplay="2000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
         <img v-lazy="item.image" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    props: {
      banners:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .van-swipe-item{
    height: 29vh;
  }
  .van-swipe-item img{
    width: 100%;
    height: 100%;
    background-image: cover;
  }
</style>
