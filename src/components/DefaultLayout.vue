<template>
  <div class="w-screen h-screen bg-gray-100">
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
