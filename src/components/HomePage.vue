<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <div class="d-flex align-center flex-column">
      <div class="title-banner pa-4">
        <h1 class="text-white">
          Welcome to BookReview.
        </h1>
      </div>
  
      <p class="mt-4">
        Discover, review, and share your love for books.
      </p>
  
      <v-btn class="mt-4 custom-btn" color="primary" @click="goToList" aria-label="Start">Start</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage', 
  methods: {
    goToList() {
      this.$router.push('/list');
    },
  }
}
</script>

<style scoped>
.title-banner {
  background-color: var(--v-primary-base);
  color: var(--v-secondary-base);
  padding: 20px;
  max-width: 400px;
  border-radius: 8px;
}

.custom-btn {
  margin-top: 16px;
}

.custom-btn.v-btn:not(.v-btn--outlined).primary {
  background-color: var(--v-primary-base) !important;
  color: var(--v-secondary-base) !important;
}
</style>