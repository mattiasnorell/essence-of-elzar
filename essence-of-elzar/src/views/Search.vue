<template>
    <div>
           
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-large-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100" :key="recipe.id" v-for="recipe in recipes" >
              <RecipeListItem :recipe="recipe" />
        </div>
      </div>
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
    axios.post('http://elzar.local/api/search/', data).then((response: AxiosResponse) => {
      this.recipes = response.data;
    });
  }
}
</script>
<style scoped>
.md-layout-item{
  padding-bottom: 20px;
}
</style>
