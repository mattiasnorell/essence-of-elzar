<template>
    <div>
      <AddRecipe />
      <SearchBar />
       <RecipeListItem v-bind:recipe="recipe" v-bind:key="recipe.id" v-for="recipe in recipes" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddRecipe from '@/components/AddRecipe.vue';
import RecipeListItem from '@/components/RecipeListItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import { RecipeModel } from '../models/RecipeModel';
import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

@Component({
  components: {
    AddRecipe,
    RecipeListItem,
    SearchBar,
  },
})
export default class Start extends Vue {

  private recipes: RecipeModel[] = new Array<RecipeModel>();

  public mounted(): void {
    axios.get('http://localhost:5000/api/recipes/').then((response: AxiosResponse) => {
      this.recipes = response.data;
    });
  }

}
</script>
