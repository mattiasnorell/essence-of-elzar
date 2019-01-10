<template>
  <div id="app">
    <div class="page-container">
        <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <SearchBar />
        
            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button">
                <md-icon>info</md-icon>
              </md-button>

            </div>
          </div>


        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">
            Essence of Elzar
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text"><router-link to="/">Home</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>search</md-icon>
              <span class="md-list-item-text"><router-link to="/search">Sök</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>add</md-icon>
              <span class="md-list-item-text">Lägg till recept</span>
            </md-list-item>

          </md-list>
        </md-app-drawer>

        <md-app-content>
          <router-view/>
        </md-app-content>
      </md-app>    
  </div>
 </div>
</template>

<script>

import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Overlap',
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="sass" rel='stylesheet/scss' scoped>
  @import 'style/app.scss';
</style>