import { ref, reactive, watch } from "vue";
import { defineStore } from "pinia";

export const useCollectionsStore = defineStore("collections", () => {
  const selectedCollection = ref("spectacles-women");

  const collection = reactive({
    list: [],
    currentPage: 0,
    isFetching: false,
    totalCount: null,
  });

  const selectCollection = (payload) => (selectedCollection.value = payload);

  const fetchCollection = async () => {
    console.log("🚀 ~ file: collection.js:18 ~ fetchCollection ~ collection.list.length", collection.list.length)
    console.log("🚀 ~ file: collection.js:19 ~ fetchCollection ~ collection.list.totalCount", collection.totalCount)
    if (collection.list.length === collection.totalCount) {
      return
    }

    collection.isFetching = true;
    collection.currentPage++;

    const apiUrl = `${
      import.meta.env.VITE_BASE_URL
    }/sales_channels/website/collections/${selectedCollection.value}/glasses?\
      sort[type]=collection_relations_position&sort[order]=asc&\
      page[limit]=12&page[number]=${collection.currentPage}&\
      filters[lens_variant_prescriptions][]=fashion&\
      filters[lens_variant_types][]=classic&\
      filters[frame_variant_home_trial_available]=false`;

    const response = await fetch(apiUrl.replace(/\s/g, ""));

    const { glasses, meta } = await response.json();

    collection.list.push(...glasses);
    collection.totalCount = meta.total_count;
    collection.isFetching = false;
  };

  watch(selectedCollection, async (newCollection, oldCollection) => {
    if (newCollection !== oldCollection) {
      selectedCollection.value = newCollection;
      collection.currentPage = 0;
      collection.list = [];
      fetchCollection();
    }
  });

  return { selectedCollection, selectCollection, fetchCollection, collection };
});
