<script setup lang="ts">
// Data kurikulum
const curriculumInfo = ref({
  name: "Kurikulum Merdeka",
  description: "SMKN 1 ARAHAN menerapkan Kurikulum Merdeka yang berfokus pada pengembangan kompetensi dan karakter siswa sesuai dengan minat dan bakatnya.",
  startYear: "2022",
  status: "Terakreditasi A"
})

// Data program keahlian
const expertisePrograms = ref([
  {
    name: "Teknik Komputer dan Jaringan",
    code: "TKJ",
    description: "Mempelajari perakitan komputer, jaringan dasar, administrasi server, dan troubleshooting.",
    duration: "4 tahun",
    competencies: [
      "Perakitan dan perbaikan komputer",
      "Instalasi jaringan LAN dan WAN",
      "Konfigurasi server dan router",
      "Keamanan jaringan",
      "Cloud computing dasar"
    ],
    career: [
      "Network Administrator",
      "Teknisi Komputer",
      "System Analyst",
      "IT Support",
      "Network Engineer"
    ],
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop",
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
  },
  {
    name: "Teknik Kendaraan Ringan",
    code: "TKRO",
    description: "Mempelajari perawatan dan perbaikan mesin kendaraan ringan, sistem kelistrikan, dan chasis.",
    duration: "4 tahun",
    competencies: [
      "Perawatan mesin bensin dan diesel",
      "Sistem kelistrikan kendaraan",
      "Sistem rem dan suspensi",
      "Diagnostik kerusakan",
      "Spooring dan balancing"
    ],
    career: [
      "Mekanik Ahli",
      "Teknisi Bengkel",
      "Diagnostik Specialist",
      "Service Advisor",
      "Wirausaha Bengkel"
    ],
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop",
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>'
  },
  {
    name: "Tata Busana",
    code: "TB",
    description: "Mempelajari desain fashion, pembuatan pola, menjahit, dan teknik embroidery.",
    duration: "4 tahun",
    competencies: [
      "Desain fashion manual dan digital",
      "Pembuatan pola",
      "Teknik menjahit",
      "Embroidery dan hiasan",
      "Quality control produk"
    ],
    career: [
      "Fashion Designer",
      "Pattern Maker",
      "Sewing Operator",
      "Quality Control",
      "Wirausaha Butik"
    ],
    image: "https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop",
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>'
  }
])

// Data mata pelajaran per kelas
const subjects = ref([
  {
    grade: "Kelas X",
    semester: "Ganjil & Genap",
    subjects: [
      { name: "Pendidikan Agama", hours: 3, type: "Umum" },
      { name: "Pendidikan Pancasila", hours: 2, type: "Umum" },
      { name: "Bahasa Indonesia", hours: 3, type: "Umum" },
      { name: "Matematika", hours: 4, type: "Umum" },
      { name: "Bahasa Inggris", hours: 3, type: "Umum" },
      { name: "PJOK", hours: 3, type: "Umum" },
      { name: "Sejarah Indonesia", hours: 2, type: "Umum" },
      { name: "Seni Budaya", hours: 2, type: "Umum" },
      { name: "Informatika", hours: 3, type: "Umum" },
      { name: "Dasar Program Keahlian", hours: 8, type: "Kejuruan" }
    ]
  },
  {
    grade: "Kelas XI",
    semester: "Ganjil & Genap",
    subjects: [
      { name: "Pendidikan Agama", hours: 3, type: "Umum" },
      { name: "Pendidikan Pancasila", hours: 2, type: "Umum" },
      { name: "Bahasa Indonesia", hours: 3, type: "Umum" },
      { name: "Matematika", hours: 4, type: "Umum" },
      { name: "Bahasa Inggris", hours: 3, type: "Umum" },
      { name: "PJOK", hours: 2, type: "Umum" },
      { name: "Sejarah Indonesia", hours: 2, type: "Umum" },
      { name: "Seni Budaya", hours: 2, type: "Umum" },
      { name: "Projek Kreatif", hours: 4, type: "Kejuruan" },
      { name: "Kompetensi Keahlian", hours: 12, type: "Kejuruan" }
    ]
  },
  {
    grade: "Kelas XII",
    semester: "Ganjil",
    subjects: [
      { name: "Pendidikan Agama", hours: 3, type: "Umum" },
      { name: "Pendidikan Pancasila", hours: 2, type: "Umum" },
      { name: "Bahasa Indonesia", hours: 3, type: "Umum" },
      { name: "Matematika", hours: 4, type: "Umum" },
      { name: "Bahasa Inggris", hours: 3, type: "Umum" },
      { name: "PJOK", hours: 2, type: "Umum" },
      { name: "Projek Kreatif", hours: 4, type: "Kejuruan" },
      { name: "Kompetensi Keahlian", hours: 14, type: "Kejuruan" },
      { name: "PKL", hours: 8, type: "Praktik" }
    ]
  }
])

// Data struktur kurikulum
const curriculumStructure = ref([
  {
    component: "Muatan Nasional",
    percentage: "40%",
    description: "Mata pelajaran yang ditetapkan oleh pemerintah pusat",
    subjects: ["Pendidikan Agama", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Bahasa Inggris", "PJOK", "Sejarah Indonesia", "Seni Budaya"]
  },
  {
    component: "Muatan Kewilayahan",
    percentage: "10%",
    description: "Mata pelajaran yang disesuaikan dengan potensi daerah",
    subjects: ["Bahasa Daerah", "Muatan Lokal", "Kewirausahaan"]
  },
  {
    component: "Muatan Kejuruan",
    percentage: "50%",
    description: "Mata pelajaran kompetensi keahlian sesuai program",
    subjects: ["Dasar Program Keahlian", "Kompetensi Keahlian", "Projek Kreatif", "PKL"]
  }
])

// Data jadwal PKL
const pklInfo = ref({
  duration: "6 bulan",
  period: "Kelas XII Semester Ganjil & Genap",
  locations: ["Industri mitra", "DUDI", "Instansi pemerintah"],
  benefits: ["Pengalaman kerja nyata", "Sertifikat kompetensi", "Relasi industri", "Peluang kerja"]
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  scrollToTop()
})
</script>

<template>
  <main class="min-h-screen pt-20 pb-16">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Kurikulum
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Informasi lengkap tentang kurikulum, program keahlian, dan struktur pembelajaran
        </p>
      </div>
    </div>

    <!-- Kurikulum Info -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-2">
              {{ curriculumInfo.name }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-3xl">
              {{ curriculumInfo.description }}
            </p>
          </div>
          <div class="flex gap-3">
            <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm">
              Berlaku {{ curriculumInfo.startYear }}
            </span>
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
              {{ curriculumInfo.status }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Keahlian -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Program <span class="font-medium text-amber-600 dark:text-amber-400">Keahlian</span>
      </h2>

      <div class="space-y-8">
        <div 
          v-for="program in expertisePrograms" 
          :key="program.code"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-colors"
        >
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Image -->
            <div class="lg:col-span-1 h-64 lg:h-auto overflow-hidden">
              <img 
                :src="program.image" 
                :alt="program.name"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Content -->
            <div class="lg:col-span-2 p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400" v-html="program.icon"></div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ program.name }}</h3>
                  <p class="text-sm text-amber-600 dark:text-amber-400">{{ program.code }} • {{ program.duration }}</p>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ program.description }}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Kompetensi -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2 text-sm">Kompetensi yang Dipelajari:</h4>
                  <ul class="space-y-1">
                    <li v-for="item in program.competencies" :key="item" class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span class="text-amber-600 dark:text-amber-400">•</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Prospek Karir -->
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2 text-sm">Prospek Karir:</h4>
                  <ul class="space-y-1">
                    <li v-for="item in program.career" :key="item" class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span class="text-amber-600 dark:text-amber-400">•</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Struktur Kurikulum -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Struktur <span class="font-medium text-amber-600 dark:text-amber-400">Kurikulum</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in curriculumStructure" 
          :key="item.component"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-gray-900 dark:text-white">{{ item.component }}</h3>
            <span class="text-2xl font-light text-amber-600 dark:text-amber-400">{{ item.percentage }}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ item.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="subject in item.subjects" 
              :key="subject"
              class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {{ subject }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mata Pelajaran per Kelas -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Mata <span class="font-medium text-amber-600 dark:text-amber-400">Pelajaran</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="grade in subjects" 
          :key="grade.grade"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden"
        >
          <div class="p-4 bg-amber-50 dark:bg-amber-900/20 border-b border-gray-100 dark:border-gray-800">
            <h3 class="font-medium text-gray-900 dark:text-white">{{ grade.grade }}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-500">{{ grade.semester }}</p>
          </div>
          <div class="p-4">
            <div class="space-y-2">
              <div 
                v-for="subject in grade.subjects" 
                :key="subject.name"
                class="flex items-center justify-between text-sm"
              >
                <span class="text-gray-700 dark:text-gray-300">{{ subject.name }}</span>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-gray-500 dark:text-gray-500">{{ subject.hours }} JP</span>
                  <span 
                    class="px-1.5 py-0.5 text-xs rounded"
                    :class="{
                      'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400': subject.type === 'Umum',
                      'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400': subject.type === 'Kejuruan',
                      'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400': subject.type === 'Praktik'
                    }"
                  >
                    {{ subject.type }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PKL Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- PKL Info -->
        <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Praktik Kerja Lapangan</h3>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <p class="text-xs text-gray-500 dark:text-gray-500">Durasi</p>
              <p class="font-medium text-gray-900 dark:text-white">{{ pklInfo.duration }}</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <p class="text-xs text-gray-500 dark:text-gray-500">Periode</p>
              <p class="font-medium text-gray-900 dark:text-white">{{ pklInfo.period }}</p>
            </div>
          </div>

          <div class="mb-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2 text-sm">Lokasi PKL:</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="loc in pklInfo.locations" :key="loc" class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                {{ loc }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="font-medium text-gray-900 dark:text-white mb-2 text-sm">Manfaat PKL:</h4>
            <ul class="space-y-1">
              <li v-for="benefit in pklInfo.benefits" :key="benefit" class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                <span class="text-amber-600 dark:text-amber-400">•</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Dokumen Kurikulum -->
        <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Dokumen Kurikulum</h3>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Unduh dokumen kurikulum untuk informasi lebih lengkap
          </p>

          <div class="space-y-3">
            <button class="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">Struktur Kurikulum 2024/2025</span>
              </div>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>

            <button class="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">Silabus Semua Program Keahlian</span>
              </div>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>

            <button class="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">Panduan PKL 2024</span>
              </div>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Kalender Akademik -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-100 dark:border-amber-900/30">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Kalender Akademik 2024/2025</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Download kalender akademik untuk melihat jadwal lengkap</p>
            </div>
          </div>
          <button class="px-4 py-2 text-sm text-white bg-amber-500 rounded-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors whitespace-nowrap">
            Download Kalender
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.group:hover img {
  transform: scale(1.05);
}
</style>
