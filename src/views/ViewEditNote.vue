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
        <RouterLink
          to="/" 
          class="btn btn-danger mr-3"
        >
          Cancel
        </RouterLink>

        <button 
          class="btn btn-primary mr-3"
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
import AddEditNote from "@/components/Notes/AddEditNote.vue";

// Note

const noteContent = ref("");
</script>
