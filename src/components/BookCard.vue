<template>
  <v-card class="mx-auto hover-card fixed-width-card" @click="goToDetails">
    <v-img
      :src="imageSrc"
      class="book-image"
      contain
    ></v-img>

    <v-card-title>
      {{ book.title }}
    </v-card-title>

    <v-card-subtitle>{{ book.author }}</v-card-subtitle>

    <v-divider></v-divider>  
    
    <v-card-text class="review-text">
      {{ bookReviewTruncated }}
    </v-card-text>
    
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <span class="created-time">
        {{ book.createdTime }}
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

const DEFAULT_IMAGE_PATH = 'path/to/default/image.jpg';

export default {
  name: 'BookCard', 
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      imageSrc: '',
    }
  },
  mounted() {
    this.loadImage();
  },
  created() {
    this.listBookReview();
  },
  beforeDestroy() {
    if (this.book.image instanceof File) {
      URL.revokeObjectURL(this.imageSrc);
    }
  },
  methods: {
    ...mapActions([
      'removeBookReview',
      'listBookReview',
    ]),
    loadImage() {
      if (this.book.image instanceof File) {
        this.imageSrc = URL.createObjectURL(this.book.image);
      } else if (this.book.image && typeof this.book.image === 'object' && Object.keys(this.book.image).length === 0) {
        this.imageSrc = DEFAULT_IMAGE_PATH; 
      } else {
        this.imageSrc = this.book.image || DEFAULT_IMAGE_PATH; 
      }
    },
    goToDetails() {
      this.$router.push({ name: 'BookDetails', params: { id: this.book.id } });
    }
  },
  computed: {
    bookReviewTruncated() {
      const maxLength = 150; 
      return this.book.review.length > maxLength 
        ? this.book.review.substring(0, maxLength) + '...' 
        : this.book.review;
    }
  },
  watch: {
    book: {
      handler() {
        this.loadImage();
      },
      deep: true,
    }
  },
}
</script>

<style scoped>
.fixed-width-card {
  width: 400px;
}

.hover-card:hover {
  transform: scale(1.05);
}

.book-image {
  width: 100%;
  height: auto;
  max-height: 300px; 
  object-fit: contain; 
}

.created-time {
  font-size: 0.7rem;
  color: #938998;
  font-style: italic;
}
</style>