<template>
    <div>
      <AddRecipe />
      
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-large-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100" :key="recipe.id" v-for="recipe in recipes" >
              <RecipeListItem :recipe="recipe" />
        </div>
      </div>
  
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddRecipe from '@/components/AddRecipe.vue';
import RecipeListItem from '@/components/RecipeListItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import { RecipeModel } from '../models/RecipeModel';
import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

import { MdLayout, MdContent } from 'vue-material/dist/components';

Vue.use(MdLayout);
Vue.use(MdContent);

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
    axios.get('http://elzar.local/api/recipes/').then((response: AxiosResponse) => {
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
