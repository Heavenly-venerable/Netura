<script setup lang="ts">
const Button = defineAsyncComponent(() => import("primevue/button"));
const Dropdown = defineAsyncComponent(() => import("primevue/dropdown"));
const InputText = defineAsyncComponent(() => import("primevue/inputtext"));
const Checkbox = defineAsyncComponent(() => import("primevue/checkbox"));

const name = ref("");
const birthDate = ref("");
const city = ref("");
const checkbox = ref(false);
const selectedJenis = ref();
const jenis = ref([{ name: "baru" }, { name: "pindah" }]);
const selectedJalur = ref();
const jalur = ref([{ name: "umum" }, { name: "prestasi" }]);
const selectedJenisKelamin = ref();
const jenisKelamin = ref([{ name: "laki-laki" }, { name: "perempuan" }]);

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
      <h1 class="text-3xl font-bold mb-8">
        FORMULIR PENDAFTARAN PENERIMAAN PESERTA DIDIK BARU(PPDB) TAHUN 2024
      </h1>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Jenis pendaftaran</h3>
        <Dropdown
          v-model="selectedJenis"
          :options="jenis"
          optionLabel="name"
          checkmark
          :highlightOnSelect="false"
          placeholder="jenis pendaftaran"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Jalur pendaftaran</h3>
        <Dropdown
          v-model="selectedJalur"
          :options="jalur"
          optionLabel="name"
          checkmark
          :highlightOnSelect="false"
          placeholder="jalur pendaftaran"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Nama lengkap</h3>
        <div class="flex flex-col gap-2">
          <InputText
            v-model="name"
            type="text"
            placeholder="nama lengkap"
            aria-describedby="username-help"
          />
          <small class="text-gray-500" id="username-help"
            >Nama peserta didik harus sesuai dokumen resmi yang
            berlaku(Akta/ijazah sebelumnya)</small
          >
        </div>
      </div>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Jenis Kelamin</h3>
        <div class="flex flex-col gap-2">
          <Dropdown
            v-model="selectedJenisKelamin"
            :options="jenisKelamin"
            optionLabel="name"
            checkmark
            :highlightOnSelect="false"
            placeholder="jenis kelamin"
            class="w-full md:w-14rem"
          />
          <small class="text-gray-500" id="username-help"
            >Jenis kelamin peseta didik</small
          >
        </div>
      </div>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Tanggal Lahir</h3>
        <div class="flex flex-col gap-2">
          <InputText
            v-model="birthDate"
            type="text"
            placeholder="1 januari 2006"
            aria-describedby="birth-help"
          />
          <small class="text-gray-500" id="birth-help"
            >Tanggal lahir peserta didik harus sesuai dokumen resmi yang
            berlaku</small
          >
        </div>
      </div>
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-2">Kabupaten/Kota</h3>
        <div class="flex flex-col gap-2">
          <InputText
            v-model="city"
            type="text"
            placeholder="indramayu, jawa barat"
            aria-describedby="city-help"
          />
          <small class="text-gray-500" id="city-help"
            >Kabupaten tempat tinggal peserta didik</small
          >
        </div>
      </div>
      <div class="mb-8">
        <div class="flex items-center">
          <Checkbox
            v-model="checkbox"
            inputId="ingredient1"
            name="checkbox"
            value="checkbox"
          />
          <label for="ingredient1" class="text-sm text-gray-500 ml-2"
            >saya menyetujui dan menyatakan bahwa data yang tertera diatas
            adalah saya yang sebenarnya.</label
          >
        </div>
      </div>
      <div>
        <Button class="w-full" label="Daftar" />
      </div>
    </div>
  </div>
</template>
