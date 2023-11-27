import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchByLetters from "../views/SearchByLetters.vue";
import SearchByMeals from "../views/SearchByMeals.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

let routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetters,
      },
      {
        path: "/by-meal/:meal?",
        name: "byMeal",
        component: SearchByMeals,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredients,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];
let router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
