<template>
  <v-container class="d-flex flex-wrap pa-3">
    <v-row no-gutters>
      <v-col 
        v-if="showFormNewBook"
        class="pa-2"
      >
        <BookForm />
      </v-col>

      <v-col 
        v-for="(book, index) in books"
        :key="index"
        class="pa-2"
      >
        <BookCard :book="book"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BookCard from './BookCard.vue';
import BookForm from './BookForm.vue';

export default {
  name: 'List',
  components: {
    BookCard, 
    BookForm,
  },
  computed: {
    ...mapGetters([
      'showFormNewBook',
      'books', 
    ])
  },
}
</script>