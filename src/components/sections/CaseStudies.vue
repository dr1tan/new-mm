<template>
  <section
    id="case-studies"
    class="relative w-full px-8 py-16 md:px-16 lg:px-32"
  >
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Erfolgreiche Projekte
      </h2>
      <p class="mt-4 text-lg text-markajneutral-500">Unser letztes Projekt:</p>
    </div>

    <!-- Mockup und Text -->
    <div class="relative mt-12 flex flex-col items-start gap-8 p-4 md:flex-row">
      <!-- Safari Mockup -->

      <!-- Safari Mockup -->
      <div class="w-full max-w-5xl">
        <SafariMockup url="athena-roma.de" src="/athena.jpg" />
      </div>

      <!-- Text -->
      <div class="flex w-full flex-col justify-center">
        <h3 class="text-2xl font-bold text-markajgold-500">
          Modernes Webdesign für Restaurants
        </h3>
        <p class="mt-4 text-lg text-markajneutral-500">
          Das Projekt für Athena Roma umfasst ein benutzerfreundliches Design,
          schnelle Ladezeiten und eine responsive Struktur, die sowohl auf
          Mobilgeräten als auch auf Desktops einwandfrei funktioniert.
        </p>
        <p class="mt-4 text-lg text-markajneutral-500">
          Die Website wurde mit den neuesten Technologien entwickelt und bietet
          Besuchern eine einfache Navigation, um das Restaurant optimal zu
          präsentieren.
        </p>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <button
        class="rounded-full bg-markajgold-500 px-8 py-4 text-white shadow-lg transition hover:bg-markajgold-600"
      >
        Mehr Projekte ansehen
      </button>
    </div>
  </section>
  <Reviews />
</template>

<script setup lang="ts">
import Reviews from '../molecules/Reviews.vue';
import SafariMockup from '../inspira/SafariMockup.vue';
</script>

<style scoped>
/* Optionaler Hover-Effekt für Bilder */
.group img {
  transition: transform 0.3s ease-in-out;
}
.group:hover img {
  transform: scale(1.05);
}
</style>
