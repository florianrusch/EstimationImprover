<template>
  <tr>
    <td class="text-left py-3 px-4">{{ task.task }}</td>
    <td class="text-left py-3 px-4">{{ task.complexity }}</td>
    <td class="text-left py-3 px-4">{{ task.uncertainty }}</td>
    <td class="text-left py-3 px-4">{{ min }} days</td>
    <td class="text-left py-3 px-4">{{ max }} days</td>
    <td class="text-left py-3 px-4">{{ task.indeed }} days</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { Task as TaskModel } from "@/models/Task";

export default defineComponent({
  props: {
    task: {
      type: TaskModel,
      required: true,
    },
  },

  setup(props) {
    const { task } = toRefs(props);
    const min = task.value.complexity;
    const max = task.value.complexity * task.value.uncertainty;
    return {
      min,
      max,
    };
  },
});
</script>
