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
h1 {
  font-size: 2.5rem;
  font-weight: 500;
}
h5 {
  font-size: 1.25rem;
  font-weight: 500;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 5%;
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  a {
    color: $primary-color;
  }
  #container {
    margin-bottom: 4%;
  }
}
</style>
