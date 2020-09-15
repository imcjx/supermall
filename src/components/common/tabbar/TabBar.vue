<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>

  #tab-bar{
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(244,244,244);
    box-shadow: 0 -1px 1px rgba(100,100,100,.15);
  }
</style>
