<script setup lang="ts">
// Data struktur OSIS
const osisStructure = ref([
  {
    id: 1,
    position: "Ketua OSIS",
    name: "Muhammad Rizki Ramadhan",
    class: "XII TKJ 1",
    photo: "https://ui-avatars.com/api/?name=M+Rizki&background=amber&color=fff&size=128",
    vision: "Mewujudkan OSIS yang solid, kreatif, dan berakhlak mulia",
    missions: [
      "Meningkatkan kualitas keimanan dan ketaqwaan siswa",
      "Mengembangkan potensi dan kreativitas siswa",
      "Menjalin komunikasi yang harmonis antar warga sekolah"
    ]
  },
  {
    id: 2,
    position: "Wakil Ketua",
    name: "Siti Nurhaliza",
    class: "XII TKRO 2",
    photo: "https://ui-avatars.com/api/?name=Siti+Nur&background=amber&color=fff&size=128",
    vision: "Mendukung ketua dalam mewujudkan program kerja OSIS",
    missions: [
      "Membantu koordinasi antar bidang",
      "Memastikan kelancaran setiap kegiatan",
      "Menjadi mediator antara pengurus dan anggota"
    ]
  },
  {
    id: 3,
    position: "Sekretaris",
    name: "Ahmad Fauzi",
    class: "XI TKJ 1",
    photo: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=amber&color=fff&size=128",
    vision: "Menciptakan administrasi yang rapi dan tertib",
    missions: [
      "Mendokumentasikan setiap kegiatan OSIS",
      "Mengelola surat menyurat dan notulen rapat",
      "Menyusun laporan pertanggungjawaban"
    ]
  },
  {
    id: 4,
    position: "Bendahara",
    name: "Dewi Lestari",
    class: "XI TB 1",
    photo: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=amber&color=fff&size=128",
    vision: "Mengelola keuangan OSIS secara transparan dan akuntabel",
    missions: [
      "Membuat perencanaan anggaran kegiatan",
      "Mencatat semua pemasukan dan pengeluaran",
      "Menyusun laporan keuangan periodik"
    ]
  }
])

// Data bidang OSIS
const departments = ref([
  {
    id: 1,
    name: "Bidang Keimanan & Ketaqwaan",
    coordinator: "Ahmad Saepulloh - XI TKJ 2",
    programs: [
      "Kajian rutin setiap Jumat",
      "Peringatan hari besar Islam",
      "Pengajian bulanan",
      "Santunan anak yatim"
    ],
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>'
  },
  {
    id: 2,
    name: "Bidang Pendidikan & Prestasi",
    coordinator: "Rina Marlina - XII TKRO 1",
    programs: [
      "Bimbingan belajar gratis",
      "Lomba antar kelas",
      "Workshop pengembangan diri",
      "Olimpiade sains sekolah"
    ],
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>'
  },
  {
    id: 3,
    name: "Bidang Olahraga & Seni",
    coordinator: "Hasan Basri - XII TKRO 2",
    programs: [
      "Pekan olahraga antar kelas",
      "Festival seni sekolah",
      "Ekstrakurikuler seni",
      "Turnamen futsal"
    ],
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
  },
  {
    id: 4,
    name: "Bidang Sosial & Lingkungan",
    coordinator: "Anisa Putri - XI TB 1",
    programs: [
      "Jumat bersih",
      "Penghijauan sekolah",
      "Bakti sosial",
      "Donor darah"
    ],
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>'
  }
])

// Data kegiatan OSIS
const activities = ref([
  {
    id: 1,
    title: "Latihan Dasar Kepemimpinan",
    date: "15-17 Januari 2024",
    location: "Bumi Perkemahan",
    description: "Kegiatan LDK untuk pengurus OSIS baru dalam rangka pembentukan karakter kepemimpinan",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Bakti Sosial Panti Asuhan",
    date: "10 Desember 2024",
    location: "Panti Asuhan Al-Ikhlas",
    description: "Kunjungan dan santunan ke panti asuhan dalam rangka berbagi kebahagiaan",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=870&auto=format&fit=crop"
  }
])

// Visi dan Misi OSIS
const visionMission = ref({
  vision: "Terwujudnya OSIS yang religius, berkarakter, kreatif, dan berprestasi sebagai wadah pengembangan potensi siswa SMKN 1 ARAHAN",
  missions: [
    "Meningkatkan keimanan dan ketaqwaan siswa melalui kegiatan keagamaan",
    "Mengembangkan bakat, minat, dan kreativitas siswa dalam berbagai bidang",
    "Mewujudkan program kerja yang inovatif dan bermanfaat bagi siswa",
    "Menjalin kerjasama yang harmonis dengan seluruh warga sekolah",
    "Meningkatkan prestasi akademik dan non-akademik siswa",
    "Menanamkan jiwa kepemimpinan dan tanggung jawab sosial"
  ]
})

// State untuk modal
const selectedMember = ref(null)
const showMemberModal = ref(false)

function openMemberModal(member) {
  selectedMember.value = member
  showMemberModal.value = true
  document.body.classList.add('modal-open')
}

function closeMemberModal() {
  showMemberModal.value = false
  selectedMember.value = null
  document.body.classList.remove('modal-open')
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  scrollToTop()
})

onUnmounted(() => {
  document.body.classList.remove('modal-open')
})
</script>

<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div
          class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Organisasi Siswa
          <span class="font-medium text-amber-600 dark:text-amber-400">Intra Sekolah</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Wadah pengembangan potensi, kepemimpinan, dan kreativitas siswa SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Visi Misi Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Visi -->
        <div
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 transition-colors duration-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-xl font-medium text-gray-900 dark:text-white">Visi</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ visionMission.vision }}
          </p>
        </div>

        <!-- Misi -->
        <div
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 transition-colors duration-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 class="text-xl font-medium text-gray-900 dark:text-white">Misi</h2>
          </div>
          <ul class="space-y-2">
            <li v-for="(mission, index) in visionMission.missions" :key="index"
              class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
              <span class="text-amber-600 dark:text-amber-400 mt-1">•</span>
              <span>{{ mission }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Struktur Pengurus -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
          Struktur
          <span class="font-medium text-amber-600 dark:text-amber-400">Pengurus</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Periode 2024/2025
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="member in osisStructure" :key="member.id" @click="openMemberModal(member)"
          class="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 text-center hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-lg transition-all duration-200 cursor-pointer">
          <div class="relative inline-block">
            <img :src="member.photo" :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber-100 dark:border-amber-900/30 group-hover:border-amber-500 transition-all duration-200"
              loading="lazy" />
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span class="px-2 py-0.5 text-xs bg-amber-500 text-white rounded-full">
                {{ member.class }}
              </span>
            </div>
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mt-4">{{ member.name }}</h3>
          <p class="text-sm text-amber-600 dark:text-amber-400 font-medium">{{ member.position }}</p>
        </div>
      </div>

      <!-- Modal Detail Pengurus -->
      <Teleport to="body">
        <div v-if="showMemberModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-200"
          @click.self="closeMemberModal">
          <div
            class="bg-white dark:bg-gray-900 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-200">
            <div class="p-6" v-if="selectedMember">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Detail Pengurus</h3>
                <button @click="closeMemberModal"
                  class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div class="text-center mb-6">
                <img :src="selectedMember.photo" :alt="selectedMember.name"
                  class="w-32 h-32 rounded-full mx-auto mb-3 border-4 border-amber-500" />
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedMember.name }}</h4>
                <p class="text-amber-600 dark:text-amber-400">{{ selectedMember.position }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ selectedMember.class }}</p>
              </div>

              <div class="space-y-4">
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Visi</h5>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ selectedMember.vision }}</p>
                </div>
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Misi</h5>
                  <ul class="space-y-1">
                    <li v-for="(mission, idx) in selectedMember.missions" :key="idx"
                      class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span class="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span>{{ mission }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-6 flex justify-end">
                <button @click="closeMemberModal"
                  class="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </section>

    <!-- Bidang-Bidang OSIS -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
          Bidang
          <span class="font-medium text-amber-600 dark:text-amber-400">OSIS</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Program kerja masing-masing bidang
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="dept in departments" :key="dept.id"
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-200 hover:shadow-md">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0"
              v-html="dept.icon"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ dept.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">Koordinator: {{ dept.coordinator }}</p>
              <ul class="space-y-1">
                <li v-for="(program, idx) in dept.programs" :key="idx"
                  class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span class="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>{{ program }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kegiatan OSIS -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-light text-gray-900 dark:text-white">
          Kegiatan <span class="font-medium text-amber-600 dark:text-amber-400">OSIS</span>
        </h2>
        <NuxtLink to="/agenda"
          class="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1 transition-colors">
          Lihat Semua
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="activity in activities" :key="activity.id"
          class="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-amber-200 dark:hover:border-amber-900 transition-all duration-200 hover:shadow-lg">
          <div class="relative h-48 overflow-hidden">
            <img :src="activity.image" :alt="activity.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
            <div class="absolute top-3 right-3">
              <span
                class="px-2 py-1 text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300">
                {{ activity.date }}
              </span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ activity.title }}</h3>
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ activity.location }}</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo & Info -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      <div
        class="bg-amber-50/50 dark:bg-amber-900/10 dark:text-white rounded-xl p-8 border border-amber-100 dark:border-amber-900/30 transition-colors duration-200">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border-2 border-amber-500">
              <svg class="w-10 h-10 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">OSIS SMKN 1 ARAHAN</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Periode 2024/2025</p>
            </div>
          </div>
          <div class="flex gap-3">
            <a href="#" target="_blank"
              class="p-2 text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
              aria-label="Instagram OSIS">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" target="_blank"
              class="p-2 text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
              aria-label="YouTube OSIS">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
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

/* Modal animation */
.fixed {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Prevent body scroll when modal is open */
:global(body.modal-open) {
  overflow: hidden;
}

/* Custom scrollbar for modal */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}

.dark .modal-content::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark .modal-content::-webkit-scrollbar-thumb {
  background: #374151;
}
</style>
