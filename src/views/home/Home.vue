<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :pull-up-load="true">
      <home-swipe :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwipe from './homeConponents/HomeSwipe'
  import RecommendView from './homeConponents/RecommendView'
  import FeatureView from './homeConponents/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMutiData,getHomeGoods} from 'network/home.js'

  export default {
    name: "Home",
    components: {
      HomeSwipe,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created(){
      //获取多个数据
      this.getHomeMutiData();
      //获取商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      //监听item中的图片加载
      this.$bus.$on('itemImgLoad', () => {
        this.$refs.scroll.refresh();
      })
    },
    methods:{
      /**
       * 事件监听相关的方法
       */
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;
        }
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,1000);
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y)>1000
      },
      loadMore(){
        this.getHomeGoods(this.currentType);
        console.log('上拉加载更多');
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMutiData(){
        getHomeMutiData().then(res => {
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;

          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  }

  .home-nav{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }

  .content{
    height: calc(100% - 93px);
    margin-top: 44px;
    overflow: hidden;
  }
</style>
