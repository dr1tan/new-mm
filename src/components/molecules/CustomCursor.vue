<template>
  <div>
    <!-- Custom Cursor Container -->
    <div class="custom-cursor" ref="cursorGroup">
      <div class="cursor-circle"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const cursorGroup = ref<HTMLElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
  if (cursorGroup.value) {
    // Instantly move the cursor
    cursorGroup.value.style.left = `${event.pageX}px`;
    cursorGroup.value.style.top = `${event.pageY}px`;
  }
};

onMounted(() => {
  // Attach mousemove event
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  // Cleanup mousemove event
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>
<style scoped lang="scss">
* {
  cursor: none !important; /* Hide the default cursor */
}

/* Custom Cursor Container */
.custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}

/* Cursor Circle */
.cursor-circle {
  width: 100px; /* Adjust the size of the circle */
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  clip-path: circle(50%); /* Clip to ensure it's circular */
  filter: invert(1); /* Invert colors inside the circle */
  background: transparent; /* Ensure transparency for the circle */
}

/* Disable custom cursor on mobile */
@media only screen and (max-width: 768px) {
  .custom-cursor {
    display: none;
  }

  * {
    cursor: auto !important;
  }
}
</style>
