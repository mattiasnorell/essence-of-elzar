<template>
    <div>
      <div class="md-layout">
        <div class="md-layout-item md-large-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100" :key="recipe.id" v-for="recipe in recipes" >
              <RecipeListItem :recipe="recipe" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import RecipeListItem from '@/components/RecipeListItem.vue';
import SearchBar from '@/components/SearchBar.vue';
import { RecipeModel } from '../models/RecipeModel';
import HttpHandler from '../HttpHandler';
import HttpHandlerResponse from '../HttpHandlerResponse';


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
  private httpHandler: HttpHandler = new HttpHandler();

  private searchHandler(event: string) {
    this.search(event);
  }

  @Watch('$route.query.q', { immediate: true, deep: true })
  private onUrlChange(newVal: any) {
    this.search(newVal);
  }

  private search(query: string) {
    if (!query) {
      return;
    }

    const data = {tags: query.split(' ')};
    this.httpHandler.post('/search', data).then((response: HttpHandlerResponse) => {
      if (response.isSuccess) {
        this.recipes = response.data;
      }
    });
  }
}
</script>

<style lang="sass" rel='stylesheet/scss' scoped>
  @import '../style/v-search.scss';
</style>
