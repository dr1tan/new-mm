<template>
  <section id="services" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="from-markajpink-500 to-markajgold-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Unsere Leistungen
      </h2>
      <p class="text-markajneutral-500 mt-4 text-lg">
        Entdecken Sie unsere Expertise in Webdesign, Marketing und mehr.
      </p>
    </div>

    <!-- Dienstleistungen -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Leistung 1 -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajpink-500 mt-4 text-xl font-semibold">
          Webdesign & Entwicklung
        </h3>
        <p class="text-markajneutral-500 mt-2 text-center text-sm">
          Maßgeschneiderte Websites, die modern, benutzerfreundlich und
          leistungsstark sind.
        </p>
      </div>

      <!-- Leistung 2 -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajgold-500 mt-4 text-xl font-semibold">
          SEO & Online-Marketing
        </h3>
        <p class="text-markajneutral-500 mt-2 text-center text-sm">
          Optimieren Sie Ihre Online-Präsenz und erreichen Sie mehr Kunden mit
          gezieltem Marketing.
        </p>
      </div>

      <!-- Leistung 3 -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajblue-500 mt-4 text-xl font-semibold">
          Branding & Logo-Design
        </h3>
        <p class="text-markajneutral-500 mt-2 text-center text-sm">
          Wir entwickeln ein unverwechselbares Branding, das Ihre Marke stärkt.
        </p>
      </div>

      <!-- Leistung 4 -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajgreen-500 mt-4 text-xl font-semibold">
          Wartung & Support
        </h3>
        <p class="text-markajneutral-500 mt-2 text-center text-sm">
          Wir kümmern uns um Updates, Sicherheit und Support, damit Ihre Website
          immer auf dem neuesten Stand bleibt.
        </p>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <button
        class="bg-markajgold-500 hover:bg-markajgold-600 rounded-full px-8 py-4 text-white shadow-lg transition"
      >
        Leistungen im Detail ansehen
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine spezielle Logik nötig
</script>

<style scoped>
/* Hover-Effekt */
.group:hover img {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>
