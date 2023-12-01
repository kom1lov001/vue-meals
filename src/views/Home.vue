<template>
  <div class="flex flex-col justify-center p-8">
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
// import store from "../store";
import axiosClient from "../axiosClient";

// let meals = computed(() => store.state.meals);
let ingredients = ref([]);

onMounted(async () => {
  let response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
<style></style>
