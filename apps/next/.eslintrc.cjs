const path = require("path");

module.exports = {
  extends: ["@propcom/eslint-config/next"],
  rules: {
    "@next/next/no-html-link-for-pages": [
      "error",
      path.join(__dirname, "pages"),
    ],
  },
  settings: {
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "href" }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
