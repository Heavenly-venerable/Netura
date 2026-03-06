<script setup lang="ts">
// Data persyaratan per jalur
const ppdbRequirements = ref([
  {
    id: "zonasi",
    title: "Jalur Zonasi",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    requirements: [
      "Kartu Keluarga (KK) paling singkat 1 tahun terakhir",
      "Surat keterangan domisili yang dikeluarkan oleh Lurah (jika KK kurang dari 1 tahun)",
      "Surat Keterangan Lulus (SKL) dari sekolah asal",
      "Akta Kelahiran",
      "Pas foto 3x4 (background merah) 2 lembar"
    ],
    notes: "Kuota: 50% dari total daya tampung",
    color: "blue"
  },
  {
    id: "afirmasi",
    title: "Jalur Afirmasi",
    subtitle: "Siswa Tidak Mampu",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    requirements: [
      "Kartu Keluarga (KK) paling singkat 1 tahun terakhir",
      "Surat keterangan domisili (jika KK kurang dari 1 tahun)",
      "Surat Keterangan Lulus (SKL)",
      "Kartu Indonesia Pintar (KIP) atau sejenisnya",
      "Surat Keterangan Tidak Mampu (SKTM) dari Lurah",
      "Akta Kelahiran"
    ],
    notes: "Kuota: 20% dari total daya tampung",
    color: "green"
  },
  {
    id: "prestasi",
    title: "Jalur Prestasi",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    requirements: [
      "Kartu Keluarga (KK) paling singkat 1 tahun terakhir",
      "Surat Keterangan Lulus (SKL)",
      "Akta Kelahiran",
      "Piagam/Sertifikat prestasi (akademik & non akademik)",
      "Surat rekomendasi dari sekolah asal (jika ada)"
    ],
    notes: "Prestasi akademik: perorangan tingkat Internasional, Nasional, Provinsi, Kab/Kota. Non akademik: melalui KONI/Kemdikbud",
    color: "purple"
  },
  {
    id: "pindahan",
    title: "Jalur Perpindahan Tugas",
    subtitle: "Orang Tua Pindah Tugas",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    requirements: [
      "Kartu Keluarga (KK) paling singkat 1 tahun terakhir",
      "Surat Keterangan Lulus (SKL)",
      "Akta Kelahiran",
      "Surat keterangan pindah tugas orang tua (PNS/TNI/POLRI/Swasta/BUMN)",
      "Surat penugasan dari instansi/lembaga terkait"
    ],
    notes: "Kuota: 5% dari total daya tampung",
    color: "orange"
  }
]);

const importantDates = ref([
  { event: "Pendaftaran Online", date: "1 - 15 Juni 2024" },
  { event: "Verifikasi Berkas", date: "16 - 20 Juni 2024" },
  { event: "Pengumuman Hasil", date: "25 Juni 2024" },
  { event: "Daftar Ulang", date: "26 - 30 Juni 2024" }
]);

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
      <div class="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
          <NuxtLink to="/" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Beranda</NuxtLink>
          <span>/</span>
          <span class="text-gray-700 dark:text-gray-300">PPDB</span>
          <span>/</span>
          <span class="text-amber-600 dark:text-amber-400">Syarat</span>
        </div>

        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
          Persyaratan
          <span class="font-medium text-amber-600 dark:text-amber-400">PPDB Online</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Tahun Pelajaran 2024/2025
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Welcome Message -->
      <div class="mb-8 p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-md border border-amber-100 dark:border-amber-900/30">
        <p class="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
          <span class="font-medium">Assalamu'alaikum Wr. Wb.</span>
          <br><br>
          Bagi Calon Siswa/i Baru yang ingin mendaftar ke SMKN 1 ARAHAN secara online, 
          silakan melengkapi berkas-berkas yang akan diunggah di portal pendaftaran PPDB online. 
          Pastikan semua dokumen sudah siap sebelum memulai pendaftaran.
        </p>
      </div>

      <!-- Quick Info -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div v-for="item in importantDates" :key="item.event" class="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md text-center">
          <p class="text-xs text-gray-500 dark:text-gray-500 mb-1">{{ item.event }}</p>
          <p class="text-sm font-medium text-gray-900 dark:text-white">{{ item.date }}</p>
        </div>
      </div>

      <!-- Registration Link -->
      <div class="mb-10 p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 dark:text-white">Sudah siap dengan berkas?</p>
            <p class="text-xs text-gray-500 dark:text-gray-500">Lanjutkan ke pendaftaran online</p>
          </div>
        </div>
        <NuxtLink 
          to="/ppdb"
          class="w-full sm:w-auto px-4 py-2 text-sm text-center text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors"
        >
          Daftar Sekarang
        </NuxtLink>
      </div>

      <!-- Requirements by Path -->
      <div class="space-y-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Persyaratan per Jalur Pendaftaran
        </h2>

        <div 
          v-for="(jalur, index) in ppdbRequirements" 
          :key="jalur.id"
          class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden"
        >
          <!-- Header -->
          <div 
            class="p-4 flex items-start gap-3"
            :class="{
              'bg-blue-50/50 dark:bg-blue-900/10': jalur.color === 'blue',
              'bg-green-50/50 dark:bg-green-900/10': jalur.color === 'green',
              'bg-purple-50/50 dark:bg-purple-900/10': jalur.color === 'purple',
              'bg-orange-50/50 dark:bg-orange-900/10': jalur.color === 'orange'
            }"
          >
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              :class="{
                'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400': jalur.color === 'blue',
                'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400': jalur.color === 'green',
                'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400': jalur.color === 'purple',
                'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400': jalur.color === 'orange'
              }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="jalur.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">
                {{ jalur.title }}
                <span v-if="jalur.subtitle" class="text-xs text-gray-500 dark:text-gray-500 ml-2">({{ jalur.subtitle }})</span>
              </h3>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">{{ jalur.notes }}</p>
            </div>
          </div>

          <!-- Requirements List -->
          <div class="p-4 bg-white dark:bg-gray-900">
            <ul class="space-y-2">
              <li 
                v-for="(req, reqIndex) in jalur.requirements" 
                :key="reqIndex"
                class="flex items-start gap-2 text-sm"
              >
                <span class="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">•</span>
                <span class="text-gray-700 dark:text-gray-300">{{ req }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <p class="font-medium text-gray-900 dark:text-white mb-1">Catatan Penting:</p>
            <ul class="list-disc list-inside space-y-1 text-xs">
              <li>Semua dokumen harus dalam format PDF/JPG/PNG dengan ukuran maksimal 2MB per file</li>
              <li>Pastikan data yang diisi sesuai dengan dokumen yang diunggah</li>
              <li>Pendaftaran hanya dapat dilakukan satu kali sesuai jalur yang dipilih</li>
              <li>Untuk informasi lebih lanjut, hubungi panitia PPDB di kontak yang tersedia</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Download Button -->
      <div class="flex justify-end mt-6">
        <button class="inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download Persyaratan (PDF)</span>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Smooth transitions */
button, a {
  transition: all 0.2s ease;
}

/* List styling */
.list-disc {
  list-style-type: disc;
}

/* Custom spacing for mobile */
@media (max-width: 640px) {
  .grid-cols-2 {
    gap: 0.5rem;
  }
}
</style>
