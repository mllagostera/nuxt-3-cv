<script setup lang="ts">
// #region [Data]

const { awesome } = useAppConfig()
const { locale } = useI18n()
const softskills = computed(
  () => awesome?.curriculumVitae[locale.value]?.softSkills as string[],
)
// #endregion
</script>
<template>
  <div class="h-fit xl:max-w-[600px]">
    <div id="technologies">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
        <br>
        </h2>
      </div>
      <p class="font-bold text-xl xl:text-2xl">{{ $t('softSkills') }}</p>
      <div class="font-semibold">{{ $t('SoftSkillsDescription') }}:</div>
    </div>
    <ul class="ml-6">
        <li v-for="(item, index) in softskills" :key="index" class="list-none" >
          <i class="material-symbols-light-check"></i>
          {{ item }}
        </li>
      </ul>
  </div>
</template>
