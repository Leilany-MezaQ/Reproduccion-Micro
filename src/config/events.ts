/** Eventos globales
 * @description Define los eventos globales que se utilizan en la aplicación para la comunicación entre componentes.
 * OPEN_UPGRADE_MODAL: Evento para abrir el modal de actualización.
 * OPEN_AUTH_MODAL: Evento para abrir el modal de autenticación.
 * LOGOUT_REQUIRED: Evento para indicar que se requiere cerrar sesión.
 */

export const GLOBAL_EVENTS = {
  OPEN_UPGRADE_MODAL: 'trailix:open-upgrade-modal',
  OPEN_AUTH_MODAL: 'trailix:open-auth-modal',
  LOGOUT_REQUIRED: 'trailix:logout',
}
