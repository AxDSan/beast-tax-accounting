/**
 * Custom Webpack configuration for Gatsby.
 */
exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  // Handle non-JavaScript files in node_modules that cause Webpack to fail
  // These are often READMEs, LICENSEs, etc. that some packages import or
  // that Webpack tries to parse incorrectly.
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(md|txt|LICENSE|License|README|README\.md|license|d\.ts)$/,
          use: loaders.null(),
        },
      ],
    },
  });
};
