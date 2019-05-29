<template>
   <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/foo">foo</router-link> |
      <router-link to="/bar">bar</router-link> |
    </div>
    <c-bg :showChange="true"></c-bg>
    <!-- <c-intro></c-intro> -->
    <c-catalog></c-catalog>
    <router-view ></router-view>
  </div>
</template>

<script>
import cBg from 'components/c-bg'
import cIntro from 'components/c-intro'
import cCatalog from 'components/c-catalog'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    console.warn("vue mouted",this.$router)
  },
  components:{
    cBg,
    cIntro,
    cCatalog
  }
}
</script>

<style lang="scss">
// @import url();
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
