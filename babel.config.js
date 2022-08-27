module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            "@styles": "./src/styles",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@components": "./src/components",
            "@assets": "./src/assets"
          },
        },
      ],
    ],
  };
};
