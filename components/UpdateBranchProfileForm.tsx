import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { branchGraphQL } from "../graphql/queries/branch";
import { updateBranchGraphQL } from "../graphql/mutations/updateBranch";
import { publishBranchGraphQL } from "../graphql/mutations/publishBranch";
import { states } from "../utils/staticLists";
import { createBranchUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCustomInput,
  GenerateDropdown,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import {
  phoneNumberMask,
  phoneRegExp,
  zipRegExp,
  zipMask,
  zipExtMask,
  zipExtRegExp,
  phoneExtMask,
} from "../utils/inputMasks";

type UpdateBranchProfileFormProps = {
  id: any;
  branchId: any;
  legalBusinessName: string;
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

export const UpdateBranchProfileForm = ({
  id,
  branchId,
  legalBusinessName,
}: UpdateBranchProfileFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(branchGraphQL, {
    variables: { where: { id: branchId } },
  });

  const [updateBranchMutation, { loading: updateBranchLoading }] = useMutation(
    updateBranchGraphQL
  );

  const [
    publishBranchMutation,
    { loading: publishBranchLoading },
  ] = useMutation(publishBranchGraphQL);

  const initiateUpdateBranch = async (values) => {
    const updateObj = createBranchUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateBranchMutation({
        variables: {
          data: {
            ...updateObj,
          },
          where: { id: branchId },
        },
      });
      const { updateBranch } = result.data;

      await publishBranchMutation({
        variables: {
          where: { id: branchId },
        },
      });

      setInputs({ ...updateBranch });

      return updateBranch;
    } else {
      const updateBranch = _.get(data, "branch");
      return updateBranch;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: "",
      branchName: "",
      branchCode: "",
      abbreviation: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
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
    },
    initiateUpdateBranch
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [branchState, setBranchState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && branchState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedBranch } = _.get(data, "branch", {});

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedBranch }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setBranchState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading || updateBranchLoading || publishBranchLoading;

  if (disabled) return <Loading />;

  return (
    <>
      <StyledPageTitle>
        {legalBusinessName} - Branch Profile: {inputs.branchName}
      </StyledPageTitle>
      <Formik
        initialValues={{
          ...inputs,
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
          zipExt: Yup.string().matches(
            zipExtRegExp,
            "Zip Extension is not valid"
          ),
          phone: Yup.string()
            .matches(phoneRegExp, "Number is not valid")
            .required("Required"),
          fax: Yup.string()
            .matches(phoneRegExp, "Number is not valid")
            .nullable(),
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
            initiateUpdateBranch(values);
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
