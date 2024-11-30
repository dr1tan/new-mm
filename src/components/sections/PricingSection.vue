<template>
  <section id="pricing" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="from-markajpink-500 to-markajgold-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Unsere Preise
      </h2>
      <p class="text-markajneutral-500 mt-4 text-lg">
        Faire Preise für professionelle Leistungen. Wählen Sie das passende
        Paket für Ihre Anforderungen.
      </p>
    </div>

    <!-- Preispakete -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Basic Paket -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajpink-500 text-xl font-semibold">Basic</h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Perfekt für kleine Projekte und Start-ups.
        </p>
        <p class="text-markajgold-500 mt-4 text-3xl font-bold">€1.499</p>
        <ul class="text-markajneutral-500 mt-4 space-y-2 text-sm">
          <li>1 individuelle Seite</li>
          <li>Responsive Design</li>
          <li>Basis SEO</li>
          <li>1 Monat Support</li>
        </ul>
        <button
          class="bg-markajgold-500 hover:bg-markajgold-600 mt-6 rounded-full px-6 py-3 text-white shadow-lg transition"
        >
          Jetzt starten
        </button>
      </div>

      <!-- Advanced Paket -->
      <div
        class="ring-markajpink-500 group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg ring-2 transition hover:shadow-xl"
      >
        <h3 class="text-markajpink-500 text-xl font-semibold">Advanced</h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Ideal für mittelständische Unternehmen.
        </p>
        <p class="text-markajgold-500 mt-4 text-3xl font-bold">€2.999</p>
        <ul class="text-markajneutral-500 mt-4 space-y-2 text-sm">
          <li>Bis zu 5 Seiten</li>
          <li>Responsive Design</li>
          <li>SEO-Optimierung</li>
          <li>3 Monate Support</li>
        </ul>
        <button
          class="bg-markajgold-500 hover:bg-markajgold-600 mt-6 rounded-full px-6 py-3 text-white shadow-lg transition"
        >
          Jetzt starten
        </button>
      </div>

      <!-- Premium Paket -->
      <div
        class="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
      >
        <h3 class="text-markajpink-500 text-xl font-semibold">Premium</h3>
        <p class="text-markajneutral-500 mt-2 text-sm">
          Für anspruchsvolle, maßgeschneiderte Lösungen.
        </p>
        <p class="text-markajgold-500 mt-4 text-3xl font-bold">€5.999</p>
        <ul class="text-markajneutral-500 mt-4 space-y-2 text-sm">
          <li>Unbegrenzte Seiten</li>
          <li>Responsive Design</li>
          <li>Premium SEO</li>
          <li>12 Monate Support</li>
        </ul>
        <button
          class="bg-markajgold-500 hover:bg-markajgold-600 mt-6 rounded-full px-6 py-3 text-white shadow-lg transition"
        >
          Jetzt starten
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine spezielle Logik nötig
</script>

<style scoped>
/* Hover-Effekt */
.group:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease-in-out;
}
</style>
