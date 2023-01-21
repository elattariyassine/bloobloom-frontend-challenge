<template>
  <nav class="header">
    <AppNavbarSideMenu
      :isOpen="isOpen"
      @slideIn="isOpen = true"
      @slideOut="isOpen = false"
    />
    <div class="css">
      <BaseButton @mouseenter="isOpen = true" @mouseleave="isOpen = false">
        menu
      </BaseButton>
      <div class="header__logo">
        <img
          src="https://avatars.githubusercontent.com/u/630302?s=200&v=4"
          alt="logo"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import AppNavbarSideMenu from "./AppNavbarSideMenu.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  background-color: #fff;
  box-sizing: border-box;
}

.css {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 50%;
}

.header__logo img {
  width: 25px;
  height: 25px;
}
</style>
