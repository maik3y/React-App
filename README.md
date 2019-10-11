# React App

Webpack, Typescript, React, Eslint, Prettier, HMR, Jest

# Quick start

Install dependencies.

```
yarn
```

Run in development.

```
yarn start
```

# Production

Run the `build` command to create a build in the `dist` folder.

```
yarn build
```

## Maintenance

```
yarn global add syncyarnlock // install syncyarnlock globally
yarn upgrade // update dependencies, updates yarn.lock
syncyarnlock -s -k // updates package.json with versions installed from yarn.lock
yarn install // updates yarn.lock with current version constraint from package.json
```
