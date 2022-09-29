<!-- Api detay bilgileri burada yer alır.
<CardInfo/> komponentini v-for ile kullanmadım çünkü spesifik olarak o özellikleri göstermek istedim. -->

<script setup>
  import CardInfo from './CardInfo.vue';
  const props = defineProps(["item"])
</script>

<template>
  <div class="card">
    <h5 class="text-center text-lg font-bold mb-4">{{item.API}}</h5>
    <p class="text-gray-400 text-sm">{{item.Description}}.</p>
    <div class="card__informations">
      <CardInfo label="Auth" :data="props.item.Auth"/> 
      <CardInfo label="HTTPS" :data="props.item.HTTPS"/> 
      <CardInfo label="Cors" :data="props.item.Cors"/> 
      <a :href="item.Link" target="_blank" class="text-center py-1.5 mt-4 bg-dark rounded-md">Visit API</a>
    </div>
  </div>
</template>