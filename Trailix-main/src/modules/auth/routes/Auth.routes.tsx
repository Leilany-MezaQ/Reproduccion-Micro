import { type RouteObject } from 'react-router'
import LoginPage from '../LoginPage'

/** Rutas de autenticación
 * @description Rutas relacionadas con la autenticación, como login, registro, recuperación de contraseña, etc.
 * @see https://reactrouter.com/en/main/route/route-object
 */
export const AuthRoutes: RouteObject[] = [{ path: '/iniciar-sesion', element: <LoginPage /> }]
