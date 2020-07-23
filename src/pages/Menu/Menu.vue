<template>
  <v-app id="menu">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="pink lighten-1"
                dark
                flat
              >
                <v-toolbar-title>Munazam</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="crear-lista"
                    name="crear"
                    prepend-icon="mdi-domain"
                    type="text"
                  ></v-text-field>

            
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <router-link to="/add" id="ver" />
                <v-spacer></v-spacer>
                <v-btn color="pink darken-1">Crear</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
      name:"Menu",
    props: {
      source: String,
    },
  }
</script>