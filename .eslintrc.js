module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app", // usa o mesmo do Create React App
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // adicione regras personalizadas aqui se quiser
  },
};
