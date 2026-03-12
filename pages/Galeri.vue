<script setup lang="ts">
import { ref } from "vue";

// Data galeri dengan gambar dari Unsplash
const galleryImages = ref([
  // Kegiatan Sekolah
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600956245745-8de9825c925f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXBhY2FyYSUyMGJlbmRlcmF8ZW58MHx8MHx8fDA%3D",
    title: "Upacara Bendera",
    category: "Kegiatan",
    description: "Upacara bendera setiap hari Senin",
    date: "2024-03-15"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    title: "Kegiatan Belajar Mengajar",
    category: "Akademik",
    description: "Suasana belajar di kelas",
    date: "2024-03-10"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop",
    title: "Perpustakaan",
    category: "Fasilitas",
    description: "Perpustakaan modern SMKN 1 ARAHAN",
    date: "2024-03-05"
  },

  // Fasilitas
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop",
    title: "Laboratorium Komputer",
    category: "Fasilitas",
    description: "Lab TKJ dengan peralatan modern",
    date: "2024-02-28"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=886&auto=format&fit=crop",
    title: "Lapangan Olahraga",
    category: "Fasilitas",
    description: "Lapangan multifungsi sekolah",
    date: "2024-02-20"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=870&auto=format&fit=crop",
    title: "Masjid Sekolah",
    category: "Fasilitas",
    description: "Masjid Al-Ikhlas tempat ibadah",
    date: "2024-02-15"
  },

  // Ekstrakulikuler
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=870&auto=format&fit=crop",
    title: "Latihan Paskibra",
    category: "Ekstrakulikuler",
    description: "Latihan baris-berbaris Paskibra",
    date: "2024-03-12"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1706694874970-ca905f8b4e02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJhbXVrYXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Kegiatan Pramuka",
    category: "Ekstrakulikuler",
    description: "Perkemahan pramuka",
    date: "2024-03-08"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=774&auto=format&fit=crop",
    title: "Sanggar Tari",
    category: "Ekstrakulikuler",
    description: "Latihan tari tradisional",
    date: "2024-03-01"
  },

  // Prestasi
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=870&auto=format&fit=crop",
    title: "Penerimaan Piala",
    category: "Prestasi",
    description: "Siswa menerima penghargaan",
    date: "2024-02-25"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=959&auto=format&fit=crop",
    title: "Lomba Kompetensi Siswa",
    category: "Prestasi",
    description: "Tim LKS SMKN 1 ARAHAN",
    date: "2024-02-10"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
    title: "Wisuda Kelas XII",
    category: "Kegiatan",
    description: "Pelepasan siswa kelas XII",
    date: "2024-05-10"
  },

  // Tambahan gambar untuk variasi
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=870&auto=format&fit=crop",
    title: "Kegiatan Gotong Royong",
    category: "Kegiatan",
    description: "Kebersihan lingkungan sekolah",
    date: "2024-03-18"
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=870&auto=format&fit=crop",
    title: "Ruang Guru",
    category: "Fasilitas",
    description: "Ruang guru yang nyaman",
    date: "2024-03-14"
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Kegiatan OSIS",
    category: "Ekstrakulikuler",
    description: "Rapat OSIS",
    date: "2024-03-07"
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Seminar Pendidikan",
    category: "Kegiatan",
    description: "Seminar motivasi siswa",
    date: "2024-02-28"
  }
]);

// Kategori untuk filter
const categories = ref(["Semua", "Kegiatan", "Fasilitas", "Ekstrakulikuler", "Prestasi", "Akademik"]);
const selectedCategory = ref("Semua");
const searchQuery = ref("");
const selectedImage = ref(null);
const showModal = ref(false);

// Filtered gallery
const filteredImages = computed(() => {
  return galleryImages.value.filter(img => {
    const matchesCategory = selectedCategory.value === "Semua" || img.category === selectedCategory.value;
    const matchesSearch = img.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      img.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

// Group images untuk masonry layout
const groupedImages = computed(() => {
  const images = filteredImages.value;
  const columns = 4;
  const result = [];

  for (let i = 0; i < columns; i++) {
    result.push(images.filter((_, index) => index % columns === i));
  }

  return result;
});

function openModal(image) {
  selectedImage.value = image;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedImage.value = null;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Galeri
          <span class="font-medium text-amber-600 dark:text-amber-400">Sekolah</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Dokumentasi kegiatan, fasilitas, dan momen berharga di SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-lg font-light text-amber-600 dark:text-amber-400">{{ galleryImages.length }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Total Foto</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-lg font-light text-amber-600 dark:text-amber-400">5</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Kategori</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-lg font-light text-amber-600 dark:text-amber-400">2024</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Tahun Ini</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-lg font-light text-amber-600 dark:text-amber-400">12</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Kegiatan</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-lg font-light text-amber-600 dark:text-amber-400">4</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Fasilitas</div>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <!-- Category Filter -->
        <div class="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div class="flex items-center gap-2 min-w-max">
            <button v-for="category in categories" :key="category" @click="selectedCategory = category"
              class="px-4 py-2 text-sm border rounded-lg transition-colors whitespace-nowrap" :class="{
                'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 font-medium': selectedCategory === category,
                'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': selectedCategory !== category
              }">
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Search -->
        <div class="relative w-full lg:w-72">
          <input v-model="searchQuery" type="text" placeholder="Cari foto..."
            class="w-full px-4 py-2 pl-10 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
          <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Results Info -->
      <div class="mb-6">
        <p class="text-sm text-gray-500 dark:text-gray-500">
          Menampilkan <span class="font-medium text-gray-700 dark:text-gray-300">{{ filteredImages.length }}</span> dari
          <span class="font-medium text-gray-700 dark:text-gray-300">{{ galleryImages.length }}</span> foto
        </p>
      </div>
    </div>

    <!-- Masonry Gallery Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(column, colIndex) in groupedImages" :key="colIndex" class="grid gap-4">
          <div v-for="image in column" :key="image.id" @click="openModal(image)"
            class="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-300">
            <img :src="image.url" :alt="image.title"
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />

            <!-- Overlay on Hover -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-3">
                <span class="text-xs text-amber-400 font-medium bg-black/50 px-2 py-1 rounded-full inline-block mb-1">
                  {{ image.category }}
                </span>
                <h3 class="text-sm font-medium text-white">{{ image.title }}</h3>
                <p class="text-xs text-white/80 mt-1">{{ image.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredImages.length === 0" class="text-center py-16">
        <svg class="w-20 h-20 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">Tidak ada foto</h3>
        <p class="text-base text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="showModal && selectedImage" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      @click="closeModal">
      <div class="relative max-w-5xl w-full" @click.stop>
        <!-- Close Button -->
        <button @click="closeModal" class="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Image -->
        <img :src="selectedImage.url" :alt="selectedImage.title"
          class="w-full h-auto max-h-[80vh] object-contain rounded-lg" />

        <!-- Image Info -->
        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs text-amber-400 font-medium bg-black/50 px-2 py-1 rounded-full">
              {{ selectedImage.category }}
            </span>
            <span class="text-xs text-white/60">{{ selectedImage.date }}</span>
          </div>
          <h3 class="text-xl font-medium text-white mb-1">{{ selectedImage.title }}</h3>
          <p class="text-sm text-white/80">{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>

    <!-- Upload Call to Action -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-100 dark:border-amber-900/30">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">Ingin berkontribusi?</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Kirim foto kegiatan terbaik Anda untuk ditampilkan
                  di galeri</p>
              </div>
            </div>
            <button
              class="px-6 py-2.5 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors whitespace-nowrap">
              Upload Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Masonry grid transitions */
.grid {
  transition: all 0.3s ease;
}

/* Image hover effect */
.group:hover img {
  transform: scale(1.05);
}

/* Lightbox animation */
.fixed {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Hide scrollbar for category filter */
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
