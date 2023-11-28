# GoGreen website created on React + TypeScript + Vite

This is beautiful website for lovers of beautiful design and plants deploy in [![Netlify Status](https://api.netlify.com/api/v1/badges/9c02b926-3595-452a-b9dc-32116e46a0c5/deploy-status)](https://app.netlify.com/sites/go-green-website/deploys)

## Table of Contents

- [Project overview](#project-overview)
- [Technologies and libraries used](#technologies-and-libraries-used)
- [Default documentation of Vite.js](#default-documentation-of-vitejs)
- [Screenshots](#screenshots)
  - [General information](#general-information)
  - [Expanding the ESLint configuration](#general-informatione)

## Project overview

With its help, the GoGreen company provides information about its services, as well as provides an opportunity for people to communicate with the agency and cooperate with the company.

## Technologies and libraries used

The project was implemented using the following technologies and libraries:

![Vite.js](https://img.shields.io/badge/Vite.js-4.4.5-lightskyblue) ![Typescript](https://img.shields.io/badge/Typescript-5.0.2-darkslateblue) ![Sass](https://img.shields.io/badge/Sass-1.69.5-coral)![React](https://img.shields.io/badge/React.js-18.2.0-teal) ![React-dom](https://img.shields.io/badge/React%20dom-18.2.0-lightgpink) ![React-router-dom](https://img.shields.io/badge/React%20router%20dom-6.18.0-lightpink) ![React-responsive](https://img.shields.io/badge/React%20responsive-9.0.2-lavenderblush)

## Screenshots

![home page](./src/assets/screenshots/1.png)
![about page (1)](./src/assets/screenshots/2.png)
![about page (2)](./src/assets/screenshots/3.png)
![services page (1)](./src/assets/screenshots/4.png)
![services page (2)](./src/assets/screenshots/5.png)
![blog page (1)](./src/assets/screenshots/6.png)
![blog page (2)](./src/assets/screenshots/7.png)
![blog page (3)](./src/assets/screenshots/8.png)
![contact page](./src/assets/screenshots/9.png)

# Default documentation of Vite.js

## General information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
