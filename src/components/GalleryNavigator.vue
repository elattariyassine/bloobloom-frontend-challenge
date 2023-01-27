<template>
  <div class="navigator">
    <div
      class="next"
      @click="emit('next')"
      @mouseenter="showNext = true"
      @mouseleave="showNext = false"
    >
      <Transition>
        <ArrowRightIcon class="icon" v-if="showNext" />
      </Transition>
    </div>
    <div
      class="previous"
      @click="emit('previous')"
      @mouseenter="showPrevious = true"
      @mouseleave="showPrevious = false"
    >
      <Transition>
        <ArrowLeftIcon class="icon" v-if="showPrevious" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

const emit = defineEmits(["next", "previous"]);

defineProps({
  position: {
    type: String,
    default: "left",
  },
});

const showNext = ref(false);
const showPrevious = ref(false);
</script>

<style scoped>
.navigator {
  height: 100%;
}

.next {
  position: absolute;
  width: 15%;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
}

.previous {
  position: absolute;
  width: 15%;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
