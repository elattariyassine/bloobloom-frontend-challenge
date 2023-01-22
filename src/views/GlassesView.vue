<template>
  <main>
    <AppNavbar />
    <section class="collection">
      <div class="collection__item"></div>
      <div class="collection__item collection__heading">
        <h1>{{ selectedCollection }}</h1>
      </div>
      <div class="collection__item collection__filter">
        <BaseButton borderRight>colour</BaseButton>
        <BaseButton borderRight>shape</BaseButton>
      </div>
    </section>
    <section
      class="collection"
      ref="scrollComponent"
      v-if="collection.list.length > 0"
    >
      <CollectionItemCard
        class="collection__item--glasses"
        v-for="item in collection.list"
        :key="item.id"
        :item="item"
      />
    </section>
  </main>
</template>

<script setup>
import AppNavbar from "../components/AppNavbar.vue";
import BaseButton from "../components/BaseButton.vue";
import CollectionItemCard from "../components/CollectionItemCard.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useCollectionsStore } from "@/stores/collection";

const scrollComponent = ref(null);

const store = useCollectionsStore();
const { selectedCollection, collection } = storeToRefs(store);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = (e) => {
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom === window.innerHeight) {
    store.fetchCollection();
  }
};

store.fetchCollection();
</script>

<style scoped>
main {
  width: 100%;
}
.collection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.collection__item {
  height: 60px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

.collection__item--glasses {
  height: 370px;
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
