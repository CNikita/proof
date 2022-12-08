<script setup>
  import MicIcon from './icons/IconMic.vue'
  import CameraIcon from './icons/IconCamera.vue'
  import SettingIcon from './icons/IconSetting.vue'
  import RadioIcon from './icons/IconRadio.vue'
</script>

<template>
  <div class="flex justify-between items-center py-2 px-2.5 shadow-proof bg-white">
    <div class="flex gap-x-10 ml-3">
      <MicIcon class="fill-[#6E6B7B]" />
      <CameraIcon class="fill-[#6E6B7B]" />
      <SettingIcon class="fill-[#6E6B7B]" />
    </div>
    <button class="px-6 py-3 w-32 rounded-5">
      <div class="flex items-center">
        <RadioIcon class="mr-2.5 fill-white" />
        <span class="text-sm whitespace-nowrap text-white">Go Live</span>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
  button {
    background: linear-gradient(44.66deg, #eb3939 3.5%, rgba(240, 103, 103, 0.75) 96.91%);
  }
</style>
