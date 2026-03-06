<template>
  <main class="min-h-screen pt-20 pb-16">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        
        <h1 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          Struktur Organisasi
          <span class="font-medium text-amber-600 dark:text-amber-400">SMKN 1 ARAHAN</span>
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Bagan struktur kepengurusan dan tata kelola sekolah tahun ajaran 2024/2025
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <!-- Organization Chart -->
      <div class="mb-12">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Bagan Struktur Organisasi
        </h2>
        
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-md p-4 md:p-6 border border-gray-100 dark:border-gray-800 overflow-x-auto">
          <div class="min-w-[800px] md:min-w-0 flex justify-center">
            <OrganizationChart 
              :value="data" 
              class="custom-org-chart"
            >
              <template #default="slotProps">
                <div class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {{ slotProps.node.label }}
                </div>
              </template>
            </OrganizationChart>
          </div>
        </div>
        
        <!-- Chart Legend -->
        <div class="flex flex-wrap items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-500">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>Pimpinan Utama</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Wakil Pimpinan</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Koordinator</span>
          </div>
        </div>
      </div>

      <!-- Detail Table Section -->
      <div>
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Daftar Personalia
        </h2>

        <!-- Search and Filter -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div class="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Cari nama atau posisi..."
              class="w-full px-3 py-2 pl-9 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
            />
            <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>Total: 11 personil</span>
            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Diperbarui: 15 Jan 2024</span>
          </div>
        </div>

        <!-- Data Table -->
        <div class="border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden">
          <DataTable 
            :value="products" 
            stripedRows
            class="custom-datatable"
          >
            <Column field="nama" header="Nama">
              <template #body="{ data }">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                    {{ data.nama.charAt(0) }}
                  </div>
                  <span class="text-sm text-gray-900 dark:text-white">{{ data.nama }}</span>
                </div>
              </template>
            </Column>
            
            <Column field="posisi" header="Posisi">
              <template #body="{ data }">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ data.posisi }}</span>
              </template>
            </Column>
            
            <Column header="Aksi" headerClass="text-center">
              <template #body>
                <button class="text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
                  Detail
                </button>
              </template>
            </Column>
          </DataTable>
        </div>

        <!-- Download Button -->
        <div class="flex justify-end mt-6">
          <button class="inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-600 border border-amber-200 rounded-md hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Struktur Organisasi (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { OrganizationChartNode } from "primevue/organizationchart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import OrganizationChart from "primevue/organizationchart";

// Organization Chart Data
const data: Ref<OrganizationChartNode> = ref({
  key: "0",
  label: "Komite Sekolah",
  expanded: true,
  children: [
    {
      key: "1",
      label: "Kepala Sekolah",
      expanded: true,
      children: [
        {
          key: "2",
          label: "Wakil Kepala Sekolah",
          className: "waka",
          children: [
            {
              key: "3",
              label: "Wakasek Kurikulum",
              className: "wakasek"
            },
            {
              key: "4",
              label: "Wakasek Kesiswaan",
              className: "wakasek"
            },
            {
              key: "5",
              label: "Wakasek Sarana",
              className: "wakasek"
            },
            {
              key: "6",
              label: "Wakasek Humas",
              className: "wakasek"
            }
          ]
        },
        {
          key: "7",
          label: "Koordinator TU",
          className: "koordinator"
        },
        {
          key: "8",
          label: "Koordinator BK",
          className: "koordinator"
        },
        {
          key: "9",
          label: "Wali Kelas",
          className: "wali-kelas"
        },
        {
          key: "10",
          label: "OSIS",
          className: "osis"
        }
      ],
    },
  ],
});

// Table Data with more details
const products = ref([
  { id: 1, nama: "Drs. H. Ahmad Fauzi, M.Pd.", posisi: "Kepala Sekolah" },
  { id: 2, nama: "H. Hasanudin, S.Pd., M.M.", posisi: "Wakil Kepala Sekolah" },
  { id: 3, nama: "Dra. Hj. Siti Aminah", posisi: "Koordinator TU" },
  { id: 4, nama: "Drs. Ahmad Syarifudin", posisi: "Wakasek Kurikulum" },
  { id: 5, nama: "Eko Prasetyo, S.Pd.", posisi: "Wakasek Kesiswaan" },
  { id: 6, nama: "Ir. H. Maman Suryaman", posisi: "Wakasek Sarana" },
  { id: 7, nama: "Dede Yusuf, S.Pd.I.", posisi: "Wakasek Humas" },
  { id: 8, nama: "Rina Marlina, S.Psi.", posisi: "Koordinator BK" },
  { id: 9, nama: "Dewi Sartika, S.Pd.", posisi: "Wali Kelas X TJKT" },
  { id: 10, nama: "Asep Saepuloh, S.Pd.", posisi: "Wali Kelas XI TKRO" },
  { id: 11, nama: "Muhammad Rizki, S.Kom.", posisi: "Pembina OSIS" },
]);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<style scoped>
/* Custom Organization Chart Styling */
:deep(.custom-org-chart .p-organizationchart) {
  @apply border-none;
}

:deep(.custom-org-chart .p-organizationchart-node) {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-none px-3 py-2;
}

:deep(.custom-org-chart .p-organizationchart-node-content) {
  @apply bg-transparent border-none p-0;
}

:deep(.custom-org-chart .p-organizationchart-line-down) {
  @apply bg-gray-200 dark:bg-gray-700;
}

:deep(.custom-org-chart .p-organizationchart-line-left),
:deep(.custom-org-chart .p-organizationchart-line-right),
:deep(.custom-org-chart .p-organizationchart-line-top) {
  @apply border-gray-200 dark:border-gray-700;
}

/* Custom DataTable Styling */
:deep(.custom-datatable .p-datatable-header) {
  @apply bg-transparent border-none p-0;
}

:deep(.custom-datatable .p-datatable-thead > tr > th) {
  @apply bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm border-b border-gray-200 dark:border-gray-700 py-3 px-4;
}

:deep(.custom-datatable .p-datatable-tbody > tr) {
  @apply border-b border-gray-100 dark:border-gray-800;
}

:deep(.custom-datatable .p-datatable-tbody > tr > td) {
  @apply py-3 px-4 text-sm;
}

:deep(.custom-datatable .p-datatable-tbody > tr:nth-child(even)) {
  @apply bg-gray-50/50 dark:bg-gray-800/30;
}

:deep(.custom-datatable .p-datatable-tbody > tr:hover) {
  @apply bg-gray-100/50 dark:bg-gray-800/50 transition-colors;
}

/* Custom scrollbar for chart container */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f9fafb;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f9fafb;
  border-radius: 20px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 20px;
}

.dark .overflow-x-auto::-webkit-scrollbar-track {
  background: #111827;
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #374151;
}
</style>
