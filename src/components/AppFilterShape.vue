<template>
  <div
    v-for="(shape, index) in data"
    :key="index"
    @click="shape.isSelected = !shape.isSelected"
    class="filter-badge"
  >
    <span :class="{ isActive: shape.isSelected }">{{ shape.name }}</span>
  </div>
</template>

<script setup>
defineProps({
  data: {
    required: true,
    type: Array,
  },
});
</script>

<style scoped>
.filter-badge {
  display: flex;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;
}

.isActive {
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 0px;
}
</style>
