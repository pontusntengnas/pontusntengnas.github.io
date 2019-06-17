<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBody from './components/MainBody.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';

@Component({
  components: {
    MainBody,
    Contact,
    Skills,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 5%;
  a {
    color: $primary-color;
  }
  img {
    width: 30%;
    margin-block-end: 3%;
  }
  #container {
    margin-bottom: 4%;
  }
}
</style>
