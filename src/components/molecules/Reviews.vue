<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
  >
    <!-- First Marquee -->
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard
        v-for="review in firstRow"
        :key="review.username"
        :img="review.img"
        :name="review.name"
        :username="review.username"
        :body="review.body"
      />
    </Marquee>

    <!-- Second Marquee (reverse) -->
    <Marquee reverse pause-on-hover class="[--duration:20s]">
      <ReviewCard
        v-for="review in secondRow"
        :key="review.username"
        :img="review.img"
        :name="review.name"
        :username="review.username"
        :body="review.body"
      />
    </Marquee>

    <!-- Left Gradient -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>

    <!-- Right Gradient -->
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
  </div>
</template>

<script setup lang="ts">
import Marquee from '../inspira/Marquee.vue';
import ReviewCard from '../inspira/ReviewCard.vue';
import { ref } from 'vue';
// Reviews data
const reviews = [
  {
    name: 'Sophie Müller',
    username: '@sophie_design',
    body: 'Dank dieser Agentur hat meine Website einen völlig neuen Look erhalten! Professionell, modern und genau auf meine Marke abgestimmt.',
    img: 'https://avatar.vercel.sh/sophie',
  },
  {
    name: 'Markus Weber',
    username: '@markus_business',
    body: 'Die Zusammenarbeit war einfach großartig. Sie haben genau verstanden, was ich brauche, und das Ergebnis übertrifft meine Erwartungen.',
    img: 'https://avatar.vercel.sh/markus',
  },
  {
    name: 'Anna Schmidt',
    username: '@anna_creative',
    body: 'Ich habe so viele positive Rückmeldungen zu meiner neuen Website bekommen. Das Team ist super freundlich und kompetent!',
    img: 'https://avatar.vercel.sh/anna',
  },
  {
    name: 'Lukas Braun',
    username: '@lukas_startup',
    body: 'Von der Planung bis zur Umsetzung – alles lief reibungslos. Unsere Kunden lieben das neue Design!',
    img: 'https://avatar.vercel.sh/lukas',
  },
  {
    name: 'Julia Fischer',
    username: '@julia_marketing',
    body: 'Die Website hat meine Erwartungen übertroffen! Schnell, kreativ und auf den Punkt. Ich empfehle sie jedem weiter.',
    img: 'https://avatar.vercel.sh/julia',
  },
  {
    name: 'Tobias Lehmann',
    username: '@tobias_it',
    body: 'Eine super Agentur! Meine Website sieht nicht nur toll aus, sondern ist auch technisch perfekt umgesetzt.',
    img: 'https://avatar.vercel.sh/tobias',
  },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>
