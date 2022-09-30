import React, { FC, ReactElement, PropsWithChildren } from "react";
import { render as nativeRender, RenderOptions } from "@testing-library/react";
import { NextUIProvider } from "@nextui-org/react";
import userEvent from "@testing-library/user-event";

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

const render = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  nativeRender(ui, { wrapper: Wrapper, ...options });

export function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

export * from "@testing-library/react";
