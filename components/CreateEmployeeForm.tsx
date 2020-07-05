import { Col, Alert } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GenerateCustomInput,
  GeneratePasswordInput,
  GenerateDropdown,
  GenerateDateInput,
  GenerateCheckbox,
  GenerateObjectDropdown,
} from "./GenerateFormikFields";
import {
  GeneratePasswordInput as GenerateAntdPasswordInput,
} from "./GenerateFields";
import { useMutation } from "@apollo/react-hooks";
import { createEmployeeGraphQL } from "../graphql/mutations/createEmployee";
import { publishEmployeeGraphQL } from "../graphql/mutations/publishEmployee";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { states, gender, earningsType, phoneType } from "../utils/staticLists"; 

import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";

import { PictureUploader } from "./PictureUploader";
import Router from "next/router";
import * as Yup from "yup";
import {
  phoneNumberMask,
  phoneRegExp,
  zipRegExp,
  zipMask,
  phoneExtMask,
} from "../utils/inputMasks";

type CreateEmployeeFormProps = {
  id: any;
  legalBusinessName: string;
  branches: any;
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

export const CreateEmployeeForm = ({
  id,
  legalBusinessName,
  branches,
}: CreateEmployeeFormProps) => {
  const [createEmployeeMutation, { loading }] = useMutation(
    createEmployeeGraphQL
  );

  const [
    publishEmployeeMutation,
    { loading: publishEmployeeLoading },
  ] = useMutation(publishEmployeeGraphQL);

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });

  const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);

  const initiateCreateEmployee = async (values) => {
    const result = await createEmployeeMutation({
      variables: {
        data: {
          ...values,
          branch: { connect: { id: values.branch.value } },
          images: inputs.images
        },
      },
    });

    const { createEmployee } = result.data;
    setInputs({ ...createEmployee });
    await publishEmployeeMutation({
      variables: {
        where: { id: createEmployee.id },
      },
    });

    if (createEmployee.images) {
      await publishAssetMutation({
        variables: {
          where: { id: createEmployee.images.id },
        },
      });
    }

    setIsEmployeeAdded(true);
    Router.replace(`/company/${id}/employees/${createEmployee.id}`);
  };

  const [confirmSocial, setConfirmSocial] = useState("");

  const {
    inputs,
    handleDropdownChange,
    handleSetImages,
    setInputs,
  } = submitForm(
    {
      firstName: "",
      lastName: "",
      middleInitial: "",
      maidenName: "",
      alsoKnownAs: "",
      gender: "Select",
      birthdate: null,
      social: "",
      sharedEmployee: false,
      earningsType: "Select",
      originalHireDate: null,
      orientationDate: null,
      address1: "",
      address2: "",
      city: "",
      state: "Select",
      zip: "",
      country: "",
      phone1: "",
      phone1Type: "Select",
      phone1Ext: "",
      phone2: "",
      phone2Type: "Select",
      phone2Ext: "",
      phone3: "",
      phone3Type: "Select",
      phone3Ext: "",
      otherPhone: "",
      otherPhoneType: "Select",
      otherPhoneExt: "",
      fax: "",
      email: "",
      currentStatus: "Pending",
      isArchived: false,
      company: { connect: { id } },
      branch: { key: "0", label: "Select", value: "0" },
    },
    initiateCreateEmployee
  );

  if (loading || publishEmployeeLoading) return <Loading />;

  const disabled =
    loading || publishEmployeeLoading || publishAssetLoading || isEmployeeAdded;

  // create iterable list for dropdown options
  let listBranches = branches.map((b) => {
    const item = { id: b.id, name: b.branchName };
    return item;
  });
  // add select option to iterable list
  listBranches = [{ id: "0", name: "Select" }].concat(listBranches);

  
  const handleConfirmSocialChange = (event) => {
    event.persist();
    setConfirmSocial(event.target.value);
  };

  return (
    <>
      {isEmployeeAdded ? (
        <>
          <StyledAlert
            message={`${inputs.lastName}, ${inputs.firstName} has been added`}
            type="success"
          />
        </>
      ) : (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Create Employee
          </StyledPageTitle>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              middleInitial: "",
              maidenName: "",
              alsoKnownAs: "",
              gender: "Select",
              birthdate: null,
              social: "",
              sharedEmployee: false,
              earningsType: "Select",
              originalHireDate: null,
              orientationDate: null,
              address1: "",
              address2: "",
              city: "",
              state: "Select",
              zip: "",
              country: "",
              phone1: "",
              phone1Type: "Select",
              phone1Ext: "",
              phone2: "",
              phone2Type: "Select",
              phone2Ext: "",
              phone3: "",
              phone3Type: "Select",
              phone3Ext: "",
              otherPhone: "",
              otherPhoneType: "Select",
              otherPhoneExt: "",
              fax: "",
              email: "",
              currentStatus: "Pending",
              isArchived: false,
              company: { connect: { id } },
              branch: { key: "0", label: "Select", value: "0" },
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              gender: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              branch: Yup.object().test("select", "Required", (value) => {
                return value.value !== "0" && value;
              }),
              birthdate: Yup.date().required("Required").nullable(),
              social: Yup.string()
                .test("confirmSocial", "Socials do not match", (value) => {
                  return value === confirmSocial;
                })
                .required("Required"),
              earningsType: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              originalHireDate: Yup.date().required("Required").nullable(),
              address1: Yup.string().required("Required"),
              city: Yup.string().required("Required"),
              state: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              zip: Yup.string()
                .matches(zipRegExp, "Zip is not valid")
                .required("Required"),
              phone1: Yup.string()
                .matches(phoneRegExp, "Number is not valid")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateEmployee(values);
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
                  <GenerateInput name="firstName" span={18} />
                  <GenerateInput name="lastName" span={18} />
                  <GenerateInput name="middleInitial" span={8} maxLength={1} />
                  <GenerateInput name="maidenName" span={18} />
                  <GenerateInput name="alsoKnownAs" span={18} />
                  <GenerateDropdown
                    name="gender"
                    value={inputs.gender}
                    handleDropdownChange={handleDropdownChange}
                    list={gender}
                    span={12}
                  />
                  <GenerateObjectDropdown
                    name="branch"
                    objList={listBranches}
                    value={values.branch}
                    span={18}
                    handleDropdownChange={(e) => handleDropdownChange}
                  />
                  <GenerateCheckbox name="sharedEmployee" span={18} />
                  <GenerateDateInput name="birthdate" span={12} />
                  <GeneratePasswordInput
                    name="social"
                    span={12}
                    maxLength={9}
                  />
                  {values.social ? (
                    <GenerateAntdPasswordInput
                      name="confirmSocial"
                      value={confirmSocial}
                      handleInputChange={handleConfirmSocialChange}
                      span={12}
                      maxLength={9}
                    />
                  ) : null}
                  <GenerateDropdown
                    name="earningsType"
                    value={inputs.earningsType}
                    handleDropdownChange={handleDropdownChange}
                    list={earningsType}
                    span={18}
                  />
                  <GenerateDateInput name="originalHireDate" span={12} />
                  <GenerateDateInput name="orientationDate" span={12} />
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
                  <GenerateInput name="email" span={18} />
                  <GenerateCustomInput
                    name="phone1"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.phone1}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="phone1Ext"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.phone1Ext}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateDropdown
                    name="phone1Type"
                    value={inputs.phone1Type}
                    handleDropdownChange={handleDropdownChange}
                    list={phoneType}
                    span={18}
                  />

                  <GenerateCustomInput
                    name="phone2"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.phone2}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="phone2Ext"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.phone2Ext}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateDropdown
                    name="phone2Type"
                    value={inputs.phone2Type}
                    handleDropdownChange={handleDropdownChange}
                    list={phoneType}
                    span={18}
                  />

                  <GenerateCustomInput
                    name="phone3"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.phone3}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="phone3Ext"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.phone3Ext}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateDropdown
                    name="phone3Type"
                    value={inputs.phone3Type}
                    handleDropdownChange={handleDropdownChange}
                    list={phoneType}
                    span={18}
                  />

                  <GenerateCustomInput
                    name="otherPhone"
                    span={12}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneNumberMask}
                    value={values.otherPhone}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateCustomInput
                    name="otherPhoneExt"
                    span={8}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    mask={phoneExtMask}
                    value={values.otherPhoneExt}
                    setFieldValue={setFieldValue}
                  />
                  <GenerateDropdown
                    name="otherPhoneType"
                    value={inputs.otherPhoneType}
                    handleDropdownChange={handleDropdownChange}
                    list={phoneType}
                    span={18}
                  />

                  <Col span={4} offset={1}>
                    <Form.Item name="images" label="Profile Picture">
                      <PictureUploader
                        setPictureState={setPictureState}
                        handleSetImages={handleSetImages}
                      />
                    </Form.Item>
                  </Col>
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
        </>
      )}
    </>
  );
};
