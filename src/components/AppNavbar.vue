<template>
  <nav class="header">
    <div
      @mouseenter="open = true"
      @mouseleave="open = false"
      class="header__side-menu"
      :class="{ 'header__side-menu-open': open }"
    ></div>
    <div class="css">
      <BaseButton @mouseenter="open = true" @mouseleave="open = false">
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
import { ref } from "vue";

const open = ref(true);

const sideMenuItems = [
  {
    text: "women",
    menu: [
      {
        isGoBack: true,
      },
      {
        text: "spectacles",
        link: "#",
      },
      {
        text: "sunglasses",
        link: "#",
      },
    ],
  },
  {
    text: "men",
    menu: [
      {
        isGoBack: true,
      },
      {
        text: "spectacles",
        link: "#",
      },
      {
        text: "sunglasses",
        link: "#",
      },
    ],
  },
  {
    text: "home try on",
  },
  {
    text: "free eye test",
  },
];
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

.header__side-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 481px;
  background: #fff;
  height: calc(100vh - 50px);
  top: 50px;
  left: -481px;
  transition: all 400ms ease;
  z-index: 100;
}

.header__side-menu-open {
  left: 0;
  border-right: 1px solid #000;
}
</style>
