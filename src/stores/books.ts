import { defineStore } from 'pinia'
import http from '../http'

interface Book {
  id: string
  title: string
  authors: string
  thumbnail: string
  description?: string
}

interface State {
  book: Book
  books: Book[]
}

export const useBooksStore = defineStore('books', {
  state: () => {
    return {
      book: {
        id: '',
        title: '',
        authors: '',
        thumbnail: ''
      },
      books: []
    } as State
  },
  getters: {
    getBooks: (state) => state.books, 
    getBook: (state) => state.book
  },
  actions: {
    async fetchBooks(query: string) {
      const { data } = await http.get(`/volumes?q=${query}`)
      this.books = data.items.map((item: Record<string, any>) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors?.join(', '),
        thumbnail: item.volumeInfo.imageLinks?.smallThumbnail,
      }))
    },
    async fetchBookById(id: string) {
      const { data } = await http.get(`/volumes/${id}`)
      this.book = {
        id: data.id,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors?.join(', '),
        thumbnail: data.volumeInfo.imageLinks?.thumbnail,
        description: data.volumeInfo.description 
      }
    }
  }
})