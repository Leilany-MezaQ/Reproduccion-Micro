<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]

<a href="http://www.tailix.reexxy.com/" target="_blank" rel="noopener noreferrer">
    <img width="150px" src="https://imgur.com/WdEejs7.png" alt="Logo">
</a>

## Trailix

Trailix es una moderna SPA de transmisión de tráilers con entrega de video condicional, acceso basado en suscripción y flujos de retención de usuarios optimizados.

</div>

<details>

<summary>Tabla de contenidos</summary>

- [Trailix](#trailix)
- [Caracteristicas principales](#caracteristicas-principales)
- [Capturas de pantalla de Trailix](#caputras-de-pantalla-de-trailix)
- [Flujo de Trailix](#flujo-de-trailix)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Contribuir al proyecto](#contribuir-al-proyecto)
- [Stack](#stack)

</details>

## Caracteristicas principales

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Caputras de pantalla de Trailix

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Flujo de Trailix

<div align="center">
<img src="https://imgur.com/LGiqPsh.png" alt="Flujo de trailix" >
</div>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentacion oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
> Deberas tener instalado NVM previamente ve la documentacion para saber como instalarlo
```sh
nvm install 24.14.0
nvm use 24.10.0
```

> Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

- PNPM

```sh
    npm install -g pnpm
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/Gerardo-Ontiveros/Trailix.git
   ```

2. Instala lo paquetes de npm

   ```sh
   pnpm install
   ```

3. Ejecuta el proyecto

   ```sh
   pnpm run start
   ```

4. Autenticación para uso de API
   - Pide credenciales a tu desarrollador backend designado.
   - Crea un archivo llamado `env.local` y copia el contenido de [.env.demo](.env.demo) en él.
   - Reemplaza el texto copiado de demo en `.env.local` con las credenciales que te otorgaron.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Contribuir al proyecto

Aqui tienes una guia rapida para contribuir de manera correcta al proyecto:

1. Haz un [_fork_](https://github.com/Gerardo-Ontiveros/Trailix/fork) del proyecto
2. Clona tu [_fork_](https://github.com/Gerardo-Ontiveros/Trailix/fork) (`git clone <URL del fork>`).
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`).
4. Crea tu Rama de funcionalidad (`git switch -c microservicio/tipo/nombre`).
5. Realiza tus cambios (`git commit 'tipo: caracteristica`).
6. Haz un Push a la Rama (`git push origin microservicio/tipo/nombre`).
7. Abre una [_pull requeset_](https://github.com/Gerardo-Ontiveros/Trailix/pulls).

Consulta [guia de contribuición](https://github.com/Gerardo-Ontiveros/Trailix/blob/main/CONTRIBUTING.md) para saber como puedes empezar a colaborar de mejor manera.

**Contribuidores:**

[![Contribuidores](https://contrib.rocks/image?repo=Gerardo-Ontiveros/Trailix&max=10&colums=20)](https://github.com/Gerardo-Ontiveros/Trailix/graphs/contributors)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Stack

- [![React][react-badge]][react-url] - The library for web and native user interfaces.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - A utility-first CSS framework for rapidly building custom designs.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[react-url]: https://react.dev/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[react-badge]: https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[contributors-shield]: https://img.shields.io/github/contributors/Gerardo-Ontiveros/Trailix?style=for-the-badge
[contributors-url]: https://github.com/Gerardo-Ontiveros/Trailix/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Gerardo-Ontiveros/Trailix?style=for-the-badge
[forks-url]: https://github.com/Gerardo-Ontiveros/Trailix/network/members
[issues-shield]: https://img.shields.io/github/issues/Gerardo-Ontiveros/Trailix?style=for-the-badge
[issues-url]: https://github.com/Gerardo-Ontiveros/Trailix/issues
