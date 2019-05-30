<template>
  <div>
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
export default class Contact extends Vue {
  private contactLinks: Link[] = [
    new Link('https://www.linkedin.com/in/pontus-nilsson-tengn%C3%A4s/', 'LinkedIn'),
    new Link('https://github.com/pontusntengnas', 'GitHub'),
    new Link('https://itunes.apple.com/se/developer/pontus-nilsson-tengnas/id1356267707', 'Apple App Store'),
  ];
}
</script>

<style scoped lang="scss">
h4 {
    margin-top: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
