<template>
  <section id="faq" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="from-markajpink-500 to-markajgold-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Häufig gestellte Fragen
      </h2>
      <p class="text-markajneutral-500 mt-4 text-lg">
        Sie haben Fragen? Hier finden Sie Antworten auf die häufigsten Fragen.
      </p>
    </div>

    <!-- FAQ-Liste -->
    <div class="mt-12 space-y-4">
      <!-- Frage 1 -->
      <div
        class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
        @click="toggleFAQ(1)"
      >
        <div class="flex cursor-pointer items-center justify-between">
          <h3 class="text-markajpink-500 font-semibold">
            Wie lange dauert es, bis meine Website fertig ist?
          </h3>
          <span
            :class="{ 'rotate-180': activeFAQ === 1 }"
            class="transition-transform"
          >
            ▼
          </span>
        </div>
        <p v-if="activeFAQ === 1" class="text-markajneutral-500 mt-4 text-sm">
          Die Dauer hängt von der Komplexität ab. In der Regel dauert ein
          Projekt zwischen 2–6 Wochen.
        </p>
      </div>

      <!-- Frage 2 -->
      <div
        class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
        @click="toggleFAQ(2)"
      >
        <div class="flex cursor-pointer items-center justify-between">
          <h3 class="text-markajpink-500 font-semibold">
            Bieten Sie auch Wartung und Support an?
          </h3>
          <span
            :class="{ 'rotate-180': activeFAQ === 2 }"
            class="transition-transform"
          >
            ▼
          </span>
        </div>
        <p v-if="activeFAQ === 2" class="text-markajneutral-500 mt-4 text-sm">
          Ja, wir bieten umfassenden Support und regelmäßige Updates für Ihre
          Website.
        </p>
      </div>

      <!-- Frage 3 -->
      <div
        class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
        @click="toggleFAQ(3)"
      >
        <div class="flex cursor-pointer items-center justify-between">
          <h3 class="text-markajpink-500 font-semibold">
            Kann ich meine Website später selbst bearbeiten?
          </h3>
          <span
            :class="{ 'rotate-180': activeFAQ === 3 }"
            class="transition-transform"
          >
            ▼
          </span>
        </div>
        <p v-if="activeFAQ === 3" class="text-markajneutral-500 mt-4 text-sm">
          Ja, wir integrieren benutzerfreundliche Content-Management-Systeme wie
          WordPress oder Webflow.
        </p>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <p class="text-markajneutral-500 text-sm">
        Haben Sie weitere Fragen?
        <a href="#contact" class="text-markajgold-500 underline"
          >Kontaktieren Sie uns</a
        >.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Aktive FAQ verfolgen
const activeFAQ = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};
</script>

<style scoped>
/* Optional: Rotationsanimation für den Pfeil */
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
