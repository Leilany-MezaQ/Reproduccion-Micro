/** Configuración de la API
 * @description Centraliza la configuración de la API
 * BASE_URL: La URL base para todas las solicitudes a la API, obtenida de las variables de entorno.
 * TIMEOUT: El tiempo de espera para las solicitudes, establecido en 10 segundos.
 */

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_GATEWAY_URL,
  TIMEOUT: 10000,
}

/** Planes de suscripción
 * @description Centraliza la configuración de los planes de suscripción
 * FREE: Plan gratuito
 * BASIC: Plan básico
 * PREMIUM: Plan premium
 */

export const SUBSCRIPTION_PLANS = {
  FREE: 'FREE',
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM',
} as const

/** Configuración de anuncios
 * @description Centraliza la configuración de los anuncios
 * SHORT_MS: Duración corta para los anuncios, obtenida de las variables de entorno.
 * LONG_MS: Duración larga para los anuncios, obtenida de las variables de entorno.
 */

export const AD_CONFIG = {
  SHORT_MS: Number(import.meta.env.VITE_AD_DURATION_SHORT),
  LONG_MS: Number(import.meta.env.VITE_AD_DURATION_LONG),
}

/** Configuración de almacenamiento
 * @description Centraliza la configuración de las claves de almacenamiento
 */

export const STORAGE_KEYS = {
  TOKEN: 'trailix_auth_token',
  USER_PLAN: 'trailix_user_plan',
}
