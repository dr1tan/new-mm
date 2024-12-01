<template>
  <section id="pricing" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Unsere Preise
      </h2>
      <p class="mt-4 text-lg text-markajneutral-500">
        Transparente Preise für maßgeschneiderte Dienstleistungen.
      </p>
    </div>

    <!-- Preispakete -->
    <div class="mt-12 flex flex-wrap justify-center gap-8">
      <!-- Webseiten Paket -->
      <GlareCard class="relative w-full max-w-md bg-markajpink p-3 text-black">
        <div class="p-6 text-center">
          <h3 class="text-left text-4xl font-extrabold">
            Webseiten individuell
          </h3>
          <p class="mt-2 pt-10 text-left text-2xl font-bold">ab 1.290€</p>
          <div class="my-4 h-[1px] w-full bg-black"></div>
          <ul class="space-y-2 text-lg">
            <li class="flex items-center gap-2">
              <span>✔</span> Maßgeschneidertes Design
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Responsive Layouts
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Inklusive Basis-SEO
            </li>
          </ul>
          <button
            class="mt-48 w-full rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            Termin buchen
          </button>
        </div>
      </GlareCard>

      <!-- SEO Paket -->
      <GlareCard class="relative w-full max-w-md bg-markajgold p-3 text-black">
        <div class="p-6 text-center">
          <h3 class="text-left text-4xl font-extrabold">SEO / Google Suche</h3>
          <p class="mt-2 pt-10 text-left text-2xl font-bold">
            ab 390€ / monatlich
          </p>
          <div class="my-4 h-[1px] w-full bg-black"></div>
          <ul class="space-y-2 text-lg">
            <li class="flex items-center gap-2">
              <span>✔</span> Ranking-Optimierung
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Keyword-Analyse
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Monatliches Reporting
            </li>
          </ul>
          <button
            class="mt-48 w-full rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            @click="console.log('Termin buchen')"
          >
            Termin buchen
          </button>
        </div>
      </GlareCard>

      <!-- SEA Paket -->
      <GlareCard
        class="relative w-full max-w-md bg-markajneutral-400 p-3 text-black"
      >
        <div class="p-6 text-center">
          <h3 class="text-left text-4xl font-extrabold">SEA / Google Ads</h3>
          <p class="mt-2 pt-20 text-left text-2xl font-bold">
            ab 290€ / monatlich
          </p>
          <div class="my-4 h-[1px] w-full bg-black"></div>
          <ul class="space-y-2 text-lg">
            <li class="flex items-center gap-2">
              <span>✔</span> Kampagnen-Management
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Zielgruppen-Targeting
            </li>
            <li class="flex items-center gap-2">
              <span>✔</span> Optimierung & Analyse
            </li>
          </ul>
          <button
            class="mt-48 w-full rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            Termin buchen
          </button>
        </div>
      </GlareCard>
    </div>
  </section>
  <ClientOnly>
    <div
      className="z-10 flex min-h-64 items-center justify-center rounded-lg  "
    >
      <TextScrollReveal text="Websites nicht von dieser Welt." />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import TextScrollReveal from '../inspira/TextScrollReveal.vue';
import GlareCard from '../inspira/GlareCard.vue';
</script>

<style scoped>
/* Adjust hover effects */
button:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
