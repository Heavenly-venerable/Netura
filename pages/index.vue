<script setup lang="ts">
// Data statistik
const statistics = ref([
  { label: 'Siswa Aktif', value: '1,200+', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>' },
  { label: 'Program Keahlian', value: '3', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>' },
  { label: 'Tenaga Pendidik', value: '85+', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>' },
  { label: 'Prestasi', value: '50+', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>' }
])

// Data program keahlian
const programs = ref([
  { 
    name: 'Teknik Komputer & Jaringan', 
    alias: 'TKJ',
    description: 'Mempelajari perakitan komputer, jaringan dasar, administrasi server, dan troubleshooting.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop',
    competencies: ['Network Administrator', 'Teknisi Komputer', 'System Analyst']
  },
  { 
    name: 'Teknik Kendaraan Ringan', 
    alias: 'TKRO',
    description: 'Mempelajari perawatan dan perbaikan mesin kendaraan ringan, sistem kelistrikan, dan chasis.',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop',
    competencies: ['Mekanik', 'Diagnostik Kendaraan', 'Spooring Balancing']
  },
  { 
    name: 'Tata Busana', 
    alias: 'TB',
    description: 'Mempelajari desain fashion, pembuatan pola, menjahit, dan teknik embroidery.',
    image: 'https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop',
    competencies: ['Fashion Designer', 'Pattern Maker', 'Sewing Operator']
  }
])

// Data berita/prestasi terbaru
const latestNews = ref([
  {
    title: 'Siswa TKJ Juara 1 Lomba Kompetensi Siswa Tingkat Provinsi',
    date: '15 Maret 2024',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFja2F0b258ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Kunjungan Industri Siswa TKRO ke Pabrik Otomotif',
    date: '10 Maret 2024',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop'
  },
  {
    title: 'Workshop Kewirausahaan untuk Siswa Kelas XII',
    date: '5 Maret 2024',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop'
  }
])

// Testimonial alumni
const testimonials = ref([
  {
    name: 'Ahmad Fauzi',
    year: 'Angkatan 2020',
    program: 'TKJ',
    quote: 'SMKN 1 ARAHAN membekali saya dengan skill yang relevan dengan dunia kerja. Sekarang saya bekerja sebagai network engineer di perusahaan telekomunikasi.',
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=amber&color=fff'
  },
  {
    name: 'Siti Aminah',
    year: 'Angkatan 2019',
    program: 'TB',
    quote: 'Berkat pembelajaran di jurusan Tata Busana, saya bisa membuka butik sendiri dan memberdayakan ibu-ibu di desa.',
    avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=amber&color=fff'
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
  <main class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-amber-50/50 to-white dark:from-gray-900 dark:to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm mb-6">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Terakreditasi A
            </div>
            <h1 class="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Selamat Datang di
              <span class="font-medium text-amber-600 dark:text-amber-400 block mt-2">SMKN 1 ARAHAN</span>
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Sekolah Menengah Kejuruan unggulan di Kabupaten Indramayu dengan 
              <span class="font-medium text-amber-600 dark:text-amber-400">3 program keahlian</span> 
              dan komitmen mencetak lulusan yang religius, cerdas, dan berkarakter.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/ppdb" 
                class="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-center"
              >
                Daftar PPDB 2024
              </NuxtLink>
              <NuxtLink 
                to="/program" 
                class="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
              >
                Lihat Program Keahlian
              </NuxtLink>
            </div>
          </div>
          
          <!-- Right Image -->
          <div class="relative">
            <div class="aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" 
                alt="Gedung SMKN 1 ARAHAN"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-500 dark:text-gray-500">Tahun Ajaran</p>
                  <p class="font-medium text-gray-900 dark:text-white">2024/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="stat in statistics" 
            :key="stat.label"
            class="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
          >
            <div class="w-12 h-12 mx-auto mb-3 text-amber-600 dark:text-amber-400" v-html="stat.icon"></div>
            <div class="text-3xl font-light text-gray-900 dark:text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-light text-gray-900 dark:text-white mb-3">
            Program
            <span class="font-medium text-amber-600 dark:text-amber-400">Keahlian</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Pilih program keahlian yang sesuai dengan minat dan bakat Anda
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="program in programs" 
            :key="program.name"
            class="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-all"
          >
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="program.image" 
                :alt="program.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                  {{ program.alias }}
                </span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ program.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ program.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="item in program.competencies" 
                  :key="item"
                  class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Achievements Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Latest News -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">Berita Terbaru</h3>
              <NuxtLink to="/blog" class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1">
                Lihat Semua
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
            <div class="space-y-4">
              <div 
                v-for="news in latestNews" 
                :key="news.title"
                class="flex gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
              >
                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img :src="news.image" :alt="news.title" class="w-full h-full object-cover" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
                      {{ news.category }}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-500">{{ news.date }}</span>
                  </div>
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{{ news.title }}</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Agenda -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">Agenda Mendatang</h3>
              <NuxtLink to="/agenda" class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1">
                Lihat Semua
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
            <div class="space-y-3">
              <div 
                v-for="i in 4" 
                :key="i"
                class="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
              >
                <div class="text-center min-w-[60px]">
                  <div class="text-2xl font-light text-amber-600 dark:text-amber-400">25</div>
                  <div class="text-xs text-gray-500 dark:text-gray-500">Maret</div>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white">Pertemuan Orang Tua Siswa</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">09.00 - 12.00 WIB • Aula Sekolah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-light text-gray-900 dark:text-white mb-3">
            Kata
            <span class="font-medium text-amber-600 dark:text-amber-400">Alumni</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Apa kata mereka tentang pengalaman belajar di SMKN 1 ARAHAN
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="testi in testimonials" 
            :key="testi.name"
            class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
          >
            <div class="flex items-start gap-4">
              <img :src="testi.avatar" :alt="testi.name" class="w-12 h-12 rounded-full" />
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-medium text-gray-900 dark:text-white">{{ testi.name }}</h4>
                  <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
                    {{ testi.program }}
                  </span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-500 mb-3">{{ testi.year }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 italic">"{{ testi.quote }}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-amber-50/50 dark:bg-amber-900/10 border-t border-amber-100 dark:border-amber-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-light text-gray-900 dark:text-white mb-3">
          Siap Bergabung dengan
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN?</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Daftarkan diri Anda sekarang dan raih masa depan cerah bersama kami
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/ppdb" 
            class="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Daftar PPDB Online
          </NuxtLink>
          <NuxtLink 
            to="/kontak" 
            class="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Hubungi Kami
          </NuxtLink>
        </div>
      </div>
    </section>
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
