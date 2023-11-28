<template>
  <div>
    <header
      class="flex items-stretch justify-around h-16 text-center bg-white shadow"
    >
      <router-link class="inline-flex items-center" :to="{ name: 'home' }"
        >Home</router-link
      >
      <div class="flex items-center">
        <router-link
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
          :to="{ name: 'byLetter' }"
        >
          Search By Letter
        </router-link>
        |
        <router-link
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
          :to="{ name: 'byMeal' }"
        >
          Meals By Meals
        </router-link>
        |
        <router-link
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
          :to="{ name: 'byIngredient' }"
        >
          Meals By Ingredients
        </router-link>
        |
        <router-link
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
          to="/guest"
          >Guest</router-link
        >
      </div>
    </header>
  </div>
</template>
<script setup></script>
<style scoped></style>
