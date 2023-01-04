<template>
  <div class="card mb-3 bg-light">
    <div class="card-body">
      <p class="card-text">
        <textarea
          v-model="value"
          class="w-100"
          placeholder="Add a new note"
          ref="textareaRef"
        />
      </p>
      <div class="card-footer text-right">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";

/*props*/ 
const props = defineProps(["modelValue"]);

/*emits*/
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

/*
  focus textArea
*/

const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
   focusTextarea
})
</script>
