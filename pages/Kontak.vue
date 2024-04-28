<script setup lang="ts">
const Button = defineAsyncComponent(() => import("primevue/button"));

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
  <section class="bg-white dark:bg-gray-900">
    <div class="pt-24 pb-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
      >
        Kontak Kami
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
      >
        Kirim pertanyaan, saran atau masukan anda kepada kami
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label
            for="nama"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Nama lengkap</label
          >
          <input
            type="text"
            id="nama"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="nama lengkap"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="email anda"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >pesan</label
          >
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="pesan..."
          ></textarea>
        </div>
        <Button class="w-full" type="submit" label="Send message" />
      </form>
      <div class="pt-10">
        <h2 class="text-xl font-semibold">Media Sosial</h2>
        <p class="text-sm text-gray-500">Media sosial sekolah kami</p>
        <div class="flex flex-wrap gap-2 py-2">
          <Button
            size="small"
            type="button"
            label="Facebook"
            icon="pi pi-facebook"
            severity="secondary"
          />
          <Button
            size="small"
            type="button"
            label="Instagram"
            icon="pi pi-instagram"
            severity="secondary"
          />
          <Button
            class="font-medium text-sm"
            size="small"
            type="button"
            label="Tiktok"
            severity="secondary"
            ><svg
              class="w-3 h-3 mr-2 fill-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
              />
            </svg>
            Tiktok</Button
          ><Button
            size="small"
            type="button"
            label="Youtube"
            icon="pi pi-youtube"
            severity="secondary"
          />
        </div>
      </div>
      <div class="pt-10">
        <h2 class="text-xl font-semibold">Informasi Lainnya</h2>
        <p class="text-sm text-gray-500">
          informasi lainnya yang mungkin membantu
        </p>
        <div class="py-2">
          <div class="flex pb-4 items-center gap-4">
            <i class="pi pi-map"></i>
            <p class="text-sm">
              Jl. Raya Arahan, Linggajati, Kec. Arahan, Kabupaten Indramayu,
              Jawa Barat
            </p>
          </div>
          <div class="flex pb-4 items-center gap-4">
            <i class="pi pi-phone"></i>
            <p class="text-sm">+62 896 5529 5884</p>
          </div>
          <div class="flex pb-4 items-center gap-4">
            <i class="pi pi-envelope"></i>
            <p class="text-sm">smkn1arahan@gmail.com</p>
          </div>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Smkn1arahan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameborder="5"
          loading="lazy"
          class="w-full py-4 h-64"
        ></iframe>
      </div>
    </div>
  </section>
</template>
