import tailwindcss from "@tailwindcss/vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};
export default config;
