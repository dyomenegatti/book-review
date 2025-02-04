<template>
  <v-app>
    <NavBar />
    <v-main>
      <BookListPage v-if="$route.name === 'BookList'"/>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import BookListPage from './components/BookListPage.vue';

export default {
  name: 'App',
  components: {
    NavBar, BookListPage
  }
}
</script>