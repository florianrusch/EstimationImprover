<template>
  <div
    class="
      w-full
      pt-16
      pb-6
      text-sm text-center
      md:text-left
      fade-in
      text-gray-500
    "
  >
    &copy; {{ year }} - Developed with ❤️ by Florian Rusch
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    var year = ref(new Date().getFullYear());

    return {
      year,
    };
  },
});
</script>
