<!-- Api detay bilgileri burada yer alır.
<CardInfo/> komponentini v-for ile kullanmadım çünkü spesifik olarak o özellikleri göstermek istedim. -->

<script setup>
  import CardInfo from './CardInfo.vue';
  const props = defineProps(["item"])
</script>

<template>
  <div class="flex flex-col gap-2 w-full bg-dark-deep bg-opacity-40 p-5 rounded-md min-h-[300px] self-start">
    <h5 class="text-center text-lg font-bold mb-4">{{item.API}}</h5>
    <p class="text-gray-400 text-sm">{{item.Description}}.</p>
    <div class="flex flex-col gap-1 mt-auto px-1">
      <CardInfo label="Auth" :value="props.item.Auth"/> 
      <CardInfo label="HTTPS" :value="props.item.HTTPS"/> 
      <CardInfo label="Cors" :value="props.item.Cors"/> 
      <a :href="item.Link" target="_blank" class="text-center py-1.5 mt-4 bg-dark rounded-md">Visit API</a>
    </div>
  </div>
</template>