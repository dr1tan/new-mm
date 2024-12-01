<template>
  <section
    class="relative flex w-full flex-col items-center px-8 py-16 md:px-16 lg:px-32"
  >
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
      >
        Über Markaj-Media
      </h2>
      <p
        class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-markajneutral-500 md:text-xl"
      >
        Mit Kreativität, Innovation und Technologie erschaffen wir digitale
        Erlebnisse, die Ihre Marke hervorheben und wachsen lassen.
      </p>
    </div>

    <!-- Inhalt -->
    <div
      class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
    >
      <!-- USP 1 -->
      <div class="flex flex-col items-center text-center">
        <div class="rounded-full bg-markajpink-100 p-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-markajpink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1 4v-4m0 0h1m-1 0h-1m-1 4v4m4-4v4m4-4v4m4-4v4m-4 0v4m0-4H7m0-4h4m0-4h4m0-4H7m0 4h4m4-4h4"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-bold text-markajpink-500">
          Über 10 Jahre Erfahrung
        </h3>
        <p class="mt-4 text-base leading-relaxed text-markajneutral-500">
          Über ein Jahrzehnt erfolgreiche Projekte, die Marken online stark
          machen und Wachstum fördern.
        </p>
      </div>

      <!-- USP 2 -->
      <div class="flex flex-col items-center text-center">
        <div class="rounded-full bg-markajgold-100 p-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-markajgold-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m9 0a9 9 0 11-9-9"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-bold text-markajgold-500">
          Individuell & Innovativ
        </h3>
        <p class="mt-4 text-base leading-relaxed text-markajneutral-500">
          Jede Website wird perfekt auf Ihre Ziele zugeschnitten – innovativ,
          einzigartig und leistungsstark.
        </p>
      </div>

      <!-- USP 3 -->
      <div class="flex flex-col items-center text-center">
        <div class="rounded-full bg-markajblue-100 p-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-markajblue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-bold text-markajblue-500">
          Persönlicher Support
        </h3>
        <p class="mt-4 text-base leading-relaxed text-markajneutral-500">
          Wir begleiten Sie von der ersten Idee bis zum fertigen Produkt – und
          bleiben auch danach an Ihrer Seite.
        </p>
      </div>
    </div>

    <!-- Call-to-Action -->
    <div class="mt-16 flex justify-center">
      <button
        class="rounded-full bg-gradient-to-r from-markajpink-500 to-markajgold-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:opacity-90"
      >
        Jetzt mehr erfahren
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine spezifische Logik notwendig
</script>

<style scoped>
/* Icons und Animationen können hier ergänzt werden */
</style>
