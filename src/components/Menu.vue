<template>

  <v-navigation-drawer app class="botones_menu">
   
  

    <router-link to="/list">
     <v-btn>
      <span>Crear lista</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </router-link>
    
    <v-spacer></v-spacer>

    <router-link to="/add">
    <v-btn >
      <span>Listas creadas</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </router-link>
  
  </v-navigation-drawer>  

</template>


<script>
  export default {
      name:"Menu",
    props: {
      source: String,
    },
  }
</script>

<style scoped>

</style>