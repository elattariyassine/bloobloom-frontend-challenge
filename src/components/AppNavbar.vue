<template>
  <nav class="header">
    <!-- <div class="header-side-menu"></div> -->
    <div>
      <div class="header-menu-button">
        <BaseButton />
      </div>
      <div class="header-logo">
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

.header > div {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
}

.header-logo img {
  width: 25px;
}
</style>
