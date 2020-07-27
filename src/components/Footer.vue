<template>

  <v-footer absolute >
    <v-row 
     align="center"
          justify="center">
      <router-link to="/">
     <v-btn >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    </router-link>
      <v-col
      class="nombre__munazam"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Munazam</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name:"Footer",
     data: () => ({
      icons: [
        'mdi-home',
      ],
     })  
}
</script>
<style scoped>
.nombre__munazam{
 background-color: rgb(209, 3, 123);
    color: rgb(233, 132, 194);
    text-align: center;
    font-family: fantasy;
    font-size: 2rem;
}
    </style>
