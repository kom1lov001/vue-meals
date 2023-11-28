<template>
  <div class="flex p-8">
    <input
      v-model="keyword"
      type="text"
      class="w-full p-3 text-lg border-2 border-gray-700 border-none rounded-md outline-none placeholder:text-lg"
      placeholder="search for meals"
      @change="searchMeals"
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

<!-- https://youtu.be/Ls1WfzOrKkc?si=VG2XibNKFtNqxYks -->
