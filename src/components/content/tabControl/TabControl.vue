<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
    :key="index" class="tab-control-item"
    @click="itemClick(index)">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item{
    flex: 1;
  }

  .active{
    padding: 4px;
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
