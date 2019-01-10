<template>
   <router-link :to="{ name: 'recipe', params: { id: recipe.id }}">
    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img v-bind:src="recipe.image"/>
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ recipe.title }}</span>
            <span class="md-subhead"></span>
          </md-card-header>

        </md-card-area>
      </md-card-media-cover>
     </md-card>
  </router-link>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RecipeModel } from '../models/RecipeModel';
import { MdCard } from 'vue-material/dist/components';

Vue.use(MdCard);

@Component
export default class RecipeListItem extends Vue {
  @Prop() private recipe!: RecipeModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel='stylesheet/scss' scoped>
  @import '../style/c-recipelistitem.scss';
</style>
