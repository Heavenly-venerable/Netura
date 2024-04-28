<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const { data: userData } = await useFetch(`/api/user/`);
</script>

<template>
  <div>
    <div class="px-4 pb-8 pt-24">
      <h1 class="text-3xl font-bold">User Profile</h1>
      <h2 class="bg-red-50 text-blue-50">{{ userData }}</h2>
    </div>
  </div>
</template>
