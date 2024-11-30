<template>
  <section
    id="about-us"
    class="text-rrsilver-900 relative flex min-h-screen flex-col bg-gray-200 px-6 py-20 md:px-12"
  >
    <!-- Section Title with AOS Animation -->
    <div
      class="mb-12 flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        class="font-crimsontext text-copper-700 text-4xl sm:text-4xl md:text-5xl"
      >
        {{ $t('about.title') }}
      </h2>
    </div>

    <!-- Image and Text Columns -->
    <div
      class="flex flex-col md:flex-row md:space-x-8 lg:space-x-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <!-- Image Placeholder -->
      <div class="mb-8 md:mb-0 md:w-2/5 lg:w-1/3">
        <p
          class="text-md mt-4 text-center text-black"
          style="white-space: pre-line"
        >
          {{ $t('about.ceo_info') }}
        </p>
      </div>

      <!-- Text Content -->
      <div class="md:w-3/5 lg:w-2/3">
        <div
          class="mission-container hover:border-copper mb-8 rounded-lg border-2 border-gray-300 bg-gray-300 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <h3 class="text-xl font-bold text-black sm:text-2xl">
            {{ $t('about.passion_title') }}
          </h3>
          <p class="text-md mt-4 leading-relaxed text-black">
            {{ $t('about.passion_text') }}
          </p>
        </div>
        <div
          class="mission-container hover:border-copper mb-8 rounded-lg border-2 border-gray-300 bg-gray-300 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          <h3 class="text-xl font-bold text-black sm:text-2xl">
            {{ $t('about.vision_title') }}
          </h3>
          <p class="text-md mt-4 leading-relaxed text-black">
            {{ $t('about.vision_text') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Learn More Button with AOS Animation -->
    <div
      class="mt-8 flex justify-center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <button
        @click="scrollToSection('home')"
        class="text-md bg-copper hover:bg-copper-600 inline-block rounded px-6 py-3 text-white transition sm:px-8 sm:py-4 sm:text-lg"
      >
        {{ $t('about.button') }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'vue-router';
import { useScrollToSection } from '@/composables/useScrollToSection';

const { scrollToSection } = useScrollToSection();

const router = useRouter();

const { t } = useI18n();

onMounted(() => {
  AOS.init(); // Initialize AOS for animations
});
</script>

<style scoped>
/* Mission and Vision Container Hover Effects */
.mission-container,
.vision-container {
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.mission-container:hover,
.vision-container:hover {
  border-color: #b87333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
