<script setup>
  import { ref } from 'vue'
  import ImagesTab from './ImagesTab.vue'

  const tabs = [
    { name: 'Guests', id: 1 },
    { name: 'Images', id: 2 },
    { name: 'Products', id: 3 },
    { name: 'Brand', id: 4 },
  ]
  const activeTab = ref(2)
</script>

<template>
  <div class="tabs">
    <ul class="flex justify-around py-2.5">
      <li
        v-for="tab in tabs"
        class="p-1"
        :class="{ 'is-active': tab.id === activeTab }"
        :key="tab.id"
      >
        <a :href="tab.href" @click="activeTab = tab.id">
          {{ tab.name }}
        </a>
      </li>
    </ul>
  </div>
  <div class="p-1 grow">
    <div v-if="activeTab === 1">Здесь будет компонент для вкладки Guests</div>
    <ImagesTab v-if="activeTab === 2"></ImagesTab>
    <div v-if="activeTab === 3">Здесь будет компонент для вкладки Products</div>
    <div v-if="activeTab === 4">Здесь будет компонент для вкладки Brand</div>
  </div>
</template>

<style scoped lang="scss">
  .is-active {
    border-bottom: 2px solid;
    border-image: linear-gradient(to right, #7367f0, #b0a9ff) 1;
  }
</style>
