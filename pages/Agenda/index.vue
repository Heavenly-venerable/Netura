<script setup lang="ts">
const Card = defineAsyncComponent(() => import("primevue/card"));

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
    <div class="py-24 pb-8 px-4 md:p-24 md:pt-36">
      <h1 class="font-bold text-3xl text-center mb-8">Agenda</h1>
      <div class="grid grid-cols-1 gap-4">
        <Card v-for="i in 10" :key="i" class="w-full overflow-hidden shadow-lg">
          <template #header>
            <img
              alt="user header"
              src="https://primefaces.org/cdn/primevue/images/usercard.png"
            />
          </template>
          <template #title>Pertemuan Orang Tua</template>
          <template #subtitle>
            <div class="text-sm">
              <div class="flex items-center mb-1">
                <span class="pi pi-map-marker pr-2"></span>Aula
              </div>
              <div class="flex items-center mb-1">
                <span class="pi pi-calendar pr-2"></span>23 maret 2024
              </div>
              <div class="flex items-center">
                <span class="pi pi-clock pr-2"></span>09.00 s/d selesai
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
