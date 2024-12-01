<template>
  <section id="services" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Unsere Leistungen
      </h2>
      <p class="mt-4 text-lg text-markajneutral-500">
        Entdecken Sie unsere Expertise in Webdesign, Marketing und mehr.
      </p>
    </div>

    <!-- Dienstleistungen -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <!-- Leistung 1 -->
      <div class="relative mx-auto w-full max-w-xs">
        <div
          class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-markajneutral-900 px-4 py-8 shadow-xl"
        >
          <h3 class="relative z-50 mb-4 text-xl font-bold text-markajpink-300">
            Webdesign & Entwicklung
          </h3>
          <p
            class="relative z-50 mb-4 text-base font-normal text-markajneutral-400"
          >
            Maßgeschneiderte Websites, die modern, benutzerfreundlich und
            leistungsstark sind.
          </p>
          <Meteors />
        </div>
      </div>

      <!-- Leistung 2 -->
      <div class="relative mx-auto w-full max-w-xs">
        <div
          class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-markajneutral-900 px-4 py-8 shadow-xl"
        >
          <h3 class="relative z-50 mb-4 text-xl font-bold text-markajgold-300">
            SEO & Online-Marketing
          </h3>
          <p
            class="relative z-50 mb-4 text-base font-normal text-markajneutral-400"
          >
            Optimieren Sie Ihre Online-Präsenz und erreichen Sie mehr Kunden mit
            gezieltem Marketing.
          </p>
          <Meteors />
        </div>
      </div>

      <!-- Leistung 3 -->
      <div class="relative mx-auto w-full max-w-xs">
        <div
          class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-markajneutral-900 px-4 py-8 shadow-xl"
        >
          <h3 class="relative z-50 mb-4 text-xl font-bold text-markajblue-300">
            Branding & Logo-Design
          </h3>
          <p
            class="relative z-50 mb-4 text-base font-normal text-markajneutral-400"
          >
            Wir entwickeln ein unverwechselbares Branding, das Ihre Marke
            stärkt.
          </p>
          <Meteors />
        </div>
      </div>

      <!-- Leistung 4 -->
      <div class="relative mx-auto w-full max-w-xs">
        <div
          class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-markajneutral-900 px-4 py-8 shadow-xl"
        >
          <h3 class="relative z-50 mb-4 text-xl font-bold text-markajgreen-300">
            Wartung & Support
          </h3>
          <p
            class="relative z-50 mb-4 text-base font-normal text-markajneutral-400"
          >
            Wir kümmern uns um Updates, Sicherheit und Support, damit Ihre
            Website immer auf dem neuesten Stand bleibt.
          </p>
          <Meteors />
        </div>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <button
        class="rounded-full bg-markajgold-500 px-8 py-4 text-white shadow-lg transition hover:bg-markajgold-600"
      >
        Leistungen im Detail ansehen
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Reviews from '../molecules/Reviews.vue';
// Meteors-Komponente importieren
import Meteors from '@/components/inspira/Meteors.vue';
</script>

<style scoped>
/* Zusätzliche Stile für konsistente Farben */
</style>
