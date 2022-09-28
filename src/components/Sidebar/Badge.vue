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
    class="text-left text-sm bg-dark-deep bg-opacity-30 py-2 px-6 rounded-md inline-flex mr-4"
    :class="{'bg-red-200':isActive}">{{props.name}}</button>
</template>