<template>
  <div id="app">
    <SideBar/>
    <div class="content_main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import SideBar from './components/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Poppins', sans-serif;
  background: #113865;
  .content_main{
    margin-left: 202px;
    background: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 0px;
    @media (max-width: 600px) {
      margin-left: unset;
    }
  }
}
</style>
