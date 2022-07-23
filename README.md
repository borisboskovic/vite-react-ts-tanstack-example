## 1. Create project using Vite

```
npm create vite@latest app-name -- --template react-ts
```

---

## 2. Initialize eslint, don't enforce code style (Prettier will be used for that)

```
eslint --init
```

---

## 3. Add _eslint-config-prettier_

Use the command

```
npm install --save-dev eslint-config-prettier
```

then add "prettier" as the last item in the extends array

```
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

for more details see:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

---

## 4. Config prettier

Adding file .prettierrc with following content will inherit some configuration from .editorconfig file

```
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
