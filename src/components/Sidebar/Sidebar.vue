<!-- Burada kategorilerin fetch edilip listelenmesi ve seçilen kategorinin üst komponente emit ile taşınması işlevi gerçekleşiyor.
Her bir kategori <Badge/> komponentine item olarak yollanır. -->
<script setup>
import { ref, computed, onMounted } from "vue"
import { fetchCategories } from '@/services/services';
import Badge from './Badge.vue';

const props = defineProps(["title", "activeCategory"])
const emit = defineEmits(["setCategory"])

const categories = ref([])
const isHiding = ref(false)
const slideBar = computed(() => ({
  "w-2/3 sm:w-1/3 md:w-1/3 lg:w-1/5 ": !isHiding.value,
  "w-0": isHiding.value
}))

onMounted(async () => {
  const data = await fetchCategories()
  categories.value = data.categories
})

const nameHandler = (name) => {
  emit("setCategory", name)
}

const isHidingHandler = () => {
  isHiding.value = !isHiding.value
}
</script>

<template>
  <aside
    class="flex absolute sm:static top-0 bottom-0 bg-dark transition-[width] shrink-0 ease-in-out delay-150 overflow-hidden"
    :class="slideBar">
    <div class="flex flex-col gap-y-8 py-4 w-full h-full">
      <span class="text-center text-xl tracking-wider mt-3">{{props.title}}</span>
      <div class="flex flex-col gap-y-2 overflow-y-auto">
        <Badge 
          v-for="categoryName in categories" 
          :key="categoryName" 
          :name="categoryName"
          :activeName="props.activeCategory" 
          @setName="nameHandler" />
      </div>
      <div class="px-6 text-center mt-auto">
        <button @click="isHidingHandler" class="bg-dark-deep bg-opacity-40 w-full rounded-md mb-10 py-2">
          <fa icon="eye-slash" class="w-4" />
        </button>
      </div>
    </div>
  </aside>
  <button @click="isHidingHandler"
    class="absolute bottom-14 mb-0.5 left-3 w-10 h-10 rounded-full bg-dark-deep bg-opacity-40 transition-all delay-150"
    :class="{'opacity-0 pointer-events-none' : !isHiding, 'opacity-100': isHiding}">
    <fa icon="arrow-right" />
  </button>
</template>