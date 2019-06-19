<template>
  <div class="pill">
      <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Link } from '../models/link';

@Component
export default class SkillPill extends Vue {
    @Prop() private name!: string;
    @Prop() private color!: string;
}
</script>

<style scoped lang="scss">

.pill {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid $primary-color;
  width: fit-content;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 12px;
  margin-bottom: 12px;
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
  &:hover {
    color:white;
    background-color: $primary-color;
  }
}

</style>
