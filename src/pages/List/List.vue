<template>

  <v-card class="crear__lista">
    <v-form
     @click.stop.prevent="created"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        
        v-model="producto"
        :rules="productoRules"
        label="producto"
        required
      ></v-text-field>

      <v-text-field
        v-model="cantidad"
        :rules="cantidadRules"
        label="cantidad"
        required
      ></v-text-field>


      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Crear Lista
      </v-btn>

      <v-btn
        color="pink darken-3"
        title="pink lighten-4"
        class="mr-4"
        @click="reset"
      >
        Borrar 
      </v-btn>

    </v-form>
  </v-card>

</template>


<script>
import { mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";

  export default {
    data: () => ({
      valid: true,
      producto: '',
      productoRules: [
        v => !!v || 'Debes escribir un producto',
      ],
      cantidad: '',
      cantidadRules: [
        v => !!v || 'Necesitas escribir la cantidad',
        v => Number(v) || 'Debes añadir la cantidad',
      ],
      select: null,
      lazy: false,
    }),

    methods: {
      
    ...mapActions({
      addItem: ACTION_TYPES.POST_ITEM,
    }),
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },

       resetValidation() {
      this.$refs.form.resetValidation();
    },
       edit() {
      this.$refs.form.disabled();
    },
        created() {
      this.validate();
      if (!this.valid) {
        return;
      }
      let model = {
        producto:this.producto,
        cantidad:this.cantidad,
      };
     
      this.addItem({ model, http: httpService }).then(() => this.reset());
      
    },
    },
  }
</script>



