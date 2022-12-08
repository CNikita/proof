<script setup>
  import PreviewButton from './PreviewButton.vue'
</script>

<template>
  <div>
    <div class="relative">
      <img class="w-full" src="../assets/images/preview-stream.png" alt="Preview stream" />
      <img
        class="w-full absolute top-3 right-4 h-6 w-16"
        src="../assets/images/streasy.png"
        alt="streasy"
      />
    </div>
    <div class="flex justify-between mx-[3px] my-2">
      <div class="flex grow gap-x-[3px] mr-[3px]">
        <PreviewButton> Closer </PreviewButton>
        <PreviewButton> Medium </PreviewButton>
        <PreviewButton> Wide </PreviewButton>
      </div>
      <div class="flex grow gap-x-[3px] justify-end">
        <PreviewButton> Left TV </PreviewButton>
        <PreviewButton> Right TV </PreviewButton>
        <PreviewButton> Contacts </PreviewButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
