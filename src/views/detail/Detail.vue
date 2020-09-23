<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="content">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './detailComponents/DetailNavBar'
import DetailSwiper from './detailComponents/DetailSwiper'
import DetailBaseInfo from './detailComponents/DetailBaseInfo'
import DetailShopInfo from './detailComponents/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods} from 'network/detail'

export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data(){
    return{
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {}
    }
  },
  created(){
    this.iid=this.$route.query.iid;

    //根据iid获取详情页数据
    getDetail(this.iid).then(res => {
      const data=res.result
      this.topImages=data.itemInfo.topImages;
      //创建商品对象
      this.goodsInfo=new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //取出店铺信息
      this.shopInfo=data.shopInfo;
    })



  },
  methods:{
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
    background-color: #fff;
    z-index: 9;
  }

  .content{
    height: calc(100% - 44px);
  }
</style>
