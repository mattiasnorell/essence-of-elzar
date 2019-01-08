<template>
    <div v-if="recipe">
      <img v-bind:src="recipe.image" />
      <h1>{{ recipe.title }}</h1>
      <ul>
        <li v-bind:ingredient="ingredient" v-bind:key="ingredient.id" v-for="ingredient in recipe.ingredients">
          {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        </li>
      </ul>

      <ul>
        <li :key="`step-${index}`" v-for="(step, index) in recipe.cookingProcedureSteps">
          {{ step }} </li>
      </ul>

      <a v-bind:href="recipe.sourceUrl" target="_blank">Källa</a>

      <button @click="deleteRecipe(recipe.id)">Radera</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RecipeModel } from '../models/RecipeModel';
import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

@Component({
  components: {
  },
})
export default class Recipe extends Vue {

  private recipe: RecipeModel | null = null;

  public mounted(): void {
    axios
    .get('http://localhost:5000/api/recipes/' + this.$router.currentRoute.params.id )
    .then((response: AxiosResponse) => {
      this.recipe = response.data;
    });
  }

  private deleteRecipe(id: number) {
    axios
    .delete('http://localhost:5000/api/recipes/' + id )
    .then((response: AxiosResponse) => {
      this.$router.push('/');
    });
  }

}
</script>
