import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content: 'test stersst astqwet'
        },
        {
          id: 'id2',
          content: 'this is sample test'
        },
        {  
          id: 'id3',
          content: 'this text for my friends'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();
    
      let note = {
        id,
        content: newNoteContent,
      };
    
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    }
  }
})