<script setup lang="ts">
// Data blog
const blogs = ref([
  {
    id: 1,
    title: "Kegiatan P5: Implementasi Projek Penguatan Profil Pelajar Pancasila",
    excerpt: "Siswa SMKN 1 ARAHAN mengikuti kegiatan P5 dengan tema kewirausahaan dan karya rekayasa teknologi...",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    date: "15 Maret 2024",
    readTime: 5,
    category: "Kegiatan",
    tags: ["P5", "Kurikulum", "Siswa"],
    author: {
      name: "Tim Jurnalistik",
      avatar: "https://ui-avatars.com/api/?name=Tim+Jurnalistik&background=amber&color=fff"
    },
    views: 1234
  },
  {
    id: 2,
    title: "Prestasi Gemilang Siswa TKRO di Lomba Kompetensi Siswa Tingkat Provinsi",
    excerpt: "Tim TKRO SMKN 1 ARAHAN berhasil meraih juara 2 dalam ajang Lomba Kompetensi Siswa bidang Automotif...",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=870&auto=format&fit=crop",
    date: "10 Maret 2024",
    readTime: 4,
    category: "Prestasi",
    tags: ["TKRO", "LKS", "Prestasi"],
    author: {
      name: "Humas Sekolah",
      avatar: "https://ui-avatars.com/api/?name=Humas+Sekolah&background=amber&color=fff"
    },
    views: 2345
  },
  {
    id: 3,
    title: "Kunjungan Industri Siswa TJKT ke PT Telkom Indonesia",
    excerpt: "Siswa jurusan Teknik Jaringan Komputer dan Telekomunikasi mengadakan kunjungan industri ke PT Telkom...",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=870&auto=format&fit=crop",
    date: "5 Maret 2024",
    readTime: 3,
    category: "Kegiatan",
    tags: ["TJKT", "Kunjungan Industri", "Pembelajaran"],
    author: {
      name: "Tim TJKT",
      avatar: "https://ui-avatars.com/api/?name=Tim+TJKT&background=amber&color=fff"
    },
    views: 1567
  },
  {
    id: 4,
    title: "Workshop Kewirausahaan: Membuat Produk Olahan Pangan",
    excerpt: "Siswa kelas XII mengikuti workshop kewirausahaan dengan praktik membuat produk olahan pangan...",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=870&auto=format&fit=crop",
    date: "1 Maret 2024",
    readTime: 4,
    category: "Workshop",
    tags: ["Kewirausahaan", "PKWU", "Workshop"],
    author: {
      name: "Tim PKWU",
      avatar: "https://ui-avatars.com/api/?name=Tim+PKWU&background=amber&color=fff"
    },
    views: 890
  },
  {
    id: 5,
    title: "Peringatan Isra Mi'raj 1445 H di SMKN 1 ARAHAN",
    excerpt: "Peringatan Isra Mi'raj Nabi Muhammad SAW diisi dengan pengajian dan lomba keagamaan antar kelas...",
    image: "https://images.unsplash.com/photo-1487800940032-1cf211187aea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlzbGFtfGVufDB8fDB8fHww",
    date: "28 Februari 2024",
    readTime: 3,
    category: "Keagamaan",
    tags: ["Isra Miraj", "Keagamaan", "Siswa"],
    author: {
      name: "Tim Rohis",
      avatar: "https://ui-avatars.com/api/?name=Tim+Rohis&background=amber&color=fff"
    },
    views: 2100
  },
  {
    id: 6,
    title: "Sosialisasi Bahaya Narkoba oleh BNN Kabupaten Indramayu",
    excerpt: "Badan Narkotika Nasional Kabupaten Indramayu memberikan sosialisasi tentang bahaya narkoba...",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
    date: "20 Februari 2024",
    readTime: 4,
    category: "Sosialisasi",
    tags: ["Narkoba", "BNN", "Siswa"],
    author: {
      name: "Tim BK",
      avatar: "https://ui-avatars.com/api/?name=Tim+BK&background=amber&color=fff"
    },
    views: 1789
  }
]);

// Kategori untuk filter
const categories = ref(["Semua", "Kegiatan", "Prestasi", "Workshop", "Keagamaan", "Sosialisasi", "Pengumuman"]);
const selectedCategory = ref("Semua");
const searchQuery = ref("");
const sortBy = ref("terbaru");
const currentPage = ref(1);
const itemsPerPage = 6;

// Filtered blogs dengan pagination
const filteredBlogs = computed(() => {
  let result = blogs.value.filter(blog => {
    const matchesCategory = selectedCategory.value === "Semua" || blog.category === selectedCategory.value;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (sortBy.value === "terbaru") {
    result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortBy.value === "terpopuler") {
    result = result.sort((a, b) => b.views - a.views);
  }

  return result;
});

// Pagination
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredBlogs.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredBlogs.value.length / itemsPerPage));

// Featured post (paling populer)
const featuredPost = computed(() => {
  return blogs.value.reduce((prev, current) => (prev.views > current.views) ? prev : current);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Reset ke halaman 1 saat filter berubah
watch([selectedCategory, searchQuery, sortBy], () => {
  currentPage.value = 1;
});

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>

        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Blog & Berita
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Informasi terbaru seputar kegiatan, prestasi, dan perkembangan SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Featured Post -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div class="relative rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <img :src="featuredPost.image" :alt="featuredPost.title" class="w-full h-[500px] md:h-[600px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
          <div class="max-w-3xl">
            <!-- Category & Meta -->
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="px-3 py-1.5 text-xs font-semibold bg-amber-500 text-white rounded-full shadow-lg">
                {{ featuredPost.category }}
              </span>
              <span class="text-sm text-white/90 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ featuredPost.date }}
              </span>
              <span class="text-sm text-white/90 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ featuredPost.views }} views
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              {{ featuredPost.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-base text-white/80 mb-6 max-w-2xl leading-relaxed">
              {{ featuredPost.excerpt }}
            </p>

            <!-- Author & CTA -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="flex items-center gap-3">
                <img :src="featuredPost.author.avatar" :alt="featuredPost.author.name"
                  class="w-10 h-10 rounded-full border-2 border-white/30" />
                <div>
                  <p class="text-sm font-medium text-white">{{ featuredPost.author.name }}</p>
                  <p class="text-xs text-white/70">Penulis</p>
                </div>
              </div>

              <NuxtLink :to="`/blog/${featuredPost.id}`"
                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-gray-900 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Baca Selengkapnya
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <!-- Category Filter -->
        <div class="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <div class="flex items-center gap-2 min-w-max">
            <button v-for="category in categories" :key="category" @click="selectedCategory = category"
              class="px-4 py-2 text-sm border rounded-lg transition-colors whitespace-nowrap" :class="{
                'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 font-medium': selectedCategory === category,
                'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': selectedCategory !== category
              }">
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Search & Sort -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <div class="relative flex-1 sm:w-72">
            <input v-model="searchQuery" type="text" placeholder="Cari artikel..."
              class="w-full px-4 py-2 pl-10 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-500 transition-colors" />
            <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <select v-model="sortBy"
            class="px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-500 transition-colors">
            <option value="terbaru">📅 Terbaru</option>
            <option value="terpopuler">🔥 Terpopuler</option>
          </select>
        </div>
      </div>

      <!-- Results Info -->
      <div class="flex items-center justify-between mb-6">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Menampilkan <span class="font-medium text-gray-700 dark:text-gray-300">{{ paginatedBlogs.length }}</span> dari
          <span class="font-medium text-gray-700 dark:text-gray-300">{{ filteredBlogs.length }}</span> artikel
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Halaman {{ currentPage }} dari {{ totalPages }}
        </p>
      </div>
    </div>

    <!-- Blog Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="blog in paginatedBlogs" :key="blog.id" :to="`/blog/${blog.id}`"
          class="group block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-300 hover:shadow-sm">
          <!-- Image Container -->
          <div class="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img :src="blog.image" :alt="blog.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
            <div class="absolute top-3 left-3">
              <span
                class="px-2.5 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 shadow-sm">
                {{ blog.category }}
              </span>
            </div>
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 text-xs font-medium bg-black/50 text-white backdrop-blur-sm rounded-full">
                {{ blog.readTime }} min
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ blog.date }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ blog.views }}
              </span>
            </div>

            <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem]">
              {{ blog.title }}
            </h3>

            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 min-h-[2.5rem]">
              {{ blog.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-center gap-2">
                <img :src="blog.author.avatar" :alt="blog.author.name" class="w-6 h-6 rounded-full" loading="lazy" />
                <span class="text-xs text-gray-600 dark:text-gray-400 truncate max-w-[100px]">
                  {{ blog.author.name }}
                </span>
              </div>

              <div class="flex gap-1">
                <span v-for="tag in blog.tags.slice(0, 2)" :key="tag"
                  class="text-xs text-amber-600 dark:text-amber-400">
                  #{{ tag }}
                </span>
                <span v-if="blog.tags.length > 2" class="text-xs text-gray-400">...</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-10">
        <button @click="currentPage--" :disabled="currentPage === 1"
          class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button v-for="page in totalPages" :key="page" @click="currentPage = page"
          class="w-10 h-10 rounded-lg border text-sm font-medium transition-colors" :class="{
            'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400': currentPage === page,
            'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800': currentPage !== page
          }">
          {{ page }}
        </button>

        <button @click="currentPage++" :disabled="currentPage === totalPages"
          class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="filteredBlogs.length === 0" class="text-center py-16">
        <svg class="w-20 h-20 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">Tidak ada artikel</h3>
        <p class="text-base text-gray-500 dark:text-gray-400">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="border-t border-gray-100 dark:border-gray-800 mt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          class="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10 rounded-2xl p-8 md:p-10 border border-amber-200 dark:border-amber-800 transition-colors duration-200">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <!-- Left Content -->
            <div class="flex items-start gap-4 max-w-xl">
              <div
                class="w-14 h-14 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-amber-700 dark:text-amber-300" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Berlangganan Newsletter
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dapatkan update artikel terbaru, informasi kegiatan, dan pengumuman penting langsung di email Anda.
                  Kami tidak akan mengirim spam!
                </p>
              </div>
            </div>

            <!-- Newsletter Form -->
            <div class="w-full lg:w-[400px] flex-shrink-0">
              <div class="flex flex-col sm:flex-row gap-3">
                <div class="flex-1">
                  <input type="email" placeholder="Masukkan email Anda"
                    class="w-full px-4 py-3 text-sm border border-amber-200 dark:border-amber-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all" />
                </div>
                <button
                  class="px-6 py-3 text-sm font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
                  Langganan
                </button>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                * Gratis, berhenti kapan saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.group:hover img {
  transform: scale(1.05);
}

.group {
  transition: all 0.3s ease;
}

/* Hide scrollbar for category filter */
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

/* Fixed heights untuk konsistensi card */
@media (min-width: 1024px) {
  .group .line-clamp-2 {
    min-height: 3rem;
  }

  .group .text-sm.line-clamp-2 {
    min-height: 2.5rem;
  }
}

/* Featured post text shadow untuk better readability */
.absolute h2,
.absolute p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
