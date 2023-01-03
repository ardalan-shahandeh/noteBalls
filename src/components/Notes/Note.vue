<template>
  <div class="card mb-3 bg-light">
    <div class="card-body">
      <div class="card-text">
        {{ note.content }}
        <div class="text-right text-muted">
          <small>
            {{ characterLength }}
          </small>
        </div>
      </div>
      <div class="card-footer">
        <a href="#" type="button" class="btn btn-success mr-3"> Edit </a>

        <a
          @click.prevent="handleDeleteClick"
          href="#"
          type="button"
          class="btn btn-danger mr-3"
        >
          Delete
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
/* import*/

import { computed } from "vue";

/*props*/

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

//emits

const emit = defineEmits(["deleteClicked"]);

// characterLength

const characterLength = computed(() => {
  const length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

// handleDeleteClick

const handleDeleteClick = () => {
  emit("deleteClicked", props.note.id);
};
</script>
