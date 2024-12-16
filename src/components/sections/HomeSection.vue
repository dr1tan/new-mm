<template>
  <div
    class="relative flex min-h-screen w-full flex-col items-center justify-center bg-background md:px-60"
  >
    <!-- Hintergrund Partikel -->
    <ParticlesBg
      class="absolute inset-0"
      :quantity="150"
      :ease="50"
      :color="isDark ? '#FFF' : '#800'"
      :staticity="15"
      refresh
    />

    <!-- Inhalt -->
    <div
      class="z-10 grid grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2 lg:px-16"
    >
      <div class="space-y-6 text-left">
        <!-- Kleinere Beschreibung -->
        <p class="text-lg uppercase tracking-wide text-markajgold-400">
          Webdesign Agentur in Hamburg
        </p>

        <!-- Hauptüberschrift -->
        <BlurReveal :delay="0.2" :duration="0.75" class="">
          <h1
            class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text py-4 text-5xl font-bold text-transparent lg:text-6xl"
          >
            Innovative Websites, die begeistern und wachsen lassen
          </h1>

          <!-- Unterüberschrift -->
          <p class="text-lg leading-relaxed text-markajneutral-500">
            Entdecken Sie das Potenzial Ihrer Marke mit einer professionellen
            Online-Präsenz. Moderne Websites, die überzeugen.
          </p>
        </BlurReveal>
        <div class="flex flex-col sm:flex-row sm:gap-4">
          <ShimmerButton
            class="shadow-2xl"
            shimmer-size="2px"
            :class="'rounded-full bg-markajgold-500 px-6 py-3 text-white'"
          >
            <div class="flex items-center space-x-2">
              <span>Mehr Kunden? Jetzt beraten lassen</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </ShimmerButton>
          <ShimmerButton
            class="shadow-2xl"
            shimmer-size="2px"
            :class="'rounded-full bg-markajpink-500 px-6 py-3 text-white'"
          >
            <div class="flex items-center space-x-2">
              <span>Unsere Projekte ansehen</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </ShimmerButton>
        </div>
      </div>

      <!-- Rechter Bereich -->
      <div class="flex justify-center">
        <img
          src="/logowhite.svg"
          alt="Webdesign Beispiel"
          class="h-auto max-w-full"
        />
      </div>
    </div>
  </div>
  <!-- Animated Logo Cloud -->
  <div class="z-10 w-full bg-background">
    <AnimatedLogoCloud :logos="logos" title="Vertrauen von Unternehmen wie" />
  </div>
</template>

<script setup lang="ts">
import BlurReveal from '../inspira/BlurReveal.vue';
import FlipWords from '../inspira/FlipWords.vue';
import ShimmerButton from '../inspira/ShimmerButton.vue';
import { computed } from 'vue';
import { useColorMode } from '@vueuse/core';
import ParticlesBg from '../inspira/ParticlesBg.vue';
import AnimatedLogoCloud from '../inspira/AnimatedLogoCloud.vue'; // Adjust path as needed

// Dark Mode Integration
const isDark = computed(() => useColorMode().value === 'dark');

// Logos for the logo cloud
const logos = [
  {
    name: 'Vercel',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Prime',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
  },
  {
    name: 'Trustpilot',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
  },
  {
    name: 'Webflow',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Stackoverflow',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
  },
  {
    name: 'mistral',
    path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
];
</script>
