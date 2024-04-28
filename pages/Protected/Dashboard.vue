<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const date = ref(new Date());
const activeIndex: any = ref(0);
const filter: any = ref(null);
const attrs = ref([
  {
    key: "today",
    highlight: true,
    dates: new Date(),
  },
]);

const { data: agendaSekolah } = await useFetch(`/api/agenda/`);

const kelas = ref([
  { name: "Semua", filterName: null },
  { name: "Kelas - 10", filterName: "10" },
  { name: "Kelas - 11", filterName: "11" },
  { name: "Kelas - 12", filterName: "12" },
]);

const items = ref([
  {
    name: "10 TKJ 1",
    muridHadir: 29,
    totalMurid: 34,
  },
  {
    name: "10 TKJ 2",
    muridHadir: 31,
    totalMurid: 31,
  },
  {
    name: "11 TKJ 3",
    muridHadir: 30,
    totalMurid: 32,
  },
  {
    name: "12 TKJ 3",
    muridHadir: 29,
    totalMurid: 30,
  },
]);

const progress = computed(() => {
  items.value.filter;
});

const { data: userData } = await useFetch(`/api/user/`);

const filteredItems = computed(() => {
  if (filter.value === null) {
    return items.value;
  }
  return items.value.filter((item) => item.name.includes(filter.value));
});

function isActive(index) {
  return activeIndex.value === index;
}
function setFilter(index, filterName) {
  if (activeIndex.value === index) {
    return;
  }
  activeIndex.value = index;
  filter.value = filterName;
}
const filteredAgenda = computed(() => {
  return agendaSekolah?.value.filter((item) => {
    return date.value
      ? item.tanggal.split("T")[0] === date.value.toISOString().split("T")[0]
      : true;
  });
});
</script>

<template>
  <div class="bg-gray-50">
    <div class="px-4 pb-8 pt-24">
      <h1 class="text-3xl font-bold">Beranda</h1>
      <div class="mt-4 my-calendar">
        <VDatePicker
          v-model="date"
          mode="date"
          class="rounded-lg"
          color="amber"
          view="weekly"
          locale="id-ID"
          expanded
          borderless
          is-required
        />
      </div>
      <div class="mt-4 p-4 rounded-lg bg-white">
        <div class="py-2 flex items-center justify-between">
          <h2 class="text-xl py-2 font-semibold">Agenda</h2>
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
        <div
          v-if="filteredAgenda.length == 0"
          class="flex items-center p-4 mb-4 mt-2 text-sm text-amber-800 rounded-lg bg-amber-50 dark:bg-gray-800 dark:text-amber-300"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Informasi!</span> Tidak ada agenda yang dijadwalkan untuk hari ini.
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
          </div>
          <span class="bg-amber-100 text-amber-500 p-2 text-xs rounded-xl">{{
            item.tag
          }}</span>
        </div>
      </div>
      <div class="mt-4 p-4 rounded-lg bg-white">
        <h2 class="text-xl pb-2 font-semibold">Kehadiran Siswa</h2>
        <div class="no-scrollbar flex py-2 overflow-x-auto gap-x-2">
          <button
            v-for="(item, index) in kelas"
            class="text-nowrap py-1 px-2 text-sm rounded-xl border border-amber-500"
            :class="{
              'bg-amber-500': isActive(index),
              'text-white': isActive(index),
              'bg-white': !isActive(index),
              'text-amber-500': !isActive(index),
            }"
            @click="setFilter(index, item.filterName)"
          >
            {{ item.name }}
          </button>
        </div>
        <div
          v-for="item in filteredItems"
          class="mt-4 p-3 border border-slate-300 rounded-lg flex justify-between items-center"
        >
          <div>
            <h3 class="font-medium">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">Klik untuk edit absensi</p>
          </div>
          <div
            class="progress-bar"
            :style="{
              '--progress-value': `${(item.muridHadir / item.totalMurid) * 100}%`,
            }"
          >
            <div class="text-xs">
              {{ item.muridHadir }}/{{ item.totalMurid }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --progress-value: 100%; /* Nilai default */
}

.vc-container .vc-weekday-1,
.vc-container .vc-weekday-7 {
  color: #f87171;
}

.vc-amber {
  --vc-accent-100: #fffbeb;
  --vc-accent-200: #fef3c7;
  --vc-accent-300: #fcd34d;
  --vc-accent-400: #fbbf24;
  --vc-accent-500: #f59e0b;
  --vc-accent-600: #f59e0b;
  --vc-accent-700: #b45309;
  --vc-accent-800: #92400e;
  --vc-accent-900: #78350f;
}

.vc-light {
  --vc-focus-ring: 0 0 0 2px #f59e0d;
  --vc-hover-bg: #f59e0b;
  --vc-header-arrow-hover-bg: #fef3c7;
  --vc-nav-hover-bg: #fef3c7;
}

.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#f59e0b var(--progress-value), #f3f4f6 0);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
