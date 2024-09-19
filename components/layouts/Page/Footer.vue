<script lang="ts" setup>
const { awesome } = useAppConfig()
const repo = computed(() => awesome.layout?.footer)
const isActive = ref(false)
onMounted(() => {
  setTimeout(() => {
    isActive.value = repo.value.isActive
  }, 2000)
})
</script>

<template>
  <footer
    :class="{ 'mb-[80px]': isActive }"
    class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <div v-if="repo.isDemo">
    </div>
    <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"
    >
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        {{ awesome?.author?.name || '' }}. All rights reserved.
      </div>
      <div>{{ awesome.name }}</div>
    </div>
  </footer>
</template>
<style lang="scss">
@keyframes slideInBottom {
  from {
    bottom: -200px;
  }
  to {
    bottom: 0;
  }
}
.try-it-enter-active,
.try-it-leave-active {
  bottom: 0;
  transition: all 0.5s ease;
}
.try-it-enter-from,
.try-it-leave-to {
  bottom: -100px;
}
</style>
