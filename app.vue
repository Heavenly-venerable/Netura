<script setup lang="ts">
import "primevue/resources/themes/aura-light-amber/theme.css";
import DashboardNavbar from "./components/DashboardNavbar.vue";
import Navbar from "./components/Navbar.vue";

const route = useRoute();
const currentRouteName = computed(() => route.name);

const isProtectedRoute = computed(() => {
  return route.path.startsWith('/protected/')
})

const DynamicNavbar = computed(() => {
  if (isProtectedRoute.value) {
    return DashboardNavbar
  }
  return Navbar
});
</script>

<template>
  <div class="dark:bg-gray-900">
    <component :is="DynamicNavbar" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
