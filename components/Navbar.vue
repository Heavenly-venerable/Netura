<script setup lang="ts">
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
  {
    label: "Kesiswaan",
    items: [
      { label: "Organisasi Siswa", url: "/osis" },
      { label: "Siswa", url: "/siswa" },
      { label: "Kurikulum", url: "/kurikulum" },
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

// Simplified click outside handler
onMounted(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (!showSidebar.value) return;

    const target = e.target as Element;
    const sidebar = document.querySelector("#sidebar");
    const button = document.querySelector("#sidebar-button");

    if (!sidebar?.contains(target) && !button?.contains(target)) {
      showSidebar.value = false;
    }
  };

  document.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>

<template>
  <!-- Navbar - Minimalis tanpa border bottom -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img class="h-8 w-8"
          src="https://psmk.jabarprov.go.id/_next/image?url=https%3A%2F%2Fpsmk.jabarprov.go.id%2Fstorage%2Fimage%2FlwQIeD1Ocmyc9h71q7BWxw15blFhXtpb8eL0Ggxy.jpg&w=750&q=75"
          alt="NETURA" />
        <span class="text-lg font-medium dark:text-white">NETURA</span>
      </NuxtLink>

      <!-- Right Section -->
      <div class="flex items-center gap-2">
        <!-- Login/Dashboard Button - Minimalis -->
        <NuxtLink v-if="!authToken" to="/login"
          class="px-3 py-1.5 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
          Login
        </NuxtLink>
        <NuxtLink v-else to="/protected/dashboard"
          class="px-3 py-1.5 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
          Dashboard
        </NuxtLink>

        <!-- Menu Button - Minimalis -->
        <button @click="showSidebar = !showSidebar" id="sidebar-button" type="button"
          class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          :class="{ 'text-gray-900 dark:text-white': showSidebar }">
          <span class="sr-only">Open menu</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!showSidebar" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Sidebar - Minimalis tanpa shadow -->
  <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0" leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
    <aside v-if="showSidebar" id="sidebar"
      class="fixed top-16 right-0 bottom-0 z-40 w-64 bg-white dark:bg-gray-900 border-l border-gray-100 dark:border-gray-800">
      <div class="h-full px-3 py-4 overflow-y-auto">
        <ul class="space-y-1">
          <li v-for="item in items" :key="item.label">
            <!-- Single Item -->
            <NuxtLink v-if="!item.items" :to="item.url!"
              class="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              :class="{ 'bg-gray-50 dark:bg-gray-800': $route.path === item.url }">
              {{ item.label }}
            </NuxtLink>

            <!-- Dropdown Item -->
            <div v-else>
              <button @click="toggleDropdown(item.label)"
                class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors">
                <span>{{ item.label }}</span>
                <svg class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': dropdownStates[item.label] }" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Submenu -->
              <Transition enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <ul v-if="dropdownStates[item.label]" class="mt-1 ml-4 space-y-1">
                  <li v-for="subItem in item.items" :key="subItem.label">
                    <NuxtLink :to="subItem.url!"
                      class="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                      :class="{ 'bg-gray-50 dark:bg-gray-800': $route.path === subItem.url }">
                      {{ subItem.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </Transition>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
/* Smooth scrolling for sidebar */
#sidebar {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f9fafb;
}

#sidebar::-webkit-scrollbar {
  width: 4px;
}

#sidebar::-webkit-scrollbar-track {
  background: #f9fafb;
}

#sidebar::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 20px;
}

.dark #sidebar::-webkit-scrollbar-track {
  background: #111827;
}

.dark #sidebar::-webkit-scrollbar-thumb {
  background-color: #374151;
}
</style>
