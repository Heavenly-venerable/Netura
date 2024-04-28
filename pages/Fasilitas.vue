<script setup lang="ts">
const Button = defineAsyncComponent(() => import("primevue/button"));

const fasilitas = ref([
  {
    url: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Perpustakaan",
    desc: "Perpustakaan di Sekolah SMKN 1 ARAHAN adalah pusat kecerdasan dan pengetahuan yang mendukung pengembangan siswa dan penelitian yang mendalam. Dengan koleksi yang luas dan atmosfer yang mendukung, perpustakaan ini membuka pintu menuju dunia literasi dan eksplorasi.",
  },
  {
    url: "https://images.unsplash.com/photo-1562321157-5fd366036de8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lapangan",
    desc: "Sekolah SMKN 1 ARAHAN memiliki lapangan olahraga yang dirancang secara multifungsi, memadukan area untuk futsal dan bola basket. Lapangan ini memberikan ruang untuk berbagai jenis kegiatan olahraga yang mendukung pengembangan keterampilan atletik dan promosi gaya hidup sehat.",
  },
  {
    url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lab TKJ",
    desc: "Lab TKJ di Sekolah SMKN 1 ARAHAN menjadi laboratorium modern yang mendorong pemahaman mendalam tentang teknologi dan pengembangan keterampilan komputasi siswa. Dengan fasilitas canggih dan perangkat terkini, ruang ini dirancang untuk mendukung pembelajaran praktis dan pemecahan masalah di dunia digital.",
  },
  {
    url: "https://images.unsplash.com/photo-1577561426384-62154a1e9457?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Masjid",
    desc: "Masjid di Sekolah SMKN 1 ARAHAN adalah tempat suci yang menciptakan suasana damai dan kontemplatif untuk siswa dan staf sekolah. Dengan desain yang sederhana dan memperhatikan kebersihan, mushola ini menyediakan ruang untuk ibadah dan refleksi spiritual.",
  },
  {
    url: "https://images.unsplash.com/photo-1516783154360-123b392d0833?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V3aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Ruang Praktek TB",
    desc: "Fasilitas ruang praktek tata busana di SMKN 1 ARAHAN dirancang untuk mendukung kegiatan belajar mengajar dan pengembangan keterampilan siswa dalam bidang fashion.",
  },
  {
    url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Ruang Praktek TKRO",
    desc: "Fasilitas ruang praktek tata busana di SMKN 1 ARAHAN dirancang untuk mendukung kegiatan belajar mengajar dan pengembangan keterampilan siswa dalam bidang fashion.",
  },
  {
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWx0aCUyMHJvb218ZW58MHx8MHx8fDA%3D",
    title: "Unit Kesehatan Sekolah",
    desc: "Unit Kesehatan Sekolah (UKS) di Sekolah SMKN 1 ARAHAN adalah pusat pelayanan kesehatan yang bertujuan untuk menjaga dan meningkatkan kesehatan anggota komunitas sekolah. Dengan peran utama dalam memberikan layanan kesehatan preventif dan mendidik siswa tentang gaya hidup sehat, UKS menjadi bagian integral dalam menciptakan lingkungan sekolah yang sehat.",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFkbWluaXN0cmF0aW9uJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Ruang Tata Usaha",
    desc: "Ruang Tata Usaha (TU) di Sekolah SMKN 1 ARAHAN merupakan pusat administrasi yang efisien, menyediakan layanan terkait administrasi sekolah dan menjadi tempat strategis untuk berbagai kegiatan administratif.",
  },
  {
    url: "https://images.unsplash.com/photo-1604881991664-593b31b88488?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291bnNlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Ruang Konseling",
    desc: "Ruang Konseling di Sekolah SMKN 1 ARAHAN dirancang sebagai lingkungan yang suportif dan aman, memberikan layanan konseling yang mendukung perkembangan sosial dan emosional siswa. Ruang ini berfungsi sebagai tempat bagi siswa untuk berbicara, mencari dukungan, dan mengatasi berbagai tantangan hidup.",
  },
]);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  scrollToTop();
});
</script>

<template>
  <div>
    <div class="px-4 pb-8 pt-24">
      <h1 class="text-3xl font-bold">Fasilitas</h1>
      <p class="text-sm text-gray-500 mb-4">
        Fasilitas yang ada di sekolah kami
      </p>
      <div v-for="item in fasilitas">
        <div class="py-4">
          <img
            class="w-full h-64 object-cover rounded-lg"
            :src="item.url"
            alt=""
          />
          <h2 class="mt-2 text-xl font-semibold">{{ item.title }}</h2>
          <p class="mt-2 text-sm">
            {{ item.desc }}
          </p>
          <Button class="mt-4" label="Selengkapnya" size="small" />
        </div>
      </div>
    </div>
  </div>
</template>
