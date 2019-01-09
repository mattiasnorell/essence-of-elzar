<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Sök</router-link> | 
      <router-link to="/recipe">Recept</router-link>
    </div>

    <router-view/>

  </div>
</template>

<style>
#app {
  padding: 20px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
