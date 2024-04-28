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
    <div class="pt-24 pb-8 px-4 md:p-24 md:pt-36">
      <h1 class="font-bold text-3xl mb-4">Blog Terbaru</h1>
      <div class="grid grid-cols-1 gap-4">
        <div v-for="i in 5" :key="i" class="flex flex-col">
          <img
            class="mb-2 w-full h-64 object-cover rounded-lg"
            src="https://source.unsplash.com/random?sky/300"
            alt=""
          />
          <div class="mt-1 flex gap-x-1 text-gray-500 text-xs">
            <p>12 desember 2023 •</p>
            <p>3 menit</p>
          </div>
          <p class="mt-2 font-semibold text-lg">Judul blog</p>
          <p class="text-sm">lorem ipsum dolor sit amet</p>
          <div class="flex mt-4 gap-4">
            <div
              v-for="i in 3"
              :key="i"
              class="text-sm px-2 py-1 border rounded-full"
            >
              Tag
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
