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
    <div class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      <!-- Leistung 1 -->
      <div class="relative mx-auto w-full max-w-sm">
        <div
          class="relative flex h-60 flex-col items-center justify-center overflow-hidden rounded-2xl bg-markajneutral-900 p-8 shadow-xl"
        >
          <Meteors />
          <div class="relative z-10 text-center">
            <h3 class="mb-4 text-4xl font-extrabold text-markajpink-300">
              Webdesign & Entwicklung
            </h3>
            <p
              class="text-base font-medium leading-relaxed text-markajneutral-400"
            >
              Wir gestalten moderne und benutzerfreundliche Websites, die auf
              Ihre Marke und Ihre Ziele abgestimmt sind.
            </p>
          </div>
        </div>
      </div>

      <!-- Leistung 2 -->
      <div class="relative mx-auto w-full max-w-sm">
        <div
          class="relative flex h-60 flex-col items-center justify-center overflow-hidden rounded-2xl bg-markajneutral-900 p-8 shadow-xl"
        >
          <Meteors />
          <div class="relative z-10 text-center">
            <h3 class="mb-4 text-4xl font-extrabold text-markajgold-300">
              SEO & Online-Marketing
            </h3>
            <p
              class="text-base font-medium leading-relaxed text-markajneutral-400"
            >
              Steigern Sie Ihre Sichtbarkeit im Internet und gewinnen Sie mehr
              Kunden mit unseren effektiven Marketingstrategien.
            </p>
          </div>
        </div>
      </div>

      <!-- Leistung 3 -->
      <div class="relative mx-auto w-full max-w-sm">
        <div
          class="relative flex h-60 flex-col items-center justify-center overflow-hidden rounded-2xl bg-markajneutral-900 p-8 shadow-xl"
        >
          <Meteors />
          <div class="relative z-10 text-center">
            <h3 class="mb-4 text-4xl font-extrabold text-markajblue-300">
              Branding & Logo-Design
            </h3>
            <p
              class="text-base font-medium leading-relaxed text-markajneutral-400"
            >
              Wir entwickeln ein einzigartiges Branding und Logos, die Ihre
              Marke unverkennbar machen und stärken.
            </p>
          </div>
        </div>
      </div>

      <!-- Leistung 4 -->
      <div class="relative mx-auto w-full max-w-sm">
        <div
          class="relative flex h-60 flex-col items-center justify-center overflow-hidden rounded-2xl bg-markajneutral-900 p-8 shadow-xl"
        >
          <Meteors />
          <div class="relative z-10 text-center">
            <h3 class="mb-4 text-4xl font-extrabold text-markajgreen-300">
              Wartung & Support
            </h3>
            <p
              class="text-base font-medium leading-relaxed text-markajneutral-400"
            >
              Wir stellen sicher, dass Ihre Website immer aktuell, sicher und
              fehlerfrei bleibt – für Ihren Erfolg online.
            </p>
          </div>
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
