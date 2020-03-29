<template>
  <div id="container">
    <img :src="require('../assets/me.png')" fluid alt="Pontus Nilsson Tengnäs"/>
    <h1>Pontus Nilsson Tengnäs</h1>
    <p>
      Flexible full-stack developer with a primary focus on front-end development in general 
      and iOS in particular. Based in Gothenburg, Sweden.
    </p>
    <Skills/>
    <Resume/>
    <Contact/>
    <router-link to="/acknowledgments" id="acknowledgments">Acknowledgments</router-link>
  </div>
  
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Contact from './Contact.vue';
import Skills from './Skills.vue';
import Resume from './Resume.vue';

@Component({
  components: {
    Contact,
    Skills,
    Resume,
  },
})
export default class MainBody extends Vue { }

</script>

<style scoped lang="scss">

p {
  margin: 0 8%;
}
img {
  width: 20%;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
  img {
    width: 30%;
  }
}
@media screen and (min-width: 1500px) {
  h1 {
    font-size: 60px;
  }
}

</style>
