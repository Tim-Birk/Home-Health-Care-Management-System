import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createAuthorizedPersonnelGraphQL } from "../graphql/mutations/createAuthorizedPersonnel";
import { publishAuthorizedPersonnelGraphQL } from "../graphql/mutations/publishAuthorizedPersonnel";
import { canVerifyTypes } from "../utils/staticLists";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateObjectDropdownMultiple,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";

type CreateAuthorizedPersonnelFormProps = {
  id: any;

  handleCancel: any;
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

const StyledButton = styled(Button)`
  ${({ theme }) => `
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

export const CreateAuthorizedPersonnelForm = ({
  id,
  handleCancel,
}: CreateAuthorizedPersonnelFormProps) => {
  const [createAuthorizedPersonnelMutation, { loading }] = useMutation(
    createAuthorizedPersonnelGraphQL
  );

  const [
    publishAuthorizedPersonnelMutation,
    { loading: publishAuthorizedPersonnelLoading },
  ] = useMutation(publishAuthorizedPersonnelGraphQL);

  const [isAuthorizedPersonnelAdded, setIsAuthorizedPersonnelAdded] = useState(
    false
  );

  const initiateCreateAuthorizedPersonnel = async (values) => {
    const canVerifyValues = values.canVerify.map((val) => val.value);
    const result = await createAuthorizedPersonnelMutation({
      variables: {
        data: {
          ...values,
          canVerify: canVerifyValues,
        },
      },
    });

    const { createAuthorizedPersonnel } = result.data;

    setInputs({ ...createAuthorizedPersonnel });
    await publishAuthorizedPersonnelMutation({
      variables: {
        where: { id: createAuthorizedPersonnel.id },
      },
    });
    setIsAuthorizedPersonnelAdded(true);

    Router.replace(`/company/${id}/settings/company/personnel`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      firstName: "",
      lastName: "",
      title: "",
      company: { connect: { id } },
      canVerify: [],
    },
    initiateCreateAuthorizedPersonnel
  );

  if (loading || publishAuthorizedPersonnelLoading) return <Loading />;

  // create iterable list for dropdown options
  let listCanVerifyTypes = canVerifyTypes.map((type) => {
    const item = { id: type, name: type };
    return item;
  });

  const disabled =
    loading || publishAuthorizedPersonnelLoading || isAuthorizedPersonnelAdded;

  return (
    <>
      {isAuthorizedPersonnelAdded ? (
        <>
          <StyledAlert
            message={`${inputs.lastName}, ${inputs.firstName} has been added`}
            type="success"
          />
        </>
      ) : (
        <>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              title: "",
              company: { connect: { id } },
              canVerify: [],
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              title: Yup.string().required("Required"),
              canVerify: Yup.array().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateAuthorizedPersonnel(values);
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
                  <GenerateInput name="firstName" span={18} />
                  <GenerateInput name="lastName" span={18} />
                  <GenerateInput name="title" span={18} />
                  <GenerateObjectDropdownMultiple
                    name="canVerify"
                    objList={listCanVerifyTypes}
                    value={values.canVerify}
                    span={18}
                    handleDropdownChange={(e) => handleDropdownChange}
                  />

                  <Col span={24} offset={1}>
                    <SubmitButton disabled={disabled} type="primary">
                      Add
                    </SubmitButton>
                    <StyledButton danger onClick={handleCancel}>
                      Cancel
                    </StyledButton>
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
