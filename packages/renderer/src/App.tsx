import { CssBaseline, Theme, ThemeProvider, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getTheme } from "./themes";

export const App: FC = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(getTheme());

    useEffect(() => {
        console.log("Hello from renderer");
        window.ContextBridge.reactAppStarted();
        window.ContextBridge.onNativeThemeChanged(() => setCurrentTheme(getTheme()));
    }, []);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h5">Welcome to electron/material-ui!</Typography>
            </div>
        </ThemeProvider>
    );
};
