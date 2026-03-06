<script setup lang="ts">
// Data ekstrakulikuler
const extracurriculars = ref([
  {
    id: 1,
    name: "Paskibra",
    category: "Olahraga & Kepemimpinan",
    description: "Latihan baris-berbaris, pengibaran bendera, dan pembentukan karakter kepemimpinan",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=870&auto=format&fit=crop",
    members: 45,
    schedule: "Selasa & Kamis, 15:30 - 17:30",
    coach: "Kapten Inf. Hendra Gunawan",
    achievements: ["Juara 1 LBB Se-Kabupaten 2023", "Juara 2 LBB Provinsi 2024"]
  },
  {
    id: 2,
    name: "Pramuka",
    category: "Kepramukaan",
    description: "Pendidikan kepramukaan, kegiatan alam terbuka, dan pengembangan karakter",
    image: "https://images.unsplash.com/photo-1606503752414-67f70c3d6d27?q=80&w=870&auto=format&fit=crop",
    members: 120,
    schedule: "Jumat, 14:00 - 17:00",
    coach: "Kak Rudi Hartono, S.Pd.",
    achievements: ["Juara Umum LT-V Kwarcab 2023", "Juara 3 LKBB Pramuka 2024"]
  },
  {
    id: 3,
    name: "Futsal",
    category: "Olahraga",
    description: "Pembinaan bakat futsal, latihan teknik dasar, dan persiapan turnamen",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=871&auto=format&fit=crop",
    members: 60,
    schedule: "Senin & Rabu, 15:30 - 17:30",
    coach: "Achmad Fauzi, S.Pd.",
    achievements: ["Juara 2 Liga Pelajar 2023", "Juara 1 Turnamen Futsal SMK 2024"]
  },
  {
    id: 4,
    name: "Voli",
    category: "Olahraga",
    description: "Latihan teknik voli, pembentukan tim, dan persiapan kompetisi",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=870&auto=format&fit=crop",
    members: 40,
    schedule: "Selasa & Kamis, 15:30 - 17:30",
    coach: "Siti Aminah, S.Pd.",
    achievements: ["Juara 3 Popda Kabupaten 2023"]
  },
  {
    id: 5,
    name: "Robotik",
    category: "Sains & Teknologi",
    description: "Belajar merakit dan memprogram robot, persiapan lomba robotik",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=870&auto=format&fit=crop",
    members: 25,
    schedule: "Sabtu, 08:00 - 12:00",
    coach: "Dedi Setiawan, S.T.",
    achievements: ["Finalis KRI 2023", "Juara 3 Robot Line Follower 2024"]
  },
  {
    id: 6,
    name: "Seni Tari",
    category: "Seni & Budaya",
    description: "Pelestarian seni tari tradisional dan pengembangan tari kreasi",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=774&auto=format&fit=crop",
    members: 35,
    schedule: "Rabu & Jumat, 15:30 - 17:30",
    coach: "Dewi Lestari, S.Sn.",
    achievements: ["Juara 1 Festival Tari 2023", "Penampil Terbaik FLS2N 2024"]
  },
  {
    id: 7,
    name: "PMR",
    category: "Kesehatan & Sosial",
    description: "Pendidikan pertolongan pertama, kesehatan remaja, dan aksi sosial",
    image: "https://images.unsplash.com/photo-1576765607924-3f6b8418e36e?q=80&w=870&auto=format&fit=crop",
    members: 55,
    schedule: "Kamis, 15:30 - 17:30",
    coach: "dr. Siti Nurhaliza",
    achievements: ["Juara 2 Lomba PMR Wira 2023", "Tim Teraktif 2024"]
  },
  {
    id: 8,
    name: "Marching Band",
    category: "Seni & Olahraga",
    description: "Latihan musik dan baris-berbaris, penampilan di berbagai acara",
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=870&auto=format&fit=crop",
    members: 80,
    schedule: "Sabtu & Minggu, 08:00 - 12:00",
    coach: "Asep Saepuloh, S.Sn.",
    achievements: ["Juara 1 Grand Prix Marching Band 2023"]
  }
]);

// Kategori untuk filter
const categories = ref([
  "Semua",
  "Olahraga",
  "Seni & Budaya",
  "Sains & Teknologi",
  "Kesehatan & Sosial",
  "Kepramukaan"
]);

const selectedCategory = ref("Semua");
const searchQuery = ref("");

// Filtered extracurriculars
const filteredExtracurriculars = computed(() => {
  return extracurriculars.value.filter(item => {
    const matchesCategory = selectedCategory.value === "Semua" || item.category.includes(selectedCategory.value);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase());
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
      <div class="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>

        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Ekstrakulikuler
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Pengembangan bakat dan minat siswa melalui berbagai kegiatan ekstrakulikuler
        </p>
      </div>
    </div>

    <!-- Filter & Search Section -->
    <div class="max-w-6xl mx-auto px-4 pt-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <!-- Category Filter -->
        <div class="flex flex-wrap items-center gap-2">
          <button v-for="category in categories" :key="category" @click="selectedCategory = category"
            class="px-3 py-1.5 text-xs border rounded-md transition-colors" :class="{
              'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400': selectedCategory === category,
              'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': selectedCategory !== category
            }">
            {{ category }}
          </button>
        </div>

        <!-- Search -->
        <div class="relative w-full md:w-64">
          <input v-model="searchQuery" type="text" placeholder="Cari ekstrakulikuler..."
            class="w-full px-3 py-1.5 pl-8 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
          <svg class="absolute left-2.5 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Stats -->
      <div class="flex items-center gap-2 mb-6 text-sm text-gray-500 dark:text-gray-500">
        <span>Menampilkan {{ filteredExtracurriculars.length }} dari {{ extracurriculars.length }}
          ekstrakulikuler</span>
        <span class="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>Total {{extracurriculars.reduce((acc, curr) => acc + curr.members, 0)}} siswa aktif</span>
      </div>
    </div>

    <!-- Extracurricular Grid -->
    <div class="max-w-6xl mx-auto px-4 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in filteredExtracurriculars" :key="item.id"
          class="group border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
          <!-- Image -->
          <div class="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img :src="item.image" :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute top-2 right-2">
              <span
                class="px-2 py-1 text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300">
                {{ item.members }} Anggota
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- Category Badge -->
            <div class="mb-2">
              <span
                class="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">
                {{ item.category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ item.name }}</h3>

            <!-- Description -->
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {{ item.description }}
            </p>

            <!-- Schedule & Coach -->
            <div class="space-y-2 mb-3 text-xs">
              <div class="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="truncate">{{ item.schedule }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="truncate">{{ item.coach }}</span>
              </div>
            </div>

            <!-- Achievements Preview -->
            <div class="mb-3" v-if="item.achievements.length">
              <p class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Prestasi:</p>
              <div class="flex flex-wrap gap-1">
                <span v-for="(achievement, idx) in item.achievements.slice(0, 2)" :key="idx"
                  class="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full">
                  {{ achievement }}
                </span>
                <span v-if="item.achievements.length > 2" class="text-xs text-gray-500 dark:text-gray-500">
                  +{{ item.achievements.length - 2 }} lagi
                </span>
              </div>
            </div>

            <!-- Footer -->
            <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
              <button
                class="w-full py-2 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredExtracurriculars.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Tidak ada ekstrakulikuler</h3>
        <p class="text-sm text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </div>

    <!-- Join Info -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div
          class="bg-amber-50/50 dark:bg-amber-900/10 rounded-md p-6 border border-amber-100 dark:border-amber-900/30">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">Ingin Bergabung?</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Pendaftaran ekstrakulikuler dibuka setiap awal
                  semester</p>
              </div>
            </div>
            <button
              class="px-4 py-2 text-sm text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors">
              Info Pendaftaran
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
button,
a,
img {
  transition: all 0.2s ease;
}

/* Image hover effect */
.group:hover img {
  transform: scale(1.05);
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
