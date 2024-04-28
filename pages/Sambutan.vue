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
    <div class="pt-24 pb-8 px-4 md:p-16">
      <h1 class="text-3xl font-bold mb-6">Sambutan kepala sekolah</h1>
      <p class="mb-3 leading-relaxed">
        Assalamu'alaikum Wr. Wb. Salam hangat untuk Anda semua,
      </p>
      <p class="mb-3 leading-relaxed">
        Saya, Kepala sekolah., merasa senang dan bersyukur atas kesempatan untuk
        menyambut Anda di website resmi SMKN 1 ARAHAN. Melalui platform digital
        ini, kami ingin memberikan informasi terbaru seputar kegiatan sekolah,
        pencapaian siswa, dan program yang kami jalankan di SMKN 1 ARAHAN.
      </p>
      <p class="mb-3 leading-relaxed">
        Kami di SMKN 1 ARAHAN selalu berkomitmen untuk memberikan pendidikan
        yang bermutu dan membangun potensi unik setiap siswa. Di sini, kami
        tidak hanya mengutamakan prestasi akademis, tapi juga mengembangkan
        kepribadian yang kuat, kreativitas, dan rasa cinta pada tanah air.
      </p>
      <p class="mb-3 leading-relaxed">
        Website ini dirancang untuk memudahkan komunikasi dan interaksi antara
        kami dengan siswa, orangtua, serta masyarakat. Kami ingin Anda merasa
        dekat dengan kami, dengan memberikan ruang untuk pertanyaan, masukan,
        atau pun saran yang dapat memperkaya pengalaman belajar.
      </p>
      <p class="mb-3 leading-relaxed">
        Kami sadar bahwa perjalanan ini tidak bisa kami lalui sendiri. Dukungan
        dari Anda semua sangat berarti bagi kesuksesan setiap langkah yang kami
        ambil. Mari bergandengan tangan, bersama-sama membangun lingkungan
        pendidikan yang inspiratif dan mendukung, untuk masa depan yang lebih
        baik.
      </p>
      <p class="mb-3 leading-relaxed">
        Terima kasih atas kunjungan Anda di website resmi SMKN 1 ARAHAN. Mari
        terus berbagi semangat untuk mengembangkan potensi, belajar, dan tumbuh
        bersama.
      </p>
      <p class="mb-3 leading-relaxed">Wassalamu'alaikum Wr. Wb.</p>
      <p class="leading-relaxed font-semibold">Kepala sekolah.</p>
      <p class="leading-relaxed">Kepala Sekolah SMKN 1 ARAHAN</p>
    </div>
  </div>
</template>
