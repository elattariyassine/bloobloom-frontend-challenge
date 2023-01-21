<template>
  <button :class="{ 'border-right': borderRight }">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  borderRight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  width: 160px;
  cursor: pointer;
  text-transform: uppercase;
  height: 100%;
}
.border-right {
  border-right: 1px solid #000;
}
</style>
