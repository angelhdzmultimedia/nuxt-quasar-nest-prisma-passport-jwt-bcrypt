<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
import Test from './test.vue';
const auth = useAuthStore();
</script>

<template>
  <NuxtLayout name="main">
    <span class="text-h1">Hello, {{ auth.profile?.name ?? 'Guest' }}!</span>
  </NuxtLayout>
</template>
