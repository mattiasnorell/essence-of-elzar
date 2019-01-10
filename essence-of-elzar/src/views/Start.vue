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
import HttpHandler from '../HttpHandler';
import HttpHandlerResponse from '../HttpHandlerResponse';

import { MdLayout, MdContent } from 'vue-material/dist/components';

Vue.use(MdLayout, MdContent);

@Component({
  components: {
    AddRecipe,
    RecipeListItem,
    SearchBar,
  },
})
export default class Start extends Vue {

  private recipes: RecipeModel[] = new Array<RecipeModel>();
  private httpHandler = new HttpHandler();

  public mounted(): void {
    this.httpHandler.get('/recipes').then((response: HttpHandlerResponse) => {
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
