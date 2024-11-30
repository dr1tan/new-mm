<template>
  <section
    id="case-studies"
    class="relative w-full px-8 py-16 md:px-16 lg:px-32"
  >
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="from-markajpink-500 to-markajgold-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Erfolgreiche Projekte
      </h2>
      <p class="text-markajneutral-500 mt-4 text-lg">
        Entdecken Sie, wie wir Unternehmen dabei helfen, online zu wachsen.
      </p>
    </div>

    <!-- Projektbeispiele -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Projekt 1 -->
      <div
        class="group rounded-lg bg-gray-100 p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajpink-500 mt-4 text-xl font-semibold">
          Online-Shop für Mode
        </h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Wir haben eine benutzerfreundliche Plattform entwickelt, die den
          Umsatz um 50 % steigerte.
        </p>
        <a
          href="#"
          class="text-markajgold-500 mt-4 inline-block text-sm font-semibold hover:underline"
        >
          Mehr erfahren →
        </a>
      </div>

      <!-- Projekt 2 -->
      <div
        class="group rounded-lg bg-gray-100 p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajgold-500 mt-4 text-xl font-semibold">
          Unternehmenswebsite für Berater
        </h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Moderne Website mit Fokus auf Kundenbindung und professionelles
          Branding.
        </p>
        <a
          href="#"
          class="text-markajgold-500 mt-4 inline-block text-sm font-semibold hover:underline"
        >
          Mehr erfahren →
        </a>
      </div>

      <!-- Projekt 3 -->
      <div
        class="group rounded-lg bg-gray-100 p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajblue-500 mt-4 text-xl font-semibold">
          Website für ein Café
        </h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Lokales Café mit einer ansprechenden Website, die mehr Gäste anzieht.
        </p>
        <a
          href="#"
          class="text-markajgold-500 mt-4 inline-block text-sm font-semibold hover:underline"
        >
          Mehr erfahren →
        </a>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <button
        class="bg-markajgold-500 hover:bg-markajgold-600 rounded-full px-8 py-4 text-white shadow-lg transition"
      >
        Mehr Projekte ansehen
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine spezielle Logik nötig
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
