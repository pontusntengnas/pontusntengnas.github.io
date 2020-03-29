<template>
  <div>
    <h4>Things I know</h4>
      <div class="container">
        <SkillPill v-for="skill in skills" v-bind:key="skill.name" v-bind:name="`${skill.name}`" v-bind:color="`${skill.color}`"/>
      </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Skill } from '../models/skill';
import SkillPill from './SkillPill.vue';

@Component({
  components: {
    SkillPill,
  },
})

export default class Skills extends Vue {
  private skills: Skill[] = [
    new Skill('Swift', '#4286f4'),
    new Skill('iOS', ''),
    new Skill('Android', ''),
    new Skill('Xamarin.Forms', ''),
    new Skill('Xamarin.Android', ''),
    new Skill('C#', ''),
    new Skill('.NET', ''),
    new Skill('Node.js', ''),
    new Skill('GraphQL', ''),
    new Skill('JavaScript', ''),
    new Skill('TypeScript', ''),
    new Skill('SQL', ''),
    new Skill('HTML', ''),
    new Skill('CSS', ''),
    new Skill('Golang', ''),
    new Skill('Git', ''),
    new Skill('Unit-testing', ''),
    new Skill('UI-testing', ''),
    new Skill('AWS Lambda', ''),
    new Skill('Xcode', ''),
    new Skill('Vue', ''),
    new Skill('React JS', ''),
    new Skill('CI/CD', ''),
    new Skill('Azure Devops (VSTS)', ''),
  ];
}
</script>

<style scoped lang="scss">
.container {
    display: inline-flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

h4 {
  margin-top: 30px;
  margin-bottom: 14px;
}

</style>
