<template>
  <div class="pt-24 pb-8 px-4 md:p-16">
    <h1 class="text-3xl font-bold text-center mb-6">Struktur Organisasi</h1>
    <div class="overflow-x-auto mb-6">
      <OrganizationChart :value="data">
        <template #default="slotProps">
          <span>{{ slotProps.node.label }}</span>
        </template>
      </OrganizationChart>
    </div>
    <DataTable :value="products" stripedRows showGridlines>
      <Column field="nama" header="Nama"></Column>
      <Column field="posisi" header="Posisi"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { OrganizationChartNode } from "primevue/organizationchart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
//const DataTable = defineAsyncComponent(() => import("primevue/datatable"));
//const Column = defineAsyncComponent(() => import("primevue/column"));
const OrganizationChart = defineAsyncComponent(() => import("primevue/organizationchart"));


const data: Ref<OrganizationChartNode> = ref({
  key: "Komite sekolah",
  label: "Komite sekolah",
  children: [
    {
      key: "Kepala sekolah",
      label: "Kepala sekolah",
      children: [
        {
          key: "Wakil kepala sekolah",
          label: "Wakil kepala sekolah",
        },
        {
          key: "Koordinator TU",
          label: "Koordinator TU",
        },
        {
          key: "Wakasek kurikulum",
          label: "Wakasek kurikulum",
        },
        {
          key: "Wakasek kesiswaan",
          label: "Wakasek kesiswaan",
        },
        {
          key: "Wakasek sarana",
          label: "Wakasek sarana",
        },
        {
          key: "Wakasek humas",
          label: "Wakasek humas",
        },
        {
          key: "Koordinator BK",
          label: "Koordinator BK",
        },
        {
          key: "Wali kelas",
          label: "Wali kelas",
        },
        {
          key: "Osis",
          label: "Osis",
        },
      ],
    },
  ],
});

const products = ref([
  {
    nama: "Komite sekolah",
    posisi: "Komite sekolah",
  },
  {
    nama: "Kepala sekolah",
    posisi: "Kepala sekolah",
  },
  {
    nama: "Wakil kepala sekolah",
    posisi: "Wakil kepala sekolah",
  },
  {
    nama: "Koordinator TU",
    posisi: "Koordinator TU",
  },
  {
    nama: "Wakasek kurikulum",
    posisi: "Wakasek kurikulum  ",
  },
  {
    nama: "Wakasek kesiswaan",
    posisi: "Wakasek kesiswaan",
  },
  {
    nama: "Wakasek sarana",
    posisi: "Wakasek sarana",
  },
  {
    nama: "Wakasek humas",
    posisi: "Wakasek humas",
  },
  {
    nama: "Koordinator BK",
    posisi: "Koordinator BK",
  },
  {
    nama: "Wali kelas",
    posisi: "Wali kelas",
  },
  {
    nama: "Osis",
    posisi: "Osis",
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
