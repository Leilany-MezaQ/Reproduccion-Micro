# CONTRIBUTING.md

Este documento te guiará paso a paso para aportar tu trabajo a **Trailix**. Al ser un proyecto basado en microservicios y un monorepo, es fundamental seguir estas reglas para mantener el orden y la calidad del código.

---

## Primeros Pasos

1. **React & TS**: Asegúrate de entender cómo funciona React y TypeScript. Puedes consultar la [documentación oficial de React](https://react.dev/learn).
2. **pnpm**: Usaremos `pnpm` por su velocidad. Si no lo tienes: `npm install -g pnpm`.
3. **Docker**: Es obligatorio para levantar bases de datos y servicios. Asegúrate de tener **Docker Desktop** instalado y corriendo.
4. **Husky**: Al hacer `git commit`, se ejecutará una validación automática. Si tu código tiene errores de linting o formato, el commit será rechazado.

---

## Flujo de Trabajo (Fork & Sync)

### 1. Configura tu entorno

- **Fork**: Haz clic en el botón **"Fork"** en el repo de Trailix para tener tu copia en tu cuenta de GitHub.
- **Clona tu fork**:

```bash
git clone https://github.com/TU_USUARIO/Trailix.git
cd Trailix

```

- **Agrega el remoto original (Upstream)**:

```bash
git remote add upstream https://github.com/Gerardo-Ontiveros/Trailix.git

```

- **Instala dependencias**: Ejecuta `pnpm install` en la raíz del proyecto.

### 2. Desarrollo de Features

- **Sincroniza siempre**: Antes de empezar, asegúrate de estar al día con el proyecto principal:

```bash
git switch main && git fetch upstream && git merge upstream/main

```

- **Crea tu rama**: Usa el formato `nombre-microservicio/tipo/descripcion`.

```bash
git switch -c auth/feature/login-form

```

## Estándares del Proyecto

### En el Frontend

Para evitar conflictos masivos, seguiremos una **Arquitectura basada en Features**:

- **Tu carpeta**: Todo tu código debe vivir en `src/modules/[tu-microservicio]/`.
- **Componentes Globales**: No modifiques `src/components/common/` sin consultar al equipo.
- **Estilos**: Usa módulos de CSS (`.module.css`) o Tailwind para no afectar las vistas de otros equipos.
  
Importaciones:

- **Para importar componentes**: Para hacer las importaciones deberas utilizar `@/carpeta/` evita utilizar `../..`

### En los Microservicios

- Cada microservicio debe vivir en su propia carpeta dentro de `src/modules/[tu-microservicio]/services/` (ej. `src/modules/[tu-microservicio]/services/auth`).

## Envío de Cambios

### 1. Commits Atómicos

No subas todo el microservicio en un solo bloque. Usa mensajes descriptivos siguiendo el estándar: `tipo(microservicio): descripción`.

- ✅ `feat(auth): crear validación de JWT`
- ✅ `fix(frontend): corregir alineación de botones en el home`

### 2. Pull Request (PR)

1. Sube tus cambios a tu fork: `git push origin nombre-de-tu-rama`.
2. En GitHub, abre un **Pull Request** hacia la rama `main` del repositorio original.
3. **Revisión**: Tu PM y QA asignados revisarán el código. Si hay observaciones, corrígelas en la misma rama y haz push; la PR se actualizará sola.

---

## Buenas Prácticas

- **No Hardcode**: Usa variables de entorno (`.env.local`) para URLs de APIs.
- **DRY (Don't Repeat Yourself)**: Si compartes interfaces de TS entre microservicios, úsalas desde `packages/types`.
- **PRs Pequeñas**: Son más fáciles de revisar y menos propensas a errores.
- **Sync Diario**: Sincroniza con `upstream/main` diariamente para evitar conflictos de merge gigantes.

## ¿Necesitas ayuda? 🆘

Si tienes dudas técnicas o problemas con el entorno, abre un **Issue** en el repositorio o contacta directamente a tu **PM** asignado.
