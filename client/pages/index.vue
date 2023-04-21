<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const auth = useAuthStore();
</script>

<template>
  <NuxtLayout name="main">
    <span class="text-h1">Hello, {{ auth.profile.name }}!</span>
  </NuxtLayout>
</template>
