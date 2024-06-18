# PetStore, uma aplicação para Pets

Este é um pequeno projeto para exercitar minhas habilidades, usando React.js, TypeScript, Axios, Express, Prisma, MongoDB e Sass.
* React em conjunto com seus Hooks é usado para a estruturação e roteamento da página.
* TypeScript e Express são usados para criar a lógica, interfaces e o funcionamento das Requisições HTTP e Respostas.
* Axios é utilizado para lidar com a comunicação entre o Back e o Front.
* Prisma facilita nossa interação com os dados enviados para o MongoDB.
* Sass é utilizado para dar estilos e cores as páginas.

## Instruções

Para utilizar, é necessário fazer o download ou clonar este repositório, assim que fizer uma das opções anteriores, abra o projeto e configure o `.env` e o `prisma/schema.prisma` (este último se necessário) de acordo com seu Banco de Dados para realizar a conexão, com todos os dados corretos, rode a aplicação executando os seguintes comandos no terminal `npm run dev`, `npm run server` e se necessitar ver as atualizações em uma interface amigável, execute `npx prisma studio`.

## Imagens

![HomePage](./src/imgs/HomePageVet.png)
![SignUp](./src/imgs/SignUpVet.png)
![Login](./src/imgs/LoginVet.png)
![Store](./src/imgs/StoreVet.png)
![Account](./src/imgs/AccountVet.png)
![Cart](./src/imgs/CartVet.png)
![Details](./src/imgs/DetailsVet.png)



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
