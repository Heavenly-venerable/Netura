<script setup lang="ts">
// Data statistik siswa
const studentStatistics = ref([
  { label: 'Total Siswa', value: '1,248', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>' },
  { label: 'Siswa Laki-laki', value: '682', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>' },
  { label: 'Siswa Perempuan', value: '566', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>' },
  { label: 'Rombel', value: '36', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>' }
])

// Data per kelas
const classData = ref([
  { 
    level: 'Kelas X', 
    total: 420, 
    classes: [
      { name: 'X TKJ 1', total: 36, wali: 'Ahmad Fauzi, S.Kom' },
      { name: 'X TKJ 2', total: 35, wali: 'Rina Marlina, S.Kom' },
      { name: 'X TKRO 1', total: 38, wali: 'Hasan Basri, S.Pd' },
      { name: 'X TKRO 2', total: 37, wali: 'Dedi Setiawan, S.Pd' },
      { name: 'X TB 1', total: 32, wali: 'Dewi Lestari, S.Pd' }
    ]
  },
  { 
    level: 'Kelas XI', 
    total: 415, 
    classes: [
      { name: 'XI TKJ 1', total: 35, wali: 'Siti Aminah, S.Kom' },
      { name: 'XI TKJ 2', total: 34, wali: 'Maman Suryaman, S.Kom' },
      { name: 'XI TKRO 1', total: 37, wali: 'Asep Saepuloh, S.Pd' },
      { name: 'XI TKRO 2', total: 36, wali: 'Ujang Kusnadi, S.Pd' },
      { name: 'XI TB 1', total: 31, wali: 'Nurul Hidayah, S.Pd' }
    ]
  },
  { 
    level: 'Kelas XII', 
    total: 413, 
    classes: [
      { name: 'XII TKJ 1', total: 35, wali: 'Dede Yusuf, S.Kom' },
      { name: 'XII TKJ 2', total: 34, wali: 'Ahmad Syarifudin, S.Kom' },
      { name: 'XII TKRO 1', total: 38, wali: 'Engkos Kosasih, S.Pd' },
      { name: 'XII TKRO 2', total: 36, wali: 'Rudi Hartono, S.Pd' },
      { name: 'XII TB 1', total: 32, wali: 'Yanti Susilawati, S.Pd' }
    ]
  }
])

// Data organisasi siswa
const studentOrganizations = ref([
  {
    name: 'OSIS',
    fullName: 'Organisasi Siswa Intra Sekolah',
    members: 45,
    advisor: 'Drs. Ahmad Fauzi',
    description: 'Wadah pengembangan kepemimpinan dan kreativitas siswa',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
  },
  {
    name: 'Pramuka',
    fullName: 'Praja Muda Karana',
    members: 120,
    advisor: 'Kak Rudi Hartono',
    description: 'Pendidikan kepramukaan dan kegiatan alam terbuka',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h18v18H3V3z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9l3 3-3 3" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9l-3 3 3 3" /></svg>'
  },
  {
    name: 'PMR',
    fullName: 'Palang Merah Remaja',
    members: 55,
    advisor: 'dr. Siti Nurhaliza',
    description: 'Kegiatan kemanusiaan dan pertolongan pertama',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>'
  },
  {
    name: 'Rohis',
    fullName: 'Rohani Islam',
    members: 85,
    advisor: 'Dede Yusuf, S.Pd.I',
    description: 'Kegiatan keagamaan dan pengembangan spiritual',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>'
  }
])

// Data prestasi siswa
const studentAchievements = ref([
  {
    title: 'Juara 2 Futsal Liga Pelajar',
    field: 'Olahraga',
    students: 'Tim Futsal SMKN 1 ARAHAN',
    date: '2024',
    level: 'Provinsi',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=870&auto=format&fit=crop'
  },
  {
    title: 'Juara 1 Paskibra Se-Kabupaten',
    field: 'Ekstrakurikuler',
    students: 'Tim Paskibra',
    date: '2023',
    level: 'Kabupaten',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=870&auto=format&fit=crop'
  }
])

// Data tata tertib
const regulations = ref([
  {
    category: 'Kehadiran',
    rules: [
      'Siswa hadir di sekolah paling lambat pukul 07.00 WIB',
      'Keterlambatan lebih dari 15 menit tidak diperkenankan masuk kelas',
      'Absensi dilakukan setiap jam pelajaran',
      'Izin tidak masuk harus disertai surat keterangan'
    ]
  },
  {
    category: 'Seragam',
    rules: [
      'Senin - Selasa: Seragam Putih Abu-lengkap dengan atribut',
      'Rabu - Kamis: Seragam Batik Sekolah',
      'Jumat: Seragam Pramuka',
      'Sabtu: Seragam Olahraga'
    ]
  },
  {
    category: 'Larangan',
    rules: [
      'Membawa rokok, narkoba, dan senjata tajam',
      'Menggunakan perhiasan berlebihan',
      'Berkelahi dan melakukan tindakan kekerasan',
      'Membawa kendaraan bermotor tanpa izin'
    ]
  }
])

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
          Data
          <span class="font-medium text-amber-600 dark:text-amber-400">Siswa</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Informasi lengkap tentang siswa, kelas, organisasi, dan prestasi SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Statistics Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          v-for="stat in studentStatistics" 
          :key="stat.label"
          class="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-center hover:border-amber-200 dark:hover:border-amber-900 transition-colors"
        >
          <div class="w-12 h-12 mx-auto mb-3 text-amber-600 dark:text-amber-400" v-html="stat.icon"></div>
          <div class="text-2xl font-light text-gray-900 dark:text-white mb-1">{{ stat.value }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Kelas per Tingkatan -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Data <span class="font-medium text-amber-600 dark:text-amber-400">Kelas</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="level in classData" 
          :key="level.level"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden"
        >
          <div class="p-4 bg-amber-50 dark:bg-amber-900/20 border-b border-gray-100 dark:border-gray-800">
            <div class="flex items-center justify-between">
              <h3 class="font-medium text-gray-900 dark:text-white">{{ level.level }}</h3>
              <span class="px-2 py-1 text-xs bg-amber-500 text-white rounded-full">{{ level.total }} Siswa</span>
            </div>
          </div>
          <div class="p-4">
            <div class="space-y-3">
              <div 
                v-for="kelas in level.classes" 
                :key="kelas.name"
                class="flex items-center justify-between text-sm"
              >
                <div>
                  <span class="text-gray-900 dark:text-white font-medium">{{ kelas.name }}</span>
                  <p class="text-xs text-gray-500 dark:text-gray-500">Wali: {{ kelas.wali }}</p>
                </div>
                <span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                  {{ kelas.total }} siswa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organisasi Siswa -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Organisasi <span class="font-medium text-amber-600 dark:text-amber-400">Siswa</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="org in studentOrganizations" 
          :key="org.name"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-amber-200 dark:hover:border-amber-900 transition-colors"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0" v-html="org.icon"></div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ org.name }}</h3>
                <span class="px-2 py-0.5 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
                  {{ org.members }} Anggota
                </span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mb-2">{{ org.fullName }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ org.description }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500">Pembina: {{ org.advisor }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestasi Siswa -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-light text-gray-900 dark:text-white">
          Prestasi <span class="font-medium text-amber-600 dark:text-amber-400">Siswa</span>
        </h2>
        <NuxtLink to="/prestasi" class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1">
          Lihat Semua
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="achievement in studentAchievements" 
          :key="achievement.title"
          class="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-colors"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="achievement.image" 
              :alt="achievement.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-3 right-3">
              <span class="px-2 py-1 text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300">
                {{ achievement.level }}
              </span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ achievement.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ achievement.field }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mb-3">Oleh: {{ achievement.students }}</p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-amber-600 dark:text-amber-400">{{ achievement.date }}</span>
              <NuxtLink to="#" class="text-xs text-gray-500 hover:text-amber-600 dark:hover:text-amber-400">
                Selengkapnya →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tata Tertib Siswa -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
        Tata <span class="font-medium text-amber-600 dark:text-amber-400">Tertib</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in regulations" 
          :key="item.category"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6"
        >
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            {{ item.category }}
          </h3>
          <ul class="space-y-2">
            <li v-for="rule in item.rules" :key="rule" class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span class="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
              <span>{{ rule }}</span>
            </li>
          </ul>
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
              <p class="text-sm text-gray-600 dark:text-gray-400">Jadwal kegiatan akademik selama satu tahun pelajaran</p>
            </div>
          </div>
          <button class="px-4 py-2 text-sm text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
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
