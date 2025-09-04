export function useApi() {
  const config = useRuntimeConfig()
  return <T>(url: string, options = {}) =>
    $fetch<T>(url, { baseURL: config.public.apiBase as string, ...options })
}