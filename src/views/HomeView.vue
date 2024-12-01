<template>
  <div class="bg-background">
    <HomeSection />

    <ServiceSection />
    <CaseStudies />
    <PricingSection />
    <FAQSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import CaseStudies from '@/components/sections/CaseStudies.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import HomeSection from '../components/sections/HomeSection.vue';
import ServiceSection from '../components/sections/ServiceSection.vue';
import PricingSection from '@/components/sections/PricingSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>
