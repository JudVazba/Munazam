  
<template>
  <div class="conter">
    <v-form
      @submit.stop.prevent="created"
      ref="form"
      v-model="valid"
      class="form"
      required
    >
      <v-text-field label="Producto" v-model="producto"></v-text-field>

      <v-text-field label="coste" v-model="coste"></v-text-field>

  

      <v-btn :disabled="!valid" type="submit"  class="button__lista" validate>Crear lista</v-btn>
      <v-btn type="button" class="button__lista" @click="reset">Borrar</v-btn>
    </v-form>
  </div>
</template>