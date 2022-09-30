import React, { FC, ReactElement, PropsWithChildren } from "react";
import { render as nativeRender, RenderOptions } from "@testing-library/react";
import { NextUIProvider } from "@nextui-org/react";
import userEvent from "@testing-library/user-event";

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return {
    user: userEvent.setup(),
    ...nativeRender(ui, { wrapper: Wrapper, ...options }),
  };
}

export * from "@testing-library/react";
