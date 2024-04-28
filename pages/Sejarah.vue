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
      <div class="mb-4">
        <h1 class="text-3xl font-bold mb-4">Sejarah Sekolah</h1>
        <img
          src="https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="">
        <p class="mb-3">
          Sekolah SMKN 1 ARAHAN adalah sebuah institusi pendidikan yang berdiri
          pada tanggal XX Agustus XXXX. Sejak saat itu, sekolah ini telah
          berkomitmen untuk memberikan pendidikan berkualitas kepada generasi
          muda di daerah kita.
        </p>
        <p class="mb-3">
          Pendirian sekolah ini dimulai dengan tekad dan semangat yang tinggi
          dari sekelompok individu yang berkeinginan kuat untuk memberikan akses
          pendidikan yang lebih baik bagi anak-anak di daerah ini. Pada awalnya,
          sekolah ini beroperasi dengan fasilitas yang sederhana dan jumlah
          siswa yang terbatas. Namun, seiring berjalannya waktu,sekolah ini
          berkembang pesat.
        </p>
        <p class="mb-3">
          Dalam beberapa tahun pertama, sekolah ini memperluas fasilitasnya,
          menambah staf pengajar yang berkualitas, dan memperkenalkan
          program-program pendidikan yang inovatif. Ini semua bertujuan untuk
          memastikan bahwa setiap siswa mendapatkan pendidikan yang sesuai
          dengan kebutuhan mereka.
        </p>
        <p class="mb-3">
          Selama beberapa dekade terakhir, Sekolah kami telah melahirkan
          lulusan-lulusan yang sukses dalam berbagai bidang, termasuk ilmu
          pengetahuan, seni, olahraga, dan lainnya. Alumni sekolah ini telah
          menjadi pemimpin di komunitas kita dan terus berkontribusi pada
          perkembangan masyarakat.
        </p>
        <p class="mb-3">
          Sejarah sekolah ini adalah bukti keberhasilan dan dedikasi selama
          bertahun-tahun, dan kami optimis bahwa masa depan akan membawa lebih
          banyak prestasi dan kontribusi positif untuk generasi mendatang.
          Sekolah SMKN 1 ARAHAN tetap menjadi tempat di mana impian dan ambisi
          diberdayakan melalui pendidikan.
        </p>
      </div>
    </div>
  </div>
</template>
