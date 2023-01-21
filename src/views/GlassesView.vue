<template>
  <main>
    <AppNavbar />
    <section class="collection">
      <div class="collection__item"></div>
      <div class="collection__item collection__heading">
        <h1>{{ selectedCollection }}</h1>
      </div>
      <div class="collection__item collection__filter">
        <!-- <button>colour</button> -->
        <!-- <button>shape</button> -->
        <BaseButton borderRight>colour</BaseButton>
        <BaseButton borderRight>shape</BaseButton>
      </div>
      <!-- <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div>
      <div class="collection__item">1</div> -->
    </section>
  </main>
</template>

<script setup>
import AppNavbar from "../components/AppNavbar.vue";
import BaseButton from "../components/BaseButton.vue";

import { storeToRefs } from "pinia";
import { useCollectionsStore } from "@/stores/collection";

const store = useCollectionsStore();
const { selectedCollection } = storeToRefs(store);
</script>

<style scoped>
main {
  width: 100%;
}
.collection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.collection__item {
  height: 60px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

.collection__heading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: serif;
  text-transform: uppercase;
  font-weight: 900;
}

.collection__heading h1 {
  font-family: serif;
  text-transform: uppercase;
  font-weight: 900;
}

.collection__filter {
  display: flex;
  align-items: center;
}
</style>
