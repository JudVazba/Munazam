<template>
  <div class='conter'>
      
    <template>
      <v-form ref="form" v-model="valid" lazy-validation class='form'>

        <v-text-field :rules="productRules" label="producto" required></v-text-field>
        <v-text-field label="número" :rules="númeroRules" required></v-text-field>
        <v-btn :disabled="!valid" color="pink lighten-1" class="mr-4" @click=created validate >Crear</v-btn>
        <v-btn color="pink lighten-1" class="mr-4" @click="reset">Borrar</v-btn>

      </v-form>
       
    </template>
  </div>
</template>
  


<script>
import axios from 'axios';
export default {
  name: "Add",
  data: () => ({
    valid: true,
    Producto: "",
    numero: "",
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    disabled() {
     this.$refs.form.disabled();
    },
      
    create() {
      let post = {
      Producto: '',
      numero: '',
      bought: false
  };
    axios.post("http://localhost:8080", post).then((result) => {
      console.log(result);
    } );
 
  }
   
  }
};
</script>


