<template>
  <div class="detail-nav-bar">
    <nav-bar class="home-nav">
      <div slot="left" class="backImg" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="title-item" :key="index"
             :class="{active : currentIndex === index}"
             @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components:{
    NavBar
  },
  data(){
    return{
      titles: ['商品','参数','讨论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back();
    }
  }
}
</script>

<style>
  .detail-nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .title{
    display: flex;
    font-size: 14px;
  }

  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .backImg{
    position: relative;
  }

  .backImg img{
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translate(-50%,-50%);
  }
</style>
