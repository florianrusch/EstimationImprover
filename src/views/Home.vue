<template>
  <div class="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
    <div class="p-4 md:p-8 text-center lg:text-left">
      <h1 class="text-3xl font-bold pt-8 lg:pt-0">Your estimations</h1>

      <div
        class="
          mx-auto
          lg:mx-0
          w-full
          pt-3
          border-b-2 border-green-500
          opacity-25
        "
      ></div>

      <EstimationTable></EstimationTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EstimationTable from "@/components/EstimationTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    EstimationTable: EstimationTable,
  },
});
</script>
