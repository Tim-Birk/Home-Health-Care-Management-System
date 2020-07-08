import { Col, Alert } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import {
  GenerateInput,
  GenerateCustomInput,
  GenerateDropdown,
} from "./GenerateFormikFields";

import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";

import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createCompanyGraphQL } from "../graphql/mutations/createCompany";
import { createUserCompanyGraphQL } from "../graphql/mutations/createUserCompany";
import { publishCompanyGraphQL } from "../graphql/mutations/publishCompany";
import { publishUserCompanyGraphQL } from "../graphql/mutations/publishUserCompany";
import { states, businessType } from "../utils/staticLists";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import * as Yup from "yup";
import {
  phoneNumberMask,
  phoneRegExp,
  zipRegExp,
  zipMask,
  zipExtMask,
  zipExtRegExp,
  phoneExtMask,
  taxIdMask,
  taxIdRegExp,
} from "../utils/inputMasks";

type CreateCompanyProfileFormProps = {};

const StyledContainer = styled.div`
  ${({ theme }) => `
        margin-left: ${theme["margin-medium"]};
    `}
`;

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
        color: inherit;
        text-align: left;
        margin-top: ${theme["margin-small"]};
        margin-left: ${theme["margin-small"]};
        margin-bottom: ${theme["margin-medium"]};
    `}
`;

const StyledAlert = styled(Alert)`
  ${({ theme }) => `
        margin-top: ${theme["margin-small"]};
        margin-left: ${theme["margin-small"]};
        margin-bottom: ${theme["margin-small"]};
    `}
`;

const StyledForm = styled(Form)`
  ${({ theme }) => `
        max-width: 900px;
    `}
`;

const StyledResetButton = styled(ResetButton)`
  ${({ theme }) => `
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

export const CreateCompanyForm = () => {
  const [createCompanyMutation, { loading }] = useMutation(
    createCompanyGraphQL
  );

  const [
    createUserCompanyMutation,
    { loading: createUserCompanyLoading },
  ] = useMutation(createUserCompanyGraphQL);

  const [
    publishCompanyMutation,
    { loading: publishCompanyLoading },
  ] = useMutation(publishCompanyGraphQL);

  const [
    publishUserCompanyMutation,
    { loading: publishUserCompanyLoading },
  ] = useMutation(publishUserCompanyGraphQL);

  const { user, loading: isFetchingUser } = useFetchUser();

  const [isCompanyAdded, setIsCompanyAdded] = useState(false);

  const initiateCreateCompany = async (values) => {
    const result = await createCompanyMutation({
      variables: {
        data: {
          ...values,
        },
      },
    });

    const { createCompany } = result.data;

    setInputs({ ...createCompany });

    const userCompanyResult = await createUserCompanyMutation({
      variables: {
        data: {
          user: user.sub,
          company: { connect: { id: createCompany.id } },
        },
      },
    });

    const { createUserCompany } = userCompanyResult.data;

    await publishCompanyMutation({
      variables: {
        where: { id: createCompany.id },
      },
    });

    await publishUserCompanyMutation({
      variables: {
        where: { id: createUserCompany.id },
      },
    });

    setIsCompanyAdded(true);
    Router.push(`/company/${createCompany.id}`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      legalBusinessName: "",
      companyId: "",
      doingBusinessAs: "",
      abbreviation: "",
      companyCode: "",
      taxId: "",
      nationalProviderIdentifier: "",
      businessType: "Select",
      address1: "",
      address2: "",
      zip: "",
      zipExt: "",
      city: "",
      state: "Select",
      phone: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactExt: "",
      contactEmail: "",
    },
    initiateCreateCompany
  );

  if (
    loading ||
    publishCompanyLoading ||
    isFetchingUser ||
    createUserCompanyLoading ||
    publishUserCompanyLoading
  )
    return <Loading />;

  const disabled =
    loading ||
    publishCompanyLoading ||
    isCompanyAdded ||
    createUserCompanyLoading ||
    publishUserCompanyLoading;

  return (
    <>
      {isCompanyAdded ? (
        <StyledAlert
          message={`${inputs.legalBusinessName} has been added`}
          type="success"
        />
      ) : (
        <StyledContainer>
          <StyledPageTitle>Create New Company</StyledPageTitle>
          <Formik
            initialValues={{
              legalBusinessName: "",
              companyId: "",
              doingBusinessAs: "",
              abbreviation: "",
              companyCode: "",
              taxId: "",
              nationalProviderIdentifier: "",
              businessType: "Select",
              address1: "",
              address2: "",
              zip: "",
              zipExt: "",
              city: "",
              state: "Select",
              phone: "",
              fax: "",
              contactName: "",
              contactTitle: "",
              contactPhone: "",
              contactExt: "",
              contactEmail: "",
            }}
            validationSchema={Yup.object({
              legalBusinessName: Yup.string().required("Required"),
              taxId: Yup.string()
                .matches(taxIdRegExp, "Tax Id is not valid")
                .required("Required"),
              businessType: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              address1: Yup.string().required("Required"),
              city: Yup.string().required("Required"),
              state: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              zip: Yup.string()
                .matches(zipRegExp, "Zip is not valid")
                .required("Required"),
              zipExt: Yup.string().matches(
                zipExtRegExp,
                "Zip Extension is not valid"
              ),
              phone: Yup.string()
                .matches(phoneRegExp, "Number is not valid")
                .required("Required"),
              fax: Yup.string().matches(phoneRegExp, "Number is not valid"),
              contactName: Yup.string().required("Required"),
              contactPhone: Yup.string()
                .matches(phoneRegExp, "Number is not valid")
                .required("Required"),
              contactEmail: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateCompany(values);
                setSubmitting(false);
              }, 400);
            }}
            enableReinitialize={true}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                setFieldValue,
              } = props;
              return (
                <StyledForm>
                  <GenerateInput name="legalBusinessName" span={18} />
                  <GenerateInput name="companyId" span={12} />
                  <GenerateInput name="doingBusinessAs" span={18} />
                  <GenerateInput name="abbreviation" span={8} />
                  <GenerateInput name="companyCode" span={12} />
                  <GenerateCustomInput
                    name="taxId"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={taxIdMask}
                    value={values.taxId}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateInput name="nationalProviderIdentifier" span={12} />
                  <GenerateDropdown
                    name="businessType"
                    value={values.businessType}
                    handleDropdownChange={handleDropdownChange}
                    list={businessType}
                    span={12}
                  />
                  <GenerateInput name="address1" span={18} />
                  <GenerateInput name="address2" span={18} />
                  <GenerateInput name="city" span={18} />
                  <GenerateDropdown
                    name="state"
                    value={values.state}
                    handleDropdownChange={handleDropdownChange}
                    list={states}
                    span={6}
                  />
                  <GenerateCustomInput
                    name="zip"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={zipMask}
                    value={values.zip}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="zipExt"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={zipExtMask}
                    value={values.zipExt}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="phone"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.phone}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="fax"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.fax}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateInput name="contactName" span={18} />
                  <GenerateInput name="contactTitle" span={18} />
                  <GenerateCustomInput
                    name="contactPhone"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.contactPhone}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="contactExt"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.contactExt}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateInput name="contactEmail" span={18} />

                  <Col span={18} offset={1}>
                    <SubmitButton disabled={disabled} type="primary">
                      Create
                    </SubmitButton>
                    <StyledResetButton
                      disabled={disabled}
                      type="primary"
                      danger
                    >
                      Reset
                    </StyledResetButton>
                  </Col>
                </StyledForm>
              );
            }}
          </Formik>
        </StyledContainer>
      )}
    </>
  );
};
