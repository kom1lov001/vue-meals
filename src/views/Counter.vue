<!--<template>
  <button
    class="p-3 m-4 text-blue-900 bg-red-400 text-xl rounded-lg"
    @click="counterFunction(num)"
  >
    Counter : {{ counter }}
  </button>
  <router-link to="/">Go Back</router-link>

  <h1>Vue counter</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil animi
    cupiditate optio, perspiciatis doloribus ea minus labore asperiores quisquam
    at, dolor eveniet iste eligendi harum. Non est perferendis veniam! Lorem
    ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis minima
    placeat corporis modi sunt quisquam vel provident accusamus alias dolorem!
    Neque sequi porro voluptatem laudantium tempore distinctio eveniet, facere
    dolorem quibusdam consequuntur dignissimos quo dicta? Dolores velit fugit
    cupiditate corrupti, cumque exercitationem a quibusdam!
  </p>
  <h1 class="text-4xl flex float-right">{{ counter }}</h1>
</template>
<script setup>
import { onMounted, ref } from "vue";
let counter = ref(0);
let num = ref(1);
function counterFunction(num) {
  if (num == 0) {
    counter.value++;
  } else if (num > 0) {
    counter.value += 20;
  }
}
onMounted(() => {
  console.log(`${counter.value}`);
});
</script>
<style scoped></style>
-->
<template>
  <div></div>
</template>
<script setup></script>
<style lang=""></style>
