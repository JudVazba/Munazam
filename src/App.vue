  
<template>
 <v-app class="app">
  
    
    <v-main>
      <Header />
      <v-navigation-drawer>
      <Menu class="menu" />
      </v-navigation-drawer>
     
      <v-container fluid="false">
        <router-view></router-view>
      </v-container>
      
    </v-main>
  </v-app>

   
</template>

<script>
import Header from './pages/Menu/Header.vue';
import Menu from './pages/Menu/Menu.vue';
export default {
  name: "app",
  
    components:{
      Header,
      Menu,
    }
  
};
</script>
<style scoped>
  .app { 
    color:lightcoral;
  
  }
  .menu{
    grid:6rem;
  }
  

</style>