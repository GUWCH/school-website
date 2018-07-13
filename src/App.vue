<template>
  <!-- <div id="app"> -->
    <div>
    <!-- <img src="./assets/logo.png"> -->
    <header-item></header-item>
    <div class="tab">
      <div class="tab-item">
        <a router-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a router-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a router-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import headerItem from './components/header/header'
export default {
  name: 'App',
  components: {
    headerItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
