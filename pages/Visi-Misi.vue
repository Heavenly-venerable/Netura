<script setup lang="ts">
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
    <div class="px-4 pt-24 pb-8 md:p-16">
      <h1 class="text-center mb-4 font-bold text-2xl">
        VISI DAN MISI SMKN 1 ARAHAN
      </h1>
      <div class="py-2">
        <h2 class="text-xl font-semibold mb-2">Visi</h2>
        <p class="text-sm">
          Menjadi pusat pendidikan yang unggul dan inovatif yang membentuk
          individu-individu berkualitas, berdaya saing, dan berkontribusi
          positif pada masyarakat global.
        </p>
      </div>
      <h2 class="text-xl font-semibold mb-2">Misi</h2>
      <ul class="px-4">
        <li class="list-decimal font-semibold mb-3">
          <h3>Memberikan Pendidikan Berkualitas</h3>
          <p class="font-normal text-sm mt-1">
            Sekolah kami berkomitmen untuk memberikan pendidikan berkualitas
            tinggi yang memungkinkan setiap siswa mencapai potensi terbaiknya
            dalam berbagai bidang ilmu pengetahuan, seni, dan olahraga.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Pengembangan Karakter</h3>
          <p class="font-normal text-sm mt-1">
            Kami berupaya membentuk karakter siswa kami dengan nilai-nilai
            moral, etika, kejujuran, dan kepemimpinan yang kuat. Kami percaya
            bahwa pembentukan karakter yang baik adalah landasan keberhasilan
            seumur hidup.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Inovasi Pendidikan</h3>
          <p class="font-normal text-sm mt-1">
            Kami selalu mencari cara baru untuk meningkatkan metode pengajaran
            dan pembelajaran kami. Kami berkomitmen untuk terus berinovasi dan
            memanfaatkan teknologi terbaru untuk mendukung pembelajaran yang
            efektif.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Pemberdayaan Siswa</h3>
          <p class="font-normal text-sm mt-1">
            Sekolah kami mendukung pemberdayaan siswa. Kami mendorong
            partisipasi siswa dalam kegiatan ekstrakurikuler, proyek-proyek
            penelitian, dan kegiatan sosial yang mendukung perkembangan mereka
            sebagai individu yang berpikiran terbuka dan kreatif.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Keragaman Dan Toleransi</h3>
          <p class="font-normal text-sm mt-1">
            Kami menghargai keragaman dalam komunitas sekolah kita dan mendorong
            toleransi serta penghargaan terhadap berbagai latar belakang budaya,
            agama, dan etnis.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Kemitraan Dengan Orang Tua</h3>
          <p class="font-normal text-sm mt-1">
            Kami memandang orang tua sebagai mitra penting dalam pendidikan
            anak-anak. Kami berkomitmen untuk menjaga komunikasi yang terbuka
            dan kerjasama yang erat dengan orang tua.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Keterlibatan Dalam Masyarakat</h3>
          <p class="font-normal text-sm mt-1">
            Sekolah kami aktif dalam masyarakat lokal dan berupaya untuk
            memberikan kontribusi positif. Kami mengajarkan siswa kami untuk
            peduli terhadap kepentingan masyarakat dan berperan aktif dalam
            kegiatan amal.
          </p>
        </li>
        <li class="list-decimal font-semibold mb-3">
          <h3>Pembangunan Berkelanjutan</h3>
          <p class="font-normal text-sm mt-1">
            Kami berkomitmen untuk pembangunan berkelanjutan dan pelestarian
            lingkungan. Kami mengajarkan siswa kami untuk menjadi warga dunia
            yang bertanggung jawab terhadap lingkungan.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
