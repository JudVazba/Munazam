  
<template>
 <v-app>
   
      <Header/>
      <v-spacer></v-spacer>
      <Menu/> 
    <v-main>
      
         <router-view>
        </router-view>
    
     </v-main>
     <v-footer>
        <Footer/>
      </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components:{
      Header,
      Menu,
      Footer,
    }
  
};
</script>

