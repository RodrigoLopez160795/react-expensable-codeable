import { Global } from "@emotion/react";
import React from "react";
import { global, reset } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <Global styles={global} />
      <Story />
    </>
  ),
];
