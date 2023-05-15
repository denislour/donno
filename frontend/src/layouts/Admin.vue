<template>
  <Navbar />
  <Sidebar />
  <div class="p-4 sm:ml-64 mt-14">
    <!-- <Breadcrumbs /> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>
