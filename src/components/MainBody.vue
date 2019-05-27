<template>
  <div id="container">
    <h1>{{ msg }}</h1>
    <p>
      Flexible developer with knowledge of the full stack but a primary focus on app development in general 
      and iOS in particular. Based in Gothenburg, Sweden.
    </p>
    <h4>Contact</h4>
    <ul>
      <li v-for="link in contactLinks" v-bind:key="link.url">
        <a v-bind:href="`${link.url}`" target="_blank">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Link } from '../models/link';

@Component
export default class MainBody extends Vue {
  @Prop() private msg!: string;

  private contactLinks: Link[] = [
    new Link('https://www.linkedin.com/in/pontus-nilsson-tengn%C3%A4s/', 'LinkedIn'),
    new Link('https://github.com/pontusntengnas', 'GitHub'),
  ];
}
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
h4 {
  margin: 40px 0 0;
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
