<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
import Test from './test.vue';
const auth = useAuthStore();
</script>

<template>
  <NuxtLayout name="main">
    <main class="column items-center justify-center full-width full-height">
      <span class="text-h4">Hello, {{ auth.profile?.name ?? 'Guest' }}!</span>
    </main>
  </NuxtLayout>
</template>
