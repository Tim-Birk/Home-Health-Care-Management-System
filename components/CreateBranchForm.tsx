import { Col, Alert } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createBranchGraphQL } from "../graphql/mutations/createBranch";
import { publishBranchGraphQL } from "../graphql/mutations/publishBranch";
import { states } from "../utils/staticLists";
import { UpdateBranchProfileForm } from "./UpdateBranchProfileForm";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCustomInput,
  GenerateDropdown,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import {
  phoneNumberMask,
  phoneRegExp,
  zipMask,
  zipRegExp,
  zipExtRegExp,
  zipExtMask,
  phoneExtMask,
} from "../utils/inputMasks";

type CreateBranchProfileFormProps = {
  id: any;
  legalBusinessName: string;
};

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
        color: inherit;
        text-align: left;
        margin-bottom: ${theme["margin-medium"]};
    `}
`;

const StyledAlert = styled(Alert)`
  ${({ theme }) => `
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

export const CreateBranchForm = ({
  id,
  legalBusinessName,
}: CreateBranchProfileFormProps) => {
  const [createBranchMutation, { loading }] = useMutation(createBranchGraphQL);

  const [
    publishBranchMutation,
    { loading: publishBranchLoading },
  ] = useMutation(publishBranchGraphQL);

  const [isBranchAdded, setIsBranchAdded] = useState(false);

  const initiateCreateBranch = async (values) => {
    const result = await createBranchMutation({
      variables: {
        data: {
          ...values,
        },
      },
    });

    const { createBranch } = result.data;

    setInputs({ ...createBranch });
    await publishBranchMutation({
      variables: {
        where: { id: createBranch.id },
      },
    });
    setIsBranchAdded(true);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      branchName: "",
      branchCode: "",
      abbreviation: "",
      address1: "",
      address2: "",
      city: "",
      state: "Select",
      zip: "",
      zipExt: "",
      phone: "",
      phoneExt: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactPhoneExt: "",
      contactEmail: "",
      company: { connect: { id: id } },
    },
    initiateCreateBranch
  );

  if (loading || publishBranchLoading) return <Loading />;

  const disabled = loading || publishBranchLoading || isBranchAdded;

  return (
    <>
      {isBranchAdded ? (
        <>
          <StyledAlert
            message={`${inputs.branchName} has been added`}
            type="success"
          />
          <UpdateBranchProfileForm
            id={id}
            branchId={inputs.id}
            legalBusinessName={legalBusinessName}
          />
        </>
      ) : (
        <>
          <StyledPageTitle>{legalBusinessName} - Create Branch</StyledPageTitle>
          <Formik
            initialValues={{
              branchName: "",
              branchCode: "",
              abbreviation: "",
              address1: "",
              address2: "",
              city: "",
              state: "Select",
              zip: "",
              zipExt: "",
              phone: "",
              phoneExt: "",
              fax: "",
              contactName: "",
              contactTitle: "",
              contactPhone: "",
              contactPhoneExt: "",
              contactEmail: "",
              company: { connect: { id: id } },
            }}
            validationSchema={Yup.object({
              branchName: Yup.string().required("Required"),
              address1: Yup.string().required("Required"),
              city: Yup.string().required("Required"),
              state: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              zip: Yup.string()
                .matches(zipRegExp, "Zip is not valid")
                .required("Required"),
              zipExt: Yup.string()
                .matches(zipExtRegExp, "Zip Extension is not valid"),
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
                initiateCreateBranch(values);
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
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                setFieldValue,
              } = props;
              return (
                <StyledForm>
                  <GenerateInput name="branchName" span={18} />
                  <GenerateInput name="branchCode" span={12} />
                  <GenerateInput name="abbreviation" span={6} />
                  <GenerateInput name="address1" span={18} />
                  <GenerateInput name="address2" span={18} />
                  <GenerateInput name="city" span={18} />
                  <GenerateDropdown
                    name="state"
                    value={inputs.state}
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
                    name="phoneExt"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.phoneExt}
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
                    name="contactPhoneExt"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.contactPhoneExt}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateInput name="contactEmail" span={18} />

                  <Col span={18} offset={1}>
                    <SubmitButton disabled={disabled} type="primary">
                      Save
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
        </>
      )}
    </>
  );
};
