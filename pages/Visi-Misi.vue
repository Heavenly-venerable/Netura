<script setup lang="ts">
// Scroll ke atas saat halaman dimuat
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
        <!-- Icon/Decorative Element -->
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Visi & Misi
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Landasan dan arah tujuan dalam mencetak generasi yang religius, cerdas, dan berkarakter
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Vision Section -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1 h-8 bg-amber-500 rounded-full"></div>
          <h2 class="text-xl font-medium text-gray-900 dark:text-white">Visi</h2>
        </div>
        
        <div class="relative">
          <!-- Decorative quote mark -->
          <div class="absolute -top-2 -left-2 text-6xl text-amber-200 dark:text-amber-900/30 select-none">"</div>
          
          <div class="relative z-10 pl-6 pr-4 py-6 bg-gradient-to-r from-amber-50/50 to-transparent dark:from-amber-900/10 dark:to-transparent rounded-r-md border-l-4 border-amber-500">
            <p class="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-light italic">
              Menjadi pusat pendidikan yang unggul dan inovatif yang membentuk
              individu-individu berkualitas, berdaya saing, dan berkontribusi
              positif pada masyarakat global.
            </p>
          </div>
        </div>
      </div>

      <!-- Mission Section -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-8 bg-amber-500 rounded-full"></div>
          <h2 class="text-xl font-medium text-gray-900 dark:text-white">Misi</h2>
        </div>

        <!-- Mission Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Card 1: Pendidikan Berkualitas -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                1
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Pendidikan Berkualitas</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Memberikan pendidikan berkualitas tinggi yang memungkinkan setiap siswa 
                  mencapai potensi terbaiknya dalam berbagai bidang ilmu.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Pengembangan Karakter -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                2
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Pengembangan Karakter</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Membentuk karakter siswa dengan nilai-nilai moral, etika, kejujuran, 
                  dan kepemimpinan yang kuat.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Inovasi Pendidikan -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                3
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Inovasi Pendidikan</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Terus berinovasi dan memanfaatkan teknologi terbaru untuk mendukung 
                  pembelajaran yang efektif.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Pemberdayaan Siswa -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                4
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Pemberdayaan Siswa</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Mendorong partisipasi siswa dalam kegiatan ekstrakurikuler dan 
                  proyek-proyek pengembangan diri.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 5: Keragaman dan Toleransi -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                5
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Keragaman dan Toleransi</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Menghargai keragaman dan mendorong toleransi serta penghargaan terhadap 
                  berbagai latar belakang.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 6: Kemitraan dengan Orang Tua -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                6
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Kemitraan dengan Orang Tua</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Menjaga komunikasi yang terbuka dan kerjasama yang erat dengan orang tua 
                  sebagai mitra pendidikan.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 7: Keterlibatan Masyarakat -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                7
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Keterlibatan Masyarakat</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Aktif dalam masyarakat lokal dan memberikan kontribusi positif melalui 
                  kegiatan sosial.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 8: Pembangunan Berkelanjutan -->
          <div class="group p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-medium">
                8
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-2">Pembangunan Berkelanjutan</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Berkomitmen pada pembangunan berkelanjutan dan mengajarkan siswa untuk 
                  peduli lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p class="text-xs text-gray-500 dark:text-gray-500">
            <span class="font-medium">Ditetapkan:</span> 15 Juli 2020 • 
            <span class="font-medium">SK Kepala Sekolah:</span> No. 421.5/123/SMKN1AR/2020
          </p>
          
          <!-- Download Button -->
          <button class="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Visi Misi (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Hover effect for cards */
.group:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
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
