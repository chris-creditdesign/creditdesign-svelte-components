module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/storybook/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@whitespace/storybook-addon-html",
  ],
};
