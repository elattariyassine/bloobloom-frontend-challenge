<template>
  <div
    class=""
    style="display: flex; flex-direction: column; position: relative"
  >
    <div
      style="
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
      "
    >
      <span>
        {{ item.name }}
      </span>
      <span style="margin-left: 10px; font-weight: normal">
        {{ variantName }}
      </span>
    </div>

    <div
      class="glass-card"
      style="height: 100%; flex-grow: 1"
      :style="{
        backgroundImage:
          'url(' + item.glass_variants[indexe].media[0]?.url + ')',
      }"
    ></div>
    <div style="display: flex; flex-direction: row">
      <div
        v-for="(variant, index) in item.glass_variants"
        :key="index"
        class="footer__color__button"
        :style="{
          'background-image': `url(${variant.frame_variant.colour.media[0].url})`,
        }"
        style="
          height: 50px;
          flex-grow: 1;
          background-size: cover;
          cursor: pointer;
          border-top: 1px solid #000;
          border-right: 1px solid #000;
        "
        @click="selectVariant(variant, index)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const indexe = ref(0);
const variantName = ref("");

const selectVariant = (variant, index) => {
  console.log(
    "🚀 ~ file: CollectionItemCard.vue:33 ~ selectVariant ~ variant",
    variant
  );
  indexe.value = index;
  variantName.value = variant.frame_variant.colour.name;
};
</script>

<style scoped>
.glass-card {
  background-size: cover;
  background-position: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* @keyframes namechange {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.enter-active {
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: namechange;
  animation-direction: normal;
}
.leave-active {
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: namechange;
  animation-direction: reverse;
} */
</style>
