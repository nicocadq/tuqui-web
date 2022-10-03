import React, { FC, ReactElement, PropsWithChildren } from "react";
import { render as nativeRender, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider>
    {children}
    <Toaster />
  </NextUIProvider>
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
