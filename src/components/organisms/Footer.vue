<template>
  <footer class="bg-silver text-copper-800 py-6">
    <div class="container mx-auto text-center md:text-center">
      <div class="flex flex-wrap justify-center md:justify-center">
        <div class="w-full md:w-auto">
          <a
            @click.prevent="scrollToSection('home')"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('navigation.home') }}</a
          >
          <a
            @click.prevent="scrollToSection('about-us')"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('navigation.aboutus') }}</a
          >
          <a
            @click.prevent="scrollToSection('services')"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('navigation.services') }}</a
          >
          <a
            @click.prevent="scrollToSection('gallery')"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('navigation.gallery') }}</a
          >
          <a
            @click.prevent="scrollToSection('contact')"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('navigation.contact') }}</a
          >
        </div>
        <div class="w-full md:mt-0 md:w-auto">
          <router-link
            to="/impressum"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('footer.impressum') }}</router-link
          >
          <router-link
            to="/datenschutz"
            class="block cursor-pointer px-3 py-2 text-sm hover:underline md:inline-block"
            >{{ t('footer.datenschutz') }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="mt-4 text-center text-xs text-black md:text-xs">
      <span v-html="createdByText"></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
const router = useRouter();

const scrollToSection = (sectionId: string) => {
  const headerHeight = window.innerWidth >= 750 ? 100 : 32;

  const scrollToPosition = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToPosition();
      }, 300);
    });
  } else {
    scrollToPosition();
  }
};

// Create the formatted createdBy text with a link
const createdByText = `<span> ${t('footer.createdBy')} <a href="https://www.markaj-media.de" target="_blank">Markaj-Media</a></span>`;
</script>

<style scoped>
a {
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .flex-wrap > div {
    width: 48%;
    margin-bottom: 1rem;
  }
}
</style>
