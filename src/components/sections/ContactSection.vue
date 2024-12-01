<template>
  <section id="contact" class="relative w-full px-8 py-16 md:px-16 lg:px-32">
    <!-- Titel und Untertitel -->
    <div class="text-center">
      <h2
        class="bg-gradient-to-r from-markajpink-500 to-markajgold-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
      >
        Kontaktieren Sie uns
      </h2>
      <p class="mt-4 text-lg text-markajneutral-500">
        Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Wir freuen uns auf
        Ihre Anfrage!
      </p>
    </div>

    <!-- Kontaktinformationen -->
    <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Links -->
      <div>
        <h3 class="text-xl font-semibold text-markajpink-500">
          Kontaktinformationen
        </h3>
        <ul class="mt-4 space-y-2 text-sm text-markajneutral-500">
          <li><strong>Telefon:</strong> +49 123 456 789</li>
          <li><strong>E-Mail:</strong> info@markaj-media.de</li>
          <li><strong>Adresse:</strong> Musterstraße 1, 20457 Hamburg</li>
        </ul>
        <div class="mt-6 flex space-x-4">
          <a
            href="#"
            class="text-markajpink-500 transition hover:text-markajgold-500"
            >LinkedIn</a
          >
          <a
            href="#"
            class="text-markajpink-500 transition hover:text-markajgold-500"
            >Instagram</a
          >
          <a
            href="#"
            class="text-markajpink-500 transition hover:text-markajgold-500"
            >Facebook</a
          >
        </div>
      </div>

      <!-- Kontaktformular -->
      <div class="rounded-lg bg-white p-6 shadow-lg">
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <input
              type="text"
              placeholder="Ihr Name"
              class="w-full rounded-md border border-gray-300 p-3 focus:border-markajpink-500 focus:outline-none"
              v-model="form.name"
              required
            />
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              class="w-full rounded-md border border-gray-300 p-3 focus:border-markajpink-500 focus:outline-none"
              v-model="form.email"
              required
            />
            <input
              type="text"
              placeholder="Betreff"
              class="w-full rounded-md border border-gray-300 p-3 focus:border-markajpink-500 focus:outline-none"
              v-model="form.subject"
            />
            <textarea
              placeholder="Ihre Nachricht"
              class="w-full rounded-md border border-gray-300 p-3 focus:border-markajpink-500 focus:outline-none"
              rows="5"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full rounded-full bg-markajgold-500 px-6 py-3 text-white shadow-lg transition hover:bg-markajgold-600"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  console.log('Formular gesendet:', form.value);
  // Hier kannst du eine API-Integration oder E-Mail-Sendefunktion hinzufügen
};
</script>

<style scoped>
/* Hover-Effekt für Buttons */
button:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease-in-out;
}
</style>
