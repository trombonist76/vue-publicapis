<!-- Başlangıçta initial olarak 'Animals' kategorisi seçilidir.
Kategorilerin fetch ve listeleme işlemi Sidebar komponentinde gerçekleşiyor.
Sidebar komponenti kullanıcının seçtiği kategoriyi emit ile App.vue'ya iletir ve activeCategory state'i değişir.
Bu değişim watchEffect ile yakalanıp seçilen kategoriye göre apiler fetch edilir ve 'main' içerisinde listelenir. -->

<script setup>
import { ref, watchEffect } from 'vue';
import { fetchEntriesByCategoryName } from '@/services/services';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import CardComp from './components/Card/Card.vue';

const appTitle = "PUBLIC API"
const sidebarTitle = "Categories"
const activeCategory = ref("Animals")
const publicApis = ref([])
const activeCategoryHandler = (name) => {
  activeCategory.value = name
}

watchEffect(async () => {
  const data = await fetchEntriesByCategoryName(activeCategory.value)
  publicApis.value = data.entries
})

</script>

<template>
  <div class="bg-dark min-h-full max-h-screen flex flex-col">
    <header class="h-20 min-h-[80px] border-b border-slate-600 flex items-center px-6 tracking-widest">
      <h1 class="text-3xl">{{appTitle}}</h1>
    </header>
    <div class="flex-1 relative flex overflow-y-hidden h-full max-h-full">
      <Sidebar :title="sidebarTitle" :activeCategory="activeCategory" @setCategory="activeCategoryHandler" />
      <main
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 content-start px-4 ml-14 lg:pr-10 py-4 overflow-y-auto">
        <CardComp v-for="api in publicApis" :key="api" :item="api" />
      </main>
    </div>
  </div>
</template>
