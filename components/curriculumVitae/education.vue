<script setup lang="ts">
// #region [Data]

import type { Education } from "~/utils/curriculumVitae";

const { awesome } = useAppConfig()
const { locale } = useI18n()
const education = computed(
  () => awesome?.curriculumVitae[locale.value]?.education as Education,
)
const certifications = computed(
  () => awesome?.curriculumVitae[locale.value]?.certifications as certification[],
)
// #endregion
const url = useRequestURL()
</script>
<template>
  <div class="h-fit">
    <div id="education" v-if="education">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('education') }}
        </h2>
      </div>
      <div class="pl-2">
        <div class="font-bold text-2xl">{{ education.title }}</div>
        <div class="font-semibold text-gray-400">
          <span>{{ education.school }}</span>,
          <span>{{ education.scholastic }}</span>
        </div>
      </div>
      <div
          v-for="(item, index) in certifications"
          class="pl-2"
        >
          <p class="font-bold text-2xl">{{ item.title }}</p>
          <p class="font-semibold text-gray-400">
            <span>{{ item.school }}</span>, <span>{{ item.scholastic }}</span> 
            <span v-if="item.url"> - <a class="button" :href="item.url">{{ item.urlDescription }}🔗</a></span>
          </p>
        </div>
    </div>
    <div v-else class="font-bold text-red underline">
      Please add education in app config
    </div>
  </div>
</template>
