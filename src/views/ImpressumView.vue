<template>
  <section class="impressum-container px-10 py-20 text-black md:px-0 md:py-36">
    <div class="container mx-auto">
      <!-- Title Section -->
      <h1 class="mb-6 text-2xl font-bold md:text-3xl">
        {{ $t('impressum.title') }}
      </h1>

      <!-- Company Information Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section1Title') }}
        </h2>
        <p>
          {{ $t('impressum.companyName') }}<br />
          {{ $t('impressum.address') }}<br />
          {{ $t('impressum.city') }}<br />
          {{ $t('impressum.phoneLabel') }}: {{ $t('impressum.phone') }}<br />
          {{ $t('impressum.emailLabel') }}:
          <a :href="`mailto:${$t('impressum.email')}`" class="text-blue-500">
            {{ $t('impressum.email') }}
          </a>
        </p>
      </div>

      <!-- Handelsregister Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section3Title') }}
        </h2>
        <p>{{ $t('impressum.register') }}</p>
      </div>

      <!-- Tax Number Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section4Title') }}
        </h2>
        <p>{{ $t('impressum.taxNumber') }}</p>
      </div>

      <!-- Liability Disclaimer Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section5Title') }}
        </h2>
        <p>{{ $t('impressum.disclaimer') }}</p>
      </div>

      <!-- Copyright Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section6Title') }}
        </h2>
        <p>{{ $t('impressum.copyright') }}</p>
      </div>

      <!-- Dispute Resolution Section -->
      <div class="mb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section7Title') }}
        </h2>
        <p>
          {{ $t('impressum.disputeResolution') }}
          <a
            href="https://ec.europa.eu/consumers/odr"
            class="text-blue-500"
            target="_blank"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . {{ $t('impressum.disputeResolutionNote') }}
        </p>
      </div>

      <!-- Contact Data Usage Section -->
      <div class="pb-6">
        <h2 class="mb-2 text-xl font-semibold md:text-2xl">
          {{ $t('impressum.section8Title') }}
        </h2>
        <p>{{ $t('impressum.contactDataUsage') }}</p>
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
    behavior: 'instant', // Ensures the scrolling happens instantly
  });
});
</script>

<style scoped>
.impressum-container p {
  line-height: 1.7;
  z-index: 0;
}

a:hover {
  text-decoration: underline;
}
</style>
