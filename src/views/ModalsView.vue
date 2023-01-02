<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">

      <template #title></template>
      <!-- <template v-slot:title></template> -->

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        hic facilis eveniet quis voluptas harum, in, dolore iusto quod accusamus
        recusandae? Nesciunt magni sunt ab laboriosam blanditiis at, dignissimos
        fugit. Quo illum tempore voluptas odio nobis assumenda, ut reiciendis.
        Quidem laborum tempora minus odio vel incidunt quaerat excepturi
        deserunt dolorum?
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import Modal from "@/components/Modal.vue";

/*
  modals
*/

const showModal = ref(false);
</script>
