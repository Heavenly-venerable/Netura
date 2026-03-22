<script setup lang="ts">
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Hero Section - Minimalis -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Sambutan
          <span class="font-medium text-amber-600 dark:text-amber-400">Kepala Sekolah</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          SMK Negeri 1 Arahan • Tahun Ajaran 2024/2025
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <!-- Greeting Card -->
      <div class="mb-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div class="flex items-start gap-4">
          <!-- Foto Kepala Sekolah (placeholder) -->
          <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0 border-2 border-white dark:border-gray-800">
            <img
              src="https://ui-avatars.com/api/?name=Kepala+Sekolah&background=amber&color=fff&size=64"
              alt="Kepala Sekolah"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Info -->
          <div>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Drs. H. Ahmad Fauzi, M.Pd.</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Kepala Sekolah SMKN 1 ARAHAN</p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">Periode 2020 - 2024</p>
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div class="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
        <!-- Salam Pembuka -->
        <div class="mb-8 p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-md border border-amber-100 dark:border-amber-900/30">
          <p class="text-amber-800 dark:text-amber-200 font-medium italic">
            "Assalamu'alaikum Wr. Wb. Salam hangat untuk kita semua,"
          </p>
        </div>

        <!-- Konten Sambutan -->
        <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Saya, Kepala Sekolah SMKN 1 ARAHAN, dengan penuh rasa syukur menyambut Anda
            di website resmi kami. Melalui platform digital ini, kami ingin berbagi
            informasi terkini seputar kegiatan sekolah, prestasi siswa, dan berbagai
            program unggulan yang kami jalankan.
          </p>

          <p>
            Di SMKN 1 ARAHAN, kami percaya bahwa setiap siswa memiliki potensi unik
            yang perlu dikembangkan. Komitmen kami tidak hanya pada prestasi akademis,
            tetapi juga pada pembentukan karakter yang kuat, kreativitas, dan kecintaan
            terhadap tanah air. Visi <span class="font-medium text-amber-600 dark:text-amber-400">"Be Religius, Be Smart and Be Fun"</span>
            menjadi landasan kami dalam mendidik generasi penerus bangsa.
          </p>

          <p>
            Website ini kami hadirkan sebagai jembatan komunikasi antara sekolah dengan
            siswa, orang tua, dan masyarakat. Kami ingin memastikan bahwa setiap informasi
            dapat diakses dengan mudah, dan setiap masukan dari Anda menjadi bahan evaluasi
            untuk kemajuan bersama. Transparansi dan keterbukaan adalah nilai yang kami junjung.
          </p>

          <!-- Quote -->
          <blockquote class="my-8 pl-4 border-l-4 border-amber-500 dark:border-amber-400">
            <p class="text-gray-600 dark:text-gray-400 italic">
              "Pendidikan adalah seni untuk membuat manusia menjadi lebih manusiawi.
              Mari bersama-sama kita wujudkan generasi yang cerdas, berkarakter, dan berakhlak mulia."
            </p>
          </blockquote>

          <p>
            Kami menyadari bahwa keberhasilan pendidikan tidak dapat dicapai sendiri.
            Diperlukan kerjasama yang erat antara sekolah, orang tua, dan masyarakat.
            Mari bergandengan tangan, saling mendukung, dan bersama-sama menciptakan
            lingkungan pendidikan yang inspiratif untuk masa depan yang lebih baik.
          </p>

          <p>
            Terima kasih atas kunjungan Anda di website resmi SMKN 1 ARAHAN. Semoga
            informasi yang kami sajikan bermanfaat. Mari terus berbagi semangat untuk
            mengembangkan potensi, belajar, dan tumbuh bersama.
          </p>

          <!-- Salam Penutup -->
          <div class="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p class="text-gray-800 dark:text-gray-200">Wassalamu'alaikum Wr. Wb.</p>

            <div class="mt-6">
              <p class="font-medium text-gray-900 dark:text-white">Drs. H. Ahmad Fauzi, M.Pd.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Kepala Sekolah</p>
              <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">SMK Negeri 1 Arahan</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Metadata Footer -->
      <div class="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-500">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Diperbarui: 15 Januari 2024</span>
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Dibaca: 1,234 kali</span>
            </span>
          </div>

          <!-- Share Buttons -->
          <div class="flex items-center gap-3">
            <span class="text-gray-400">Bagikan:</span>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Share on X">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Share on Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Share on LinkedIn">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Custom prose styling untuk konten */
.prose p {
  @apply mb-4 leading-relaxed;
}

.prose p:last-child {
  @apply mb-0;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
