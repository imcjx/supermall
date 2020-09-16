<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    padding: 10px 0 30px 0;
    text-align: center;
    border-bottom: 8px solid #eee;
  }

  .recommend-item{
    flex: 1;
    font-size: 14px;
  }

  .recommend-item img{
    width: 76%;
    margin-bottom: 10px;
  }
</style>
