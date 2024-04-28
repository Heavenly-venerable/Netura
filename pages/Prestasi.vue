<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <div>
    <div class="pt-24 pb-8 px-4 md:p-16">
      <h1 class="font-bold text-3xl text-center">Prestasi Siswa</h1>
      <div class="py-4">
        <h2 class="font-semibold text-2xl mb-4">Akademik</h2>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="i in 10"
            :key="i"
            class="max-w-sm border rounded-lg flex items-center flex-col py-4 px-2"
          >
            <div
              class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <h3 class="font-medium">Nama Siswa {{ i }}</h3>
              <p class="text-sm text-center text-gray-500 mb-2">Prestasi</p>
              <NuxtLink to="#" class="underline text-amber-500 text-center"
                >Selengkapnya</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <h2 class="font-semibold text-2xl mb-4">Non Akademik</h2>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="i in 10"
            :key="i"
            class="max-w-sm border rounded-lg flex items-center flex-col p-2"
          >
            <div
              class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <h3 class="font-medium">Nama Siswa {{ i }}</h3>
              <p class="text-sm text-center text-gray-500 mb-2">Prestasi</p>
              <NuxtLink to="#" class="underline text-amber-500 text-center"
                >Selengkapnya</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
