<script setup lang="ts">
import { ref } from "vue";

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

// Social media links
const socialMedia = ref([
  { 
    name: "Facebook", 
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`, 
    url: "https://facebook.com/smkn1arahan", 
    color: "hover:text-blue-600" 
  },
  { 
    name: "Instagram", 
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>`, 
    url: "https://instagram.com/smkn1arahan", 
    color: "hover:text-pink-600" 
  },
  { 
    name: "TikTok", 
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>`, 
    url: "https://tiktok.com/@smkn1arahan", 
    color: "hover:text-black dark:hover:text-white" 
  },
  { 
    name: "YouTube", 
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`, 
    url: "https://youtube.com/@smkn1arahan", 
    color: "hover:text-red-600" 
  },
  { 
    name: "Twitter", 
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`, 
    url: "https://twitter.com/smkn1arahan", 
    color: "hover:text-blue-400" 
  }
]);

// Contact info
const contactInfo = ref([
  { 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`, 
    label: "Alamat", 
    value: "Jl. Raya Arahan, Linggajati, Kec. Arahan, Kabupaten Indramayu, Jawa Barat 45365" 
  },
  { 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`, 
    label: "Telepon", 
    value: "+62 896 5529 5884" 
  },
  { 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`, 
    label: "Email", 
    value: "smkn1arahan@gmail.com" 
  },
  { 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`, 
    label: "Jam Kerja", 
    value: "Senin - Jumat, 07.30 - 15.30 WIB" 
  }
]);

// FAQ data
const faqs = ref([
  { q: "Bagaimana cara mendaftar PPDB?", a: "Pendaftaran PPDB dilakukan secara online melalui website resmi sekolah pada jadwal yang telah ditentukan." },
  { q: "Apa saja program keahlian yang tersedia?", a: "Tersedia 3 program keahlian: TKJ (Teknik Komputer Jaringan), TKRO (Teknik Kendaraan Ringan), dan TB (Tata Busana)." },
  { q: "Bagaimana cara mengakses informasi pembayaran?", a: "Informasi pembayaran dapat diakses melalui website atau menghubungi bagian Tata Usaha." }
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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-3">
          Hubungi
          <span class="font-medium text-amber-600 dark:text-amber-400">Kami</span>
        </h1>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Kirim pertanyaan, saran, atau masukan Anda. Kami akan merespons secepat mungkin.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div 
          v-for="(info, index) in contactInfo" 
          :key="index"
          class="p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-amber-200 dark:hover:border-amber-900 transition-colors"
        >
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0" v-html="info.icon"></div>
            <div>
              <h3 class="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                {{ info.label }}
              </h3>
              <p class="text-sm text-gray-900 dark:text-white">{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form & Map Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Kirim Pesan</h2>
          <p class="text-sm text-gray-500 dark:text-gray-500 mb-6">
            Isi form di bawah ini untuk mengirim pesan kepada kami
          </p>

          <form class="space-y-4">
            <!-- Nama & Email Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nama Lengkap <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.email"
                  type="email"
                  placeholder="nama@email.com"
                  class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required
                />
              </div>
            </div>

            <!-- Phone & Subject Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nomor Telepon
                </label>
                <input 
                  v-model="formData.phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subjek <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.subject"
                  type="text"
                  placeholder="Subjek pesan"
                  class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                  required
                />
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Pesan <span class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="formData.message"
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
                class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full py-2.5 px-4 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        <!-- Map & Info -->
        <div class="space-y-4">
          <!-- Map -->
          <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="p-4 border-b border-gray-100 dark:border-gray-800">
              <h3 class="font-medium text-gray-900 dark:text-white">Lokasi Kami</h3>
            </div>
            <div class="aspect-[16/9]">
              <iframe
                src="https://maps.google.com/maps?q=Smkn1arahan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                loading="lazy"
                class="w-full h-full"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-500">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jl. Raya Arahan, Linggajati, Kec. Arahan, Kab. Indramayu
              </span>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
            <div class="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+6289655295884"
                class="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Telepon</span>
              </a>
              <a 
                href="https://wa.me/6289655295884"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.346.223-.643.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:smkn1arahan@gmail.com"
                class="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media & FAQ Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Social Media -->
        <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">Media Sosial</h3>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Ikuti kami di media sosial untuk informasi terbaru
          </p>
          
          <div class="flex flex-wrap gap-2">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <span class="text-gray-500 group-hover:text-amber-600 dark:group-hover:text-amber-400" v-html="social.icon"></span>
              <span class="text-gray-700 dark:text-gray-300">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- FAQ -->
        <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">Pertanyaan Umum</h3>
          </div>
          
          <div class="space-y-3">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-3 last:pb-0"
            >
              <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-1">{{ faq.q }}</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Business Hours -->
      <div class="mt-8 p-4 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-lg">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">
              <span class="font-medium">Jam Operasional:</span> Senin - Jumat, 07.30 - 15.30 WIB
            </span>
          </div>
          <span class="text-xs text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">
            Buka Sekarang
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Smooth transitions */
button, a {
  transition: all 0.2s ease;
}

/* Custom focus styles */
input:focus, textarea:focus {
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.1);
}

/* Map responsive */
iframe {
  filter: grayscale(0.5) contrast(1.2);
  transition: filter 0.3s ease;
}

iframe:hover {
  filter: grayscale(0) contrast(1);
}

/* SVG icons */
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
