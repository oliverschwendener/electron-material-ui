import { createTheme, Theme } from "@mui/material";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

export const getTheme = (): Theme => (window.ContextBridge.themeShouldUseDarkColors() ? darkTheme : lightTheme);
