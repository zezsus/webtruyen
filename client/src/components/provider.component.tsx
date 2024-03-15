/** @format */
"use client";

import { theme } from "@/common/styles/theme";
import { ThemeProvider } from "@emotion/react";

const ProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ProviderComponent;
