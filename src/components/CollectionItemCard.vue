<template>
  <div class="container">
    <div class="container__header">
      <span>
        {{ item.name }}
      </span>
      <span class="container__header__variant-name">
        {{ variantName }}
      </span>
    </div>
    <div
      class="glass-card"
      :style="{
        backgroundImage: `url(${item.glass_variants[variantIndex].media[0]?.url})`,
      }"
    >
      <GalleryNavigator @previous="previous" @next="next" />
    </div>
    <div class="container__body">
      <div
        v-for="(variant, index) in item.glass_variants"
        :key="index"
        @click="selectVariant(variant, index)"
        :style="{
          backgroundImage: `url(${variant.frame_variant.colour.media[0].url})`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GalleryNavigator from "./GalleryNavigator.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const variantIndex = ref(0);
const variantName = ref("");

const selectVariant = (variant, index) => {
  variantIndex.value = index;
  variantName.value = variant.frame_variant.colour.name;
};

const next = () => {
  if (props.item.glass_variants[variantIndex.value + 1]?.media[0]?.url) {
    variantIndex.value++;
  } else {
    variantIndex.value = 0;
  }
};

const previous = () => {
  if (props.item.glass_variants[variantIndex.value - 1]?.media[0]?.url) {
    variantIndex.value--;
  } else {
    variantIndex.value = props.item.glass_variants.length - 1;
  }
};
</script>

<style scoped>
.glass-card {
  height: 100%;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.container__header {
  position: absolute;
  z-index: 50;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-family: serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}

.container__header__variant-name {
  margin-left: 10px;
  font-weight: normal;
}

.container__body {
  display: flex;
  flex-direction: row;
}

.container__body div {
  height: 50px;
  flex-grow: 1;
  background-size: cover;
  cursor: pointer;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
}
</style>
