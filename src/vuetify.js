import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import minifyTheme from 'minify-css-string';


Vue.use(Vuetify);

export const vuetify = new Vuetify({})

export default new Vuetify({
  theme: {
    options: { 
        minifyTheme,
        customProperties: true,
     },
  },
})

