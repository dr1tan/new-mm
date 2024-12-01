<template>
  <section id="faq" class="relative w-full px-6 py-16 md:px-12 lg:px-24">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
      >
        Häufig gestellte Fragen
      </h2>
      <p class="mt-4 text-lg text-gray-500 md:text-xl">
        Finde schnell Antworten auf die wichtigsten Fragen.
      </p>
    </div>

    <!-- FAQ Liste -->
    <div class="mt-12 space-y-6">
      <div
        v-for="(faq, index) in showAll ? faqs : faqs.slice(0, 4)"
        :key="index"
        class="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
      >
        <div
          @click="toggleFAQ(index)"
          class="flex cursor-pointer items-center justify-between"
        >
          <h3
            class="text-lg font-bold text-gray-800 transition group-hover:text-markajpink-500 md:text-xl"
          >
            {{ faq.question }}
          </h3>
          <span
            :class="{
              'rotate-90': activeFAQ === index,
              'rotate-0': activeFAQ !== index,
            }"
            class="ml-4 text-2xl text-gray-400 transition-transform duration-300"
          >
            ↓
          </span>
        </div>
        <transition name="faq" mode="out-in">
          <p
            v-if="activeFAQ === index"
            class="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
          >
            {{ faq.answer }}
          </p>
        </transition>
      </div>
    </div>

    <!-- Mehr anzeigen -->
    <div class="mt-12 flex justify-center">
      <button
        @click="toggleShowAll"
        class="rounded-full bg-gradient-to-r from-markajpink-500 to-markajgold-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:from-markajpink-600 hover:to-markajgold-600 hover:shadow-lg"
      >
        {{ showAll ? 'Weniger anzeigen' : 'Alle FAQs anzeigen' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// FAQ Daten
const faqs = ref([
  {
    question: 'Wie lange dauert es, bis meine Website fertig ist?',
    answer:
      'Die Dauer hängt von der Komplexität ab. In der Regel dauert ein Projekt zwischen 2–6 Wochen.',
  },
  {
    question: 'Bieten Sie auch Wartung und Support an?',
    answer:
      'Ja, wir bieten umfassenden Support und regelmäßige Updates für Ihre Website.',
  },
  {
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer:
      'Ja, wir integrieren benutzerfreundliche Content-Management-Systeme wie WordPress oder Webflow.',
  },
  {
    question: 'Was kostet eine SEO-Optimierung?',
    answer:
      'Die Kosten für eine SEO-Optimierung hängen von Ihren individuellen Anforderungen ab. Kontaktieren Sie uns für ein Angebot.',
  },
  {
    question: 'Kann ich das Design meiner Website anpassen?',
    answer:
      'Ja, wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Design genau Ihren Vorstellungen entspricht.',
  },
]);

// Zustände
const activeFAQ = ref<number | null>(null);
const showAll = ref(false);

// Funktionen
const toggleFAQ = (index: number) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<style scoped>
/* Professionelle Transition */
.faq-enter-active,
.faq-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.faq-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.faq-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Interaktiver Pfeil */
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-0 {
  transform: rotate(0deg);
}

/* Weitere Hover-Effekte */
.shadow-md:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
