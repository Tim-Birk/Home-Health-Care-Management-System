const padding_zero = `0em`;
const padding_xsmall = `8px`;
const padding_small = `16px`;
const padding_medium = `32px`;
const padding_large = `48px`;
const padding_xlarge = `64px`;
const margin_zero = `0em`;
const margin_xsmall = `8px`;
const margin_small = `16px`;
const margin_medium = `32px`;
const margin_large = `48px`;
const margin_xlarge = `64px`;
const font_size_xs = `0.75em`;
const font_size_sm = `1.0em`;
const font_size_md = `1.25em`;
const font_size_lg = `1.5em`;
const font_size_xl = `2.0em`;

const heart_color = `#eb2f96`;
const border_color = `#e6e6e6`;
const header_color = `#ffffff`;
const header_border_color = header_color;

const border_width = `2px`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '768px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const theme = {
  'font-size-xs': font_size_xs,
  'font-size-sm': font_size_sm,
  'font-size-md': font_size_md,
  'font-size-lg': font_size_lg,
  'font-size-xl': font_size_xl,
  'padding-zero': padding_zero,
  'padding-xsmall': padding_xsmall,
  'padding-small': padding_small,
  'padding-medium': padding_medium,
  'padding-large': padding_large,
  'padding-xlarge': padding_xlarge,
  'margin-zero': margin_zero,
  'margin-xsmall': margin_xsmall,
  'margin-small': margin_small,
  'margin-medium': margin_medium,
  'margin-large': margin_large,
  'margin-xlarge': margin_xlarge,
  'heart-color': heart_color,
  'border-color': border_color,
  'border-width': border_width,
  'header-color': header_color,
  'header-border-color': header_border_color,
  device
};