<template>
  <div class="p-8">
    <input
      v-model="keyword"
      type="text"
      class="w-full p-3 text-lg border-2 border-gray-700 border-none rounded-md outline-none placeholder:text-lg"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <div
        class="hover:shadow-2xl transition-all duration-500 shadow-lg grid p-4 rounded-xl bg-white"
        v-for="meal of meals"
        :key="meal.idMeal"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            alt=""
            class="rounded-t-2xl w-full h-64 object-cover"
          />
        </router-link>
        <div class="m-3">
          <!-- <router-link to="/"> -->
          <h3 class="text-lg font-semibold justify-self-start">
            {{ meal.strMeal }}
          </h3>
          <!-- </router-link> -->
          <p class="">
            <!-- {{ meal.strDescription }} -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            fugiat excepturi debitis aliquid natus deleniti.
          </p>
        </div>
        <div class="p-3 flex items-center justify-between">
          <a
            class="text-white px-3 py-2 rounded-md border bg-red-600 transition-all duration-100 hover:bg-red-500 hover:text-white"
            :href="meal.strYoutube"
            target="_blank"
            >YouTube</a
          >
          <!-- <router-link
            class="text-blue-700 px-3 py-2 rounded-md border border-purple-400 transition-all duration-100 hover:bg-purple-600 hover:text-white"
            to="/"
            >View</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
let route = useRoute();
let keyword = ref("");
let meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.meal;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
<style scoped></style>

<!-- https://youtu.be/Ls1WfzOrKkc?si=VG2XibNKFtNqxYks -->
