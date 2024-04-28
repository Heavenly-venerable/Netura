<script setup lang="ts">
defineEmits(["handleDropdown"]);
defineProps(["dropdownTitle", "showDropdown", "dropdownItems"]);

const selectedDropdown = defineModel();
const selectDropdown = (item) => {
  selectedDropdown.value = item;
};
</script>

<template>
  <div class="relative">
    <button
      @click="$emit('handleDropdown')"
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="text-white bg-amber-500 hover:bg-amber-800 font-medium rounded-lg text-xs px-2.5 py-2 text-center inline-flex items-center dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus:ring-blue-800"
      type="button"
    >
      {{ selectedDropdown ? selectedDropdown : `Pilih ${dropdownTitle}` }}
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      v-show="showDropdown"
      class="absolute z-10 top-10 bg-white shadow-lg max-w-[6.5rem] rounded-lg"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        <li>
          <button
            @click="selectDropdown('')"
            class="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Semua Kategori
          </button>
        </li>
        <li v-for="(item, index) in dropdownItems" :key="index">
          <button
            @click="selectDropdown(item)"
            class="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            role="menuitem"
            tabindex="-1"
            :id="'menu-item-' + (index + 1)"
          >
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
