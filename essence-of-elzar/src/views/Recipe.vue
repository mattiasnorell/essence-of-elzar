<template>
    <div v-if="recipe">
      
    <md-card class="ingredient-list">
      <md-card-area md-inset>
        <md-card-media md-ratio="1:1">
          <img v-bind:src="recipe.image" />
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">{{ recipe.title }}</h2>
          <div class="md-subhead">
            {{ recipe.description }}
          </div>
        </md-card-header>

        <md-card-content>
          <ul class="list-style-none">
            <li v-bind:ingredient="ingredient" v-bind:key="ingredient.id" v-for="ingredient in recipe.ingredients">
              {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
            </li>
          </ul>
        </md-card-content>

        <md-card-content>
          <router-link :to="{ name: 'search', query: { q: tag }}" :key="`tag-${index}`" v-for="(tag, index) in recipe.tags">
            <md-chip md-clickable>{{tag}}</md-chip>
          </router-link>
         </md-card-content>

      </md-card-area>

    </md-card>

    <md-card class="ingredient-list">
      <md-card-area md-inset>
        <md-card-content>
          <ol>
            <li :key="`step-${index}`" v-for="(step, index) in recipe.cookingProcedureSteps" v-html="step"></li>
          </ol>
        </md-card-content>
      </md-card-area>

    </md-card>


          

      <a v-bind:href="recipe.sourceUrl" target="_blank">Källa</a>

      <button @click="deleteRecipe(recipe.id)">Radera</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RecipeModel } from '../models/RecipeModel';
import { MdChips } from 'vue-material/dist/components';

import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

Vue.use(MdChips);

@Component({
  components: {
  },
})
export default class Recipe extends Vue {

  private recipe: RecipeModel | null = null;

  public mounted(): void {
    axios
    .get('http://elzar.local/api/recipes/' + this.$router.currentRoute.params.id )
    .then((response: AxiosResponse) => {
      this.recipe = response.data;
    });
  }

  private deleteRecipe(id: number) {
    axios
    .delete('http://elzar.local/api/recipes/' + id )
    .then((response: AxiosResponse) => {
      this.$router.push('/');
    });
  }

}
</script>

<style scoped>
.ingredient-list{
  width: 350px;
}
.list-style-none{
  list-style: none;
  padding: 0;
}

.md-chip{
      background-color: #ccc;
}
</style>
