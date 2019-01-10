<template>
    <div>
      
        <md-field>
        
          <md-input type="text" v-model="query" placeholder="Sök..." @keyup.enter.native="submit()"></md-input> 
        
      </md-field>
    </div>
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

<style scoped>
 .search{
    background-color: #fff;
    min-height: 40px;
    height: 40px;
    margin: 0;
    box-shadow: none;
    max-width: 500px;
  }

  input, input::placeholder{
    color: white;
  }

  .md-field {
    background-color: hsla(0,0%,100%,.12);
    background-color: var(--md-theme-demo-light-background,hsla(0,0%,100%,.12));
    width: 100%;
    min-height: 48px;
    margin: 4px 0 24px;
    padding-top: 16px;
    display: -webkit-box;
    display: flex;
    position: relative;
    font-family: inherit;
  }
</style>
