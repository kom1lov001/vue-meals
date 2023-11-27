<template>
  <div class="flex p-8">
    <input
      v-model="keyword"
      type="text"
      class="outline-none border-none p-3 text-lg placeholder:text-lg border-2 rounded-md border-gray-700 w-full"
      placeholder="search for meals"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "../axiosClient";
let keyword = ref("");
function searchMeals() {
  axiosClient.get(`search.php?s=${keyword.value}`);
}
</script>
<style scoped></style>
