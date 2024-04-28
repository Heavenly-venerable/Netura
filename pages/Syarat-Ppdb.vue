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
      <h1 class="text-3xl font-bold">
        Persyaratan Kelengkapan Berkas PPDB Online Tahun Pelajaran 2023/2024
      </h1>
      <p class="pb-4">Assalamualaikum Wr. Wb.</p>
      <p class="pb-4">
        Bagi Calon Siswa/i Baru Yang ingin mendaftar Ke SMKN 1 ARAHAN secara
        online, sebaiknya melengkapi berkas-berkas yang akan diunggah diportal
        pendaftaran ppdb online
        <NuxtLink to="/ppdb" class="text-amber-500">disini</NuxtLink>, agar
        memudahkan pendaftaran online sesuai dengan jalur yang dipilih.
        Persyaratan-persyaratan masing-masing jalur ada dibawah ini :
      </p>
      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-lg">Jalur Zonasi</h2>
        <ul class="ml-8 text-sm">
          <li class="list-disc">
            Kartu Keluarga (KK) paling singkat 1 (satu) tahun terakhir dan/atau
            surat keterangan domisili yang keluarkan oleh lurah
          </li>
          <li class="list-disc">Surat Keterangan Lulus (SKL)</li>
          <li class="list-disc">Akta Kelahiran</li>
        </ul>
      </div>
      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-lg">
          Jalur Afirmasi/Siswa Tidak Mampu
        </h2>
        <ul class="ml-8 text-sm">
          <li class="list-disc">
            Kartu Keluarga (KK) paling singkat 1 (satu) tahun terakhir dan/atau
            surat keterangan domisili yang keluarkan oleh lurah
          </li>
          <li class="list-disc">Surat Keterangan Lulus (SKL)</li>
          <li class="list-disc">
            Kartu Indonesia Pintar dan sejenisnya/ Surat Keterangan Tidak Mampu
            Mengetahui Lurah
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-lg">Jalur Prestasi</h2>
        <ul class="ml-8 text-sm">
          <li class="list-disc">
            Kartu Keluarga (KK) paling singkat 1 (satu) tahun terakhir dan/atau
            surat keterangan domisili yang keluarkan oleh lurah Surat Keterangan
            Lulus (SKL)
          </li>
          <li class="list-disc">Surat Keterangan Lulus (SKL)</li>
          <li class="list-disc">
            <p>Piagam/Sertifikat prestasi dengan kriteria :</p>
            <p>
              akademik : Piagam Prestasi Perorangan hasil perlombaan/Penghargaan
              pada tingkat Internasional, Nasional, Provinsi, dan/atau
              Kabupaten/Kota.
            </p>
            <p>
              non akademik : Piagaman Prestasi Perorangan hasil perlombaan
              penghargaan dibidang Event Olahraga dibawah Induk Organisasi
              Komite Olahraga Nasional Indonesia ( KONI )/Kemdikbud, baik pada
              tingkat Internasional, Nasional, Provinsi dan /atau
              Kabupaten/Kota.
            </p>
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-lg">
          Jalur Perpindahan Tugas Orang Tua
        </h2>
        <ul class="ml-8 text-sm">
          <li class="list-disc">
            Kartu Keluarga (KK) paling singkat 1 (satu) tahun terakhir dan/atau
            surat keterangan domisili yang keluarkan oleh lurah Surat Keterangan
            Lulus (SKL)
          </li>
          <li class="list-disc">Surat Keterangan Lulus (SKL)</li>
          <li class="list-disc">
            Surat Keterangan orang tua Pindah antar Kabupaten/Kota atau Provinsi
            untuk PNS, TNI/POLRI, Swasta atau BUMN
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
