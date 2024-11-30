<template>
  <div
    v-if="!cookiesAccepted"
    class="font-poppins fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-5 backdrop-blur-sm"
  >
    <div
      class="bg-silver text-copper-800 w-full max-w-md rounded-lg p-6 shadow-lg md:p-10"
    >
      <div class="mb-4 text-center md:text-left">
        <h2 class="mb-4 text-lg font-bold text-black">Datenschutz</h2>
        <p class="text-sm">
          Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
          essenziell, während andere dabei helfen, unsere Website und Ihre
          Erfahrung zu verbessern. Sie können Ihre Zustimmung zu ganzen
          Kategorien geben oder sich weitere Informationen anzeigen lassen und
          so nur bestimmte Cookies auswählen. Weitere Informationen finden Sie
          in unseren
          <a
            href="/datenschutz"
            class="text-gray-500 underline hover:text-gray-700"
            >Datenschutzrichtlinien</a
          >.
        </p>
      </div>
      <div class="mt-6 flex flex-col space-y-2">
        <button
          @click="acceptEssentialCookies"
          class="bg-silver-500 hover:bg-silver-600 rounded-lg px-4 py-2 text-black"
        >
          Nur essentielle Cookies
        </button>
        <button
          @click="acceptAllCookies"
          class="bg-copper-400 text-silver hover:bg-copper-500 rounded-lg px-4 py-2"
        >
          Alle akzeptieren
        </button>
        <button
          @click="openSettings"
          class="bg-silver-500 hover:bg-silver-600 rounded-lg px-4 py-2 text-black"
        >
          Individuelle Einstellungen
        </button>
      </div>
    </div>
  </div>

  <!-- Modal für individuelle Einstellungen -->
  <div
    v-if="showSettings"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-5 backdrop-blur-sm"
  >
    <div
      class="bg-silver text-copper-800 w-full max-w-md rounded-lg p-6 shadow-lg"
    >
      <h2 class="mb-4 text-lg font-bold text-black">
        Individuelle Einstellungen
      </h2>
      <p class="mb-4">Wählen Sie, welche Cookies Sie akzeptieren möchten:</p>
      <div class="mb-2 flex items-center">
        <input
          type="checkbox"
          id="essential"
          v-model="cookies.essential"
          disabled
          checked
          class="mr-2"
        />
        <label for="essential" class="text-black">Essentielle Cookies</label>
      </div>
      <div class="mb-2 flex items-center">
        <input
          type="checkbox"
          id="analytics"
          v-model="cookies.analytics"
          class="mr-2"
        />
        <label for="analytics" class="text-black">Analytics Cookies</label>
      </div>
      <div class="mb-2 flex items-center">
        <input
          type="checkbox"
          id="marketing"
          v-model="cookies.marketing"
          class="mr-2"
        />
        <label for="marketing" class="text-black">Marketing Cookies</label>
      </div>
      <div class="mt-6 flex justify-end space-x-2">
        <button
          @click="saveSettings"
          class="bg-copper-400 text-silver hover:bg-copper-500 rounded-lg px-4 py-2"
        >
          Speichern
        </button>
        <button
          @click="closeSettings"
          class="bg-silver-500 hover:bg-silver-600 rounded-lg px-4 py-2 text-black"
        >
          Abbrechen
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(nameEQ) === 0)
      return cookie.substring(nameEQ.length, cookie.length);
  }
  return null;
}

const cookiesAccepted = ref(false);
const showSettings = ref(false);
const cookies = ref({
  essential: true,
  analytics: false,
  marketing: false,
});

onMounted(() => {
  cookiesAccepted.value = getCookie('cookiesAccepted') === 'true';
  const savedCookies = getCookie('cookies');
  if (savedCookies) {
    cookies.value = JSON.parse(savedCookies);
  }
});

const acceptEssentialCookies = () => {
  cookiesAccepted.value = true;
  cookies.value = { essential: true, analytics: false, marketing: false };
  setCookie('cookiesAccepted', 'true', 365);
  setCookie('cookies', JSON.stringify(cookies.value), 365);
};

const acceptAllCookies = () => {
  cookiesAccepted.value = true;
  cookies.value = { essential: true, analytics: true, marketing: true };
  setCookie('cookiesAccepted', 'true', 365);
  setCookie('cookies', JSON.stringify(cookies.value), 365);
  window.location.reload();
};

const openSettings = () => {
  showSettings.value = true;
};

const closeSettings = () => {
  showSettings.value = false;
};

const saveSettings = () => {
  cookiesAccepted.value = true;
  setCookie('cookiesAccepted', 'true', 365);
  setCookie('cookies', JSON.stringify(cookies.value), 365);
  showSettings.value = false;
  window.location.reload();
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}

.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}
</style>
