"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}