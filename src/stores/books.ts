import { defineStore } from 'pinia'
import http from '../http'

interface Book {
  id: string
  title: string
  authors: string
  thumbnail: string
}

interface State {
  books: Book[]
}

export const useBooksStore = defineStore('books', {
  state: () => {
    return {
      books: []
    } as State
  },
  getters: {
    getBooks(state) {
      return state.books
    }
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
    }
  }
})