  
<template>
  <v-app>
    <h1>Munazam up your life!</h1>
     <router-link to="/">Lista</router-link>
     <router-link to="/add">Add</router-link>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
<style scoped>
    .app{
    color:rgb(129, 20, 172),
    }
</style>