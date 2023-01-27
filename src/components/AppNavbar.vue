<template>
  <nav class="header">
    <AppNavbarSideMenu
      :isOpen="isOpen"
      @slideIn="isOpen = true"
      @slideOut="isOpen = false"
    />
    <div class="header__main">
      <BaseButton
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false"
        class="menu-button"
      >
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

.header__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.header__logo {
  margin-right: 16px;
}

.header__logo img {
  width: 25px;
  height: 25px;
}

.menu-button {
  border-right: 1px solid black;
}

@media (min-width: 768px) {
  .header__main {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .header__logo {
    margin-right: 0;
  }
}
</style>
