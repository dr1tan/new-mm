<template>
  <div>
    <!-- Header -->
    <header
      class="font-librebaskerville fixed z-30 flex h-16 w-full justify-center text-white md:h-32"
      data-aos="none"
    >
      <nav class="container mx-auto flex items-center justify-between p-4">
        <!-- Hamburger Menu (Visible on small screens and 1024px and below) -->
        <button
          @click="toggleSidebar"
          class="hamburger-menu block text-3xl focus:outline-none lg:hidden"
        >
          ☰
        </button>

        <!-- Logo (Positioned on the right when space is constrained) -->
        <div class="ml-auto flex items-center lg:ml-0"></div>

        <!-- Centered Navigation Links (Hidden below 1024px) -->
        <ul
          class="hidden text-xs font-bold uppercase lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-4 lg:text-sm xl:space-x-40"
        >
          <li>
            <a
              @click.prevent="scrollToSection('home')"
              class="group relative cursor-pointer"
            >
              <span class="hover-underline">
                {{ t('navigation.home') }}
              </span>
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('about-us')"
              class="group relative cursor-pointer"
            >
              <span class="hover-underline">
                {{ t('navigation.aboutus') }}
              </span>
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('services')"
              class="group relative cursor-pointer"
            >
              <span class="hover-underline">
                {{ t('navigation.services') }}
              </span>
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('gallery')"
              class="group relative cursor-pointer"
            >
              <span class="hover-underline">
                {{ t('navigation.gallery') }}
              </span>
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('contact')"
              class="group relative cursor-pointer"
            >
              <span class="hover-underline">
                {{ t('navigation.contact') }}
              </span>
            </a>
          </li>
        </ul>

        <!-- Language Toggle (Hidden below 1024px) -->
        <div class="hidden items-center lg:flex">
          <button
            @click="toggleLanguage"
            class="flex cursor-pointer items-center space-x-2"
            aria-label="Toggle Language"
          >
            <span>{{ currentLanguageText }}</span>
          </button>
        </div>
      </nav>
    </header>

    <!-- Sidebar for Mobile View -->
    <transition name="slide">
      <aside
        v-if="sidebarOpen"
        ref="sidebar"
        class="text-copper-700 fixed inset-0 z-40 flex w-full max-w-xs flex-col bg-white px-6 py-8 shadow-lg"
      >
        <!-- Close Button -->
        <button
          @click="toggleSidebar"
          class="mb-4 self-end text-3xl focus:outline-none"
        >
          ×
        </button>

        <!-- Navigation Links for Mobile View -->
        <ul class="space-y-6 uppercase">
          <li>
            <a @click.prevent="scrollToSection('home')" class="cursor-pointer">
              {{ t('navigation.home') }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('about-us')"
              class="cursor-pointer"
            >
              {{ t('navigation.aboutus') }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('services')"
              class="cursor-pointer"
            >
              {{ t('navigation.services') }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('gallery')"
              class="cursor-pointer"
            >
              {{ t('navigation.gallery') }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('contact')"
              class="cursor-pointer"
            >
              {{ t('navigation.contact') }}
            </a>
          </li>
        </ul>

        <!-- Language Toggle for Mobile View -->
        <div class="mt-8">
          <button @click="toggleLanguage" class="flex items-center space-x-2">
            <span>{{ currentLanguageText }}</span>
          </button>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useScrollToSection } from '@/composables/useScrollToSection';

const { scrollToSection: composableScrollToSection } = useScrollToSection();

const sidebarOpen = ref(false);
const router = useRouter();
const { t, locale } = useI18n({ useScope: 'global' });

const sidebarRef = ref<HTMLElement | null>(null);

// Close the sidebar if clicking outside of it
const handleClickOutside = (event: MouseEvent) => {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target as Node)) {
    closeSidebar();
  }
};

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;

  if (sidebarOpen.value) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
};

const closeSidebar = () => {
  sidebarOpen.value = false;
  document.removeEventListener('click', handleClickOutside);
};

// Load language from localStorage if available
onMounted(() => {
  const savedLanguage = localStorage.getItem('user-language');
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const scrollToSection = (sectionId: string) => {
  composableScrollToSection(sectionId); // Call the composable function
  closeSidebar(); // Close the sidebar
};

const toggleLanguage = () => {
  // Toggle between 'de' and 'en'
  locale.value = locale.value === 'de' ? 'en' : 'de';
  localStorage.setItem('user-language', locale.value);
};

// Define the union type for possible language keys
type LanguageKey = 'de' | 'en';

// Define the languages object with explicit typing
const languages: Record<LanguageKey, string> = {
  de: 'DE',
  en: 'EN',
};

// Define the computed property type using the union type
const currentLanguage = computed<LanguageKey>(
  () => locale.value as LanguageKey,
);

// Current language text
const currentLanguageText = computed(() => languages[currentLanguage.value]);
</script>

<style scoped>
/* Sidebar Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #653415;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.group:hover .hover-underline::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 1024px) {
  .hamburger-menu {
    display: block; /* Ensure hamburger is visible on 1024px or smaller */
  }

  .desktop-menu,
  .lg\\:flex {
    /* Hide navigation and language dropdown below 1024px */
    display: none;
  }

  /* Adjust logo size to fit better */
  img {
    height: 2.5rem;
    width: 2.5rem;
  }
}

@media (min-width: 1024px) {
  /* Ensure desktop navigation appears above 1024px */
  .hamburger-menu {
    display: none;
  }

  .desktop-menu {
    display: flex;
  }
}
</style>
