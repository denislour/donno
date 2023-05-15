<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Post from "../components/Post.vue";
</script>
