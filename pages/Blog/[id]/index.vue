<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const blogId = computed(() => route.params.id);

// Data detail blog
const blogDetail = ref({
  id: 1,
  title: "Kegiatan P5: Implementasi Projek Penguatan Profil Pelajar Pancasila",
  excerpt: "Siswa SMKN 1 ARAHAN mengikuti kegiatan P5 dengan tema kewirausahaan dan karya rekayasa teknologi...",
  content: `
    <p>SMKN 1 ARAHAN baru-baru ini melaksanakan kegiatan Projek Penguatan Profil Pelajar Pancasila (P5) yang merupakan bagian dari implementasi Kurikulum Merdeka. Kegiatan ini berlangsung selama dua minggu dengan melibatkan seluruh siswa kelas X dan XI.</p>

    <h3>Tema Kegiatan</h3>
    <p>Tahun ini, sekolah mengangkat dua tema utama:</p>
    <ul>
      <li><strong>Kewirausahaan</strong> - Siswa belajar membuat produk olahan pangan dan kerajinan tangan yang bernilai jual</li>
      <li><strong>Rekayasa Teknologi</strong> - Siswa merancang dan membuat prototype produk teknologi sederhana</li>
    </ul>

    <h3>Pelaksanaan</h3>
    <p>Kegiatan diawali dengan sosialisasi dan pembentukan kelompok. Setiap kelompok terdiri dari 5-6 siswa dengan pendampingan guru. Mereka kemudian melakukan riset pasar, perancangan produk, produksi, hingga pemasaran.</p>

    <blockquote>
      "Melalui P5, siswa tidak hanya belajar teori, tapi juga praktik langsung berwirausaha. Mereka belajar bekerja sama, memecahkan masalah, dan berkreasi."
      <cite>- Ibu Dra. Hj. Siti Aminah, Wakasek Kurikulum</cite>
    </blockquote>

    <h3>Hasil Karya</h3>
    <p>Beberapa produk yang dihasilkan antara lain:</p>
    <ul>
      <li>Makanan ringan (keripik pisang, stik tahu, cookies)</li>
      <li>Kerajinan tangan (ecoprint, daur ulang sampah)</li>
      <li>Produk teknologi (alat penyiram tanaman otomatis, prototype robot sederhana)</li>
    </ul>

    <p>Puncak kegiatan adalah gelar karya yang diadakan di halaman sekolah. Siswa memamerkan dan menjual produk mereka kepada guru, orang tua, dan masyarakat umum. Acara ini mendapat sambutan positif dan beberapa produk bahkan habis terjual.</p>

    <p>Kegiatan P5 ini diharapkan dapat menumbuhkan jiwa kewirausahaan dan kreativitas siswa sejak dini, serta mempersiapkan mereka untuk menghadapi tantangan di masa depan.</p>
  `,
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
  date: "15 Maret 2024",
  readTime: 5,
  category: "Kegiatan",
  tags: ["P5", "Kurikulum Merdeka", "Siswa", "Kewirausahaan"],
  author: {
    name: "Tim Jurnalistik",
    avatar: "https://ui-avatars.com/api/?name=Tim+Jurnalistik&background=amber&color=fff",
    bio: "Tim jurnalistik SMKN 1 ARAHAN yang terdiri dari siswa-siswi pilihan dengan minat di bidang jurnalistik dan content creation."
  },
  views: 1234,
  relatedPosts: [
    {
      id: 2,
      title: "Prestasi Gemilang Siswa TKRO di Lomba Kompetensi Siswa",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=870&auto=format&fit=crop",
      date: "10 Maret 2024"
    },
    {
      id: 3,
      title: "Kunjungan Industri Siswa TJKT ke PT Telkom Indonesia",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=870&auto=format&fit=crop",
      date: "5 Maret 2024"
    },
    {
      id: 4,
      title: "Workshop Kewirausahaan: Membuat Produk Olahan Pangan",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=870&auto=format&fit=crop",
      date: "1 Maret 2024"
    }
  ]
});

// Komentar (simulasi)
const comments = ref([
  {
    id: 1,
    name: "Ahmad Fauzi",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=amber&color=fff",
    comment: "Kegiatan yang sangat bermanfaat untuk mengembangkan soft skill siswa. Semoga terus berlanjut.",
    date: "16 Maret 2024",
    likes: 5
  },
  {
    id: 2,
    name: "Siti Aminah",
    avatar: "https://ui-avatars.com/api/?name=Siti+Aminah&background=amber&color=fff",
    comment: "Anak saya sangat antusias mengikuti kegiatan ini. Terima kasih SMKN 1 ARAHAN!",
    date: "16 Maret 2024",
    likes: 3
  }
]);

const newComment = ref("");
const showComments = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Header dengan Breadcrumb -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <NuxtLink to="/" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Beranda</NuxtLink>
          <span>/</span>
          <NuxtLink to="/blog" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Blog</NuxtLink>
          <span>/</span>
          <span class="text-amber-600 dark:text-amber-400">Artikel</span>
        </div>

        <!-- Category -->
        <div class="mb-3">
          <span
            class="px-2 py-1 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
            {{ blogDetail.category }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">
          {{ blogDetail.title }}
        </h1>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <img :src="blogDetail.author.avatar" :alt="blogDetail.author.name" class="w-8 h-8 rounded-full" />
            <span>{{ blogDetail.author.name }}</span>
          </div>
          <span>{{ blogDetail.date }}</span>
          <span>{{ blogDetail.readTime }} menit baca</span>
          <span>{{ blogDetail.views }} views</span>
        </div>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="max-w-4xl mx-auto px-4 pt-8">
      <div class="rounded-md overflow-hidden border border-gray-100 dark:border-gray-800">
        <img :src="blogDetail.image" :alt="blogDetail.title" class="w-full h-80 md:h-96 object-cover" />
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-3">
          <article class="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            <div v-html="blogDetail.content" class="text-gray-700 dark:text-gray-300"></div>
          </article>

          <!-- Tags -->
          <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">Tags:</span>
              <NuxtLink v-for="tag in blogDetail.tags" :key="tag" :to="`/blog?tag=${tag.toLowerCase()}`"
                class="px-3 py-1 text-xs dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-full hover:border-amber-500 hover:text-amber-600 dark:hover:border-amber-400 transition-colors">
                #{{ tag }}
              </NuxtLink>
            </div>
          </div>

          <!-- Share Buttons -->
          <div class="mt-6 flex items-center gap-4">
            <span class="text-sm text-gray-500 dark:text-gray-400">Bagikan:</span>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </button>
          </div>

          <!-- Author Bio -->
          <div
            class="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md transition-colors duration-200">
            <div class="flex items-start gap-4">
              <img :src="blogDetail.author.avatar" :alt="blogDetail.author.name" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-1">{{ blogDetail.author.name }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ blogDetail.author.bio }}</p>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="mt-8">
            <button @click="showComments = !showComments"
              class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <span>Komentar ({{ comments.length }})</span>
              <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': showComments }" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="showComments" class="space-y-4">
              <!-- Add Comment -->
              <div class="flex gap-3">
                <img src="https://ui-avatars.com/api/?name=User&background=amber&color=fff" alt="User"
                  class="w-8 h-8 rounded-full" />
                <div class="flex-1">
                  <textarea v-model="newComment" rows="2" placeholder="Tulis komentar..."
                    class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-500 transition-colors"></textarea>
                  <div class="flex justify-end mt-2">
                    <button
                      class="px-3 py-1 text-xs text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors">
                      Kirim
                    </button>
                  </div>
                </div>
              </div>

              <!-- Comments List -->
              <div v-for="comment in comments" :key="comment.id"
                class="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <img :src="comment.avatar" :alt="comment.name" class="w-8 h-8 rounded-full" />
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-medium text-sm text-gray-900 dark:text-white">{{ comment.name }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{ comment.date }}</span>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">{{ comment.comment }}</p>
                  <div class="flex items-center gap-4">
                    <button
                      class="flex items-center gap-1 text-xs text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{{ comment.likes }}</span>
                    </button>
                    <button
                      class="text-xs text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Balas</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Table of Contents -->
          <div
            class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden sticky top-24 transition-colors duration-200">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
              <h3 class="font-medium text-gray-900 dark:text-white text-sm">Daftar Isi</h3>
            </div>
            <div class="p-3">
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#"
                    class="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">Tema
                    Kegiatan</a>
                </li>
                <li>
                  <a href="#"
                    class="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">Pelaksanaan</a>
                </li>
                <li>
                  <a href="#"
                    class="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">Hasil
                    Karya</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Posts -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6">Artikel Terkait</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink v-for="post in blogDetail.relatedPosts" :key="post.id" :to="`/blog/${post.id}`"
            class="group block border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-200 hover:shadow-sm">
            <div class="h-40 overflow-hidden">
              <img :src="post.image" :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-3">
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ post.date }}</p>
              <h3 class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{{ post.title }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Back Button -->
    <div class="max-w-4xl mx-auto px-4">
      <NuxtLink to="/blog"
        class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Blog
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.prose {
  max-width: none;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  color: #111827;
}

.dark .prose h3 {
  color: #fff;
}

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

.prose blockquote {
  border-left: 4px solid #f59e0b;
  background-color: #fef3c7;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
}

.dark .prose blockquote {
  background-color: #451a03;
  color: #fcd34d;
}

.prose blockquote cite {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-style: normal;
}

.dark .prose blockquote cite {
  color: #9ca3af;
}

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
