<template>
  <md-field>
    <md-input class="search" type="text" v-model="query" placeholder="Sök..." @keyup.enter.native="submit()"></md-input> 
  </md-field> 
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MdInput, MdField } from 'vue-material/dist/components';

Vue.use(MdField);

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

    this.$router.push({ path: '/search', query: { q: this.query } });
  }
}
</script>

<style lang="sass" scoped>
  @import '../style/c-searchbar.scss';
</style>
