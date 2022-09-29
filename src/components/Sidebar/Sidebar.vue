<!-- Burada kategorilerin fetch edilip listelenmesi ve seçilen kategorinin üst komponente emit ile taşınması işlevi gerçekleşiyor.
Her bir kategori <Badge/> komponentine item olarak yollanır. -->
<script setup>
import { ref, computed } from "vue"
import Badge from './Badge.vue';

const props = defineProps(["title", "activeCategory", "categories"])
const emit = defineEmits(["setCategory"])
const isHiding = ref(false)
const slideBar = computed(() => ({
  "w-0": isHiding.value
}))

const nameHandler = (name) => {
  emit("setCategory", name)
}

const toggleHideHandler = () => {
  isHiding.value = !isHiding.value
}
</script>

<template>
  <aside class="sidebar" :class="slideBar">
    <div class="sidebar__wrapper">
      <span class="text-center text-xl tracking-wider mt-3">{{props.title}}</span>
      <div class="sidebar__list">
        <Badge 
          v-for="category in props.categories" 
          :key="category" 
          :name="category" 
          :activeName="props.activeCategory"
          @setName="nameHandler" />
      </div>
      <div class="text-center px-6 mt-auto">
        <button @click="toggleHideHandler" class="hide">
          <fa icon="eye-slash" class="w-4" />
        </button>
      </div>
    </div>
  </aside>
  <button 
    @click="toggleHideHandler" class="show"
    :class="{'opacity-0 pointer-events-none' : !isHiding, 'opacity-100': isHiding}">
    <fa icon="arrow-right" />
  </button>
</template>