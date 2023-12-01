<template>
  <div class="w-[800px] mx-auto">
    <div
      class="grid grid-cols-2 text-center items-center mt-48 p-5 rounded-2xl bg-white shadow-2xl"
    >
      <div class="text-left">
        <h1 class="text-4xl font-bold mb-5">
          {{ meal.strMeal }}
        </h1>
        <p class="p-2">{{ meal.strInstructions }}</p>
        <a
          px-3
          py-2
          :href="meal.strYoutube"
          class="ml-2 bg-red-400"
          type="danger"
          >Back to</a
        >
      </div>
      <div class="justify-self-center rounded-2xl">
        <img
          :src="meal.strMealThumb"
          class="rounded-e-2xl shadow-xl"
          :alt="meal.strMeal"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
// import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

let route = useRoute();
let meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>
<style></style>
