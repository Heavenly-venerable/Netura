<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const agendaId = computed(() => route.params.id);

// Data detail agenda (simulasi)
const agendaDetail = ref({
  id: 1,
  title: "Pertemuan Orang Tua Siswa Kelas X",
  description: "Pertemuan orang tua siswa baru kelas X untuk sosialisasi program sekolah dan pembagian rapor tengah semester",
  fullDescription: `
    <p>Pertemuan orang tua siswa kelas X ini merupakan agenda rutin sekolah dalam rangka menjalin komunikasi dan kerjasama antara pihak sekolah dengan orang tua/wali siswa. Acara ini bertujuan untuk:</p>
    
    <ul>
      <li>Mensosialisasikan program-program sekolah untuk semester genap</li>
      <li>Membahas perkembangan akademik dan non-akademik siswa selama satu semester</li>
      <li>Pembagian rapor tengah semester</li>
      <li>Diskusi dan konsultasi antara wali kelas dengan orang tua</li>
      <li>Pembentukan komunikasi yang efektif antara sekolah dan orang tua</li>
    </ul>

    <p>Kegiatan ini akan dihadiri oleh Kepala Sekolah, Wakil Kepala Sekolah, seluruh guru dan wali kelas X, serta orang tua/wali siswa kelas X. Diharapkan kehadiran orang tua tepat waktu karena acara akan dimulai sesuai jadwal yang telah ditentukan.</p>
  `,
  location: "Aula SMKN 1 ARAHAN",
  address: "Jl. Raya Arahan No. 123, Linggajati, Kec. Arahan, Kabupaten Indramayu",
  date: "23 Maret 2024",
  time: "09.00 - 12.00 WIB",
  category: "Pertemuan",
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop"
  ],
  participants: 250,
  status: "akan-datang",
  contactPerson: {
    name: "Dra. Hj. Siti Aminah",
    role: "Wakasek Kurikulum",
    phone: "081234567890",
    email: "kurikulum@smkn1arahan.sch.id"
  },
  documents: [
    { name: "Jadwal Acara", file: "/docs/jadwal.pdf" },
    { name: "Materi Sosialisasi", file: "/docs/materi.pdf" }
  ],
  timeline: [
    { time: "08.30 - 09.00", activity: "Registrasi Peserta" },
    { time: "09.00 - 09.30", activity: "Pembukaan & Sambutan Kepala Sekolah" },
    { time: "09.30 - 10.30", activity: "Sosialisasi Program Sekolah" },
    { time: "10.30 - 11.30", activity: "Pembagian Rapor & Konsultasi" },
    { time: "11.30 - 12.00", activity: "Penutup" }
  ]
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
    <!-- Header dengan Breadcrumb -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
          <NuxtLink to="/" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Beranda</NuxtLink>
          <span>/</span>
          <NuxtLink to="/agenda" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Agenda
          </NuxtLink>
          <span>/</span>
          <span class="text-amber-600 dark:text-amber-400">Detail</span>
        </div>

        <!-- Status Badge -->
        <div class="mb-4">
          <span class="px-3 py-1 text-sm rounded-full" :class="{
            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': agendaDetail.status === 'akan-datang',
            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400': agendaDetail.status === 'sedang-berlangsung',
            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400': agendaDetail.status === 'selesai'
          }">
            {{ agendaDetail.status === 'akan-datang' ? 'Akan Datang' : agendaDetail.status === 'sedang-berlangsung' ?
              'Sedang Berlangsung' : 'Selesai' }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">
          {{ agendaDetail.title }}
        </h1>

        <!-- Quick Info -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ agendaDetail.date }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ agendaDetail.time }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ agendaDetail.location }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Main Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Featured Image -->
          <div class="rounded-md overflow-hidden border border-gray-100 dark:border-gray-800">
            <img :src="agendaDetail.image" :alt="agendaDetail.title" class="w-full h-64 md:h-80 object-cover" />
          </div>

          <!-- Description -->
          <div class="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Deskripsi Acara</h2>
            <div v-html="agendaDetail.fullDescription" class="text-gray-700 dark:text-gray-300 space-y-4"></div>
          </div>

          <!-- Timeline -->
          <div>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Rundown Acara</h2>
            <div class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden">
              <div v-for="(item, index) in agendaDetail.timeline" :key="index"
                class="flex items-center p-3 even:bg-gray-50 dark:even:bg-gray-800/50 text-sm">
                <span class="w-24 text-amber-600 dark:text-amber-400 font-medium">{{ item.time }}</span>
                <span class="text-gray-700 dark:text-gray-300">{{ item.activity }}</span>
              </div>
            </div>
          </div>

          <!-- Gallery -->
          <div v-if="agendaDetail.gallery">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Galeri</h2>
            <div class="grid grid-cols-3 gap-2">
              <div v-for="(img, index) in agendaDetail.gallery" :key="index"
                class="aspect-square rounded-md overflow-hidden border border-gray-100 dark:border-gray-800">
                <img :src="img" :alt="`Gallery ${index + 1}`"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="space-y-4">
          <!-- Location Card -->
          <div class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden">
            <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
              <h3 class="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi
              </h3>
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">{{ agendaDetail.location }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mb-3">{{ agendaDetail.address }}</p>
              <a :href="`https://maps.google.com/?q=${agendaDetail.address}`" target="_blank"
                class="inline-flex items-center gap-2 text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>

          <!-- Contact Person Card -->
          <div class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden">
            <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
              <h3 class="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Contact Person
              </h3>
            </div>
            <div class="p-4">
              <p class="font-medium text-gray-900 dark:text-white text-sm">{{ agendaDetail.contactPerson.name }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mb-3">{{ agendaDetail.contactPerson.role }}</p>

              <div class="space-y-2 text-sm">
                <a :href="`tel:${agendaDetail.contactPerson.phone}`"
                  class="flex items-center gap-2 text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {{ agendaDetail.contactPerson.phone }}
                </a>
                <a :href="`mailto:${agendaDetail.contactPerson.email}`"
                  class="flex items-center gap-2 text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ agendaDetail.contactPerson.email }}
                </a>
              </div>
            </div>
          </div>

          <!-- Documents Card -->
          <div v-if="agendaDetail.documents"
            class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden">
            <div class="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
              <h3 class="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Dokumen
              </h3>
            </div>
            <div class="p-4 space-y-2">
              <a v-for="doc in agendaDetail.documents" :key="doc.name" :href="doc.file"
                class="flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {{ doc.name }}
              </a>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col gap-2">
            <button
              class="w-full py-2 text-sm text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors">
              Tambahkan ke Kalender
            </button>
            <button
              class="w-full py-2 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
              Bagikan Acara
            </button>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <NuxtLink to="/agenda"
          class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Agenda
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}
</style>
