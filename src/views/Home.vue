<template>
  <div class="flex p-8 flex-col justify-center">
    <!-- <pre>{{ ingredients }}</pre> -->
    <!-- <router-link to="/counter" class="p-3 m-4 text-gray-500"
      >Counter
    </router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link> -->
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

// let meals = computed(() => store.state.meals);
let ingredients = ref([]);

onMounted(async () => {
  let response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
<style lang=""></style>

<!-- <ul>
      <li>
        <router-link to="/about">About</router-link> | |
        <router-link to="/login">Login</router-link>
      </li>
    </ul> -->
<!--// <template>
//   <div>
//     <input type="text" />
//   </div>
// </template>
// <script setup></script>
// <style lang=""></style>
-->
