export const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const phoneRegExp = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

export const phoneExtMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/];

export const zipMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/];
export const zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/

export const zipExtMask = [/[0-9]/, /\d/, /\d/, /\d/];
export const zipExtRegExp = /(^\d{4}$)/

export const taxIdMask = [
  /[0-9]/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const taxIdRegExp = /^(0[1-6]|1[0-6]|2[0-7]|[35][0-9]|[468][0-8]|9[0-5|8-9]|7[1-7])-?\d{7}$/;

export const socialMask = [
  /[0-9]/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const socialRegExp = /^\d{3}-\d{2}-\d{4}$/