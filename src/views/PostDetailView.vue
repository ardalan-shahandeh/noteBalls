<template>
  <div class="post-detail">
    <h1>this is post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>

    <div>
      <button @click="goHomeIn3Seconds">go home in 3 seconds</button>
    </div>

    <div>
      <button @click="goToFirstPost">go to first post</button>
    </div>

    <p><router-link to="/posts">&lt; Back</router-link></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {};

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // router.push('/')
    router.push({ name: "home" });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    name: "postDetail",
    params: {
      id: "id1",
    },
  });
};
</script>
