<template>
  <div id="app ">
    <!-- <CustomCursor /> -->
    <CookieBanner />
    <Header />
    <router-view />
    <Footer />
    <Socials />
  </div>
</template>

<script setup lang="ts">
import CookieBanner from '@/components/organisms/CookieBanner.vue';
import Footer from '@/components/organisms/Footer.vue';
import Header from '@/components/organisms/Header.vue';
import Socials from '@/components/molecules/Socials.vue';
import CustomCursor from './components/molecules/CustomCursor.vue';
</script>

<style>
/* Globaler Stil */
</style>
