<template>
  <div class="list-item" @click="handleMenuItemsClick(menu)">
    <span>{{ menu.text }}</span>
    <ChevronRightIcon class="liste-item__icon" v-if="menu.children" />
    <div
      class="list-item__links"
      :class="{ 'list-item__links--open': menu.isOpen }"
      @mouseleave="menu.isOpen = false"
    >
      <div
        class="list-item"
        v-for="(link, index) in menu.children"
        :key="index"
        @click.stop="handleClick(menu, link)"
      >
        <template v-if="link.navigateBack">
          <ChevronLeftIcon class="liste-item__icon" />
          <span>go back</span>
        </template>
        <template v-else>
          {{ link.text }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { useCollectionsStore } from "@/stores/collection";

defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["slideOut"]);

const store = useCollectionsStore();

const handleClick = (menu, link) => {
  console.log(
    "🚀 ~ file: AppNavbarSideMenuItem.vue:44 ~ handleClick ~ link",
    link
  );
  console.log(
    "🚀 ~ file: AppNavbarSideMenuItem.vue:44 ~ handleClick ~ menu",
    menu
  );
  if (link.navigateBack) {
    menu.isOpen = false;
  }

  if (!link.navigateBack) {
    store.selectCollection(link.key);
    if (window.innerWidth < 768) {
      menu.isOpen = false;
      emit("slideOut");
    }
  }
};

const handleMenuItemsClick = (menu) => {
  if (menu.children) {
    menu.isOpen = true;
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 20px;
  border-bottom: 1px solid #000;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
  color: #000;
  text-transform: uppercase;
  transition: color 0.1s linear;
  cursor: pointer;
}

.list-item:hover {
  background-color: #000;
  color: #fff;
}

.liste-item__icon {
  width: 20px;
}

.list-item__links {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  background: #fff;
  height: calc(100vh - 50px);
  top: 50px;
  left: -481px;
  transition: all 400ms ease;
  z-index: 200;
  border-left: 1px solid #000;
}

@media (min-width: 768px) {
  .list-item__links {
    width: 481px;
  }
}

.list-item__links--open {
  left: 0;
  border-right: 1px solid #000;
}
</style>
