module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/web-components",
  "staticDirs": ['../public'],
  "refs": {
    'external-components': {
      "title": "Chromatic",
      "url": "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
      "expanded": false // optional, true by default
    },
    'react-components': {
      "title": "React Components",
      "url": "http://localhost:6007",
      "expanded": false // optional, true by default
    },
    'angular-components': {
      "title": "Angular Components",
      "url": "http://localhost:6008",
      "expanded": false // optional, true by default
    }
  }
}