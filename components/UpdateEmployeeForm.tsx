import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeeGraphQL } from "../graphql/queries/employee";
import { updateEmployeeGraphQL } from "../graphql/mutations/updateEmployee";
import { publishEmployeeGraphQL } from "../graphql/mutations/publishEmployee";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { deleteAssetGraphQL } from "../graphql/mutations/deleteAsset";
import { states, gender, earningsType, phoneType } from "../utils/staticLists";
import { createEmployeeUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import {
  GenerateInput,
  GenerateCustomInput,
  GeneratePasswordInput,
  GenerateDropdown,
  GenerateDateInput,
  GenerateCheckbox,
  GenerateObjectDropdown,
} from "./GenerateFormikFields";
import { GeneratePasswordInput as GenerateAntdPasswordInput } from "./GenerateFields";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { formatSS } from "../utils/format";
import Router from "next/router";
import { PictureUploader } from "./PictureUploader";
import GraphImg from "graphcms-image";
import * as Yup from "yup";
import {
  phoneNumberMask,
  phoneRegExp,
  zipRegExp,
  zipMask,
  phoneExtMask,
} from "../utils/inputMasks";

type UpdateEmployeeProfileFormProps = {
  id: any;
  employeeId: any;
  legalBusinessName: string;
  branches: any;
};

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

export const UpdateEmployeeProfileForm = ({
  id,
  employeeId,
  legalBusinessName,
  branches,
}: UpdateEmployeeProfileFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(employeeGraphQL, {
    variables: { where: { id: employeeId } },
  });

  const [
    updateEmployeeMutation,
    { loading: updateEmoloyeeLoading },
  ] = useMutation(updateEmployeeGraphQL);

  const [
    publishEmployeeMutation,
    { loading: publishEmployeeLoading },
  ] = useMutation(publishEmployeeGraphQL);

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [deleteAssetMutation, { loading: deleteAssetLoading }] = useMutation(
    deleteAssetGraphQL
  );

  const initiateUpdateEmployee = async (values) => {
    const queryImagesHandle = _.get(data, "employee.images.handle");
    const inputsImagesHandle = _.get(inputs, "images.create.handle");
    const queryImagesId = _.get(data, "employee.images.id");
    
    if (!_.isNil(_.get(data, "employee.images"))) {
      if (
        queryImagesHandle !== inputsImagesHandle &&
        !_.isNil(inputsImagesHandle)
      ) {
        await deleteAssetMutation({
          variables: {
            where: {
              id: queryImagesId,
            },
          },
        });
      }
    }

    const updateObj = createEmployeeUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateEmployeeMutation({
        refetchQueries: [
          { query: employeeGraphQL, variables: { where: { id: employeeId } } },
        ],
        variables: {
          data: {
            ...updateObj,
            branch: { connect: { id: values.branch.value } },
            images: {create: inputs.images.create}
          },
          where: { id: employeeId },
        },
      });
      await publishEmployeeMutation({
        variables: {
          where: { id: employeeId },
        },
      });
      const updateEmployee = _.get(result, "data.updateEmployee");
      if (updateEmployee.images) {
        await publishAssetMutation({
          variables: {
            where: { id: updateEmployee.images.id },
          },
        });
      }

      Router.replace(window.location.pathname);
      return updateEmployee;
    } else {
      const employee = _.get(data, "employee");
      return employee;
    }
  };

  const [confirmSocial, setConfirmSocial] = useState("");

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });

  const {
    inputs,
    setInputs,
    handleDropdownChange,
    handleSetImages,
  } = submitForm(
    {
      id: "",
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
      currentStatus: "",
      isArchived: "",
      company: { connect: { id } },
      branch: { connect: { id: "0" } },
    },
    initiateUpdateEmployee
  );

  const [employeeState, setEmployeeState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && employeeState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedEmployee } = _.get(data, "employee", {});

    setConfirmSocial(loadedEmployee.social);

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedEmployee }));

    setEmployeeState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateEmoloyeeLoading ||
    publishEmployeeLoading ||
    pictureState.isPicUploading;

  if (
    isQueryLoading ||
    updateEmoloyeeLoading ||
    publishEmployeeLoading ||
    deleteAssetLoading ||
    publishAssetLoading
  ) {
    return <Loading />;
  }

  // create iterable list for dropdown options
  let listBranches = branches.map((b) => {
    const item = { id: b.id, name: b.branchName };
    return item;
  });
  // add select option to iterable list
  listBranches = [{ id: "0", name: "Select" }].concat(listBranches);

  const handleConfirmSocialChange = (event) => {
    event.persist();
    setConfirmSocial(formatSS({ strSS: event.target.value }));
  };

  const { employee } = data;

  return (
    <>
      <Formik
        initialValues={{
          firstName: employee.firstName,
          lastName: employee.lastName,
          middleInitial: employee.middleInitial,
          maidenName: employee.maidenName,
          alsoKnownAs: employee.alsoKnownAs,
          gender: employee.gender,
          birthdate: employee.birthdate,
          social: employee.social,
          sharedEmployee: employee.sharedEmployee,
          earningsType: employee.earningsType,
          originalHireDate: employee.originalHireDate,
          orientationDate: employee.orientationDate,
          address1: employee.address1,
          address2: employee.address2,
          city: employee.city,
          state: employee.state,
          zip: employee.zip,
          country: employee.country,
          phone1: employee.phone1,
          phone1Type: employee.phone1Type,
          phone1Ext: employee.phone1Ext,
          phone2: employee.phone2,
          phone2Type: employee.phone2Type,
          phone2Ext: employee.phone2Ext,
          phone3: employee.phone3,
          phone3Type: employee.phone3Type,
          phone3Ext: employee.phone3Ext,
          otherPhone: employee.otherPhone,
          otherPhoneType: employee.otherPhoneType,
          otherPhoneExt: employee.otherPhoneExt,
          fax: employee.fax,
          email: employee.email,
          currentStatus: employee.currentStatus,
          isArchived: employee.isArchived,
          company: employee.company,
          branch: { key: employee.branch.id, label: employee.branch.branchName, value: employee.branch.id },
          images: employee.images
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
              return value === confirmSocial  && confirmSocial;
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
            initiateUpdateEmployee(values);
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
              <GeneratePasswordInput name="social" span={12} maxLength={9} />
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
                  {inputs.images ? <GraphImg image={inputs.images} /> : null}
                  <PictureUploader
                    setPictureState={setPictureState}
                    handleSetImages={handleSetImages}
                  />
                </Form.Item>
              </Col>
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
