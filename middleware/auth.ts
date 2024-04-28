import { useCookie } from "#app";
// Contoh middleware untuk memeriksa autentikasi
export default defineNuxtRouteMiddleware((to, from) => {
  const authCookie = useCookie("auth");
  if (!authCookie.value) {
    // Pengguna tidak terautentikasi, alihkan ke halaman login
    return navigateTo("/login");
  }
  // Pengguna terautentikasi, lanjutkan dengan request
});
