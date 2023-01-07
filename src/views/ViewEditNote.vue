<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="info"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <RouterLink @click="$router.back()" to="/" class="btn btn-danger mr-2">
          Cancel
        </RouterLink>

        <button
          @click="handleSaveClick"
          class="btn btn-primary"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// router

const route = useRoute();
const router = useRouter()

// store

const storeNotes = useStoreNotes();

// Note

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

// save clicked

const handleSaveClick = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
};

</script>
