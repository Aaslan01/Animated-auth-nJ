module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  // FIX: solution for reanimated plugin
  plugins: ["react-native-reanimated/plugin"],
  env: {
    production: {
      plugins: [
        "react-native-reanimated/plugin",
      ],
    },
  },
};
