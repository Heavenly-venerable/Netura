<script setup lang="ts">
import type { Ref } from "vue";
const authStatus = useState("authStatus");
const Carousel = defineAsyncComponent(() => import("primevue/carousel"));
const Button = defineAsyncComponent(() => import("primevue/button"));

interface FasilitasImage {
  name: string;
  url: string;
}

const showImageTooltip = ref(false);
const blogs = ref([{ name: "hello" }, { name: "world" }]);

const fasilitasImageUrl = ref(
  "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);
const fasilitasTooltip = ref("Perpustakaan");

const fasilitasImages: Ref<FasilitasImage[]> = ref([
  {
    name: "Perpustakaan",
    url: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Masjid",
    url: "https://images.unsplash.com/photo-1577561426384-62154a1e9457?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ruang Praktek TKRO",
    url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ruang Praktek TB",
    url: "https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V3aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lab TJKT",
    url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);

const changeFasilitasImage = computed(() => {
  return fasilitasImageUrl.value;
});

const changeFasilitasTooltip = computed(() => {
  return fasilitasTooltip.value;
});

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function onFasilitasClick(name: string, url: string): void {
  fasilitasImageUrl.value = url;
  fasilitasTooltip.value = name;
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <div class="pt-24 pb-8 px-4 md:p-16">
    <!--
    <div class="flex gap-x-4 py-2 px-3 bg-blue-100 w-full">
      <img
        class="h-16 w-16 self-center"
        src="https://gcdnb.pbrd.co/images/E9Mqu6OOLeDv.png?o=1"
        alt=""
      />
      <div class="pb-1">
        <h1 class="font-semibold text-lg">SMK Negeri 1 Arahan</h1>
        <p class="py-2 text-sm">Be Religius, Be Smart and Be Fun</p>
        <p class="text-xs text-gray-500">
                        </div>
          Jl. Raya Arahan, Linggajati, Kec. Arahan, Kabupaten Indramayu, Jawa
          Barat
        </p>
      </div>
    </div>
    
    -->
    <!-- hero section start -->

    <section class="md:p-16 bg-white dark:bg-gray-900">
      <div class="pt-16 pb-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Selamat Datang di Official Website SMKN 1 ARAHAN
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          Website SMKN 1 ARAHAN memberikan informasi tentang sekolah unggulan di
          bidang teknologi dan kewirausahaan. Sekolah ini memiliki program
          keahlian, fasilitas, dan prestasi yang berkualitas. SMKN 1 ARAHAN siap
          membantu Anda mencapai cita-cita Anda.
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <Button class="flex justify-center" label="Hubungi kami">
            <NuxtLink
              class="inline-flex justify-center items-center font-semibold text-center"
              to="/kontak"
            >
              Hubungi kami
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
    <!-- hero section end -->
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <!-- agenda section start -->
      <div class="p-4">
        <div class="pb-4">
          <p class="text-xl font-semibold">Agenda</p>
        </div>
        <div class="flex flex-col gap-2 pb-4">
          <div
            v-for="n in 5"
            :key="n"
            class="p-4 bg-gray-100 flex flex-col w-full rounded-lg shadow"
          >
            <div class="flex items-center pb-2 gap-4">
              <i class="text-xl font-medium pi pi-calendar"></i>
              <p class="text-xs">15 maret 2024</p>
            </div>
            <div>
              <p class="font-semibold text-sm">pertemuan orang tua {{ n }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <NuxtLink
            to="/agenda"
            class="inline-flex justify-center items-center font-semibold text-sm text-amber-500"
            >Agenda
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <!-- agenda section end -->
      <!-- blog section start -->
      <div class="md:col-span-2 p-4">
        <h2 class="py-4 text-xl font-semibold">Blog</h2>
        <Carousel
          :value="blogs"
          :responsiveOptions="responsiveOptions"
          :show-indicators="false"
          :showNavigators="false"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div class="relative">
              <div
                class="absolute top-0 w-[50%] h-full bg-gray-600 p-2 text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"
              >
                <div class="flex">
                  <div class="flex flex-col justify-center items-center">
                    <div
                      class="flex items-center gap-2 border-b border-white pb-2 py-1"
                    >
                      <i class="pi pi-calendar"></i>
                      <p class="text-xs font-semibold">23 desember 2024</p>
                    </div>
                    <div class="p-2 gap-2">
                      <h3 class="text-sm">{{ slotProps.data.name }}</h3>
                      <p class="text-xs">lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mx-auto">
                <img
                  class="h-auto w-full"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </div>
            </div>
          </template>
        </Carousel>
      </div>
      <!-- blog section end -->
    </div>
    <!-- eskul section start -->
    <div class="p-4">
      <h2 class="pb-4 font-semibold text-xl">Ekstrakulikuler</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid md:col-span-2 gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid md:col-span-2 gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- eskul section end -->
    <div class="p-4">
      <div class="pb-4">
        <h2 class="font-semibold text-xl">Fasilitas</h2>
        <p class="text-sm text-gray-500">
          preview fasilitas yang tersedia di sekolah kami
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <Button
          v-for="{ name, url } in fasilitasImages"
          @click="onFasilitasClick(name, url)"
          :label="name"
        />
        <Button
          class="inline-flex justify-center items-center font-semibold text-center"
          label="Lainnya"
        >
          <NuxtLink to="/fasilitas">
            Lainnya
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NuxtLink>
        </Button>
      </div>
      <div class="py-6 relative">
        <img
          @click="showImageTooltip = !showImageTooltip"
          class="h-64 w-full object-cover rounded-lg"
          :src="changeFasilitasImage"
          alt=""
        />
        <div
          v-if="showImageTooltip"
          class="animate-from-bottom justify-center items-center absolute bottom-10 w-full"
        >
          <div class="flex justify-center items-center">
            <h3
              class="bg-gray-600/70 px-4 py-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm text-white text-lg font-medium"
            >
              {{ changeFasilitasTooltip }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="pb-4">
        <h2 class="text-xl font-semibold">Lokasi sekolah</h2>
        <p class="text-sm text-gray-500">lokasi sekolah kami di google map</p>
      </div>
      <iframe
        src="https://maps.google.com/maps?q=Smkn1arahan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        frameborder="5"
        loading="lazy"
        class="w-full h-60"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.animate-from-bottom {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
