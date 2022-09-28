<!-- Burada apinin bazı özelliklerinin değerine göre - 'yes-no, true-false, unknown' - icon kullanılıyor. -->

<script setup>
import { computed } from 'vue';

const props = defineProps(["label", "value"])

const iconConditions = computed(() => ({
  "xmark": !props.value || props.value === "no",
  "check": props.value === true || props.value === "yes",
  "question": props.value === "unknown"
}))

const iconColor = computed(() => ({
  "text-red-500": icon.value === "xmark",
  "text-green-500": icon.value === "check",
  "text-yellow-500": icon.value === "question"
}))

const icon = computed(() => Object.keys(iconConditions.value).find(k => iconConditions.value[k] === true))

</script>

<template>

  <div class="flex gap-3 text-sm">
    {{props.label}}:
    <span>
      <template v-if="!icon">
        {{props.value}}
      </template>
      <fa :icon="icon" :class="iconColor" />
    </span>
  </div>
</template>