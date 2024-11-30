<template>
  <header
    class="fixed top-0 z-30 flex h-20 w-full items-center justify-between bg-background lg:h-20"
  >
    <div
      class="container mx-auto flex w-full items-center justify-between px-6"
    >
      <!-- Logo -->
      <a href="#" class="text-markajpink-500 text-xl font-bold">
        Markaj-Media
      </a>

      <!-- Navigation Links -->
      <nav class="hidden space-x-8 lg:flex">
        <a
          href="#about-us"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Über uns
        </a>
        <a
          href="#services"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Leistungen
        </a>
        <a
          href="#case-studies"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Case Studies
        </a>
        <a
          href="#pricing"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Preise
        </a>
        <a
          href="#faq"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          FAQ
        </a>
        <a
          href="#blog"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Blog
        </a>
        <a
          href="#contact"
          class="text-markajneutral-400 hover:text-markajpink-500 transition"
        >
          Kontakt
        </a>
      </nav>

      <!-- Call-to-Action Button -->
      <a
        href="#contact"
        class="bg-markajgold-500 hover:bg-markajgold-600 flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition"
      >
        <span>Mehr Umsatz? Jetzt kontaktieren</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="text-markajpink-500 block focus:outline-none lg:hidden"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-40 bg-white p-6 shadow-lg lg:hidden"
      >
        <button
          @click="toggleMobileMenu"
          class="text-markajpink-500 mb-4 self-end text-2xl focus:outline-none"
        >
          ×
        </button>
        <nav class="flex flex-col space-y-6">
          <a
            href="#about-us"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            Über uns
          </a>
          <a
            href="#services"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            Leistungen
          </a>
          <a
            href="#case-studies"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            Case Studies
          </a>
          <a
            href="#pricing"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            Preise
          </a>
          <a
            href="#faq"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            FAQ
          </a>
          <a
            href="#blog"
            class="text-markajneutral-400 hover:text-markajpink-500 text-lg transition"
            @click="toggleMobileMenu"
          >
            Blog
          </a>
          <a
            href="#contact"
            class="text-markajgold-500 hover:text-markajgold-700 text-lg font-semibold transition"
            @click="toggleMobileMenu"
          >
            Mehr Umsatz? Jetzt kontaktieren
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
/* Fade transition for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
