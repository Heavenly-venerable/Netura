<script setup lang="ts">
const fasilitas = ref([
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=687&auto=format&fit=crop",
    title: "Perpustakaan",
    category: "Fasilitas Akademik",
    desc: "Perpustakaan modern dengan koleksi lebih dari 5.000 buku, ruang baca nyaman, dan akses digital ke jurnal ilmiah. Mendukung pengembangan literasi dan riset siswa.",
    facilities: ["Ruang Baca", "Koleksi Buku", "Akses Digital", "Ruang Diskusi"],
    capacity: "100 siswa"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1562321157-5fd366036de8?q=80&w=735&auto=format&fit=crop",
    title: "Lapangan Olahraga",
    category: "Fasilitas Olahraga",
    desc: "Lapangan multifungsi yang dapat digunakan untuk futsal, basket, dan voli. Dilengkapi dengan pencahayaan untuk kegiatan malam hari.",
    facilities: ["Futsal", "Basket", "Voli", "Tribun Penonton"],
    capacity: "500 orang"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop",
    title: "Laboratorium TKJ",
    category: "Fasilitas Akademik",
    desc: "Lab komputer dengan 40 unit PC spek tinggi, server rack, dan perangkat jaringan lengkap untuk praktik siswa jurusan Teknik Komputer dan Jaringan.",
    facilities: ["40 PC", "Server Rack", "Jaringan", "Router"],
    capacity: "40 siswa"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1577561426384-62154a1e9457?q=80&w=687&auto=format&fit=crop",
    title: "Masjid Al-Ikhlas",
    category: "Fasilitas Ibadah",
    desc: "Masjid sekolah dengan kapasitas 500 jamaah, dilengkapi tempat wudhu, rak sepatu, dan perlengkapan ibadah yang memadai.",
    facilities: ["Ruang Sholat", "Tempat Wudhu", "Mushaf Al-Qur'an", "Mimbar"],
    capacity: "500 jamaah"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop",
    title: "Ruang Praktik Tata Busana",
    category: "Fasilitas Kejuruan",
    desc: "Ruang praktik dengan 20 mesin jahit, meja potong, dan ruang pattern making untuk pengembangan keterampilan fashion siswa.",
    facilities: ["Mesin Jahit", "Meja Potong", "Pattern Making", "Ruang Pas"],
    capacity: "30 siswa"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop",
    title: "Bengkel TKRO",
    category: "Fasilitas Kejuruan",
    desc: "Bengkel otomotif dengan 10 mobil unit praktik, alat diagnostik modern, dan peralatan lengkap untuk service kendaraan.",
    facilities: ["Unit Mobil", "Alat Diagnostik", "Toolkit", "Hydraulic Lift"],
    capacity: "30 siswa"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&auto=format&fit=crop",
    title: "Unit Kesehatan Sekolah",
    category: "Fasilitas Kesehatan",
    desc: "UKS dengan ruang perawatan, obat-obatan lengkap, dan tenaga medis yang siap melayani siswa yang membutuhkan pertolongan pertama.",
    facilities: ["Ruang Periksa", "Ruang Istirahat", "P3K", "Konseling"],
    capacity: "10 pasien"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop",
    title: "Ruang Tata Usaha",
    category: "Fasilitas Administrasi",
    desc: "Pusat administrasi sekolah dengan sistem digital untuk memudahkan pengurusan dokumen dan informasi akademik.",
    facilities: ["Loket Pelayanan", "Ruang Arsip", "Sistem Digital", "Ruang Rapat"],
    capacity: "20 pegawai"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1604881991664-593b31b88488?w=700&auto=format&fit=crop",
    title: "Ruang Konseling",
    category: "Fasilitas Bimbingan",
    desc: "Ruang konseling yang nyaman dan privat untuk membantu siswa mengatasi masalah pribadi, akademik, dan karir.",
    facilities: ["Ruang Privat", "Play Therapy", "Assessment Tools", "Relaxation Corner"],
    capacity: "5 orang"
  }
]);

// Kategori untuk filter
const categories = ref(["Semua", "Fasilitas Akademik", "Fasilitas Kejuruan", "Fasilitas Olahraga", "Fasilitas Ibadah", "Fasilitas Kesehatan", "Fasilitas Administrasi", "Fasilitas Bimbingan"]);
const selectedCategory = ref("Semua");
const searchQuery = ref("");

// Filtered fasilitas
const filteredFasilitas = computed(() => {
  return fasilitas.value.filter(item => {
    const matchesCategory = selectedCategory.value === "Semua" || item.category === selectedCategory.value;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

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
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Fasilitas
          <span class="font-medium text-amber-600 dark:text-amber-400">Sekolah</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar yang optimal
        </p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-2xl font-light text-amber-600 dark:text-amber-400">{{ fasilitas.length }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Total Fasilitas</div>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-2xl font-light text-amber-600 dark:text-amber-400">6</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Fasilitas Akademik</div>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-2xl font-light text-amber-600 dark:text-amber-400">3</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Fasilitas Olahraga</div>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg text-center">
          <div class="text-2xl font-light text-amber-600 dark:text-amber-400">1000+</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Kapasitas Total</div>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <!-- Category Filter -->
        <div class="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div class="flex items-center gap-2 min-w-max">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              class="px-4 py-2 text-sm border rounded-lg transition-colors whitespace-nowrap"
              :class="{
                'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 font-medium': selectedCategory === category,
                'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': selectedCategory !== category
              }"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Search -->
        <div class="relative w-full lg:w-72">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Cari fasilitas..."
            class="w-full px-4 py-2 pl-10 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
          />
          <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Results Info -->
      <div class="mb-6">
        <p class="text-sm text-gray-500 dark:text-gray-500">
          Menampilkan <span class="font-medium text-gray-700 dark:text-gray-300">{{ filteredFasilitas.length }}</span> dari 
          <span class="font-medium text-gray-700 dark:text-gray-300">{{ fasilitas.length }}</span> fasilitas
        </p>
      </div>
    </div>

    <!-- Facilities Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="item in filteredFasilitas" 
          :key="item.id"
          class="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-300 hover:shadow-sm"
        >
          <!-- Image Container -->
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              :src="item.url" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <!-- Category Badge -->
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 shadow-sm">
                {{ item.category }}
              </span>
            </div>
            <!-- Capacity Badge -->
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 text-xs font-medium bg-black/50 text-white backdrop-blur-sm rounded-full flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ item.capacity }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ item.title }}
            </h3>
            
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ item.desc }}
            </p>

            <!-- Facilities List -->
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(facility, index) in item.facilities" 
                  :key="index"
                  class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {{ facility }}
                </span>
              </div>
            </div>

            <!-- Action Button -->
            <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
              <button class="w-full py-2.5 text-sm font-medium text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
                Lihat Detail Fasilitas
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredFasilitas.length === 0" class="text-center py-16">
        <svg class="w-20 h-20 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">Tidak ada fasilitas</h3>
        <p class="text-base text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </div>

    <!-- Virtual Tour Section -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-8 border border-amber-100 dark:border-amber-900/30">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Virtual Tour 360°</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Jelajahi fasilitas sekolah secara virtual dari mana saja</p>
              </div>
            </div>
            <button class="px-6 py-3 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors whitespace-nowrap">
              Mulai Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Line clamp utilities */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.group:hover img {
  transform: scale(1.05);
}

.group {
  transition: all 0.3s ease;
}

/* Hide scrollbar for category filter */
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

/* Fixed heights untuk konsistensi card */
@media (min-width: 1024px) {
  .group .line-clamp-3 {
    min-height: 4.5rem;
  }
}
</style>
