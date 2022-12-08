<script setup>
  import CameraIcon from './icons/IconCamera.vue'
</script>

<template>
  <button class="w-full min-w-[50px] max-w-[60px] h-[70px] rounded-5">
    <div class="flex flex-col items-center">
      <CameraIcon class="fill-white mb-[3px]" />
      <span class="text-xs whitespace-nowrap text-white">
        <slot></slot>
      </span>
    </div>
  </button>
</template>

<style scoped lang="scss">
  button {
    background: linear-gradient(44.66deg, #eb3939 3.5%, rgba(240, 103, 103, 0.75) 96.91%);
  }
</style>
