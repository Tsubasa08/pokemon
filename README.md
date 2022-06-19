## Setup
```
npx create-react-app frontend --template typescript
npx create-react-app demo --template typescript
yarn add [パッケージ]
yarn install
```
https://gotohayato.com/content/544/

## Start
```
docker-compose build
```

```
docker-compose run --rm frontend yarn install
```

### 2
- https://webpack.js.org/guides/getting-started/
- https://webpack.js.org/guides/build-performance/
```
npm
npm install --save-dev  webpack-dev-server
npx webpack-dev-server
npm install react react-dom @types/react @types/react-dom
```



https://webpack.js.org/guides/typescript/#root
```
yarn add  react react-dom @types/react @types/react-dom
yarn add --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react typescript ts-loader sass css-loader style-loader sass-loader
yarn add react-query @chakra-ui/icons @chakra-ui/react
```

```
docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'
```

## Reest
```
docker-compose down -v --remove-orphans
```
