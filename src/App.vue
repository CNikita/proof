<script setup>
  import OptionsPanel from './components/OptionsPanel.vue'
  import PreviewStreamPanel from './components/PreviewStreamPanel.vue'
  import TabsPanel from './components/TabsPanel.vue'
</script>

<template>
  <div class="flex h-screen overflow-auto portrait:flex-col">
    <div class="landscape:w-1/2">
      <OptionsPanel class="portrait:absolute bottom-0 w-full" />
      <PreviewStreamPanel />
    </div>
    <div class="flex flex-col grow landscape:w-1/2 portrait:mb-16">
      <TabsPanel />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
