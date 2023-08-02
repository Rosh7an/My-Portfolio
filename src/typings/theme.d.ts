import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primaryGradient: PaletteColorOptions;
    header: PaletteColorOptions;
    neutral: PaletteColorOptions;
  }

  interface PaletteOptions {
    primaryGradient: PaletteColorOptions;
    header: PaletteColorOptions;
    neutral: PaletteColorOptions;
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    header: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
