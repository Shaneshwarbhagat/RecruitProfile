
#Assingment Note

1. To run project command is 'npm start' before that do 'npm install' to get all dependencies.
2. I have use some libraries like axios for api call, reactMUI for designing component(card, tab, button, grid, notification etc.) but as said all css done in plain css only
3. on click of edit icon candidate details is changed using Redux state management
4. Mock api is been used using JSON server for right side card detail and candidate details.
5. To run JSON server command is  'json-server --watch  --port 3001 src/api/db.json' . Instead of db.json if entered candidateList.json then in browser also you can see the response details added.
6. multiple component is created for reusability.
8. At last conducted testing of application and found some issues which fixed after testing by me.
9. like on header passing changed updated by values and updating below data of assigned tabs as well.
10. Challenges in this was understanding the assignment and to make it happen as per asked in which designing and structuring the code flow of components with its required interface took most of time , after that got into JSON server internal api calling process and implemented it to show how get api will work here.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
