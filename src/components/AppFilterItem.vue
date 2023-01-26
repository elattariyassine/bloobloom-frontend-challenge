<template>
  <div>
    <span>{{ text }}</span>
    <XMarkIcon class="badge-icon" />
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid/";

defineProps({
  text: {
    required: true,
  },
});
</script>

<style scoped>
div {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
}
.badge-icon {
  margin-left: 5px;
  width: 20px;
}
</style>
