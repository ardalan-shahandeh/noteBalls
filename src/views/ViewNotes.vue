<template>
  <div class="notes">
    <AddEditNote 
      v-model="newNote"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="btn btn-success mr-3"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

    <!-- <div class="card mb-3 bg-light">
      <div class="card-body">
        <p class="card-text">
          <textarea
            v-model="newNote"
            class="w-100"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </p>
        <div class="card-footer text-right">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="btn btn-success mr-3"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
/*
  import
*/

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

/*
  store
*/

const storeNotes = useStoreNotes();

/*
  notes
*/

const newNote = ref("");
const addEditNoteRef = ref(null)


const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea()
};
</script>
