<script setup lang="ts">
import { ref } from "vue";

// Form data
const formData = ref({
  jenisPendaftaran: null,
  jalurPendaftaran: null,
  namaLengkap: "",
  jenisKelamin: null,
  tempatLahir: "",
  tanggalLahir: "",
  nisn: "",
  nik: "",
  asalSekolah: "",
  kabupatenKota: "",
  kecamatan: "",
  desaKelurahan: "",
  alamat: "",
  namaAyah: "",
  namaIbu: "",
  noHp: "",
  email: ""
});

// Options
const jenisPendaftaran = ref([
  { label: "Siswa Baru", value: "baru" },
  { label: "Pindahan", value: "pindahan" }
]);

const jalurPendaftaran = ref([
  { label: "Jalur Zonasi", value: "zonasi" },
  { label: "Jalur Afirmasi", value: "afirmasi" },
  { label: "Jalur Prestasi", value: "prestasi" },
  { label: "Jalur Perpindahan Tugas", value: "pindah_tugas" }
]);

const jenisKelamin = ref([
  { label: "Laki-laki", value: "L" },
  { label: "Perempuan", value: "P" }
]);

const checkbox = ref(false);
const currentStep = ref(1);
const totalSteps = 3;

function nextStep() {
  if (currentStep.value < totalSteps) {
    currentStep.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function submitForm() {
  if (checkbox.value) {
    // Handle form submission
    console.log("Form submitted:", formData.value);
  }
}

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
      <div class="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
          <NuxtLink to="/" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Beranda</NuxtLink>
          <span>/</span>
          <NuxtLink to="/syarat-ppdb" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">PPDB
          </NuxtLink>
          <span>/</span>
          <span class="text-amber-600 dark:text-amber-400">Formulir</span>
        </div>

        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
          Formulir Pendaftaran
          <span class="font-medium text-amber-600 dark:text-amber-400">PPDB Online</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Tahun Pelajaran 2024/2025 • SMKN 1 ARAHAN
        </p>
      </div>
    </div>

    <!-- Progress Steps -->
    <div class="max-w-3xl mx-auto px-4 pt-8">
      <div class="flex items-center justify-between mb-8">
        <div v-for="step in totalSteps" :key="step" class="flex items-center flex-1 last:flex-none">
          <div class="flex items-center" :class="{ 'w-full': step < totalSteps }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm" :class="{
              'bg-amber-500 text-white': currentStep >= step,
              'border-2 border-gray-200 dark:border-gray-700 text-gray-400': currentStep < step
            }">
              {{ step }}
            </div>
            <div v-if="step < totalSteps" class="flex-1 h-0.5 mx-2" :class="{
              'bg-amber-500': currentStep > step,
              'bg-gray-200 dark:bg-gray-700': currentStep <= step
            }"></div>
          </div>
        </div>
      </div>
      <p class="text-center text-sm text-gray-500 dark:text-gray-500 mb-8">
        Langkah {{ currentStep }} dari {{ totalSteps }}:
        <span v-if="currentStep === 1">Data Pribadi</span>
        <span v-else-if="currentStep === 2">Data Domisili & Orang Tua</span>
        <span v-else>Kontak & Verifikasi</span>
      </p>
    </div>

    <!-- Form Section -->
    <div class="max-w-3xl mx-auto px-4 pb-12">
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Step 1: Data Pribadi -->
        <div v-if="currentStep === 1" class="space-y-6">
          <div class="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
              Data Pendaftaran
            </h2>

            <div class="space-y-4">
              <!-- Jenis Pendaftaran -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Jenis Pendaftaran <span class="text-red-500">*</span>
                </label>
                <select v-model="formData.jenisPendaftaran"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required>
                  <option value="" disabled selected>Pilih jenis pendaftaran</option>
                  <option v-for="item in jenisPendaftaran" :key="item.value" :value="item.value">
                    {{ item.label }}
                  </option>
                </select>
              </div>

              <!-- Jalur Pendaftaran -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Jalur Pendaftaran <span class="text-red-500">*</span>
                </label>
                <select v-model="formData.jalurPendaftaran"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required>
                  <option value="" disabled selected>Pilih jalur pendaftaran</option>
                  <option v-for="item in jalurPendaftaran" :key="item.value" :value="item.value">
                    {{ item.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
              Identitas Diri
            </h2>

            <div class="space-y-4">
              <!-- Nama Lengkap -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nama Lengkap <span class="text-red-500">*</span>
                </label>
                <input v-model="formData.namaLengkap" type="text" placeholder="Sesuai akta kelahiran"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required />
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Nama harus sesuai dengan dokumen resmi (Akta/Ijazah)
                </p>
              </div>

              <!-- Jenis Kelamin -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Jenis Kelamin <span class="text-red-500">*</span>
                </label>
                <div class="flex gap-4">
                  <label v-for="jk in jenisKelamin" :key="jk.value" class="flex items-center gap-2">
                    <input type="radio" :value="jk.value" v-model="formData.jenisKelamin"
                      class="w-4 h-4 text-amber-500 border-gray-300 focus:ring-amber-500" required />
                    <span class="text-sm text-gray-700 dark:text-gray-300">{{ jk.label }}</span>
                  </label>
                </div>
              </div>

              <!-- Tempat & Tanggal Lahir -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tempat Lahir <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.tempatLahir" type="text" placeholder="Kota lahir"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tanggal Lahir <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.tanggalLahir" type="date"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
              </div>

              <!-- NISN & NIK -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    NISN
                  </label>
                  <input v-model="formData.nisn" type="text" placeholder="Nomor Induk Siswa Nasional"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    NIK <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.nik" type="text" placeholder="Nomor Induk Kependudukan"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
              </div>

              <!-- Asal Sekolah -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Asal Sekolah <span class="text-red-500">*</span>
                </label>
                <input v-model="formData.asalSekolah" type="text" placeholder="Nama SMP/MTs asal"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Data Domisili & Orang Tua -->
        <div v-if="currentStep === 2" class="space-y-6">
          <div class="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
              Alamat Domisili
            </h2>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Kabupaten/Kota <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.kabupatenKota" type="text" placeholder="Kabupaten"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Kecamatan <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.kecamatan" type="text" placeholder="Kecamatan"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Desa/Kelurahan <span class="text-red-500">*</span>
                </label>
                <input v-model="formData.desaKelurahan" type="text" placeholder="Desa/Kelurahan"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Alamat Lengkap <span class="text-red-500">*</span>
                </label>
                <textarea v-model="formData.alamat" rows="3" placeholder="Rt/Rw, Nama jalan, No rumah"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required></textarea>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
              Data Orang Tua
            </h2>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nama Ayah <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.namaAyah" type="text" placeholder="Nama lengkap ayah"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nama Ibu <span class="text-red-500">*</span>
                  </label>
                  <input v-model="formData.namaIbu" type="text" placeholder="Nama lengkap ibu"
                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    required />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Kontak & Verifikasi -->
        <div v-if="currentStep === 3" class="space-y-6">
          <div class="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-md">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
              Kontak & Verifikasi
            </h2>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nomor HP/WhatsApp <span class="text-red-500">*</span>
                </label>
                <input v-model="formData.noHp" type="tel" placeholder="081234567890"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required />
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Nomor yang bisa dihubungi untuk informasi lebih lanjut
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input v-model="formData.email" type="email" placeholder="nama@email.com"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors" />
              </div>

              <div class="flex items-start gap-3 pt-4">
                <input type="checkbox" v-model="checkbox" id="agreement"
                  class="mt-1 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500" required />
                <label for="agreement" class="text-sm text-gray-600 dark:text-gray-400">
                  Saya menyatakan bahwa data yang saya isi adalah benar dan dapat
                  dipertanggungjawabkan. Jika dikemudian hari ditemukan ketidaksesuaian,
                  saya bersedia menerima sanksi sesuai ketentuan yang berlaku.
                </label>
              </div>
            </div>
          </div>

          <!-- Summary Card -->
          <div
            class="p-4 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-md">
            <h3 class="font-medium text-amber-800 dark:text-amber-300 mb-2">Ringkasan Pendaftaran</h3>
            <p class="text-sm text-amber-700 dark:text-amber-400">
              Jalur: {{ formData.jalurPendaftaran }} • Nama: {{ formData.namaLengkap }}
            </p>
            <p class="text-xs text-amber-600 dark:text-amber-500 mt-2">
              Pastikan semua data sudah benar sebelum mengirimkan formulir
            </p>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between gap-3 pt-6 border-t border-gray-100 dark:border-gray-800">
          <button v-if="currentStep > 1" type="button" @click="prevStep"
            class="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
            Sebelumnya
          </button>
          <button v-if="currentStep < totalSteps" type="button" @click="nextStep"
            class="px-4 py-2 text-sm text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors ml-auto">
            Selanjutnya
          </button>
          <button v-if="currentStep === totalSteps" type="submit" :disabled="!checkbox"
            class="px-6 py-2 text-sm text-white bg-amber-500 rounded-md hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto">
            Daftar Sekarang
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
/* Form elements styling */
input[type="text"],
input[type="date"],
input[type="tel"],
input[type="email"],
select,
textarea {
  @apply text-sm;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="tel"]:focus,
input[type="email"]:focus,
select:focus,
textarea:focus {
  @apply ring-1 ring-amber-500;
}

/* Remove default number input spinner */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Smooth transitions */
button,
a {
  transition: all 0.2s ease;
}
</style>
