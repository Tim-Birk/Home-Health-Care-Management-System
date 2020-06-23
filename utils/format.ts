import { parsePhoneNumberFromString } from "libphonenumber-js/min";
import moment from "moment";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export function formatPhone({ strPhone }) {
  if (!strPhone) {
    return strPhone;
  }
  // set character limit
  strPhone = strPhone.substring(0, 14);
  // Format phone numbers())
  let phone = parsePhoneNumberFromString("+1" + strPhone);
  if (strPhone.length !== 14) {
    strPhone = strPhone.replace(/\D+/g, "");
  }
  let formattedPhone;
  if (phone) {
    formattedPhone = phone.formatNational();
  } else {
    return strPhone;
  }
  return formattedPhone;
}

export function formatPhoneExt({ strExt }) {
  let Ext = strExt.substring(0, 5).replace(/\D+/g, "");
  return Ext;
}

export function formatSS({ strSS }) {
  let ss = strSS.substring(0, 11).replace(/\D+/g, "");
  if (ss.length >= 9) {
    ss =
      ss.substring(0, 3) + "-" + ss.substring(3, 5) + "-" + ss.substring(5, 9);
  }
  return ss;
}

export function validateEmail({ email }) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function formatZip({ str }) {
  let newStr = str.substring(0, 5).replace(/\D+/g, "");
  return newStr;
}
export function formatZipExt({ str }) {
  let newStr = str.substring(0, 4).replace(/\D+/g, "");
  return newStr;
}

export function formatTaxId({ str }) {
  if (str.length <= 3) {
    return str;
  } else {
    let newStr = str.substring(0, 10).replace(/\D+/g, "");
    newStr = newStr.substring(0, 2) + "-" + newStr.substring(2, 10);
    return newStr;
  }
}

export const getDateFormat = (date) => {
  var d = moment(date);
  return date && d.isValid() ? d : null;
};
