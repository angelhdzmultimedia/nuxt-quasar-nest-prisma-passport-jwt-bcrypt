<script lang="ts" setup>
import { Dark } from 'quasar';

const auth = useAuthStore();

const profile = computed(() => {
  return auth.isAuthenticated ? `${auth.profile.name}'s Profile` : 'Guest';
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn icon="home" to="/" />
        <q-toolbar-title>Nest + Nuxt Blog App</q-toolbar-title>
        <q-avatar color="white" class="cursor-pointer">
          <q-menu style="width: 180px">
            <q-list>
              <q-item to="/profile" v-popup-close>
                <q-item-section>
                  <span class="text-center">{{ profile }}</span>
                </q-item-section>
              </q-item>
              <q-item v-if="!auth.isAuthenticated">
                <q-item-section>
                  <q-btn color="primary" label="Login" />
                </q-item-section>
              </q-item>
              <q-item v-if="auth.isAuthenticated">
                <q-item-section>
                  <q-btn color="purple" label="Logout" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-page-container class="window-height window-width">
      <q-page class="column full-width full-height">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
