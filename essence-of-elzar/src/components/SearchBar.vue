<template>
    <div>
      <input type="text" placeholder="Sök" v-model="query">
      <button type="button" @click.stop.prevent="submit()">Sök</button>
     </div>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {

  private query: string = '';

  constructor() {
    super();
  }

  private submit() {
    if (!this.query) {
      return;
    }

    this.$router.push('/search?q=' + this.query);
    this.$emit('search', this.query);
  }
}
</script>

<style scoped>

</style>
