import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFormNewBook: false,
    book: {
      titleBook: '',
      authorBook: '',
      reviewBook: '',
      imageBook: null,
      createdTime: ''
    },
    books: JSON.parse(localStorage.getItem('books')) || [],
    bookId: JSON.parse(localStorage.getItem('bookId')) || 0,
  },
  getters: {
    showFormNewBook: state => state.showFormNewBook,
    titleBook: state => state.book.titleBook,
    authorBook: state => state.book.authorBook,
    reviewBook: state => state.book.reviewBook,
    imageBook: state => state.book.imageBook,
    createdTime: state => state.book.createdTime,
    books: state => state.books,
    getBookById: state => id => state.books.find(book => book.id === id),
  },
  mutations: {
    toggleFormNewBook(state) {
      state.showFormNewBook = !state.showFormNewBook;
    },
    closeFormNewBook(state) {
      state.showFormNewBook = false;
    },
    setImageBook(state, image) {
      state.book.imageBook = image;
    },
    setTitleBook(state, payload) {
      state.book.titleBook = payload;
    },
    setAuthorBook(state, payload) {
      state.book.authorBook = payload;
    },
    setReviewBook(state, payload) {
      state.book.reviewBook = payload;
    },
    addBook(state, book) {
      book.id = state.bookId++;
      book.createdTime = new Date().toLocaleString();
      state.books.push(book);
      localStorage.setItem('books', JSON.stringify(state.books));
      localStorage.setItem('bookId', JSON.stringify(state.bookId));
    },
    listBook(state) {
      const books = JSON.parse(localStorage.getItem('books'));
      if (books) {
        state.books = books;
      }
    },
    resetBook(state) {
      state.book = {
        id: undefined,
        titleBook: '',
        authorBook: '',
        reviewBook: '',
        imageBook: null,
      }
    },
  },
  actions: {
    toggleFormNewBook({ commit }) {
      commit('toggleFormNewBook');
    },
    closeFormNewBook({ commit }) {
      commit('closeFormNewBook');
    },
    setImageBook({ commit }, image) {
      const reader = new FileReader();
      reader.onload = () => {
        commit('setImageBook', reader.result);
      };
      reader.onerror = () => {
        console.error('Error reading image file');
      };
      reader.readAsDataURL(image);
    },
    setTitleBook({ commit }, payload) {
      commit('setTitleBook', payload);
    },
    setAuthorBook({ commit }, payload) {
      commit('setAuthorBook', payload);
    },
    setReviewBook({ commit }, payload) {
      commit('setReviewBook', payload);
    },
    saveBookReview({ commit, state }) {
      const newBook = {
        id: state.book.id !== undefined ? state.book.id : state.bookId,
        title: state.book.titleBook,
        author: state.book.authorBook,
        review: state.book.reviewBook,
        image: state.book.imageBook,
        createdTime: state.book.createdTime || new Date().toLocaleString(), 
      };
      if (state.book.id !== undefined) {
        const index = state.books.findIndex(book => book.id === state.book.id);
        if (index !== -1) {
          state.books.splice(index, 1, newBook);
        }
      } else {
        commit('addBook', newBook);
      }
      commit('closeFormNewBook');
      commit('resetBook');
    },
    listBookReview({ commit }) {
      commit('listBook');
    },
    resetBook({ commit }) {
      commit('resetBook');
    },
  },
})