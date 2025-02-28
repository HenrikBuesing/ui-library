'use client';
import {ThemeProvider} from "@hbuesing/ui-library";
import {ReactNode} from "react";

export default function layout({children}: {children: ReactNode}) {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );
}