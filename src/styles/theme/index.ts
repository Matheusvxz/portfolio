import { ThemeOptions, createTheme } from "@mui/material"
import { Montserrat } from "next/font/google";


declare module '@mui/material/styles' {

}


const typography:ThemeOptions["typography"] = {
    fontFamily: [
        '"Helvetica Neue"',
    ].join(","),
    h1: {
        fontWeight:         300,
        fontSize:           '6rem',
        lineHeight:         1.167,
        letterSpacing:      '-0.01562em',
    },
    h2: {
        fontWeight:         300,
        fontSize:           '3.75rem',
        lineHeight:         1.2,
        letterSpacing:      '-0.00833em',
    },
    h3: {
        fontWeight:         400,
        fontSize:           '3rem',
        lineHeight:         1.167,
        letterSpacing:      '0em',
    },
    h4: {
        fontWeight:         400,
        fontSize:           '2.125rem',
        lineHeight:         1.235,
        letterSpacing:      '-0.00735em',
    },
    h5: {
        fontWeight:         400,
        fontSize:           '1.5rem',
        lineHeight:         1.334,
        letterSpacing:      '0em',
    },
    h6: {
        fontWeight:         500,
        fontSize:           '1.25rem',
        lineHeight:         1.6,
        letterSpacing:      '0.0075em',
    },
    subtitle1: {
        fontWeight:         400,
        fontSize:           '1rem',
        lineHeight:         1.75,
        letterSpacing:      '0.00938em',
    },
    subtitle2: {
        fontWeight:         500,
        fontSize:           '0.875rem',
        lineHeight:         1.57,
        letterSpacing:      '0.00714em',
    },
    body1: {
        fontWeight:         400,
        fontSize:           '1rem',
        lineHeight:         1.5,
        letterSpacing:      '0.00938em',
    },
    body2: {
        fontWeight:         400,
        fontSize:           '0.875rem',
        lineHeight:         1.43,
        letterSpacing:      '0.01071em',
    },
    button: {
        fontWeight:         500,
        fontSize:           '0.875rem',
        lineHeight:         1.75,
        letterSpacing:      '0.02857em',
        textTransform:      'uppercase',
    }
}



export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        
    },
    typography,
});

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main:           '#d3daff',
        },
        secondary: {
            main:           '#48bba3',
        },
        background: {
            default:        '#0a192f',
            paper:          '#122d55',
        },
        tonalOffset: 0.2,
    },
    typography,
});
