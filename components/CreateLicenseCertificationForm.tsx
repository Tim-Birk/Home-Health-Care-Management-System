import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createLicenseCertificationGraphQL } from "../graphql/mutations/createLicenseCertification";
import { publishLicenseCertificationGraphQL } from "../graphql/mutations/publishLicenseCertification";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCheckbox,
  GenerateObjectDropdownMultiple,
  GenerateDropdown,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";
import { licenseCertificationTypes, licenseCertificationRequirements } from "../utils/staticLists";

type CreateLicenseCertificationFormProps = {
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

export const CreateLicenseCertificationForm = ({
  id,
  handleCancel,
}: CreateLicenseCertificationFormProps) => {
  const {
    loading: isDisciplinesLoading,
    data: disciplinesData,
    error: disciplineError,
  } = useQuery(disciplinesGraphQL, {
    variables: { where: { company: { id } } },
  });

  const [createLicenseCertificationMutation, { loading }] = useMutation(
    createLicenseCertificationGraphQL
  );

  const [
    publishLicenseCertificationMutation,
    { loading: publishLicenseCertificationLoading },
  ] = useMutation(publishLicenseCertificationGraphQL);

  const [isLicenseCertificationAdded, setIsLicenseCertificationAdded] = useState(false);

  const initiateCreateLicenseCertification = async (values) => {
    const connectDisplines = values.disciplines.map((d) => {
      return { id: d.value };
    });
    const result = await createLicenseCertificationMutation({
      variables: {
        data: {
          ...values,
          disciplines: { connect: connectDisplines },
        },
      },
    });

    const { createLicenseCertification } = result.data;

    setInputs({ ...createLicenseCertification });
    await publishLicenseCertificationMutation({
      variables: {
        where: { id: createLicenseCertification.id },
      },
    });
    setIsLicenseCertificationAdded(true);

    Router.replace(
      `/company/${id}/settings/employees/credentials`
    );
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      company: { connect: { id } },
      name: "",
      code: "",
      type: "Select",
      requirement: "Select",
      validateDoh: false,
      disciplines: [],
    },
    initiateCreateLicenseCertification
  );

  if (loading || publishLicenseCertificationLoading || isDisciplinesLoading)
    return <Loading />;

  // create iterable list for dropdown options
  let listDisciplines = disciplinesData.disciplines.map((dg) => {
    const item = { id: dg.id, name: dg.name };
    return item;
  });

  const disabled =
    loading || publishLicenseCertificationLoading || isLicenseCertificationAdded || isDisciplinesLoading;

  return (
    <>
      {isLicenseCertificationAdded ? (
        <>
          <StyledAlert
            message={`${inputs.name} has been added`}
            type="success"
          />
        </>
      ) : (
        <>
          <Formik
            initialValues={{
                company: { connect: { id } },
                name: "",
                code: "",
                type: "Select",
                requirement: "Select",
                validateDoh: false,
                disciplines: [],
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              code: Yup.string().required("Required"),
              type: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              requirement: Yup.string().test("select", "Required", (value) => {
                return value !== "Select" && value;
              }),
              disciplines: Yup.array().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateLicenseCertification(values);
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
                  <GenerateInput name="name" span={18} />
                  <GenerateInput name="code" span={18} />
                  <GenerateDropdown
                    name="type"
                    value={values.type}
                    handleDropdownChange={handleDropdownChange}
                    list={licenseCertificationTypes}
                    span={12}
                  />
                  <GenerateDropdown
                    name="requirement"
                    value={values.requirement}
                    handleDropdownChange={handleDropdownChange}
                    list={licenseCertificationRequirements}
                    span={12}
                  />
                  <GenerateCheckbox name="validateDoh" span={18} />
                  <GenerateObjectDropdownMultiple
                    name="disciplines"
                    objList={listDisciplines}
                    value={values.disciplines}
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
