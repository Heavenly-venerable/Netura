<script setup lang="ts">
// Timeline data untuk sejarah sekolah
const timelineData = ref([
  {
    year: "1995",
    title: "Pendirian Sekolah",
    description: "SMKN 1 ARAHAN didirikan pada tanggal 17 Agustus 1995 sebagai sekolah kejuruan pertama di Kecamatan Arahan.",
    icon: "pi pi-building"
  },
  {
    year: "2000",
    title: "Pengembangan Fasilitas",
    description: "Pembangunan gedung baru dan laboratorium komputer untuk mendukung proses belajar mengajar.",
    icon: "pi pi-wrench"
  },
  {
    year: "2005",
    title: "Akreditasi A",
    description: "Berhasil meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M).",
    icon: "pi pi-star"
  },
  {
    year: "2010",
    title: "Program Keahlian Baru",
    description: "Membuka program keahlian Teknik Komputer dan Jaringan (TKJ) dan Teknik Bisnis Sepeda Motor (TBSM).",
    icon: "pi pi-cog"
  },
  {
    year: "2015",
    title: "Sekolah Rujukan",
    description: "Ditetapkan sebagai Sekolah Menengah Kejuruan Rujukan oleh Kementerian Pendidikan dan Kebudayaan.",
    icon: "pi pi-flag"
  },
  {
    year: "2020",
    title: "Digitalisasi Sekolah",
    description: "Implementasi sistem pembelajaran digital dan administrasi berbasis teknologi informasi.",
    icon: "pi pi-desktop"
  },
  {
    year: "2024",
    title: "Saat Ini",
    description: "Terus berkembang dengan 3 program keahlian unggulan dan lebih dari 1000 siswa aktif.",
    icon: "pi pi-chart-line"
  }
]);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Hero Section dengan Image -->
    <div class="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=1032&auto=format&fit=crop"
        alt="Gedung SMKN 1 ARAHAN" 
        class="w-full h-full object-cover opacity-60" 
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-3xl md:text-4xl font-light mb-2">
            Sejarah <span class="font-medium text-amber-400">SMKN 1 ARAHAN</span>
          </h1>
          <p class="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Perjalanan panjang dalam mencetak generasi unggulan sejak 1995
          </p>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Narrative Section -->
      <div class="mb-16">
        <h2 class="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Awal Mula Berdirinya
        </h2>

        <div class="prose prose-sm sm:prose-base dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            SMKN 1 ARAHAN berdiri pada tanggal <span class="font-medium text-amber-600 dark:text-amber-400">17 Agustus 1995</span>
            sebagai jawaban atas kebutuhan akan pendidikan kejuruan yang berkualitas di wilayah Kecamatan Arahan dan
            sekitarnya. Didirikan di atas lahan seluas 2,5 hektar, sekolah ini memulai perjalanannya dengan 3 program keahlian dan
            120 siswa pertama.
          </p>

          <p>
            Pendirian sekolah ini digagas oleh tokoh masyarakat dan pemerintah daerah yang peduli akan masa depan
            generasi muda. Dengan semangat gotong royong, pembangunan gedung sekolah dilakukan secara bertahap. Awalnya hanya terdapat
            6 ruang kelas, 1 ruang guru, dan 1 ruang administrasi yang sederhana.
          </p>

          <div class="my-8 p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-md">
            <p class="text-sm italic text-amber-800 dark:text-amber-200">
              "Pendidikan adalah kunci untuk membuka pintu masa depan yang lebih cerah.
              Dengan mendirikan SMKN 1 ARAHAN, kami berharap dapat memberikan bekal keterampilan
              dan pengetahuan yang cukup bagi putra-putri daerah untuk bersaing di dunia kerja."
            </p>
            <p class="text-xs text-amber-600 dark:text-amber-400 mt-2">
              — Bapak H. Ahmad Syamsuri, Pendiri SMKN 1 ARAHAN
            </p>
          </div>

          <p>
            Tahun-tahun pertama perjalanan sekolah ini penuh dengan tantangan. Keterbatasan fasilitas dan peralatan
            praktik tidak menyurutkan semangat para guru dan siswa untuk terus belajar dan berkarya. Berkat dedikasi dan kerja
            keras semua pihak, SMKN 1 ARAHAN perlahan mulai dikenal sebagai sekolah kejuruan yang berkualitas di Kabupaten
            Indramayu.
          </p>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="mb-16">
        <h2 class="text-xl font-medium text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Perjalanan dari Masa ke Masa
        </h2>

        <div class="space-y-6">
          <div 
            v-for="(item, index) in timelineData" 
            :key="index"
            class="relative pl-8 pb-6 border-l-2 border-amber-200 dark:border-amber-900 last:border-l-0 last:pb-0"
            :class="{ 'last:pl-0': index === timelineData.length - 1 }"
          >
            <!-- Timeline Dot -->
            <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white dark:border-gray-900">
            </div>

            <!-- Year Badge -->
            <div class="inline-block px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium rounded mb-2">
              {{ item.year }}
            </div>

            <!-- Content -->
            <div class="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md border border-gray-100 dark:border-gray-800 transition-colors duration-200">
              <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievements Section -->
      <div class="mb-16">
        <h2 class="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Capaian dan Prestasi
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-4 border border-gray-100 dark:border-gray-800 rounded-md transition-colors duration-200">
            <div class="text-2xl font-light text-amber-600 dark:text-amber-400 mb-1">28</div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Tahun Berdiri</div>
          </div>
          <div class="text-center p-4 border border-gray-100 dark:border-gray-800 rounded-md transition-colors duration-200">
            <div class="text-2xl font-light text-amber-600 dark:text-amber-400 mb-1">1.200+</div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Siswa Aktif</div>
          </div>
          <div class="text-center p-4 border border-gray-100 dark:border-gray-800 rounded-md transition-colors duration-200">
            <div class="text-2xl font-light text-amber-600 dark:text-amber-400 mb-1">3</div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Program Keahlian</div>
          </div>
          <div class="text-center p-4 border border-gray-100 dark:border-gray-800 rounded-md transition-colors duration-200">
            <div class="text-2xl font-light text-amber-600 dark:text-amber-400 mb-1">85+</div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Tenaga Pendidik</div>
          </div>
        </div>
      </div>

      <!-- Kepala Sekolah dari Masa ke Masa -->
      <div>
        <h2 class="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Kepala Sekolah dari Masa ke Masa
        </h2>

        <div class="space-y-3">
          <div class="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <span class="text-sm text-gray-700 dark:text-gray-300">Drs. H. Ahmad Syamsuri</span>
            <span class="text-xs text-gray-500 dark:text-gray-500">1995 - 2003</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <span class="text-sm text-gray-700 dark:text-gray-300">Drs. H. Maman Suryaman, M.Pd.</span>
            <span class="text-xs text-gray-500 dark:text-gray-500">2003 - 2011</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <span class="text-sm text-gray-700 dark:text-gray-300">Hj. Siti Aminah, S.Pd., M.M.</span>
            <span class="text-xs text-gray-500 dark:text-gray-500">2011 - 2019</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <span class="text-sm text-gray-700 dark:text-gray-300">Drs. H. Ahmad Fauzi, M.Pd.</span>
            <span class="text-xs text-gray-500 dark:text-gray-500">2019 - Sekarang</span>
          </div>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
        <p class="text-xs text-gray-500 dark:text-gray-500">
          Terakhir diperbarui: 15 Januari 2024 • Sumber: Arsip SMKN 1 ARAHAN
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Timeline styling */
.timeline-dot {
  box-shadow: 0 0 0 2px white;
}

.dark .timeline-dot {
  box-shadow: 0 0 0 2px #111827;
}

/* Custom prose */
.prose p {
  @apply leading-relaxed;
}

/* Smooth transitions for all elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
