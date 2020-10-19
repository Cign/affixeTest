
<template>
<v-app>
  <div id="app">
    <Header />
    <v-main>
      <SubHeader />
      <router-view></router-view>
    </v-main>
  </div>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import SubHeader from './components/SubHeader.vue'
export default {
  name: 'App',
  components: {
    Header,
    SubHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: #F2F7F9 0% 0% no-repeat padding-box;
}
</style>