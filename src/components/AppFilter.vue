<template>
  <section class="filter" :class="{ 'filter--open': isFilterOpened }">
    <div class="filter__main">
      <div class="filter__panel">
        <div class="filter__panel--header">color</div>
        <div class="filter__panel--body">
          <AppFilterColors :data="filters.colors" />
        </div>
      </div>
      <div class="filter__panel">
        <div class="filter__panel--header">shape</div>
        <div class="filter__panel--body">
          <AppFilterShape :data="filters.shapes" />
        </div>
      </div>
    </div>
    <div class="filter__content">
      <div class="filter__content--item flex flex-wrap">
        <AppFilterItem
          v-for="(filter, index) in selectedFilters"
          :key="index"
          :text="filter"
          @click="uncheckFilter(filter)"
        />
      </div>
      <div class="filter__content--item text-center">
        {{ totalCount }} RESULTS FOUND
      </div>
      <div
        class="filter__content--item text-right"
        @click="store.clearFilter"
        v-if="filterCount > 0"
      >
        clear filters
      </div>
    </div>
  </section>
</template>

<script setup>
import AppFilterColors from "./AppFilterColors.vue";
import AppFilterShape from "./AppFilterShape.vue";

import { computed } from "vue";
import { useCollectionsStore } from "@/stores/collection";
import AppFilterItem from "./AppFilterItem.vue";

const props = defineProps({
  isFilterOpened: {
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
  filterCount: {
    type: Number,
    required: true,
  },
});

const store = useCollectionsStore();

const filters = computed(() => store.filters);

const selectedFilters = computed(() => [
  ...store.selectedColors.map((color) => color.name),
  ...store.selectedShapes.map((shape) => shape.name),
]);

const uncheckFilter = (item) => store.uncheckItem(item);
</script>

<style scoped>
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

.filter__main {
  display: flex;
  flex-direction: column;
}

.filter__main .filter__panel:first-of-type {
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
}

.filter__main .filter__panel:nth-of-type(2) {
  border-left: 1px solid #000;
}

@media (min-width: 768px) {
  .filter__panel {
    width: 50%;
  }

  .filter__main {
    display: flex;
    flex-direction: row;
  }

  .filter__main .filter__panel:first-of-type {
    border-bottom: none;
  }

  .filter__main .filter__panel:nth-of-type(2) {
    border-left: none;
  }
}

.filter__panel {
  width: 100%;
  border-right: 1px solid #000;
}

.filter__panel--header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #000;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
}

.filter__panel--body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
}

.filter__content {
  height: 60px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.filter__data {
  display: flex;
  border-top: 1px solid #000;
  height: 100px;
}

.filter__content--item {
  width: 33%;
}

.filter__content--item.text-center {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000;
  white-space: nowrap;
}

.filter__content--item.text-right {
  cursor: pointer;
  width: fit-content;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  margin-left: auto;
}
</style>
