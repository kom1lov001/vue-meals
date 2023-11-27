<template>
  <div>
    <header
      class="bg-white shadow h-16 flex justify-around items-stretch text-center"
    >
      <router-link class="inline-flex items-center" :to="{ name: 'home' }"
        >Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          class="inline-flex px-2 h-full transition-colors hover:bg-purple-100 items-center"
          :to="{ name: 'byLetter' }"
        >
          Search By Letter
        </router-link>
        |
        <router-link
          class="inline-flex px-2 h-full transition-colors hover:bg-purple-100 items-center"
          :to="{ name: 'byMeal' }"
        >
          Meals By Meals
        </router-link>
        |
        <router-link
          class="inline-flex px-2 h-full items-center transition-colors hover:bg-purple-100"
          :to="{ name: 'byIngredient' }"
        >
          Meals By Ingredients
        </router-link>
        |
        <router-link
          class="inline-flex px-2 h-full items-center transition-colors hover:bg-purple-100"
          to="/guest"
          >Guest</router-link
        >
      </div>
    </header>
  </div>
</template>
<script setup></script>
<style scoped></style>
