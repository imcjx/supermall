<template>
  <div class="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>

import DetailNavBar from './detailComponents/detailNavBar/DetailNavBar'

export default {
  components:{
    DetailNavBar
  },
  data(){
    return{
      iid: null
    }
  },
  created(){
    this.iid=this.$route.params.iid;
  }
}
</script>

<style scoped>

</style>
