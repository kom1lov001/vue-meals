import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchByLetters from "../views/SearchByLetters.vue";
import SearchByMeals from "../views/SearchByMeals.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Login from "../views/Login.vue";
import MealDetails from "../views/MealDetails.vue";

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
        path: "/by-meal/:meal?",
        name: "byMeal",
        component: SearchByMeals,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetters,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredients,
      },
    ],
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: MealDetails,
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
  {
    path: "/login",
    component: Login,
  },
];
let router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
