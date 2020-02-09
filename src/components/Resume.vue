<template>
  <div>
    <h4>Resume</h4>
      <div class="container">
        <a v-bind:href="`${downloadUrl}`" download>Download pdf</a>
      </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Resume extends Vue {
    @Prop() private downloadUrl: string = require('./../assets/pontus_tengnas_letter_resume.pdf');
}

</script>