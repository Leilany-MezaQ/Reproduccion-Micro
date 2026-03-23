import { API_CONFIG, STORAGE_KEYS } from '@/config/constants'
import { GLOBAL_EVENTS } from '@/config/events'
import axios from 'axios'

/** Configuracion de la instancia de axios
 * @description Esta configuración centraliza la creacion de la instancia axios:
 * Pasamos la URL base.
 * Pasamos el tiempo de espera para las solicitudes.
 * Nos permite manejar la autenticación y los errores de manera consistente en toda la aplicación.
 * Mejor mantenimiento y escabilidad.
 */

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
})

/** Inyección de token en las solicitudes
 * @descrition Este interceptor se encarga de agregar el token de autenticación a cada solicitud saliente:
 * Si el token existe en el almacenamiento local, se añade al encabezado Authorization de la solicitud.
 */

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/** Manejo de respuestas de error
 * @description Este interceptor se encarga de manejar los errores de respuesta:
 * Si el código de estado es 401 (no autorizado), se dispara un evento para abrir el modal de autenticación.
 * Si el código de estado es 403 (acceso denegado), se dispara un evento para abrir el modal de actualización.
 */

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      window.dispatchEvent(new CustomEvent(GLOBAL_EVENTS.OPEN_AUTH_MODAL))
    }

    if (status === 403) {
      window.dispatchEvent(new CustomEvent(GLOBAL_EVENTS.OPEN_UPGRADE_MODAL))
    }
    return Promise.reject(error)
  },
)
