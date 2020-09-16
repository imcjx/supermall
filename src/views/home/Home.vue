<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swipe :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwipe from './homeConponents/HomeSwipe.vue'
  import RecommendView from './homeConponents/RecommendView.vue'

  import {getHomeMutiData} from 'network/home.js'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwipe,
      RecommendView
    },
    data(){
      return{
        banners: [],
        recommends: [],
      }
    },
    created(){
      getHomeMutiData().then(res => {
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
      //  L2Dwidget.init({"display": {
      //    "superSample": 2,
      //    "width": 200,
      //    "height": 400,
      //         "position": "right",
      //             "hOffset": 0,
      //    "vOffset": 0
      //      }
      // });
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
