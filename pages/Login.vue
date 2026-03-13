<script setup lang="ts">
const authToken = useCookie("auth");
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

async function handleLogin() {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    refreshCookie("auth");
    navigateTo("/protected/dashboard");
  } catch (error: any) {
    errorMessage.value = error.data?.message || "Login gagal. Periksa email dan password Anda.";
  } finally {
    isLoading.value = false;
  }
}

async function handleLogout() {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
  refreshCookie("auth");
}
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-4 py-8 mx-auto max-w-md">
      <!-- Logo & Brand -->
      <div class="mb-8 text-center">
        <NuxtLink to="/" class="inline-flex items-center justify-center mb-4">
          <img class="h-12 w-12" src="/android-chrome-512x512.png" alt="NETURA" />
        </NuxtLink>
        <h1 class="text-2xl font-light text-gray-900 dark:text-white">
          Selamat Datang Kembali
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Masuk ke akun Anda untuk mengakses dashboard
        </p>
      </div>

      <!-- Login Card -->
      <div class="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 sm:p-8">
        <!-- Error Message -->
        <div v-if="errorMessage"
          class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg text-sm text-red-600 dark:text-red-400 flex items-start gap-2">
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ errorMessage }}</span>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input v-model="email" type="email" required placeholder="nama@email.com"
                class="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input v-model="password" type="password" required placeholder="••••••••"
                class="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" v-model="rememberMe"
                class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700" />
              <span class="text-sm text-gray-600 dark:text-gray-400">Ingat saya</span>
            </label>
            <NuxtLink to="/forgot-password"
              class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
              Lupa password?
            </NuxtLink>
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="isLoading"
            class="w-full py-2.5 px-4 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <span v-if="isLoading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Memproses...</span>
            </span>
            <span v-else>Masuk</span>
          </button>
        </form>

        <!-- Sign Up Link -->
        <p class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Belum punya akun?
          <NuxtLink to="/register"
            class="font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
            Daftar sekarang
          </NuxtLink>
        </p>
      </div>

      <!-- Back to Home -->
      <NuxtLink to="/"
        class="mt-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Beranda
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
/* Animasi loading spinner */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Smooth transitions */
button,
a,
input {
  transition: all 0.2s ease;
}

/* Focus styles */
input:focus {
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.1);
}

/* Custom checkbox style */
input[type="checkbox"] {
  accent-color: #f59e0b;
}
</style>
