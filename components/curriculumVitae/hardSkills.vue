<script setup lang="ts">
// #region [Data]

const { awesome } = useAppConfig()
const { locale } = useI18n()
const technologies = computed(
  () => awesome?.curriculumVitae[locale.value]?.technologies as string[],
)
const stack = computed(
  () => awesome?.curriculumVitae[locale.value]?.stack as string,
)
// #endregion
</script>
<template>
  <div class="h-fit xl:max-w-[600px]">
    <div id="technologies">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('technicalSkills') }} 
        </h2>
      </div>
      <p class="font-bold text-xl xl:text-2xl">{{ $t('hardSkills') }}</p>
      <p class="mb-2 font-semibold text-gray-400">
        <span>{{ $t('tools') }}</span>
      </p>
    </div>
    <section class="py-base container">
      <div class="flex flex-wrap gap-3 justify-center">
        <div v-for="(item, index) in stack" :key="index">
              <Icon :name="item" mode='css' size="50px"/>
          </div>
      </div>
    </section>
    <p class="mb-2 font-semibold text-gray-400">
        <span>{{ $t('workflow') }}</span>
      </p>
    <ul class="ml-6">
        <li v-for="(item, index) in technologies" :key="index" class="list-none" >
          <i class="material-symbols-light-check"></i>
          {{ item }}
        </li>
      </ul>
  </div>
</template>
