import { createTheme, Theme } from "@mui/material";

// declare module "@mui/material/styles" {
//   // allow configuration using `createTheme`
//   interface ThemeOptions extends Theme {
//     colors?: {
//       [key: string]: string;
//     };
//     fontSizes?: {
//       [key: string]: number;
//     };
//     radii?: number[];
//     space?: {
//       [key: string]: number;
//     };
//     sizes?: {
//       [key: string]: number;
//     };
//     textTransform?: {
//       [key: string]: string;
//     };
//   }
// }

export const theme = createTheme({
    palette: {
      primary: {
        main: "#7AC86A",
        dark: "#59BA45",
        contrastText: "#000"
      },
    },
  })

// export const theme: Theme = createTheme({
//   palette: {
//     primary: {
//       main: "#7AC86A",
//     },
//   },
//   colors: {
//     background: "#FFF",
//     main: "#7AC86A",
//     darker: "#59BA45",
//     backgroundDark: "#121212",
//     textPrimary: "#000",
//     textSecondary: "#FFF",
//   },
//   fontSizes: {
//     extraLarge: 44,
//     large: 32,
//     medium: 24,
//     base: 18,
//     small: 14,
//     extraSmall: 10,
//   },
//   radii: [10, 20, 30, 40, 50],
//   space: {
//     extraSmall: 4,
//     small: 8,
//     medium: 16,
//     large: 32,
//   },
//   sizes: {
//     extraSmall: 20,
//     small: 28,
//     medium: 34,
//     large: 48,
//   },
//   textTransform: {
//     uppercase: "uppercase",
//     capitalize: "capitalize",
//     lowercase: "lowercase",
//     none: "none",
//   },
// });

// declare module '@mui/material/styles' {

//   interface SimplePaletteColorOptions {
//     lightest?: string
//     darkest?: string
//   }

//   interface InfoPalette {
//     info: SimplePaletteColorOptions
//   }
// }

// const theme2 = createTheme({
//   palette:
// })
