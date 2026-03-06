<script setup lang="ts">
// Data agenda
const agendas = ref([
  {
    id: 1,
    title: "Pertemuan Orang Tua Siswa Kelas X",
    description: "Pertemuan orang tua siswa baru kelas X untuk sosialisasi program sekolah dan pembagian rapor tengah semester",
    location: "Aula SMKN 1 ARAHAN",
    date: "23 Maret 2024",
    time: "09.00 - 12.00 WIB",
    category: "Pertemuan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    participants: 250,
    status: "akan-datang"
  },
  {
    id: 2,
    title: "Ujian Tengah Semester Genap",
    description: "Pelaksanaan Ujian Tengah Semester Genap Tahun Pelajaran 2023/2024 untuk semua tingkatan",
    location: "Ruang Kelas",
    date: "1 - 8 April 2024",
    time: "07.30 - 12.00 WIB",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=870&auto=format&fit=crop",
    participants: 1200,
    status: "akan-datang"
  },
  {
    id: 3,
    title: "Peringatan Isra Mi'raj",
    description: "Peringatan Isra Mi'raj Nabi Muhammad SAW 1445 H dengan kegiatan pengajian dan lomba keagamaan",
    location: "Masjid Al-Ikhlas",
    date: "8 Februari 2024",
    time: "07.30 - 11.30 WIB",
    category: "Keagamaan",
    image: "https://images.unsplash.com/photo-1609592805610-1f6b2b3f2f2f?q=80&w=870&auto=format&fit=crop",
    participants: 800,
    status: "akan-datang"
  },
  {
    id: 4,
    title: "Workshop Kewirausahaan",
    description: "Workshop kewirausahaan untuk siswa kelas XII dengan tema 'Membangun Startup dari Sekolah'",
    location: "Lab Komputer",
    date: "15 Maret 2024",
    time: "09.00 - 15.00 WIB",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop",
    participants: 100,
    status: "akan-datang"
  },
  {
    id: 5,
    title: "Pembagian Rapor Semester Genap",
    description: "Pembagian rapor semester genap Tahun Pelajaran 2023/2024",
    location: "Ruang Kelas masing-masing",
    date: "21 Juni 2024",
    time: "08.00 - 11.00 WIB",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop",
    participants: 1200,
    status: "akan-datang"
  },
  {
    id: 6,
    title: "Pelepasan Siswa Kelas XII",
    description: "Acara pelepasan siswa kelas XII Tahun Pelajaran 2023/2024",
    location: "Lapangan Utama",
    date: "10 Mei 2024",
    time: "08.00 - 12.00 WIB",
    category: "Acara",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=870&auto=format&fit=crop",
    participants: 1500,
    status: "akan-datang"
  },
  {
    id: 7,
    title: "Pelatihan Jurnalistik",
    description: "Pelatihan jurnalistik dasar untuk anggota ekstrakulikuler jurnalistik",
    location: "Ruang Multimedia",
    date: "5 Maret 2024",
    time: "13.00 - 16.00 WIB",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop",
    participants: 40,
    status: "akan-datang"
  },
  {
    id: 8,
    title: "Bakti Sosial",
    description: "Kegiatan bakti sosial ke panti asuhan dalam rangka memperingati bulan Ramadan",
    location: "Panti Asuhan Al-Ikhlas",
    date: "25 Maret 2024",
    time: "08.00 - 12.00 WIB",
    category: "Sosial",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=870&auto=format&fit=crop",
    participants: 100,
    status: "akan-datang"
  }
]);

// Filter dan pencarian
const searchQuery = ref("");
const selectedCategory = ref("Semua");
const selectedStatus = ref("Semua");

const categories = ref(["Semua", "Akademik", "Pertemuan", "Keagamaan", "Pelatihan", "Acara", "Sosial"]);
const statuses = ref(["Semua", "akan-datang", "sedang-berlangsung", "selesai"]);

const filteredAgendas = computed(() => {
  return agendas.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === "Semua" || item.category === selectedCategory.value;
    const matchesStatus = selectedStatus.value === "Semua" || item.status === selectedStatus.value;
    return matchesSearch && matchesCategory && matchesStatus;
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Agenda
          <span class="font-medium text-amber-600 dark:text-amber-400">Sekolah</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Jadwal kegiatan dan acara di SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="max-w-6xl mx-auto px-4 pt-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <!-- Category Filter -->
        <div class="flex flex-wrap items-center gap-2">
          <button v-for="category in categories" :key="category" @click="selectedCategory = category"
            class="px-3 py-1.5 text-xs border rounded-md transition-colors whitespace-nowrap" :class="{
              'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400': selectedCategory === category,
              'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': selectedCategory !== category
            }">
            {{ category }}
          </button>
        </div>

        <!-- Search -->
        <div class="flex items-center gap-3 w-full lg:w-auto">
          <div class="relative flex-1 lg:w-64">
            <input v-model="searchQuery" type="text" placeholder="Cari agenda..."
              class="w-full px-3 py-1.5 pl-8 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
            <svg class="absolute left-2.5 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Status Filter -->
          <select v-model="selectedStatus"
            class="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors">
            <option value="Semua">Semua Status</option>
            <option value="akan-datang">Akan Datang</option>
            <option value="sedang-berlangsung">Sedang Berlangsung</option>
            <option value="selesai">Selesai</option>
          </select>
        </div>
      </div>

      <!-- Results Info -->
      <div class="flex items-center gap-2 mb-6 text-sm text-gray-500 dark:text-gray-500">
        <span>Menampilkan {{ filteredAgendas.length }} dari {{ agendas.length }} agenda</span>
      </div>
    </div>

    <!-- Agenda Grid -->
    <div class="max-w-6xl mx-auto px-4 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="item in filteredAgendas" :key="item.id" :to="`/agenda/${item.id}`"
          class="group block border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
          <!-- Image -->
          <div class="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <!-- Category Badge -->
            <div class="absolute top-2 left-2">
              <span
                class="px-2 py-1 text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300">
                {{ item.category }}
              </span>
            </div>
            <!-- Status Badge -->
            <div class="absolute top-2 right-2">
              <span class="px-2 py-1 text-xs rounded-full" :class="{
                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': item.status === 'akan-datang',
                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400': item.status === 'sedang-berlangsung',
                'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400': item.status === 'selesai'
              }">
                {{ item.status === 'akan-datang' ? 'Akan Datang' : item.status === 'sedang-berlangsung' ? 'Berlangsung'
                : 'Selesai' }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- Date & Time -->
            <div class="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 mb-2">
              <span class="flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ item.date }}</span>
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ item.time }}</span>
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-base font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {{ item.description }}
            </p>

            <!-- Location & Participants -->
            <div class="space-y-1 text-xs text-gray-500 dark:text-gray-500">
              <div class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="truncate">{{ item.location }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{{ item.participants }} Peserta</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-if="filteredAgendas.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Tidak ada agenda</h3>
        <p class="text-sm text-gray-500 dark:text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </div>

    <!-- Calendar Preview -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-md p-6 border border-gray-100 dark:border-gray-800">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">Kalender Agenda</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Lihat semua agenda dalam tampilan kalender</p>
              </div>
            </div>
            <button
              class="px-4 py-2 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
              Lihat Kalender
            </button>
          </div>

          <!-- Mini Calendar Preview -->
          <div class="grid grid-cols-7 gap-1 text-center text-xs">
            <div class="py-2 text-gray-500 dark:text-gray-500">Sen</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Sel</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Rab</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Kam</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Jum</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Sab</div>
            <div class="py-2 text-gray-500 dark:text-gray-500">Min</div>

            <div class="py-2 text-gray-400 dark:text-gray-600">29</div>
            <div class="py-2 text-gray-400 dark:text-gray-600">30</div>
            <div class="py-2 text-gray-400 dark:text-gray-600">31</div>
            <div class="py-2 text-gray-900 dark:text-white">1</div>
            <div class="py-2 text-gray-900 dark:text-white">2</div>
            <div class="py-2 text-gray-900 dark:text-white">3</div>
            <div class="py-2 text-gray-900 dark:text-white">4</div>

            <div class="py-2 text-gray-900 dark:text-white">5</div>
            <div class="py-2 text-gray-900 dark:text-white">6</div>
            <div class="py-2 text-gray-900 dark:text-white">7</div>
            <div class="py-2 text-gray-900 dark:text-white">8</div>
            <div class="py-2 text-gray-900 dark:text-white">9</div>
            <div class="py-2 text-gray-900 dark:text-white">10</div>
            <div class="py-2 text-gray-900 dark:text-white">11</div>

            <div class="py-2 text-gray-900 dark:text-white">12</div>
            <div class="py-2 text-gray-900 dark:text-white">13</div>
            <div class="py-2 text-gray-900 dark:text-white">14</div>
            <div
              class="py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
              15</div>
            <div class="py-2 text-gray-900 dark:text-white">16</div>
            <div class="py-2 text-gray-900 dark:text-white">17</div>
            <div class="py-2 text-gray-900 dark:text-white">18</div>

            <div class="py-2 text-gray-900 dark:text-white">19</div>
            <div class="py-2 text-gray-900 dark:text-white">20</div>
            <div class="py-2 text-gray-900 dark:text-white">21</div>
            <div class="py-2 text-gray-900 dark:text-white">22</div>
            <div class="py-2 text-gray-900 dark:text-white">23</div>
            <div class="py-2 text-gray-900 dark:text-white">24</div>
            <div class="py-2 text-gray-900 dark:text-white">25</div>

            <div class="py-2 text-gray-900 dark:text-white">26</div>
            <div class="py-2 text-gray-900 dark:text-white">27</div>
            <div class="py-2 text-gray-900 dark:text-white">28</div>
            <div class="py-2 text-gray-900 dark:text-white">29</div>
            <div class="py-2 text-gray-900 dark:text-white">30</div>
            <div class="py-2 text-gray-900 dark:text-white">31</div>
            <div class="py-2 text-gray-400 dark:text-gray-600">1</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover img {
  transform: scale(1.05);
}
</style>
