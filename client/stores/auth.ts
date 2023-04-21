import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { AuthUser } from 'src/types/auth-user';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref<boolean>(false);
  const token = ref<string | null>(null);
  const profile = ref<AuthUser | null>(null);

  async function register(registerData) {
    const { data, error, pending, refresh } = await useAsyncData(
      'register',
      () => {
        return $fetch('http://localhost:5000/api/auth/register', {
          method: 'post',
          body: registerData,
        });
      },
    );

    if (error && error.value) {
      Notify.create({
        message: JSON.stringify(error.value),
        type: 'negative',
      });
    } else {
      return navigateTo('/auth/login');
    }
  }

  async function login(email: string, password: string) {
    const { data, error, pending, refresh } = await useAsyncData(
      'login',
      () => {
        return $fetch('http://localhost:5000/api/auth/login', {
          method: 'post',
          body: { email, password },
        });
      },
    );

    if (error && error.value) {
      Notify.create({
        message: JSON.stringify(error.value),
        type: 'negative',
      });
    } else {
      isAuthenticated.value = true;
      profile.value = data.value as AuthUser;
      return navigateTo('/');
    }
  }

  return {
    isAuthenticated,
    register,
    login,
    token,
    profile,
  };
});
