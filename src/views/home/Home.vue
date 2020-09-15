<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMutiData} from 'network/home.js'
  export default {
    name: "Home",
    components: {
      NavBar
    },
    created(){
      getHomeMutiData().then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
