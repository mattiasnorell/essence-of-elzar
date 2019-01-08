<template>
    <div>
      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image"/>
     </div>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RecipeModel } from '../models/RecipeModel';

@Component
export default class RecipeListItem extends Vue {
  @Prop() private recipe!: RecipeModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
