export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    return navigateTo('/auth/login');
  }
});
