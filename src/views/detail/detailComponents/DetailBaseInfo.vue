<template>
  <div class="detail-base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="title">{{goodsInfo.title}}</div>

    <div class="info-price">
      <span class="new-price">{{goodsInfo.price}}</span>
      <span class="old-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount"
            :style="{backgroundColor:goodsInfo.discountBgColor}">
        {{goodsInfo.discount}}
      </span>
    </div>

    <div class="Info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.service[goodsInfo.service.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item"
            v-for="index in goodsInfo.service.length-1"
            :key="index">
        <img :src="goodsInfo.service[index-1].icon" alt="">
        <span>{{goodsInfo.service[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goodsInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .detail-base-info{
    padding: 10px 10px;
    border-bottom: 5px solid rgb(248,248,248);
  }

  .title{
    padding: 5px 0;
    font-size: 16px;
    color: #222;
  }

  .info-price{
    position: relative;
    padding: 5px 0;
  }

  .info-price .new-price{
    font-size: 22px;
    color: var(--color-high-text);
  }

  .info-price .old-price{
    margin-left: 3px;
    font-size: 14px;
    color: rgba(100,100,100,.7);
    text-decoration: line-through;
  }

  .info-price .discount{
    position: absolute;
    top: 0;
    margin-left: 5px;
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    border-radius: 5px;
  }

  .Info-other{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 13px;
    border-bottom: 1px solid #eee;
  }

  .info-service{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin-top: 10px;
    font-size: 14px;
  }

  .info-service-item img{
    position: relative;
    top: 2px;
    width: 14px;
  }

  .info-service-item span{
    color: #333;
  }

</style>
