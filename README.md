# Kraal Web Application

![Preview](./public/assets/images/meta/facebook.png)

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Library we use

We are using [HighLightJS](https://highlightjs.readthedocs.io/en/latest/api.html#highlightall) to highlight our tokenize code.

## Development

Run your application

```bash
npm run dev
```

## Firebase Setup

[Setup Firebase](./src/firebase/FIREBASE.md)

## Deployment

Build your application locally and fix bugs

```bash
npm run build
```

Deploy using netlify cli

```bash
netlify deploy
netlify deploy --prod
```

**Note: Do not push to repository before checking your netlify deployment.**

## Related Links

- [GitHub Repo](https://github.com/kraalai/app-frontend.git)
- [Dev preview](https://kraal-frontend.netlify.app)
- [Dev preview Azure](https://ashy-river-0df11c00f.4.azurestaticapps.net/)
- [Website](https://app.kraal.ai)
- <https://ashy-river-0df11c00f.4.azurestaticapps.net/kraalai>
