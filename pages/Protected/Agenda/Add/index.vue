<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const title = ref("");
const tag = ref("");
const waktu = ref("");
const lokasi = ref("");
const date = ref(new Date());

async function handleAddAgenda() {
  await $fetch("/api/agenda", {
    method: "POST",
    body: {
      title: title.value,
      tag: tag.value,
      waktu: waktu.value,
      lokasi: lokasi.value,
      tanggal: date.value.toISOString(),
    },
  });
  title.value = ""
  tag.value = ""
  waktu.value = ""
  lokasi.value = ""
}
</script>

<template>
  <div class="px-4 pb-8 pt-24 md:p-24 md:pt-36">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Judul Agenda</label
        >
        <input
          v-model="title"
          type="text"
          id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:"
          placeholder="Rapat Orang Tua"
          required
        />
      </div>
      <div>
        <label
          for="tag"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Tag</label
        >
        <input
          v-model="tag"
          type="text"
          id="tag"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:"
          placeholder="Rapat"
          required
        />
      </div>
      <div>
        <label
          for="waktu"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Waktu Pelaksanaan</label
        >
        <input
          v-model="waktu"
          type="text"
          id="waktu"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:"
          placeholder="09:00 s/d selesai"
          required
        />
      </div>
      <div>
        <label
          for="lokasi"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Lokasi</label
        >
        <input
          v-model="lokasi"
          type="text"
          id="lokasi"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:"
          placeholder="Aula"
          required
        />
      </div>
      <div>
        <label
          for="date"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Tanggal</label
        >
        <VDatePicker id="date" v-model="date" color="yellow" :popover="false">
          <template #default="{ togglePopover, inputValue, inputEvents }">
            <div
              class="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"
            >
              <button
                class="flex justify-center items-center px-2 bg-gray-50 hover:bg-accent-200 text-gray-700 border-r border-gray-300 hover:bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                @click="() => togglePopover()"
              >
                <svg
                  class="h-5 w-5 fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                  />
                </svg>
              </button>
              <input
                :value="inputValue"
                v-on="inputEvents"
                class="flex-grow text-gray-500 bg-gray-50 px-2 py-1 hover:bg-white dark:bg-gray-700"
              />
            </div>
          </template>
        </VDatePicker>
      </div>
      <button
        @click="handleAddAgenda()"
        type="button"
        class="text-white bg-amber-500 hover:bg-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700"
      >
        Tambahkan Agenda
      </button>
    </div>
  </div>
</template>

<style scoped></style>
