import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    // sobreescribe fonts sobre chakra.fonts
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSyetemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"`,
    fontWeights: { normal: 400, medium: 600, bold: 700 },
  },
};

export default theme;
