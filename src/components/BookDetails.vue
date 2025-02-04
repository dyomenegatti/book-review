<template>
  <v-container class="d-flex ga-4 pa-3">
    <v-col cols="12" md="8">
      <div class="title-banner pa-2 mx-2">
        <div class="text-white text-h6">
          Book review details
        </div>
      </div>

      <div class="pa-2 mx-2 d-flex flex-column ga-4">
        <h1>{{ book.title }}</h1>

        <span class="text-subtitle-2 font-weight-light">
          {{ book.createdTime }}
        </span>

        <div class="d-flex align-center">
          <v-icon color="black">mdi-book-open-page-variant</v-icon>
          <span class="ml-2 font-weight-bold">Author:</span>
          <span class="ml-3">{{ book.author }}</span>
        </div>

        <div class="pt-8 text-wrap" style="max-width: 600px; word-wrap: break-word; white-space: pre-wrap;">
          <span>{{ book.review }}</span>
        </div>

        <v-img 
          v-if="isMobile"
          :src="imageSrc"
          cover
        ></v-img>
      </div>
    </v-col>

    <v-col cols="12" md="4" sm="12">
      <v-img 
        v-if="!isMobile"
        :src="imageSrc"
        cover
      ></v-img>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

const DEFAULT_IMAGE_PATH = 'path/to/default/image.jpg';

export default {
  name: 'BookDetails',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      imageSrc: '',
      isMobile: window.innerWidth <= 965,
    }
  },
  mounted() {
    this.loadImage();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.book.image instanceof File) {
      URL.revokeObjectURL(this.imageSrc);
    }
  },
  methods: {
    loadImage() {
      if (this.book.image instanceof File) {
        this.imageSrc = URL.createObjectURL(this.book.image);
      } else if (this.book.image && typeof this.book.image === 'object' && Object.keys(this.book.image).length === 0) {
        this.imageSrc = DEFAULT_IMAGE_PATH; 
      } else {
        this.imageSrc = this.book.image || DEFAULT_IMAGE_PATH; 
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 965;
    },
  },
  computed: {
    ...mapGetters(['getBookById']),
    book() {
      return this.getBookById(this.id);
    },
  },
};
</script>

<style scoped>
.book-details {
  padding: 20px;
  border: 1px solid #ccc;
}

.ga-4 {
  gap: 16px;
}

.title-banner {
  background-color: var(--v-primary-base);
  color: var(--v-secondary-base);
}
</style>