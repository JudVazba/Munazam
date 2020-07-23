<template>
<div class="header">
 <main class="text-center">
    <h1 class="pink darken-1">Munazam Up Your Life!</h1>
 </main> 

  <v-bottom-navigation
    
    color="pink darken-1"
    bottom:false
    centered:false
  >
   <router-link to="/list">
    <v-btn>
      <span>Listas</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </router-link>
  <router-link to="/" id= "volver">
    <v-btn>
      <span>Volver</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    </router-link>

    <router-link to="/add" id="ver">
    <v-btn>
      <span>Crear lista</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </router-link>

    <v-btn>
      <span>Munazam</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</div>  
</template>

<script>
export default {
    name: "Header",
    
}

</script>

