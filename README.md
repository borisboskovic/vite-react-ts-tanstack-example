# VSCode extensions

## Required:

- ESLint
- Prettier - Code formatter
- EditorConfig for VS code

## Recommended:

- Tailwind CSS IntelliSense
- Code Spell Checker
- GitLens - Git supercharged

---

# Project Set-Up

## 1. Create project using Vite

```
npm create vite@latest app-name -- --template react-ts
```

To change **port** on which application will start edit `vite.config.ts` with:

```ts
server: {
  port: 3000,
},
```

---

## 2. ESLint configuration

### Initialize eslint, don't enforce code style (Prettier will be used for that)

```
eslint --init
```

### Install _eslint-config-prettier_ using the command:

```
npm install --save-dev eslint-config-prettier
```

then add "prettier" as the last item in the extends array

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```

### Additional configuration

To get rid of the error _'module' is not defined. (eslintno-undef)_ in **.js** files, it is necessary to add `"node": true` to env section of eslintrc.json file

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  }
}
```

for more details see:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

---

## 3. Configuring **Prettier**

Adding file .prettierrc with following content will inherit some configuration from .editorconfig file

```json
{
  "editorconfig": true
}
```

| Option          | .prettierrc | .editorconfig   | Default Prettier value |
| --------------- | ----------- | --------------- | ---------------------- |
| **Print Width** | printWidth  | max_line_length | 80                     |
| **Tab Width**   | tabWidth    | indent_size     | 2                      |
| **Tabs**        | useTabs     | indent_style    | false                  |
| **End of Line** | endOfLine   | end_of_line     | "lf"                   |

For the complete list of Prettier options, see:
[Prettier Config Options](https://prettier.io/docs/en/options.html)

---

## 4. Add **Tailwind** to project

### Install

```
npm install -D tailwindcss postcss autoprefixer
```

### Initialize

```
npx tailwindcss init -p
```

### Add paths to content in tailwind.config.js

### Add **_@tailwind_** directives in global css file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install prettier plugin for ordering classnames

```
npm install -D prettier prettier-plugin-tailwindcss
```

## 5. Environment variables

- Environment variables are exposed on import.meta.env object
- For variables loaded from the .env files, only ones that are prefixed with **VITE\_** are available on the client side.

To provide type support edit `vite-env.d.ts` file, adding variable definitions in `ImportMetaEnv` interface

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

For more details see:
[Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html#env-files)

---

## 6. Alias imports

To enable alias imports it is necessary to configure **resolve** property in `vite.config.ts`

```ts
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
```

Install @types/node as dev dependency to get rid of type errors for **path**

It is also necessary to edit `tsconfig.json` (Set baseUrl and add path alias).

```json
"paths": {
  "@/*": ["./*"]
},
"baseUrl": "./src"
```

---

## 7. Adding storybook

Initialize Storybook by running the following command:

```
npx sb init
```

To open **Storybook** run:

```
npm run storybook
```

If the `type` property in `package.json` is set to `module`, it will be necessary to rename file `.storybook/main.js` to `./storybook/main.cjs` (_CommonJS_), for the **Storybook** to be able to run.

To load **Tailwind** styles add the following line at the top of the `./storybook/preview.js` file:

```js
import "../src/index.css";
```

---

## 8. React Query

### Install React-Query library

```
npm i @tanstack/react-query
```

### Install ReactQuery dev tools

```
npm i @tanstack/react-query-devtools
```

---

