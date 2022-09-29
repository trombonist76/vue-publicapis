<script setup>
import { computed } from 'vue';

const props = defineProps(["name", "activeName"])
const emit = defineEmits(["setName"])

const isActive = computed(() => props.activeName === props.name)
const nameHandler = () => {
  emit("setName", props.name)
}
</script>

<template>
  <button 
    @click="nameHandler"
    class="text-left text-sm py-2 px-6 bg-dark-light rounded-md inline-flex mr-4"
    :class="{'bg-gray-200 text-dark-deep':isActive}">{{props.name}}</button>
</template>