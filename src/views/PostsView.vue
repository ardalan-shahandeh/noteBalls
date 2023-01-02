<template>
  <div class="about">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`">Post 1</router-link>
      </li>
    </ul>

    <textarea placeholder="please wright about yourself..." v-autofocus />
  </div>
</template>

<script setup>
/* import */
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

/* Posts */

const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>
