<template>
  <section
    id="testimonials"
    class="relative w-full px-8 py-16 md:px-16 lg:px-32"
  >
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="from-markajpink-500 to-markajgold-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Was unsere Kunden sagen
      </h2>
      <p class="text-markajneutral-500 mt-4 text-lg">
        Erfolgsgeschichten, die inspirieren. Lesen Sie, was unsere Kunden über
        uns sagen.
      </p>
    </div>

    <!-- Testimonials -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Testimonial 1 -->
      <div class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
        <div class="flex items-center">
          <div class="ml-4">
            <h3 class="text-markajpink-500 font-semibold">Anna Müller</h3>
            <p class="text-markajneutral-500 text-sm">Geschäftsführerin</p>
          </div>
        </div>
        <p class="text-markajneutral-500 mt-4 text-sm">
          "Markaj-Media hat uns eine moderne Website erstellt, die unsere
          Umsätze verdoppelt hat. Die Zusammenarbeit war großartig!"
        </p>
      </div>

      <!-- Testimonial 2 -->
      <div class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
        <div class="flex items-center">
          <div class="ml-4">
            <h3 class="text-markajgold-500 font-semibold">Thomas Schulz</h3>
            <p class="text-markajneutral-500 text-sm">Inhaber eines Cafés</p>
          </div>
        </div>
        <p class="text-markajneutral-500 mt-4 text-sm">
          "Die Website von Markaj-Media hat uns geholfen, neue Kunden zu
          gewinnen. Wir sind begeistert von ihrem Service."
        </p>
      </div>

      <!-- Testimonial 3 -->
      <div class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
        <div class="flex items-center">
          <div class="ml-4">
            <h3 class="text-markajblue-500 font-semibold">Julia Becker</h3>
            <p class="text-markajneutral-500 text-sm">Marketing Managerin</p>
          </div>
        </div>
        <p class="text-markajneutral-500 mt-4 text-sm">
          "Markaj-Media hat eine SEO-Strategie entwickelt, die unsere
          Sichtbarkeit enorm gesteigert hat. Absolut empfehlenswert!"
        </p>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-12 flex justify-center">
      <button
        class="bg-markajgold-500 hover:bg-markajgold-600 rounded-full px-8 py-4 text-white shadow-lg transition"
      >
        Jetzt Kontakt aufnehmen
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine spezielle Logik nötig
</script>

<style scoped>
/* Optionaler Hover-Effekt */
div:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}
</style>
