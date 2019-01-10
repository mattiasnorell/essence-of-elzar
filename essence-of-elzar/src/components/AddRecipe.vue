<template>
    <div>
      <input type="text" placeholder="Sök" v-model="url">
      <button type="button" @click.stop.prevent="submit()">Lägg till</button>
     </div>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse, AxiosAdapter, AxiosInstance } from 'axios';

@Component
export default class AddRecipe extends Vue {

  private url: string = '';

  private submit() {
    if (this.url.length < 5) {
      return;
    }

    axios.post('http://elzar.local/api/recipes/', { url: this.url }).then((response: AxiosResponse) => {
      if (response.status !== 200) {
        return;
      }

      this.$router.push('/recipe/' + response.data);
    });
  }
}
</script>

<style scoped>

</style>




