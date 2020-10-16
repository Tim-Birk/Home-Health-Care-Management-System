import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { companyGraphQL } from "../graphql/queries/company";
import { updateCompanyGraphQL } from "../graphql/mutations/updateCompany";
import { publishCompanyGraphQL } from "../graphql/mutations/publishCompany";
import { useFetchUser } from "../utils/user";
import { businessType, states } from "../utils/staticLists";
import { createCompanyUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import {
  GenerateInput,
  GenerateCustomInput,
  GenerateDropdown,
} from "./GenerateFormikFields";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
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

type UpdateCompanyProfileFormProps = {
  id: any;
};

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
    color: inherit;
    text-align: left;
    margin-bottom: ${theme["margin-medium"]};
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

export const UpdateCompanyProfileForm = ({
  id,
}: UpdateCompanyProfileFormProps) => {
  const { user, loading: isFetchUser } = useFetchUser();

  const { loading: isQueryLoading, data, error } = useQuery(companyGraphQL, {
    variables: { where: { id } },
  });

  const [updateComanyMutation, { loading: updateCompanyLoading }] = useMutation(
    updateCompanyGraphQL
  );

  const [
    publishComanyMutation,
    { loading: publishCompanyLoading },
  ] = useMutation(publishCompanyGraphQL);

  const initiateUpdateCompany = async (values) => {
    const updateObj = createCompanyUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateComanyMutation({
        variables: {
          data: {
            ...updateObj,
          },
          where: { id },
        },
      });
      await publishComanyMutation({
        variables: {
          where: { id },
        },
      });
      const updateCompany = _.get(result, "data.updateCompany");

      setInputs({ ...updateCompany });

      return updateCompany;
    } else {
      const company = _.get(data, "company");
      return company;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      legalBusinessName: "",
      companyId: "",
      doingBusinessAs: "",
      abbreviation: "",
      companyCode: "",
      taxId: "",
      nationalProviderIdentifier: "",
      businessType: "",
      address1: "",
      address2: "",
      zip: "",
      zipExt: "",
      city: "",
      state: "",
      phone: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactExt: "",
      contactEmail: "",
    },
    initiateUpdateCompany
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [companyState, setCompanyState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && companyState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedCompany } = _.get(data, "company", {});

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedCompany }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setCompanyState((state) => ({ ...state, isQueryLoading }));
  }

  if (!data || isFetchUser) return <Loading />;
  const owner = _.get(user, "sub") || "";
  const foundCompanyUser = _.find(
    _.get(data, "company.companyUsers"),
    function (o) {
      return o.user === owner;
    }
  );

  if (!user) {
    Router.push("/");
  } else if (!foundCompanyUser) {
    return (
      <Error errorText="The current user does not have permission to view this company" />
    );
  }

  const disabled =
    isQueryLoading || updateCompanyLoading || publishCompanyLoading;

  if (disabled) return <Loading />;

  return (
    <>
      <StyledPageTitle>
        {data.company.legalBusinessName} - Company Profile
      </StyledPageTitle>
      <Formik
        initialValues={{
          ...inputs,
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
            initiateUpdateCompany(values);
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
                  Save
                </SubmitButton>
                <StyledResetButton disabled={disabled} type="primary" danger>
                  Reset
                </StyledResetButton>
              </Col>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
