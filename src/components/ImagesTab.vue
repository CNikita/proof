<script setup>
  import { ref } from 'vue'
  import IconPlusCircle from './icons/IconPlusCircle.vue'

  const images = [
    { src: '/proof/images/img_1.png', id: 1 },
    { src: '/proof/images/img_2.png', id: 2 },
  ]
  const selectImg = ref()
</script>

<template>
  <div class="flex flex-wrap justify-between">
    <div
      v-for="image in images"
      class="w-1/2 p-1 flex"
      :key="image.id"
      @click="selectImg = image.id"
    >
      <img
        :src="image.src"
        class="object-cover h-[102px] w-full rounded-5"
        :class="{ 'is-active': image.id === selectImg }"
      />
    </div>
    <div class="w-1/2 p-1">
      <div
        class="flex flex-col justify-center items-center h-[102px] rounded-5 border border-dashed border-[#B9B9C3]"
      >
        <IconPlusCircle class="fill-[#6E6B7B] mb-2" />
        Add image
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .is-active {
    border: 4px solid #e43ee1;
  }
</style>
