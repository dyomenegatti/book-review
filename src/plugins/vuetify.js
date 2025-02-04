import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true, 
    },
    dark: false, 
    themes: {
      light: {
        primary: '#1D1B1B', 
        secondary: '#F5F6FA', 
      },
      dark: {
        primary: '#F5F6FA', 
        secondary: '#1D1B1B', 
      },
    },
  },
});