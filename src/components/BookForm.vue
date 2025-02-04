<template>
  <v-card class="mx-auto pa-4" width="344">
    <div class="d-flex justify-end">
      <v-btn @click="handleClose" icon aria-label="Close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-file-input 
      label="Cover" 
      prepend-icon="mdi-paperclip"
      @change="onFileChange"
      aria-label="Cover"
    ></v-file-input>

    <v-card-title>
      <v-text-field
        :value="titleBook"
        @input="updateTitleBook"
        :counter="25"
        label="Title"
        required
        aria-label="Title"
      ></v-text-field>
    </v-card-title>

    <v-card-subtitle>
      <v-text-field
        :value="authorBook"
        @input="updateAuthorBook"
        :counter="20"
        label="Author"
        required
        aria-label="Author"
      ></v-text-field>
    </v-card-subtitle>

    <v-card-text>
      <span>
        <v-textarea 
          label="Review"
          :value="reviewBook"
          @input="updateReviewBook"
          aria-label="Review"
        ></v-textarea>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="handleClose" aria-label="Cancel">Cancelar</v-btn>
      <v-btn 
        tonal
        class="btn-save"
        @click="handleSave"
        aria-label="Save">Salvar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BookForm', 
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.resetBook();
  },
  methods: {
    ...mapActions([
      'closeFormNewBook',
      'setImageBook',
      'setTitleBook',
      'setAuthorBook',
      'setReviewBook',
      'saveBookReview',
      'resetBook',
    ]),
    handleClose() {
      this.closeFormNewBook();
    },
    handleSave() {
      this.saveBookReview();
    },
    onFileChange(file) {
      if (file) {
        console.log('file', file);
        this.$store.dispatch('setImageBook', file);
      } 
    },
    updateTitleBook(value) {
      this.setTitleBook(value);
    },
    updateAuthorBook(value) {
      this.setAuthorBook(value);
    },
    updateReviewBook(value) {
      this.setReviewBook(value);
    },
  },
  computed: {
    ...mapGetters([
      'titleBook',
      'authorBook', 
      'reviewBook'
    ]),
  },
}
</script>

<style scoped>
.v-card {
  max-width: 344px;
}

.btn-save {
  background-color: var(--v-primary-base) !important;
  color: var(--v-secondary-base) !important;
}
</style>