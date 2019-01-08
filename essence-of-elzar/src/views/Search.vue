<template>
    <div>
      <SearchBar @search="searchHandler($event)" />
      <RecipeListItem v-bind:recipe="recipe" v-bind:key="recipe.id" v-for="recipe in recipes" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RecipeListItem from '@/components/RecipeListItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import { RecipeModel } from '../models/RecipeModel';
import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

@Component({
  components: {
    RecipeListItem,
    SearchBar,
  },
})
export default class Search extends Vue {
  @Prop() private query!: string;

  private searchQuery: string = this.query;
  private recipes: RecipeModel[] = new Array<RecipeModel>();

  public mounted(): void {
    this.search();
  }

  private searchHandler(event: string) {
    this.searchQuery = event;
    this.search();
  }

  private search() {
    if (!this.searchQuery) {
      return;
    }

    const data = {tags: this.searchQuery.split(' ')};
    axios.post('http://localhost:5000/api/search/', data).then((response: AxiosResponse) => {
      this.recipes = response.data;
    });
  }
}
</script>
