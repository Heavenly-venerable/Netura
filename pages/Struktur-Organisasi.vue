<template>
  <main class="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Header Section -->
    <div class="border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Organization Chart -->
      <div class="mb-12">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Bagan Struktur Organisasi
        </h2>

        <div
          class="bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 overflow-x-auto transition-colors duration-200">
          <div class="p-6 min-w-[1300px]">
            <OrganizationChart :value="data" class="custom-org-chart">
              <template #default="slotProps">
                <div class="org-chart-node" :class="getNodeClass(slotProps.node.className)">
                  <div class="node-label">{{ slotProps.node.label }}</div>
                </div>
              </template>
            </OrganizationChart>
          </div>
        </div>

        <!-- Chart Legend -->
        <div class="flex flex-wrap items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
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

      <!-- Detail Table Section - Custom Table -->
      <div>
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-1 h-5 bg-amber-500 rounded-full"></span>
          Daftar Personalia
        </h2>

        <!-- Search and Filter -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div class="relative w-full sm:w-64">
            <input v-model="searchQuery" type="text" placeholder="Cari nama atau posisi..."
              class="w-full px-3 py-2 pl-9 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-500 dark:focus:ring-amber-400 transition-colors" />
            <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Total: {{ filteredPersonnel.length }} personil</span>
            <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            <span>Diperbarui: 15 Jan 2024</span>
          </div>
        </div>

        <!-- Custom Table -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Nama</th>
                <th
                  class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Posisi</th>
                <th
                  class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
              <tr v-for="person in filteredPersonnel" :key="person.nama"
                class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-3">
                    <div class="avatar-placeholder" :style="{ backgroundColor: getAvatarColor(person.nama) }">
                      {{ getInitials(person.nama) }}
                    </div>
                    <span class="text-sm font-medium text-gray-900 dark:text-white">{{ person.nama }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <span class="posisi-badge" :class="getPosisiClass(person.posisi)">
                    {{ person.posisi }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <button @click="showDetail(person)" class="detail-button">
                    Detail
                  </button>
                </td>
              </tr>
              <tr v-if="filteredPersonnel.length === 0">
                <td colspan="3" class="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  Tidak ada data yang ditemukan
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Download Button -->
        <div class="flex justify-end mt-6">
          <button
            class="inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/30 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
import OrganizationChart from "primevue/organizationchart";

// Search query
const searchQuery = ref("");

// Organization Chart Data
const data: Ref<OrganizationChartNode> = ref({
  key: "0",
  label: "Komite Sekolah",
  expanded: true,
  className: "komite-sekolah",
  children: [
    {
      key: "1",
      label: "Kepala Sekolah\nDrs. H. Ahmad Fauzi, M.Pd.",
      expanded: true,
      className: "kepala-sekolah",
      children: [
        {
          key: "2",
          label: "Wakil Kepala Sekolah",
          className: "wakil-kepala",
          children: [
            {
              key: "3",
              label: "Wakasek Kurikulum\nDra. Hj. Siti Rohmah",
              className: "wakasek"
            },
            {
              key: "4",
              label: "Wakasek Kesiswaan\nMuhammad Rizki, S.Pd.",
              className: "wakasek"
            },
            {
              key: "5",
              label: "Wakasek Sarana\nDrs. H. Maman Suryaman",
              className: "wakasek"
            },
            {
              key: "6",
              label: "Wakasek Humas\nHj. Dewi Lestari, S.Pd., M.M.",
              className: "wakasek"
            }
          ]
        },
        {
          key: "7",
          label: "Koordinator TU\nAhmad Fauzan, S.Kom.",
          className: "koordinator"
        },
        {
          key: "8",
          label: "Koordinator BK\nDra. Siti Aisyah",
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

// Personnel Data
const personnel = ref([
  { nama: "Drs. H. Ahmad Fauzi, M.Pd.", posisi: "Kepala Sekolah" },
  { nama: "Dra. Hj. Siti Rohmah", posisi: "Wakasek Kurikulum" },
  { nama: "Muhammad Rizki, S.Pd.", posisi: "Wakasek Kesiswaan" },
  { nama: "Drs. H. Maman Suryaman", posisi: "Wakasek Sarana" },
  { nama: "Hj. Dewi Lestari, S.Pd., M.M.", posisi: "Wakasek Humas" },
  { nama: "Ahmad Fauzan, S.Kom.", posisi: "Koordinator TU" },
  { nama: "Dra. Siti Aisyah", posisi: "Koordinator BK" },
  { nama: "Drs. H. Ahmad Syamsuri", posisi: "Ketua Komite Sekolah" },
  { nama: "Muhammad Fajar, S.Pd.", posisi: "Wali Kelas XII TKJ" },
  { nama: "Nurul Hikmah, S.Pd.", posisi: "Wali Kelas XII TKRO" },
  { nama: "Rina Marlina, S.Pd.", posisi: "Wali Kelas XII TB" }
]);

// Filtered personnel based on search
const filteredPersonnel = computed(() => {
  if (!searchQuery.value) return personnel.value;
  const query = searchQuery.value.toLowerCase();
  return personnel.value.filter(
    item => item.nama.toLowerCase().includes(query) ||
      item.posisi.toLowerCase().includes(query)
  );
});

// Helper functions
function getNodeClass(className: string) {
  const classes = ['org-chart-node'];
  if (className === 'kepala-sekolah') classes.push('node-kepala-sekolah');
  if (className === 'wakil-kepala') classes.push('node-wakil-kepala');
  if (className?.includes('wakasek')) classes.push('node-wakasek');
  if (className === 'koordinator') classes.push('node-koordinator');
  if (className === 'komite-sekolah') classes.push('node-komite');
  if (className === 'wali-kelas') classes.push('node-wali-kelas');
  if (className === 'osis') classes.push('node-osis');
  return classes.join(' ');
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#6366F1'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash |= 0;
  }
  return colors[Math.abs(hash) % colors.length];
}

function getPosisiClass(posisi: string): string {
  if (posisi.includes('Kepala Sekolah')) return 'posisi-kepala';
  if (posisi.includes('Wakasek')) return 'posisi-wakasek';
  if (posisi.includes('Koordinator')) return 'posisi-koordinator';
  if (posisi.includes('Wali Kelas')) return 'posisi-wali';
  return 'posisi-default';
}

function showDetail(data: any) {
  alert(`Detail untuk: ${data.nama}\nPosisi: ${data.posisi}`);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  scrollToTop();
});
</script>

<style scoped>
/* ============================================
   ORGANIZATION CHART CUSTOM STYLES
   ============================================ */

/* Base Organization Chart Container */
:deep(.custom-org-chart) {
  display: flex;
  justify-content: center;
  font-family: inherit;
  background: transparent;
}

/* Remove default PrimeVue padding and backgrounds */
:deep(.custom-org-chart .p-organizationchart) {
  background: transparent;
}

:deep(.custom-org-chart .p-organizationchart-table) {
  margin: 0 auto;
}

/* Node Container - Remove default PrimeVue rounded corners */
:deep(.custom-org-chart .p-organizationchart-node-content) {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
}

/* Custom Node Styles */
.org-chart-node {
  min-width: 180px;
  padding: 12px 16px;
  text-align: center;
  position: relative;
  border: 2px solid;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.node-label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: pre-line;
  color: #1f2937;
}

.dark .node-label {
  color: #f3f4f6;
}

/* Node Type Specific Styles */
.org-chart-node.node-kepala-sekolah {
  background: #fef3c7;
  border-color: #f59e0b;
}

.dark .org-chart-node.node-kepala-sekolah {
  background: #422006;
  border-color: #f59e0b;
}

.org-chart-node.node-wakasek {
  background: #eff6ff;
  border-color: #3b82f6;
}

.dark .org-chart-node.node-wakasek {
  background: #1e3a8a;
  border-color: #3b82f6;
}

.org-chart-node.node-koordinator {
  background: #ecfdf5;
  border-color: #10b981;
}

.dark .org-chart-node.node-koordinator {
  background: #064e3b;
  border-color: #10b981;
}

.org-chart-node.node-komite {
  background: #fef9e3;
  border-color: #eab308;
}

.dark .org-chart-node.node-komite {
  background: #422006;
  border-color: #eab308;
}

.org-chart-node.node-wakil-kepala {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.dark .org-chart-node.node-wakil-kepala {
  background: #374151;
  border-color: #6b7280;
}

.org-chart-node.node-wali-kelas {
  background: #fef9e3;
  border-color: #fbbf24;
}

.dark .org-chart-node.node-wali-kelas {
  background: #451a03;
  border-color: #fbbf24;
}

.org-chart-node.node-osis {
  background: #fce7f3;
  border-color: #ec4899;
}

.dark .org-chart-node.node-osis {
  background: #831843;
  border-color: #ec4899;
}

/* Connection Lines */
:deep(.custom-org-chart .p-organizationchart-line-down) {
  background-color: #d1d5db;
  margin: 0;
}

.dark :deep(.custom-org-chart .p-organizationchart-line-down) {
  background-color: #4b5563;
}

:deep(.custom-org-chart .p-organizationchart-line-left),
:deep(.custom-org-chart .p-organizationchart-line-right) {
  border-color: #d1d5db;
}

.dark :deep(.custom-org-chart .p-organizationchart-line-left),
.dark :deep(.custom-org-chart .p-organizationchart-line-right) {
  border-color: #4b5563;
}

/* Table Cells in Org Chart */
:deep(.custom-org-chart .p-organizationchart-table td) {
  padding: 0 8px;
  background: transparent;
}

:deep(.custom-org-chart table) {
  background: transparent;
}

/* ============================================
   CUSTOM TABLE STYLES
   ============================================ */

/* Avatar Placeholder */
.avatar-placeholder {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
}

/* Position Badges */
.posisi-badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 6px;
}

.posisi-kepala {
  background-color: #fef3c7;
  color: #b45309;
}

.dark .posisi-kepala {
  background-color: #451a03;
  color: #fed7aa;
}

.posisi-wakasek {
  background-color: #dbeafe;
  color: #1e40af;
}

.dark .posisi-wakasek {
  background-color: #1e3a8a;
  color: #bfdbfe;
}

.posisi-koordinator {
  background-color: #d1fae5;
  color: #065f46;
}

.dark .posisi-koordinator {
  background-color: #064e3b;
  color: #a7f3d0;
}

.posisi-wali {
  background-color: #e9ecef;
  color: #4b5563;
}

.dark .posisi-wali {
  background-color: #374151;
  color: #d1d5db;
}

.posisi-default {
  background-color: #f3f4f6;
  color: #4b5563;
}

.dark .posisi-default {
  background-color: #374151;
  color: #e5e7eb;
}

/* Action Button */
.detail-button {
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #f59e0b;
  background-color: #fef3c7;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.detail-button:hover {
  background-color: #fde68a;
  transform: translateY(-1px);
}

.dark .detail-button {
  background-color: #451a03;
  color: #fcd34d;
}

.dark .detail-button:hover {
  background-color: #713f12;
}

/* Table Styles */
table {
  border-collapse: collapse;
}

th {
  font-weight: 600;
}

/* Scrollbar Styles */
.overflow-x-auto {
  scrollbar-width: thin;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 4px;
}

.dark .overflow-x-auto::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

tbody tr {
  animation: fadeIn 0.3s ease forwards;
}

/* Responsive */
@media (max-width: 640px) {
  .org-chart-node {
    min-width: 140px;
    padding: 8px 12px;
  }

  .node-label {
    font-size: 0.75rem;
  }

  th,
  td {
    padding: 8px 12px;
  }

  .avatar-placeholder {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }

  .posisi-badge {
    font-size: 0.7rem;
    padding: 2px 8px;
  }
}
</style>
