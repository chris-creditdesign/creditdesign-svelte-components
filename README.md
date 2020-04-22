# creditdesign-svelte-components

> Svelte layout components used to layout interactive graphics and articles.

Preview the compontents in a [Storybook](https://storybook.js.org/) here: [https://chris-creditdesign.github.io/creditdesign-svelte-components]()

## Setting up

- Run `npm init`

## Preview

- Run `npm run storybook`

## Build docs

- Run `build-storybook` to build a static version of Storybook in the docs folder to publish on github pages.

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
