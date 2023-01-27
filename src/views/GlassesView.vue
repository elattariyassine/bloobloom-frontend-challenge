<template>
  <main>
    <!-- Navbar -->
    <AppNavbar />
    <!-- Selected collection & filter -->
    <section class="collection collection__type">
      <div class="collection__item"></div>
      <div class="collection__item collection__heading">
        <h1>{{ selectedCollection }}</h1>
      </div>
      <div class="collection__item">
        <div
          class="collection__filter"
          @click="isFilterOpened = !isFilterOpened"
        >
          <h3 class="collection__filter--heading">filters</h3>
          <AdjustmentsVerticalIcon class="collection__filter--icon" />
          <div class="collection__filter--count">
            {{ collection.selectedFilterCount }}
          </div>
        </div>
      </div>
    </section>
    <AppFilter
      :isFilterOpened="isFilterOpened"
      :totalCount="collection.totalCount"
      :filterCount="collection.selectedFilterCount"
    />
    <!-- Glasses Grid -->
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
    <Loader
      v-if="collection.isFetching"
      :class="{ 'mt-100px': collection.list.length === 0 }"
    />
  </main>
</template>

<script setup>
import AppNavbar from "../components/AppNavbar.vue";
import CollectionItemCard from "../components/CollectionItemCard.vue";
import AppFilter from "../components/AppFilter.vue";
import Loader from "../components/Loader.vue";

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
</script>

<style scoped>
main {
  width: 100%;
}

.collection {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-left: 1px solid black;
}

.collection__type .collection__item:first-of-type {
  display: none;
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
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}

.collection__filter {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 20px;
  cursor: pointer;
  width: fit-content;
  margin-left: auto;
  margin-right: 30px;
}

.collection__filter--count {
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: -3px;
  height: 18px;
  width: 18px;
  border-radius: 100%;
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 60px;
  text-align: center;
  color: #000;
}

.collection__filter--heading {
  text-transform: uppercase;
  font-weight: 600;
}

.collection__filter--icon {
  width: 30px;
}

.mt-100px {
  margin-top: 100px;
}

@media (min-width: 768px) {
  .collection {
    grid-template-columns: repeat(2, 1fr);
  }
  .collection__type {
    grid-template-columns: repeat(1, 1fr);
  }
  .collection__heading h1 {
    font-weight: 700;
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  .collection {
    grid-template-columns: repeat(3, 1fr);
  }
  .collection__type .collection__item:first-of-type {
    display: block;
  }
  .collection__heading h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
}
</style>
