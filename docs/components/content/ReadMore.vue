<template>
  <Alert>
    <Icon name="heroicons-outline:window" />
    Read more in
    <NuxtLink :to="link">
      {{ computedTitle }}
    </NuxtLink>.
  </Alert>
</template>

<script setup lang="ts">
import { splitByCase, upperFirst } from 'scule'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: undefined
  }
})

const createTitle = (title?: string, link: string) => (title || link.split('/').filter(Boolean).map(part => splitByCase(part).map(p => upperFirst(p)).join(' ')).join(' > ').replace('Api', 'API'))

const computedTitle = computed(() => createTitle(props.title, props.link))
</script>
