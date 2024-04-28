<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const showDropdown = ref(false);
const showTagDropdown = ref(false);
const showLocationDropdown = ref(false);
const showTimeDropdown = ref(false);
const selectedTag = ref("");
const selectedLocation = ref("");
const selectedTime = ref("");
const keyword = ref("");
const date = ref(new Date());
const isFilterApplied = ref(false);

const { data: agendaSekolah } = await useFetch(`/api/agenda/`);

const tags = computed(() => {
  // Mendapatkan daftar kategori unik dari data agenda
  return Array.from(new Set(agendaSekolah.value.map((agenda) => agenda.tag)));
});

const locations = computed(() => {
  // Mendapatkan daftar kategori unik dari data agenda
  return Array.from(
    new Set(agendaSekolah.value.map((agenda) => agenda.lokasi)),
  );
});

const times = computed(() => {
  // Mendapatkan daftar kategori unik dari data agenda
  return Array.from(new Set(agendaSekolah.value.map((agenda) => agenda.waktu)));
});

const filteredAgenda = computed(() => {
  if (!isFilterApplied.value) {
    return agendaSekolah.value;
  }

  return agendaSekolah.value.filter((item) => {
    const keywordMatch = item.title
      .toLowerCase()
      .includes(keyword.value.toLowerCase());
    const tagMatch = selectedTag.value ? item.tag === selectedTag.value : true;
    const locationMatch = selectedLocation.value
      ? item.lokasi === selectedLocation.value
      : true;
    const timeMatch = selectedTime.value
      ? item.waktu === selectedTime.value
      : true;
    const dateMatch = date.value
      ? item.tanggal.split("T")[0] === date.value.toISOString().split("T")[0]
      : true;
    return keywordMatch && tagMatch && locationMatch && dateMatch && timeMatch;
  });
});

function applyFilters() {
  isFilterApplied.value = true;
}

function resetFilters() {
  isFilterApplied.value = false;
  // Reset nilai filter ke default
  selectedTag.value = "";
  selectedLocation.value = "";
  selectedTime.value = "";
  date.value = null;
  keyword.value = "";
}
</script>

<template>
  <div class="px-4 pb-8 pt-24">
    <div class="mt-4 p-4 rounded-lg bg-white">
      {{ selectedTag }}
      <div class="py-2 flex items-center justify-between">
        <h2 class="text-xl py-2 font-semibold">Daftar Agenda</h2>
        <NuxtLink
          to="/protected/agenda/add"
          class="bg-amber-500 rounded-md p-2"
        >
          <svg
            class="h-5 w-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </NuxtLink>
      </div>
      <div>
        <div class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              v-model="keyword"
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="Cari Agenda..."
            />
            <button
              @click="showDropdown = !showDropdown"
              class="inline-flex items-center gap-2 text-white absolute end-2.5 bottom-2.5 bg-amber-500 hover:bg-amber-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700"
            >
              <svg
                class="h-3 w-3 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
                />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>
      <div
        v-show="showDropdown"
        id="dropdown"
        class="w-full mt-2 flex px-4 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <div class="py-4 w-full">
          <h4>Filter Pencarian</h4>
          <div class="py-4 flex flex-wrap gap-2">
            <Dropdown
              :show-dropdown="showTagDropdown"
              @handle-dropdown="showTagDropdown = !showTagDropdown"
              :dropdown-items="tags"
              dropdown-title="Tag"
              v-model="selectedTag"
            />
            <Dropdown
              :show-dropdown="showLocationDropdown"
              @handle-dropdown="showLocationDropdown = !showLocationDropdown"
              :dropdown-items="locations"
              dropdown-title="Lokasi"
              v-model="selectedLocation"
            />
            <Dropdown
              :show-dropdown="showTimeDropdown"
              @handle-dropdown="showTimeDropdown = !showTimeDropdown"
              :dropdown-items="times"
              dropdown-title="Waktu"
              v-model="selectedTime"
            />
          </div>
          <h4 class="py-4">Filter Berdasarkan Tanggal</h4>
          <VDatePicker
            id="date"
            v-model="date"
            color="yellow"
            locale="id-ID"
            :popover="false"
          >
            <template #default="{ togglePopover, inputValue, inputEvents }">
              <div
                class="mb-4 flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"
              >
                <button
                  class="flex justify-center items-center px-2 bg-gray-50 hover:bg-accent-200 text-gray-700 border-r border-gray-300 hover:bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                  @click="() => togglePopover()"
                >
                  <svg
                    class="h-5 w-5 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>
                </button>
                <input
                  :value="inputValue"
                  v-on="inputEvents"
                  placeholder="17/04/2024"
                  class="flex-grow text-gray-500 bg-gray-50 px-2 py-1 hover:bg-white dark:bg-gray-700"
                />
              </div>
            </template>
          </VDatePicker>
          <button
            @click="applyFilters()"
            type="button"
            class="w-full text-white bg-amber-500 hover:bg-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-amber-600 dark:hover:bg-amber-700"
          >
            Apply Filter
          </button>
          <button
            @click="resetFilters()"
            type="button"
            class="w-full text-white bg-amber-500 hover:bg-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 mb-4 dark:bg-amber-600 dark:hover:bg-amber-700"
          >
            Reset Filter
          </button>

        </div>
      </div>
      <div
        v-for="item in filteredAgenda"
        class="mt-2 p-3 border border-slate-300 rounded-lg flex justify-between items-center"
      >
        <div>
          <h3 class="font-medium">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.waktu }}</p>
          <p class="text-sm text-gray-500">{{ item.lokasi }}</p>
          <p class="text-sm text-gray-500">{{ item.tanggal }}</p>
        </div>
        <span class="bg-amber-100 text-amber-500 p-2 text-xs rounded-xl">{{
          item.tag
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
  border: 1px solid gray;
}
</style>
