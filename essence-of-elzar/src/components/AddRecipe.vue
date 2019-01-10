<template>
    <div>
      <input type="text" placeholder="Sök" v-model="url">
      <button type="button" @click.stop.prevent="submit()">Lägg till</button>
     </div>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpHandler from '../HttpHandler';
import HttpHandlerResponse from '../HttpHandlerResponse';

@Component
export default class AddRecipe extends Vue {

  private url: string = '';
  private httpHandler: HttpHandler = new HttpHandler();

  private submit() {
    if (this.url.length < 5) {
      return;
    }

    this.httpHandler.post('/recipes', { url: this.url }).then((response: HttpHandlerResponse) => {
      if (!response.isSuccess) {
        return;
      }

      this.$router.push('/recipe/' + response.data);
    });
  }
}
</script>

<style lang="sass" rel='stylesheet/scss' scoped>
  @import '../style/c-addrecipe.scss';
</style>


