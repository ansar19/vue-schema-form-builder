<template>
  <div id="app">
   <ul class="nav">
     <li>
        <router-link to="/demo-calc">Demo Calc</router-link>
      </li>
   </ul>
   <router-view></router-view>
  </div>
</template>

<script>
import DemoCalc from './components/DemoCalc.vue'

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DemoCalc
  },
  data() {
    return {
      showWhich: "DemoCalc"
    }
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

ul.nav > li {
  display: inline;
  padding-left: 10px;
}
ul.nav > li::before {
  content: "\2630";
  padding-right: 5px;
}
</style>
