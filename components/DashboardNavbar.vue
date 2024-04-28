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
const showDashboardSidebar = ref(false);
const showUserMenu = ref(false);

const { data: userData } = await useFetch(`/api/user/`);

const items = ref([
  { label: "Dashboard", url: "/protected/dashboard" },
  {
    label: "Agenda",
    items: [
      { label: "Daftar Agenda", url: "/protected/agenda" },
      { label: "Tambah Agenda", url: "/protected/agenda/add" },
    ],
  },
]);

const itemUserMenu = ref([
  { label: "My Profile", url: "/user/profile" },
  { label: "Account Settings", url: "/user/settings" },
]);

const dropdownStates = reactive(
  Object.fromEntries(items.value.map((item) => [item.label, false])),
);

function toggleDropdown(label: string): void {
  dropdownStates[label] = !dropdownStates[label];
}

async function handleLogout() {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
  refreshCookie("auth");
  navigateTo("/login");
}

watch(
  () => route.fullPath,
  () => {
    showDashboardSidebar.value = false;
    showUserMenu.value = false;
    Object.keys(dropdownStates).forEach((key) => {
      dropdownStates[key] = false;
    });
  },
);

onMounted(() => {
  window.addEventListener("click", (e: MouseEvent) => {
    const sb: Element | null = document.querySelector(
      "#dashboardSidebar-button",
    );
    const cs: Element | null = document.querySelector(
      "#containerdashboardSidebar",
    );
    const dashboardSidebar: Element | null =
      document.querySelector("#dashboardSidebar");
    const target: Element = e.target as Element;
    const ub: Element | null = document.querySelector("#user-button");
    const cum: Element | null = document.querySelector("#containerUserMenu");
    const um: Element | null = document.querySelector("#userMenu");

    if (
      !sb?.contains(target) &&
      !dashboardSidebar?.contains(target) &&
      !cs?.contains(target)
    ) {
      showDashboardSidebar.value = false;
    }
    if (
      !ub?.contains(target) &&
      !um?.contains(target) &&
      !cum?.contains(target)
    ) {
      showUserMenu.value = false;
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
        <div class="flex">
          <button
            @click="showDashboardSidebar = !showDashboardSidebar"
            id="dashboardSidebar-button"
            data-drawer-target="logo-dashboardSidebar"
            data-drawer-toggle="logo-dashboardSidebar"
            aria-controls="logo-dashboardSidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open dashboardSidebar</span>
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
          <div class="px-3 hidden md:block">
            <h4 class="text-xs text-gray-500">SMKN 1 ARAHAN</h4>
            <h3 class="text-semibold">
              Halo, selamat datang {{ userData?.user.username }}
            </h3>
          </div>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="relative p-2 rounded-full bg-gray-100">
            <svg
              class="h-5 w-5 fill-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
              />
            </svg>
            <div
              class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 -end-1 dark:border-gray-900"
            ></div>
          </div>
          <div class="relative p-2 rounded-full bg-gray-100">
            <svg
              class="h-5 w-5 fill-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
              />
            </svg>
            <div
              class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 -end-1 dark:border-gray-900"
            ></div>
          </div>
          <div class="hidden md:flex md:flex-col">
            <h3 class="text-semibold">{{ userData?.user.username }}</h3>
            <h3 class="text-gray-500">{{ userData?.user.role }}</h3>
          </div>
          <button
            @click="showUserMenu = !showUserMenu"
            type="button"
            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <aside
    v-if="showDashboardSidebar"
    id="logo-dashboardSidebar dashboardSidebar"
    class="fixed top-0 md:top-10 left-0 z-40 w-64 md:w-full h-screen md:h-auto pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="dashboardSidebar"
  >
    <div
      id="containerdashboardSidebar"
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

  <aside
    v-if="showUserMenu"
    id="logo-userMenu userMenu"
    class="fixed top-0 md:top-10 right-5 z-40 w-56 md:w-full h-[350px] md:h-auto pt-20 transition-transform sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="dashboardSidebar"
  >
    <div
      id="containerUserMenu"
      class="h-full px-3 pb-24 divide-y w-full md:pb-4 border border-gray-300 rounded-md md:overflow-y-auto bg-white dark:bg-gray-800"
    >
      <div class="flex flex-col items-center gap-2 py-4 font-medium">
        <h3>{{ userData?.user.username }}</h3>
        <h4 class="text-gray-500">{{ userData?.user.role }}</h4>
      </div>
      <ul class="py-4 space-y-2 font-medium">
        <li v-for="item in itemUserMenu">
          <div>
            <NuxtLink
              :to="item.url!"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ms-3">{{ item.label }}</span>
            </NuxtLink>
          </div>
        </li>
      </ul>
      <div class="space-y-2">
        <div
          @click="handleLogout()"
          class="text-start font-medium text-gray-900 px-6 py-3 w-full"
        >
          Log Out
        </div>
      </div>
    </div>
  </aside>
</template>
