<template>
  <main>
    <AppNavbar />
    <section class="collection">
      <div class="collection__item"></div>
      <div class="collection__item collection__heading">
        <h1>{{ selectedCollection }}</h1>
      </div>
      <div class="collection__item">
        <div
          class="collection__filter"
          @click="isFilterOpened = !isFilterOpened"
        >
          <h3 style="text-transform: uppercase; font-weight: 600">filters</h3>
          <AdjustmentsVerticalIcon style="width: 30px" />
        </div>
      </div>
    </section>
    <section class="filter" :class="{ 'filter--open': isFilterOpened }">
      <div>
        <div style="display: flex; height: 60px">
          <div
            style="
              flex-grow: 1;
              text-align: center;
              border-right: 1px solid #000;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            colour
          </div>
          <div
            style="
              flex-grow: 1;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            shape
          </div>
        </div>
        <div></div>
        <div
          style="
            height: 60px;
            border-top: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          {{ collection.totalCount }} RESULTS FOUND
        </div>
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
import CollectionItemCard from "../components/CollectionItemCard.vue";

import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useCollectionsStore } from "@/stores/collection";

const scrollComponent = ref(null);
const isFilterOpened = ref(false);

const store = useCollectionsStore();
const { selectedCollection, collection } = storeToRefs(store);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
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
  height: 100%;
  margin-left: 20px;
  cursor: pointer;
}

.filter {
  overflow: hidden;
  display: block;
  flex-direction: column;
  width: 100%;
  max-height: 0;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease 0ms;
  position: relative;
}
.filter--open {
  max-height: 400px !important;
  border-bottom: 1px solid #000;
}
</style>
