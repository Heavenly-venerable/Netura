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
const blogs = ref([
  { 
    name: "Kegiatan P5 SMKN 1 Arahan", 
    date: "23 Desember 2024",
    description: "Implementasi Projek Penguatan Profil Pelajar Pancasila",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
  },
  { 
    name: "Kunjungan Industri ke PT Toyota", 
    date: "20 Desember 2024",
    description: "Siswa jurusan TKRO mengikuti kunjungan industri",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
  },
  { 
    name: "Workshop Kewirausahaan", 
    date: "15 Desember 2024",
    description: "Pelatihan membuat produk olahan pangan",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
  }
]);

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
    name: "Ruang TKRO",
    url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ruang TB",
    url: "https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V3aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lab TJKT",
    url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);

const selectedFasilitas = ref(fasilitasImages.value[0]);

const responsiveOptions = ref([
  { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
  { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
  { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  { breakpoint: "575px", numVisible: 1, numScroll: 1 },
]);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function onFasilitasClick(fasilitas: FasilitasImage): void {
  selectedFasilitas.value = fasilitas;
  showImageTooltip.value = true;
  setTimeout(() => {
    showImageTooltip.value = false;
  }, 2000);
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="pt-20 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Hero Section - Minimalis -->
    <section class="py-12 md:py-16 text-center border-b border-gray-100 dark:border-gray-800">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
        Selamat Datang di
        <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
      </h1>
      <p class="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Website resmi SMKN 1 ARAHAN - Sekolah unggulan di bidang teknologi dan kewirausahaan. 
        Berkomitmen mencetak generasi yang religius, cerdas, dan berkarakter.
      </p>
      <div class="mt-8">
        <NuxtLink 
          to="/kontak"
          class="inline-flex items-center gap-2 px-6 py-2.5 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors"
        >
          Hubungi Kami
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      <!-- Agenda Section -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Agenda</h2>
          <NuxtLink to="/agenda" class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1">
            Lihat semua
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        
        <div class="space-y-2">
          <div v-for="n in 5" :key="n" class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-md">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-medium text-amber-600 dark:text-amber-400">15 Maret 2024</span>
              <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              <span class="text-xs text-gray-500 dark:text-gray-400">08:00 WIB</span>
            </div>
            <p class="text-sm text-gray-900 dark:text-white">Pertemuan Orang Tua Siswa {{ n }}</p>
          </div>
        </div>
      </div>

      <!-- Blog Section -->
      <div class="md:col-span-2 space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Blog & Berita</h2>
          <NuxtLink to="/blog" class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1">
            Lihat semua
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <Carousel
          :value="blogs"
          :responsiveOptions="responsiveOptions"
          :showIndicators="false"
          :showNavigators="false"
          circular
          :autoplayInterval="5000"
          class="overflow-hidden rounded-md"
        >
          <template #item="slotProps">
            <div class="relative aspect-[16/9]">
              <img 
                :src="slotProps.data.image" 
                :alt="slotProps.data.name"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs text-white/80">{{ slotProps.data.date }}</span>
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">{{ slotProps.data.name }}</h3>
                  <p class="text-sm text-white/80">{{ slotProps.data.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <!-- Ekstrakulikuler Section -->
    <section class="py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6">Ekstrakulikuler</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="space-y-4">
          <img 
            class="w-full h-48 object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Paskibra"
          />
          <p class="text-sm text-gray-700 dark:text-gray-300">Paskibra</p>
        </div>
        <div class="space-y-4">
          <img 
            class="w-full h-48 object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="Pramuka"
          />
          <p class="text-sm text-gray-700 dark:text-gray-300">Pramuka</p>
        </div>
        <div class="space-y-4">
          <img 
            class="w-full h-48 object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt="Futsal"
          />
          <p class="text-sm text-gray-700 dark:text-gray-300">Futsal</p>
        </div>
        <div class="space-y-4">
          <img 
            class="w-full h-48 object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Voli"
          />
          <p class="text-sm text-gray-700 dark:text-gray-300">Voli</p>
        </div>
      </div>
      
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/ekstrakulikuler"
          class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
        >
          Lihat semua ekstrakulikuler
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Fasilitas Section -->
    <section class="py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Fasilitas</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Preview fasilitas unggulan sekolah</p>
        </div>
        <NuxtLink 
          to="/fasilitas"
          class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1"
        >
          Lihat semua
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Fasilitas Thumbnails -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        <button
          v-for="fasilitas in fasilitasImages"
          :key="fasilitas.name"
          @click="onFasilitasClick(fasilitas)"
          class="px-3 py-2 text-xs text-left border border-gray-200 rounded-md hover:border-amber-200 hover:bg-amber-50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/30 transition-colors"
          :class="{ 'border-amber-500 dark:border-amber-400': selectedFasilitas.name === fasilitas.name }"
        >
          {{ fasilitas.name }}
        </button>
      </div>

      <!-- Fasilitas Preview -->
      <div class="relative rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          :src="selectedFasilitas.url"
          :alt="selectedFasilitas.name"
          class="w-full h-80 object-cover"
        />
        
        <!-- Tooltip -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <div
            v-if="showImageTooltip"
            class="absolute bottom-4 left-1/2 -translate-x-1/2"
          >
            <div class="px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-md">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ selectedFasilitas.name }}
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Lokasi Section -->
    <section class="py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="mb-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white">Lokasi Sekolah</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Temukan kami di Google Maps</p>
      </div>
      
      <div class="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <iframe
          src="https://maps.google.com/maps?q=Smkn1arahan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameborder="0"
          loading="lazy"
          class="w-full h-80"
          allowfullscreen
        ></iframe>
      </div>
      
      <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Jl. Raya Arahan, Linggajati, Kec. Arahan, Kabupaten Indramayu, Jawa Barat</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f9fafb;
}

::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-track {
  background: #111827;
}

.dark ::-webkit-scrollbar-thumb {
  background: #374151;
}
</style>
