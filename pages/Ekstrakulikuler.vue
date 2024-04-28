<script setup lang="ts">
const Card = defineAsyncComponent(() => import("primevue/card"));
const Button = defineAsyncComponent(() => import("primevue/button"));

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
      <h1 class="font-bold text-3xl text-center mb-8">Ekstrakulikuler</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card v-for="i in 8" :key="i" class="w-full overflow-hidden bg-gray-50">
          <template #header>
            <img
              alt="user header"
              src="https://primefaces.org/cdn/primevue/images/usercard.png"
            />
          </template>
          <template #title>Ekstrakulikuler</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <div class="mt-1">
              <Button label="Selengkapnya" class="w-full" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
