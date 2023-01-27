<template>
  <div
    @mouseleave="emit('slideOut')"
    @mouseenter="emit('slideIn')"
    class="header__side-menu"
    :class="{ 'header__side-menu-open': isOpen }"
  >
    <AppNavbarSideMenuItem
      v-for="(menu, index) in sideMenuItems"
      :key="index"
      :menu="menu"
      @slideOut="emit('slideOut')"
    />
  </div>
</template>

<script setup>
import AppNavbarSideMenuItem from "./AppNavbarSideMenuItem.vue";
import { ref } from "vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["slideIn", "slideOut"]);

const sideMenuItems = ref([
  {
    text: "women",
    children: [
      {
        navigateBack: true,
      },
      {
        text: "spectacles",
        key: "spectacles-women",
      },
      {
        text: "sunglasses",
        key: "sunglasses-women",
      },
    ],
    isOpen: false,
  },
  {
    text: "men",
    children: [
      {
        navigateBack: true,
      },
      {
        text: "spectacles",
        key: "spectacles-men",
      },
      {
        text: "sunglasses",
        key: "sunglasses-men",
      },
    ],
    isOpen: false,
  },
  {
    text: "home try on",
  },
  {
    text: "free eye test",
  },
]);
</script>

<style scoped>
.header__side-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  background: #fff;
  height: calc(100vh - 50px);
  top: 50px;
  left: -481px;
  transition: all 400ms ease;
  z-index: 100;
  border-left: 1px solid #000;
}
@media (min-width: 768px) {
  .header__side-menu {
    width: 481px;
  }
}
.header__side-menu-open {
  left: 0;
  border-right: 1px solid #000;
}
</style>
