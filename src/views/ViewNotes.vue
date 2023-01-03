<template>
  <div class="notes">
    <div class="card mb-3 bg-light">
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
            @click="storeNotes.addNote"
            type="button"
            class="btn btn-success mr-3"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="card mb-3 bg-light" v-for="note in notes" :key="note.id">
      <div class="card-body">
        <p class="card-text">
          {{ note.content }}
        </p>
        <div class="card-footer">
          <button type="button" class="btn btn-success mr-3">Edit</button>
          <button type="button" class="btn btn-success mr-3">Decline</button>
        </div>
      </div>
    </div> -->

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
/*
  import
*/

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

/*
  store
*/

const storeNotes = useStoreNotes();

/*
  notes
*/

const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {

  storeNotes.addNote(newNote.value)
 
  newNote.value = "";
  newNoteRef.value.focus();
};

// delete Note

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>

<style lang="scss" scoped></style>
