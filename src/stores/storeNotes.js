import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: '123',
          content: 'test stersst astqwet'
        },
        {
          id: '456',
          content: 'this is sample test'
        },
        {
          id: '789',
          content: 'this text for my friends'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      id = currentDate.toString();
    
      let note = {
        id,
        content: newNoteContent,
      };
    
      this.notes.unshift(note);
    }
  }
})