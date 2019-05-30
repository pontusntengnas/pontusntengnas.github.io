<template>
  <div id="container">
    <b-img :src="require('../assets/me.png')" fluid alt="Pontus Nilsson Tengnäs"></b-img>
    <h1>Pontus Nilsson Tengnäs</h1>
    <p>
      Flexible developer with knowledge of the full stack but a primary focus on app development in general 
      and iOS in particular. Based in Gothenburg, Sweden.
    </p>
    <Skills/>
    <Contact/>
  </div>
  
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Contact from "./Contact.vue";
import Skills from "./Skills.vue";

@Component({
  components: {
    Contact,
    Skills
  },
})
export default class MainBody extends Vue { }

</script>

<style scoped lang="scss">

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
@media screen and (min-width: 1500px) {
  h1 {
    font-size: 60px;
  }
}
</style>
