<script setup lang="ts">
//import type { Ref } from "vue";
//import type { RouteLocationRaw } from "vue-router";
//import { useDynamicDropdowns } from "../composable/useDynamicDropdowns";

//const dropdownIds = ["profile", "ppdb", "program"];
//const { profile, ppdb, program, toggleDropdown } =
//  useDynamicDropdowns(dropdownIds);

/*
interface Item {
  label: string;
  url?: RouteLocationRaw;
  items?: Item[];
}
*/

/*
interface DropdownStates {
  [key: string]: boolean;
}
*/

const route = useRoute();
const showSidebar = ref(false);
const authToken = useCookie("auth");

const items = ref([
  { label: "Home", url: "/" },
  { label: "Sambutan", url: "/sambutan" },
  {
    label: "Profile",
    items: [
      { label: "Sejarah", url: "/sejarah" },
      { label: "Visi Misi", url: "/visi-misi" },
      { label: "Struktur Organisasi", url: "/struktur-organisasi" },
    ],
  },
  {
    label: "PPDB",
    items: [
      { label: "Syarat PPDB", url: "/syarat-ppdb" },
      { label: "Pendaftaran PPDB Online", url: "/ppdb" },
    ],
  },
  {
    label: "Program",
    items: [
      { label: "Prestasi Siswa", url: "/prestasi" },
      { label: "Ekstrakulikuler", url: "/ekstrakulikuler" },
      { label: "Agenda", url: "/agenda" },
    ],
  },
  { label: "Blog", url: "/blog" },
  { label: "Fasilitas", url: "/fasilitas" },
  { label: "Galeri", url: "/galeri" },
  { label: "Kontak", url: "/kontak" },
]);

const dropdownStates = reactive(
  Object.fromEntries(items.value.map((item) => [item.label, false])),
);

function toggleDropdown(label: string): void {
  dropdownStates[label] = !dropdownStates[label];
}

watch(
  () => route.fullPath,
  () => {
    showSidebar.value = false;
    Object.keys(dropdownStates).forEach((key) => {
      dropdownStates[key] = false;
    });
  },
);

onMounted(() => {
  window.addEventListener("click", (e: MouseEvent) => {
    const sb: Element | null = document.querySelector("#sidebar-button");
    const cs: Element | null = document.querySelector("#containerSidebar");
    const sidebar: Element | null = document.querySelector("#sidebar");
    const target: Element = e.target as Element;

    if (
      !sb?.contains(target) &&
      !sidebar?.contains(target) &&
      !cs?.contains(target)
    ) {
      showSidebar.value = false;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:px-4 md:py-4"
  >
    <div class="px-3 py-3 md:px-5 md:pl-3">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center md:me-24">
          <img
            class="h-10 w-10 self-center mr-3"
            src="https://gcdnb.pbrd.co/images/E9Mqu6OOLeDv.png?o=1"
            alt=""
          />
          <span
            class="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
            >NETURA</span
          >
        </NuxtLink>
        <div class="flex items-center gap-x-2">
          <div>
            <NuxtLink
              v-if="!authToken"
              to="/login"
              class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800"
            >
              Login
            </NuxtLink>
            <NuxtLink
              v-else
              to="/protected/dashboard"
              class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800"
            >
              Dashboard
            </NuxtLink>
          </div>
          <button
            @click="showSidebar = !showSidebar"
            id="sidebar-button"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <aside
    v-if="showSidebar"
    id="logo-sidebar sidebar"
    class="fixed top-0 md:top-10 right-0 z-40 w-64 md:w-full h-screen md:h-auto pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div
      id="containerSidebar"
      class="h-full px-3 pb-24 md:pb-4 overflow-y-auto bg-white dark:bg-gray-800"
    >
      <ul class="space-y-2 font-medium">
        <li v-for="item in items">
          <div v-if="!item.items">
            <NuxtLink
              :to="item.url!"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ms-3">{{ item.label }}</span>
            </NuxtLink>
          </div>
          <div v-else-if="item.items">
            <button
              @click="toggleDropdown(item.label)"
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >{{ item.label }}</span
              >
              <svg
                class="w-3 h-3"
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
            <ul
              v-show="dropdownStates[item.label]"
              id="dropdown-example"
              class="py-2 space-y-2"
            >
              <li v-for="subItem in item.items">
                <NuxtLink
                  :to="subItem.url!"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ subItem.label }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
