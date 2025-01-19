import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
// Define custom colors
const primaryColor = '#3f51b5';
const secondaryColor = '#f50057';
const backgroundColor = '#f4f4f4';
const textColor = '#333333';

// Create the theme
const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
    },
    text: {
      primary: textColor,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
