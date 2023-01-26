import { ref, reactive, watch, computed } from "vue";
import { defineStore } from "pinia";

export const useCollectionsStore = defineStore("collections", () => {
  const selectedCollection = ref("spectacles-women");

  const collection = reactive({
    list: [],
    currentPage: 0,
    isFetching: false,
    totalCount: null,
  });

  const filters = ref({
    colors: [
      {
        name: "Black",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_black_01.png",
        isSelected: false,
      },
      {
        name: "Tortoise",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_tortoise_02.png",
        isSelected: false,
      },
      {
        name: "Coloured",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_coloured_03.png",
        isSelected: false,
      },
      {
        name: "Crystal",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_crystal_04.png",
        isSelected: false,
      },
      {
        name: "Dark",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_dark_05.png",
        isSelected: false,
      },
      {
        name: "Bright",
        imageUrl:
          "https://d32y5z2afvomc1.cloudfront.net/assets/filters_bright_06.png",
        isSelected: false,
      },
    ],
    shapes: [
      { name: "Square", isSelected: false },
      { name: "Rectangle", isSelected: false },
      { name: "Round", isSelected: false },
      { name: "Cat-eye", isSelected: false },
    ],
  });

  const clearFilter = () => {
    Object.keys(filters.value).forEach((filter) =>
      filters.value[filter].forEach((item) => (item.isSelected = false))
    );
  };

  const selectedColors = computed(() =>
    filters.value.colors.filter((color) => color.isSelected)
  );

  const selectedShapes = computed(() =>
    filters.value.shapes.filter((shape) => shape.isSelected)
  );

  const selectCollection = (payload) => (selectedCollection.value = payload);

  const fetchCollection = async () => {
    if (collection.list.length === collection.totalCount) {
      return;
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

  return {
    selectedCollection,
    selectCollection,
    fetchCollection,
    collection,
    filters,
    selectedColors,
    selectedShapes,
    clearFilter,
  };
});
