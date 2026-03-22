<script setup lang="ts">
import { ref, reactive } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import { useRoute } from "vue-router";

const visible = ref(false);
const route = useRoute();

const openSubmenus = reactive({
  reports: false,
  revenue: false
});

function toggleSubmenu(name: keyof typeof openSubmenus) {
  openSubmenus[name] = !openSubmenus[name];
}

// Close sidebar on route change
watch(() => route.path, () => {
  visible.value = false;
  // Reset submenus
  openSubmenus.reports = false;
  openSubmenus.revenue = false;
});
</script>

<template>
  <div>
    <!-- Hamburger Button -->
    <Button icon="pi pi-bars" @click="visible = true"
      class="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-transparent border-none transition-colors"
      aria-label="Menu" />

    <Sidebar v-model:visible="visible" position="left" :showCloseIcon="false" :dismissable="true"
      class="w-80 md:w-96 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center gap-2">
              <img src="https://gcdnb.pbrd.co/images/E9Mqu6OOLeDv.png?o=1" alt="NETURA" class="h-8 w-8" />
              <span class="font-medium text-gray-900 dark:text-white">NETURA</span>
            </NuxtLink>

            <!-- Close Button -->
            <button @click="closeCallback"
              class="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              aria-label="Close menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Navigation -->
          <div class="flex-1 overflow-y-auto py-4">
            <!-- Main Navigation -->
            <div class="px-3">
              <p class="px-3 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                Main Menu
              </p>
              <nav class="space-y-1">
                <NuxtLink to="/dashboard"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  :class="{ 'bg-gray-50 dark:bg-gray-800 text-amber-600 dark:text-amber-400': $route.path === '/dashboard' }">
                  <i class="pi pi-home text-base"></i>
                  <span>Dashboard</span>
                </NuxtLink>

                <NuxtLink to="/bookmarks"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-bookmark text-base"></i>
                  <span>Bookmarks</span>
                </NuxtLink>

                <!-- Reports with Submenu -->
                <div>
                  <button @click="toggleSubmenu('reports')"
                    class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span class="flex items-center gap-3">
                      <i class="pi pi-chart-line text-base"></i>
                      <span>Reports</span>
                    </span>
                    <svg class="w-4 h-4 transition-transform duration-200"
                      :class="{ 'rotate-180': openSubmenus.reports }" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <Transition enter-active-class="transition-all duration-200 ease-out"
                    enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
                    <ul v-if="openSubmenus.reports" class="mt-1 ml-6 space-y-1">
                      <li>
                        <button @click="toggleSubmenu('revenue')"
                          class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <span class="flex items-center gap-3">
                            <i class="pi pi-chart-line text-sm"></i>
                            <span>Revenue</span>
                          </span>
                          <svg class="w-4 h-4 transition-transform duration-200"
                            :class="{ 'rotate-180': openSubmenus.revenue }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                              d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <Transition enter-active-class="transition-all duration-200 ease-out"
                          enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                          leave-active-class="transition-all duration-150 ease-in"
                          leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
                          <ul v-if="openSubmenus.revenue" class="mt-1 ml-6 space-y-1">
                            <li>
                              <NuxtLink to="/reports/revenue/view"
                                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <i class="pi pi-table text-sm"></i>
                                <span>View</span>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/reports/revenue/search"
                                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <i class="pi pi-search text-sm"></i>
                                <span>Search</span>
                              </NuxtLink>
                            </li>
                          </ul>
                        </Transition>
                      </li>
                      <li>
                        <NuxtLink to="/reports/expenses"
                          class="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <i class="pi pi-chart-line text-sm"></i>
                          <span>Expenses</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </Transition>
                </div>

                <NuxtLink to="/team"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-users text-base"></i>
                  <span>Team</span>
                </NuxtLink>

                <NuxtLink to="/messages"
                  class="flex items-center justify-between px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span class="flex items-center gap-3">
                    <i class="pi pi-comments text-base"></i>
                    <span>Messages</span>
                  </span>
                  <span
                    class="px-1.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 rounded">
                    3
                  </span>
                </NuxtLink>

                <NuxtLink to="/calendar"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-calendar text-base"></i>
                  <span>Calendar</span>
                </NuxtLink>

                <NuxtLink to="/settings"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-cog text-base"></i>
                  <span>Settings</span>
                </NuxtLink>
              </nav>
            </div>

            <!-- Divider -->
            <div class="my-4 border-t border-gray-100 dark:border-gray-800"></div>

            <!-- Applications Section -->
            <div class="px-3">
              <p class="px-3 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                Applications
              </p>
              <nav class="space-y-1">
                <NuxtLink to="/projects"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-folder text-base"></i>
                  <span>Projects</span>
                </NuxtLink>

                <NuxtLink to="/performance"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-chart-bar text-base"></i>
                  <span>Performance</span>
                </NuxtLink>

                <NuxtLink to="/app-settings"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <i class="pi pi-cog text-base"></i>
                  <span>Settings</span>
                </NuxtLink>
              </nav>
            </div>
          </div>

          <!-- User Profile -->
          <div class="border-t border-gray-100 dark:border-gray-800 p-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Amy Elsner"
                  class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Amy Elsner</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">amy.elsner@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>

<style scoped>
/* Custom scrollbar */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f9fafb;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f9fafb;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 20px;
}

.dark .overflow-y-auto::-webkit-scrollbar-track {
  background: #111827;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #374151;
}
</style>
