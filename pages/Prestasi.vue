<script setup lang="ts">
// Data prestasi siswa
const prestasiAkademik = ref([
  {
    id: 1,
    nama: "Ahmad Fauzi",
    prestasi: "Juara 1 Olimpiade Matematika Tingkat Provinsi",
    tahun: "2024",
    tingkat: "Provinsi",
    bidang: "Matematika",
    foto: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=amber&color=fff&size=128"
  },
  {
    id: 2,
    nama: "Siti Aminah",
    prestasi: "Medali Emas OSN Biologi Tingkat Nasional",
    tahun: "2023",
    tingkat: "Nasional",
    bidang: "Biologi",
    foto: "https://ui-avatars.com/api/?name=Siti+Aminah&background=amber&color=fff&size=128"
  },
  {
    id: 3,
    nama: "Budi Santoso",
    prestasi: "Juara 2 Lomba Karya Ilmiah Remaja",
    tahun: "2024",
    tingkat: "Kabupaten",
    bidang: "Penelitian",
    foto: "https://ui-avatars.com/api/?name=Budi+Santoso&background=amber&color=fff&size=128"
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    prestasi: "Juara 1 Debat Bahasa Inggris",
    tahun: "2023",
    tingkat: "Provinsi",
    bidang: "Bahasa",
    foto: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=amber&color=fff&size=128"
  },
  {
    id: 5,
    nama: "Rizki Maulana",
    prestasi: "Medali Perak Olimpiade Fisika",
    tahun: "2024",
    tingkat: "Nasional",
    bidang: "Fisika",
    foto: "https://ui-avatars.com/api/?name=Rizki+Maulana&background=amber&color=fff&size=128"
  },
  {
    id: 6,
    nama: "Nurul Hidayah",
    prestasi: "Juara 3 Olimpiade Kimia",
    tahun: "2023",
    tingkat: "Provinsi",
    bidang: "Kimia",
    foto: "https://ui-avatars.com/api/?name=Nurul+Hidayah&background=amber&color=fff&size=128"
  }
]);

const prestasiNonAkademik = ref([
  {
    id: 7,
    nama: "Muhammad Rizky",
    prestasi: "Juara 1 Pencak Silat Tingkat Nasional",
    tahun: "2024",
    tingkat: "Nasional",
    bidang: "Olahraga",
    foto: "https://ui-avatars.com/api/?name=M+Rizky&background=green&color=fff&size=128"
  },
  {
    id: 8,
    nama: "Tim Futsal",
    prestasi: "Juara 2 Liga Pelajar Provinsi",
    tahun: "2024",
    tingkat: "Provinsi",
    bidang: "Olahraga",
    foto: "https://ui-avatars.com/api/?name=Tim+Futsal&background=green&color=fff&size=128"
  },
  {
    id: 9,
    nama: "Anisa Putri",
    prestasi: "Juara 1 MTQ Tingkat Kabupaten",
    tahun: "2023",
    tingkat: "Kabupaten",
    bidang: "Keagamaan",
    foto: "https://ui-avatars.com/api/?name=Anisa+Putri&background=green&color=fff&size=128"
  },
  {
    id: 10,
    nama: "Tim Paskibra",
    prestasi: "Juara Umum Lomba Paskibra Se-Jawa Barat",
    tahun: "2024",
    tingkat: "Provinsi",
    bidang: "Ekstrakurikuler",
    foto: "https://ui-avatars.com/api/?name=Tim+Paskibra&background=green&color=fff&size=128"
  },
  {
    id: 11,
    nama: "Hasan Basri",
    prestasi: "Juara 1 Karate Tingkat Nasional",
    tahun: "2023",
    tingkat: "Nasional",
    bidang: "Olahraga",
    foto: "https://ui-avatars.com/api/?name=Hasan+Basri&background=green&color=fff&size=128"
  },
  {
    id: 12,
    nama: "Tim Robotik",
    prestasi: "Juara 3 Kontes Robot Indonesia",
    tahun: "2024",
    tingkat: "Nasional",
    bidang: "Teknologi",
    foto: "https://ui-avatars.com/api/?name=Tim+Robot&background=green&color=fff&size=128"
  }
]);

// Statistik prestasi
const statistics = ref({
  totalPrestasi: 48,
  tingkatNasional: 12,
  tingkatProvinsi: 24,
  tingkatKabupaten: 12,
  tahunIni: 18
});

// Filter states
const selectedTahun = ref("Semua");
const searchQuery = ref("");
const activeTab = ref("akademik");

// Filtered prestasi akademik
const filteredAkademik = computed(() => {
  let filtered = prestasiAkademik.value;
  
  if (selectedTahun.value !== "Semua") {
    filtered = filtered.filter(item => item.tahun === selectedTahun.value);
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(item => 
      item.nama.toLowerCase().includes(query) || 
      item.prestasi.toLowerCase().includes(query) ||
      item.bidang.toLowerCase().includes(query)
    );
  }
  
  return filtered;
});

// Filtered prestasi non akademik
const filteredNonAkademik = computed(() => {
  let filtered = prestasiNonAkademik.value;
  
  if (selectedTahun.value !== "Semua") {
    filtered = filtered.filter(item => item.tahun === selectedTahun.value);
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(item => 
      item.nama.toLowerCase().includes(query) || 
      item.prestasi.toLowerCase().includes(query) ||
      item.bidang.toLowerCase().includes(query)
    );
  }
  
  return filtered;
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <!-- Trophy Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>

        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Prestasi
          <span class="font-medium text-amber-600 dark:text-amber-400">Siswa</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Kumpulan prestasi yang telah diraih oleh siswa-siswi SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="max-w-6xl mx-auto px-4 pt-12">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center transition-colors duration-200">
          <div class="text-xl font-light text-amber-600 dark:text-amber-400">{{ statistics.totalPrestasi }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Total Prestasi</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center transition-colors duration-200">
          <div class="text-xl font-light text-amber-600 dark:text-amber-400">{{ statistics.tingkatNasional }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Nasional</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center transition-colors duration-200">
          <div class="text-xl font-light text-amber-600 dark:text-amber-400">{{ statistics.tingkatProvinsi }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Provinsi</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center transition-colors duration-200">
          <div class="text-xl font-light text-amber-600 dark:text-amber-400">{{ statistics.tingkatKabupaten }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Kabupaten</div>
        </div>
        <div
          class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center col-span-2 md:col-span-1 transition-colors duration-200">
          <div class="text-xl font-light text-amber-600 dark:text-amber-400">{{ statistics.tahunIni }}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">Tahun 2024</div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-6xl mx-auto px-4">
      <!-- Filter Section -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div class="flex items-center gap-2">
          <button
            @click="selectedTahun = 'Semua'"
            class="px-3 py-1.5 text-xs border rounded-md transition-colors"
            :class="selectedTahun === 'Semua' ? 'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'">
            Semua
          </button>
          <button
            @click="selectedTahun = '2024'"
            class="px-3 py-1.5 text-xs border rounded-md transition-colors"
            :class="selectedTahun === '2024' ? 'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'">
            2024
          </button>
          <button
            @click="selectedTahun = '2023'"
            class="px-3 py-1.5 text-xs border rounded-md transition-colors"
            :class="selectedTahun === '2023' ? 'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'">
            2023
          </button>
        </div>
        <div class="relative w-full sm:w-64">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Cari prestasi..."
            class="w-full px-3 py-1.5 pl-8 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-500 transition-colors" />
          <svg class="absolute left-2.5 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="flex gap-2 border-b border-gray-100 dark:border-gray-800 mb-6">
        <button
          @click="activeTab = 'akademik'"
          class="px-4 py-2 text-sm font-medium transition-colors relative"
          :class="activeTab === 'akademik' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'">
          Prestasi Akademik
          <span v-if="activeTab === 'akademik'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
        </button>
        <button
          @click="activeTab = 'non-akademik'"
          class="px-4 py-2 text-sm font-medium transition-colors relative"
          :class="activeTab === 'non-akademik' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'">
          Prestasi Non Akademik
          <span v-if="activeTab === 'non-akademik'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
        </button>
      </div>

      <!-- Prestasi Akademik -->
      <div v-show="activeTab === 'akademik'" class="mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="item in filteredAkademik" :key="item.id"
            class="group border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-200 hover:translate-y-[-2px] overflow-hidden">
            <div class="p-4">
              <div class="flex items-start gap-3">
                <!-- Foto/Avatar -->
                <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 overflow-hidden flex-shrink-0">
                  <img :src="item.foto" :alt="item.nama" class="w-full h-full object-cover" />
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium text-gray-900 dark:text-white text-sm mb-1">{{ item.nama }}</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{{ item.prestasi }}</p>

                  <!-- Meta -->
                  <div class="flex flex-wrap items-center gap-2 text-xs">
                    <span class="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                      {{ item.tingkat }}
                    </span>
                    <span class="text-gray-400 dark:text-gray-500">{{ item.tahun }}</span>
                  </div>
                </div>
              </div>

              <!-- Detail Link -->
              <div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <NuxtLink :to="`/prestasi/${item.id}`"
                  class="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
                  Lihat Detail
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredAkademik.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Tidak ada prestasi</h3>
          <p class="text-sm text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      </div>

      <!-- Prestasi Non Akademik -->
      <div v-show="activeTab === 'non-akademik'" class="mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="item in filteredNonAkademik" :key="item.id"
            class="group border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-200 hover:translate-y-[-2px] overflow-hidden">
            <div class="p-4">
              <div class="flex items-start gap-3">
                <!-- Foto/Avatar -->
                <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 overflow-hidden flex-shrink-0">
                  <img :src="item.foto" :alt="item.nama" class="w-full h-full object-cover" />
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium text-gray-900 dark:text-white text-sm mb-1">{{ item.nama }}</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{{ item.prestasi }}</p>

                  <!-- Meta -->
                  <div class="flex flex-wrap items-center gap-2 text-xs">
                    <span class="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                      {{ item.tingkat }}
                    </span>
                    <span class="text-gray-400 dark:text-gray-500">{{ item.tahun }}</span>
                  </div>
                </div>
              </div>

              <!-- Detail Link -->
              <div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <NuxtLink :to="`/prestasi/${item.id}`"
                  class="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
                  Lihat Detail
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredNonAkademik.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Tidak ada prestasi</h3>
          <p class="text-sm text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      </div>

      <!-- Achievement Timeline -->
      <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
        <h3 class="font-medium text-gray-900 dark:text-white mb-4">Grafik Prestasi per Tahun</h3>
        <div class="flex items-end gap-2 h-32">
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-amber-200 dark:bg-amber-900/50 rounded-t transition-colors duration-200" style="height: 80px"></div>
            <span class="text-xs mt-2 text-gray-600 dark:text-gray-400">2021</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-amber-300 dark:bg-amber-800/50 rounded-t transition-colors duration-200" style="height: 100px"></div>
            <span class="text-xs mt-2 text-gray-600 dark:text-gray-400">2022</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-amber-400 dark:bg-amber-700/50 rounded-t transition-colors duration-200" style="height: 120px"></div>
            <span class="text-xs mt-2 text-gray-600 dark:text-gray-400">2023</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-amber-500 dark:bg-amber-600/50 rounded-t transition-colors duration-200" style="height: 140px"></div>
            <span class="text-xs mt-2 text-gray-600 dark:text-gray-400">2024</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Line clamp for text */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
button,
a {
  transition: all 0.2s ease;
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f9fafb;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 20px;
}

.dark .overflow-y-auto::-webkit-scrollbar-track {
  background: #111827;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #374151;
}
</style>
