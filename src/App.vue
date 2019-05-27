<template>
  <div id="app">
    <b-img :src="require('./assets/me.png')" fluid alt="Pontus Nilsson Tengnäs"></b-img>
    <MainBody msg="Pontus Nilsson Tengnäs"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBody from './components/MainBody.vue';

@Component({
  components: {
    MainBody,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  img {
    width: 30%;
    margin-block-end: 3%;
  }
  #container p {
    margin: 0 20px;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
