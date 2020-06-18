import { useState } from "react";
import moment from "moment";
import * as _ from "lodash";
import {
  formatPhone,
  formatPhoneExt,
  formatTaxId,
  formatZip,
  formatZipExt,
  formatSS,
} from "../utils/format";

export const submitForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleUpdateCompany = async (event) => {
    if (event) event.preventDefault();
    const company = await callback();
    const {
      id,
      legalBusinessName,
      companyId,
      doingBusinessAs,
      abbreviation,
      companyCode,
      taxId,
      nationalProviderIdentifier,
      businessType,
      address1,
      address2,
      zip,
      zipExt,
      city,
      state,
      phone,
      fax,
      contactName,
      contactTitle,
      contactPhone,
      contactExt,
      contactEmail,
      owner,
      stage,
    } = company;
    setInputs(() => ({
      id,
      legalBusinessName,
      companyId,
      doingBusinessAs,
      abbreviation,
      companyCode,
      taxId,
      nationalProviderIdentifier,
      businessType,
      address1,
      address2,
      zip,
      zipExt,
      city,
      state,
      phone,
      fax,
      contactName,
      contactTitle,
      contactPhone,
      contactExt,
      contactEmail,
      owner,
      stage,
    }));
  };

  const handleUpdateBranch = async (event) => {
    if (event) event.preventDefault();
    const company = await callback();
    const {
      id,
      branchName,
      branchCode,
      abbreviation,
      address1,
      address2,
      city,
      state,
      zip,
      zipExt,
      phone,
      phoneExt,
      fax,
      contactName,
      contactTitle,
      contactPhone,
      contactPhoneExt,
      contactEmail,
      stage,
    } = company;
    setInputs(() => ({
      id,
      branchName,
      branchCode,
      abbreviation,
      address1,
      address2,
      city,
      state,
      zip,
      zipExt,
      phone,
      phoneExt,
      fax,
      contactName,
      contactTitle,
      contactPhone,
      contactPhoneExt,
      contactEmail,
      stage,
    }));
  };

  const handleUpdateEmployee = async (event) => {
    // if (event) event.preventDefault();
    const employee = await callback();
    const {
      id,
      firstName,
      lastName,
      middleInitial,
      maidenName,
      alsoKnownAs,
      gender,
      birthdate,
      social,
      sharedEmployee,
      earningsType,
      originalHireDate,
      orientationDate,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      phone1,
      phone1Type,
      phone1Ext,
      phone2,
      phone2Type,
      phone2Ext,
      phone3,
      phone3Type,
      phone3Ext,
      otherPhone,
      otherPhoneType,
      otherPhoneExt,
      fax,
      email,
      currentStatus,
      isArchived,
      branch,
    } = employee;
    setInputs(() => ({
      id,
      firstName,
      lastName,
      middleInitial,
      maidenName,
      alsoKnownAs,
      gender,
      birthdate,
      social,
      sharedEmployee,
      earningsType,
      originalHireDate,
      orientationDate,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      phone1,
      phone1Type,
      phone1Ext,
      phone2,
      phone2Type,
      phone2Ext,
      phone3,
      phone3Type,
      phone3Ext,
      otherPhone,
      otherPhoneType,
      otherPhoneExt,
      fax,
      email,
      currentStatus,
      isArchived,
      branch,
    }));
  };

  const handleSubmit = (event) => {
    // if (event) event.preventDefault();
    callback();
    setInputs(() => ({ ...initialValues }));
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => {
      const newInputs = _.cloneDeep(inputs);
      if (
        event.target.name === "phone" ||
        event.target.name === "fax" ||
        event.target.name === "contactPhone" ||
        event.target.name === "phone1" ||
        event.target.name === "phone2" ||
        event.target.name === "phone3" ||
        event.target.name === "otherPhone"
      ) {
        _.set(
          newInputs,
          event.target.name,
          formatPhone({ strPhone: event.target.value })
        );
      } else if (
        event.target.name === "contactExt" ||
        event.target.name === "phoneExt" ||
        event.target.name === "contactPhoneExt" ||
        event.target.name === "phone1Ext" ||
        event.target.name === "phone2Ext" ||
        event.target.name === "phone3Ext" ||
        event.target.name === "otherPhoneExt"
      ) {
        _.set(
          newInputs,
          event.target.name,
          formatPhoneExt({ strExt: event.target.value })
        );
      } else if (event.target.name === "taxId") {
        _.set(
          newInputs,
          event.target.name,
          formatTaxId({ str: event.target.value })
        );
      } else if (
        event.target.name === "social" ||
        event.target.name === "confirmSocial"
      ) {
        _.set(
          newInputs,
          event.target.name,
          formatSS({ strSS: event.target.value })
        );
      } else if (event.target.name === "zip") {
        _.set(
          newInputs,
          event.target.name,
          formatZip({ str: event.target.value })
        );
      } else if (event.target.name === "zipExt") {
        _.set(
          newInputs,
          event.target.name,
          formatZipExt({ str: event.target.value })
        );
      } else {
        _.set(newInputs, event.target.name, event.target.value);
      }
      return newInputs;
    });
  };

  const handleDateChange = (date, dateString, id) => {
    setInputs((inputs) => {
      const newInputs = _.cloneDeep(inputs);
      _.set(newInputs, id, dateString);
      return newInputs;
    });
  };

  const handleDropdownChange = (event) => {
    setInputs((inputs) => {
      const newInputs = _.cloneDeep(inputs);
      _.set(newInputs, event.item.props.title, event.key);
      return newInputs;
    });
  };

  // const handleAddIngredient = (event) => {
  //   event.persist();
  //   setInputs((inputs) => {
  //     const sortedIngredients = _.sortBy(inputs.ingredients, ["key"]);
  //     const key =
  //       sortedIngredients.length > 0
  //         ? sortedIngredients[sortedIngredients.length - 1].key + 1
  //         : 0;
  //     return {
  //       ...inputs,
  //       ingredients: _.concat(inputs.ingredients, [
  //         { key, amount: "", unit: "-", type: "" },
  //       ]),
  //     };
  //   });
  // };

  // const handleDeleteIngredient = (event) => {
  //   event.persist();
  //   const position = parseInt(event.target.name);
  //   setInputs((inputs) => {
  //     return {
  //       ...inputs,
  //       ingredients: _.filter(
  //         inputs.ingredients,
  //         (_i, index) => index !== position
  //       ),
  //     };
  //   });
  // };

  const handleSetImages = (images) => {
    setInputs((inputs) => {
      const newInput = _.cloneDeep(inputs);
      _.set(newInput, "images", images);
      return newInput;
    });
  };

  return {
    inputs,
    setInputs,
    handleInputChange,
    handleDropdownChange,
    handleDateChange,
    // handleAddIngredient,
    // handleDeleteIngredient,
    handleSetImages,
    handleSubmit,
    handleUpdateCompany,
    handleUpdateBranch,
    handleUpdateEmployee,
  };
};
