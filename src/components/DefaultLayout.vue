<template>
  <div class="bg-gray-100 h-screen w-screen">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<style scoped></style>
