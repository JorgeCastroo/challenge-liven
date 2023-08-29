## Start project

- Install the dependencies:

```zsh
yarn  add

```

- Run the tests:

```zsh
yarn  test

```

- Run the project:

```zsh
expo  start

```

## Estrutura do projeto e organização de pastas

```
|-- node_modules  # Installed modules/libs
|-- src  # Source code
    |-- @types  # Typing files
    |-- components  # Components usable in screens
    |-- redux  # Redux configuration file
        |-- hooks  # Hooks for state control
        |-- reducer.tsx  # Application states
        |-- storage  # Storage
    |-- routes  # Route configuration file
        |-- models  # Route typing
        |-- routes.tsx
    |-- screens  # Screens
        |-- Home  # Example screen folder for Home
            |-- Home.tsx
            |-- styles.ts # Home styles
    |-- services  # Controller files and API routes
    |-- store  # Arquivo de configuração do redux
    |-- styles # Theme files
        |-- theme
  .gitattributes
  .gitignore
  app.json
  App.test.js
  App.tsx
  babel.config.js
  index.js
  metro.config.ts
  package.json
  README.md
  tsconfig.json
  yarn.lock
```
