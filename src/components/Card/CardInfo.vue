<!-- Burada apinin bazı özelliklerinin değerine göre - 'yes-no, true-false, unknown' - icon kullanılıyor. -->

<script setup>
import { computed } from 'vue';

const props = defineProps(["label", "data"])

const iconConditions = computed(() => ({
  "xmark": !props.data || props.data === "no",
  "check": props.data === true || props.data === "yes",
  "question": props.data === "unknown"
}))

const icon = computed(() => Object.keys(iconConditions.value).find(iconName => iconConditions.value[iconName] === true))
const iconColor = computed(() => ({
  "text-red-500": icon.value === "xmark",
  "text-green-500": icon.value === "check",
  "text-yellow-500": icon.value === "question"
}))
</script>

<template>

  <div class="flex gap-3 text-sm">
    {{props.label}}:
    <span>
      <template v-if="!icon">
        {{props.data}}
      </template>
      <fa v-if="icon" :icon="icon" :class="iconColor" />
    </span>
  </div>
</template>