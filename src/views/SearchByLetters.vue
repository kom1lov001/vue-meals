<template>
  <!-- <h1 class="m-3">Search By Letter</h1> -->
  <div class="flex gap-1 justify-center mt-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      class="text-2xl p-2"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
<style scoped></style>
