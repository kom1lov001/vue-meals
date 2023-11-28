<template>
  <!-- <h1 class="m-3">Search By Letter</h1> -->
  <div class="flex justify-center gap-1 mt-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      class="p-2 text-2xl"
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
