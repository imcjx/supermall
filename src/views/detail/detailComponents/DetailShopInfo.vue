<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-left">
        <div class="sell-info">
          <div>{{shopInfo.cSells}}</div>
          <div>总销量</div>
        </div>
        <div class="good-info">
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-center-right">

      </div>
    </div>
    <div class="shop-bottom">

    </div>
  </div>
</template>

<script>
export default {
  props:{
    shopInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
    console.log(this.shopInfo);
  }
}
</script>

<style scoped>

</style>
