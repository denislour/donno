<template>
  <Navbar />
  <Sidebar />
  <div class="p-4 sm:ml-64 mt-14">
    <Breadcrumbs />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/admin/Navbar.vue";
import Sidebar from "../components/admin/Sidebar.vue";
import Breadcrumbs from "../components/admin/Breadcrumbs.vue";
</script>
