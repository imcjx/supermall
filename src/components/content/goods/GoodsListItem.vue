<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsPrice}}</span>
      <img class="star" src="~assets/img/common/collect.svg" alt="">
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      goodsPrice(){
        return '￥'+this.goodsItem.price;
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit('itemImgLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
    font-size: 14px;
  }

  .goods-list-item > img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-list-item > div{
    text-align: center;
  }

  .goods-list-item p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-list-item .star{
    width: 14px;
    vertical-align: middle;
    padding-bottom: 5px;
    margin-left: 5px;
  }

  .goods-list-item .price{
    color: var(--color-high-text);
  }

</style>
