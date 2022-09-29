<!-- Başlangıçta initial olarak 'Animals' kategorisi seçilidir.
Kategorilerin fetch ve listeleme işlemi Sidebar komponentinde gerçekleşiyor.
Sidebar komponenti kullanıcının seçtiği kategoriyi emit ile App.vue'ya iletir ve activeCategory state'i değişir.
Bu değişim watchEffect ile yakalanıp seçilen kategoriye göre apiler fetch edilir ve 'main' içerisinde listelenir. -->

<script setup>
import { onMounted, ref, watchEffect  } from 'vue'
import { fetchEntriesByCategoryName, fetchCategories } from '@/services/services'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import CardComp from './components/Card/Card.vue'

const appTitle = "PUBLIC API"
const sidebarTitle = "Categories"
const activeCategory = ref("")
const categories = ref([])
const publicApis = ref([])
const activeCategoryHandler = (name) => {
  activeCategory.value = name
}

watchEffect(async () => {
  const data = await fetchEntriesByCategoryName()
  publicApis.value = data.entries
})

onMounted(async () => {
  const data = await fetchCategories()
  categories.value = data.categories
  activeCategory.value = data.categories.at(0)
})
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="text-3xl">{{appTitle}}</h1>
    </header>
    <div class="wrapper">
      <Sidebar :title="sidebarTitle" :activeCategory="activeCategory" @setCategory="activeCategoryHandler" :categories="categories"/>
      <main class="main">
        <CardComp v-for="api in publicApis" :key="api" :item="api" />
      </main>
    </div>
  </div>
</template>
