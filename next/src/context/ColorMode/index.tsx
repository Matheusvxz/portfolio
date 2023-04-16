import { DarkTheme, LightTheme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";

type ColorModes = 'light' | 'dark';

interface ColorModeContextProps {
    toggleColorMode: () => void;
}

const INITIAL_VALUES:ColorModeContextProps = {
    toggleColorMode: () => {},
}

export const ColorModeContext = createContext<ColorModeContextProps>(INITIAL_VALUES);

interface ColorModeProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ColorModeProvider = (props: ColorModeProviderProps) => {

    const [mode, setMode] = useState<ColorModes>('light');

    const toggleColorMode = () => {
        setMode((prev) => {
            if(prev === "dark") {
                return "light"
            } else {
                return "dark";
            }
        })
    }

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const colorScheme = event.matches ? 'dark' : 'light';
                setMode(colorScheme);
            });
    }, []);

    const theme = useMemo(() => {
        if(mode === 'dark') {
            return DarkTheme;
        } else {
            return LightTheme;
        }
    }, [mode]);

    return (
        <ColorModeContext.Provider
            value={{
                toggleColorMode,
            }}
        >
            <ThemeProvider theme={theme} >
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}


export const useColorMode = () => useContext(ColorModeContext);