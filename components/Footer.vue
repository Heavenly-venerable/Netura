<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="md:col-span-1">
          <NuxtLink to="/"
            class="inline-block text-lg font-medium text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            SMKN 1 ARAHAN
          </NuxtLink>
          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Be Religius, Be Smart and Be Fun
          </p>
          <p class="mt-4 text-xs text-gray-400 dark:text-gray-500">
            NPSN: 20212345
          </p>
        </div>

        <!-- Links Sections - Grid 2 columns on mobile, 4 columns on desktop -->
        <div class="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <!-- Profile -->
          <div>
            <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Profile
            </h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/sejarah"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Sejarah
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/visi-misi"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Visi Misi
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/struktur-organisasi"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Struktur Organisasi
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- PPDB -->
          <div>
            <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              PPDB
            </h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/syarat-ppdb"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Syarat PPDB
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ppdb"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Pendaftaran Online
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Kesiswaan -->
          <div>
            <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Kesiswaan
            </h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/osis"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Organisasi Siswa
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/siswa"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Data Siswa
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kurikulum"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Kurikulum
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Program & Lainnya (Combined) -->
          <div>
            <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Program
            </h3>
            <ul class="space-y-3 mb-6">
              <li>
                <NuxtLink to="/prestasi"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Prestasi Siswa
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ekstrakulikuler"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Ekstrakulikuler
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/agenda"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Agenda
                </NuxtLink>
              </li>
            </ul>

            <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Lainnya
            </h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/blog"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/fasilitas"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Fasilitas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/galeri"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Galeri
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kontak"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Kontak
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <p class="text-xs text-gray-500 dark:text-gray-400 order-2 sm:order-1">
            © {{ currentYear }}
            <NuxtLink to="/" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              SMKN 1 ARAHAN
            </NuxtLink>
            . All rights reserved.
          </p>

          <!-- Social Links - Minimalis -->
          <div class="flex items-center gap-4 order-1 sm:order-2">
            <NuxtLink to="https://facebook.com/smkn1arahan" target="_blank"
              class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </NuxtLink>

            <NuxtLink to="https://instagram.com/smkn1arahan" target="_blank"
              class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </NuxtLink>

            <NuxtLink to="https://youtube.com/@smkn1arahan" target="_blank"
              class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="YouTube">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Address - muncul di mobile -->
        <p class="mt-4 text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
          Jl. Raya Arahan, Linggajati, Kec. Arahan, Kabupaten Indramayu, Jawa Barat 45365
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Smooth transitions */
a {
  transition: color 0.2s ease;
}

/* Better spacing for mobile */
@media (max-width: 640px) {
  .grid {
    row-gap: 2rem;
  }
}
</style>
