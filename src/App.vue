<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/acknowledgments" id="acknowledgments">Acknowledgments</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBody from './components/MainBody.vue';
import Contact from "./components/Contact.vue";
import Skills from "./components/Skills.vue";

@Component({
  components: {
    MainBody,
    Contact,
    Skills
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  #acknowledgments{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
  a {
    color: #42b983;
  }
  img {
    width: 30%;
    margin-block-end: 3%;
  }
  #container p {
    margin: 0 20px;
  }
  #container {
    margin-bottom: 30px;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
