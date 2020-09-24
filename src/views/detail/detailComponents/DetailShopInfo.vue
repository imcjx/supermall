<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-left">
        <div class="sell-info">
          <div class="sell-count">{{shopInfo.cSells | sellFilter}}</div>
          <div class="sell-desc">总销量</div>
        </div>
        <div class="good-info">
          <div class="good-count">{{shopInfo.cGoods}}</div>
          <div class="good-desc">全部宝贝</div>
        </div>
      </div>
      <div class="shop-center-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td class="score-name"><span>{{item.name}}</span></td>
            <td class="score" :class="{'better-score':item.isBetter}"><span>{{item.score}}</span></td>
            <td><span class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?'低':'高'}}</span></td>
          </tr>
        </table>
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
  filters:{
    sellFilter(value){
      let result=value;
      if(value>10000){
        result=(result/10000).toFixed(1)+'万';
      }
      return result;
    }
  },
  mounted(){
    setTimeout(()=> {
      console.log(this.shopInfo);
    },2000)

  }
}
</script>

<style scoped>
  .detail-shop-info{
    padding: 10px 20px;
  }

  .shop-top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .shop-top img{
    width: 45px;
    border: 1px solid rgba(100,100,100,.3);
    border-radius: 50%;
  }

  .shop-top span{
    font-size: 16px;
    margin-left: 10px;
    color: #222;
  }

  .shop-center{
    display: flex;
  }

  .shop-center-left{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    text-align: center;
    border-right: 1px solid rgba(100,100,100,.2);
  }

  .shop-center-left .sell-info{
    padding: 5px;
  }

  .shop-center-left .good-info{
    padding: 5px;
  }

  .sell-count , .good-count{
    color: black;
    font-size: 18px;
    margin-bottom: 3px;
  }

  .sell-desc , .good-desc{
    font-size: 13px;
  }

  .shop-center-right{
    margin: 0 auto;
    padding: 5px;
    font-size: 13px;
  }
  .shop-center-right , .score-name{
    padding: 3px 15px;
  }

  .shop-center-right .score{
    padding-right: 6px;
    color: green;
  }

  .shop-center-right .better-score{
    color: red;
  }

  .shop-center-right .better{
    background: green;
    color: #fff;
  }

  .shop-center-right .better-more{
    background-color: red;
  }
</style>
