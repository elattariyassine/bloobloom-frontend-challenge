import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCollectionsStore = defineStore("collections", () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const selectedCollection = ref("spectacles-women")

  const selectCollection = (payload) => selectedCollection.value = payload

  const fetchCollection = () => {}

  return { selectedCollection, selectCollection }
});
