  
<template>
 <v-app>
   
      <Header/>
      <v-spacer></v-spacer>
      <Menu/> 
      <v-footer>
        <Footer/>
      </v-footer>
    <v-main>
      
         <router-view>
           <App/>
        </router-view>
    
     </v-main>
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

