<template>
  <div
    class="relative flex min-h-screen w-full flex-col items-center justify-center bg-background md:px-60"
  >
    <!-- Hintergrund Partikel -->
    <ParticlesBg
      class="absolute inset-0"
      :quantity="150"
      :ease="50"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="15"
      refresh
    />

    <!-- Inhalt -->
    <div
      class="z-10 grid grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2 lg:px-16"
    >
      <!-- Linker Bereich -->
      <div class="space-y-6 text-left">
        <!-- Kleinere Beschreibung -->
        <p class="text-lg uppercase tracking-wide text-muted-foreground">
          Webdesign Agentur in Hamburg
        </p>

        <!-- Hauptüberschrift -->
        <h1
          class="bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-extrabold text-transparent lg:text-6xl"
        >
          Markaj-Media
        </h1>

        <!-- Unterüberschrift -->
        <p class="text-xl text-muted-foreground">
          Kreative Lösungen für Ihre digitale Präsenz. Professionelle Websites,
          die beeindrucken und Ergebnisse liefern.
        </p>

        <!-- Call-to-Actions -->
        <div class="flex flex-col sm:flex-row sm:gap-4">
          <button
            class="rounded-md bg-primary px-6 py-3 text-primary-foreground shadow-md transition hover:bg-accent hover:shadow-lg"
          >
            Jetzt beraten lassen
          </button>
          <button
            class="rounded-md bg-secondary px-6 py-3 text-secondary-foreground shadow-md transition hover:bg-muted"
          >
            Portfolio ansehen
          </button>
        </div>
      </div>

      <!-- Rechter Bereich -->
      <div class="flex justify-center">
        <img
          src="/vite.svg"
          alt="Webdesign Beispiel"
          class="h-auto max-w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useColorMode } from '@vueuse/core';
import ParticlesBg from '../inspira/ParticlesBg.vue';

// Dark Mode Integration
const isDark = computed(() => useColorMode().value === 'dark');
</script>
