<template>
  <v-app-bar app :elevation="0">
    <v-toolbar-title class="text-h5 font-weight-bold">BookReview</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="mr-6" text to="/" aria-label="Home">Home</v-btn>
    <v-btn class="mr-6" text @click="handleNewBook" aria-label="New Book">New</v-btn>
    <v-btn class="mr-6" text to="/list" aria-label="Browser">Browser</v-btn>
    <v-btn class="mr-6" icon @click="toggleTheme" aria-label="Toggle Theme">
      <v-icon>{{ $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavBar',
  methods: {
    ...mapActions([
      'toggleFormNewBook',
    ]),
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    handleNewBook() {
      this.toggleFormNewBook();
    },
  }
}
</script>