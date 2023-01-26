<template>
  <div
    v-for="(color, index) in data"
    :key="index"
    @click="color.isSelected = !color.isSelected"
    class="filter-badge"
  >
    <div class="filter-badge__content" :class="{ isActive: color.isSelected }">
      <div
        class="filter-badge__content__image"
        :style="{
          backgroundImage: 'url(' + color.imageUrl + ')',
        }"
      ></div>
    </div>
    <span>{{ color.name }}</span>
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
.filter-badge__content {
  border: 1px solid #fff;
  border-radius: 9999px;
  padding: 1px;
}
.isActive {
  border: 1px solid #000;
}
.filter-badge__content__image {
  width: 16px;
  height: 16px;
  border-radius: 9999px;
}
.filter-badge > div {
  margin-right: 8px;
}
</style>
