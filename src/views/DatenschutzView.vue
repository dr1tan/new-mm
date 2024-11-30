<template>
  <section class="datenschutz-container px-6 py-20 text-black md:px-0 md:py-36">
    <div class="container mx-auto">
      <h1 class="mb-6 text-2xl font-bold md:text-3xl">
        {{ $t('datenschutz.title') }}
      </h1>

      <!-- Introduction Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section1Title') }}
        </h2>
        <p>{{ $t('datenschutz.introduction') }}</p>
      </div>

      <!-- Data Collection Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section2Title') }}
        </h2>
        <p>{{ $t('datenschutz.dataCollection') }}</p>
      </div>

      <!-- Usage of Data Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section3Title') }}
        </h2>
        <p>{{ $t('datenschutz.usageOfData') }}</p>
      </div>

      <!-- Data Protection Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section4Title') }}
        </h2>
        <p>{{ $t('datenschutz.dataProtection') }}</p>
      </div>

      <!-- Third-Party Disclosure Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section5Title') }}
        </h2>
        <p>{{ $t('datenschutz.thirdParties') }}</p>
      </div>

      <!-- User Rights Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section6Title') }}
        </h2>
        <p>{{ $t('datenschutz.rights') }}</p>
      </div>

      <!-- Cookies Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section7Title') }}
        </h2>
        <p>{{ $t('datenschutz.cookies') }}</p>
      </div>

      <!-- Contact Information Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section8Title') }}
        </h2>
        <p>{{ $t('datenschutz.contact') }}</p>
      </div>

      <!-- Changes to Privacy Policy Section -->
      <div class="pb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section9Title') }}
        </h2>
        <p>{{ $t('datenschutz.changes') }}</p>
      </div>

      <!-- Photo Credits Section -->
      <div class="pt-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('datenschutz.section10Title') }}
        </h2>
        <p>{{ $t('datenschutz.photoCredits') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
});
</script>

<style scoped>
.datenschutz-container p {
  line-height: 1.7;
  z-index: 0;
}

a:hover {
  text-decoration: underline;
}
</style>
