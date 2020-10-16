import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation } from "@apollo/react-hooks";
import { createDisciplineGraphQL } from "../graphql/mutations/createDiscipline";
import { publishDisciplineGraphQL } from "../graphql/mutations/publishDiscipline";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import { GenerateInput } from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";

type CreateDisciplineFormProps = {
  id: any;
  handleCancel: any;
};

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

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin-left: ${theme["margin-xsmall"]};
  `}
`;

export const CreateDisciplineForm = ({
  id,
  handleCancel,
}: CreateDisciplineFormProps) => {
  const [createDisciplineMutation, { loading }] = useMutation(
    createDisciplineGraphQL
  );

  const [
    publishDisciplineMutation,
    { loading: publishDisciplineLoading },
  ] = useMutation(publishDisciplineGraphQL);

  const [isDisciplineAdded, setIsDisciplineAdded] = useState(false);

  const initiateCreateDiscipline = async (values) => {
    const result = await createDisciplineMutation({
      variables: {
        data: {
          ...values,
        },
      },
    });

    const { createDiscipline } = result.data;

    setInputs({ ...createDiscipline });
    await publishDisciplineMutation({
      variables: {
        where: { id: createDiscipline.id },
      },
    });
    setIsDisciplineAdded(true);

    Router.replace(`/company/${id}/settings/employees/disciplines`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      name: "",
      abbreviation: "",
      securityLevel: 0,
      company: { connect: { id } },
    },
    initiateCreateDiscipline
  );

  if (loading || publishDisciplineLoading) return <Loading />;

  const disabled = loading || publishDisciplineLoading || isDisciplineAdded;

  return (
    <>
      {isDisciplineAdded ? (
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
              name: "",
              abbreviation: "",
              securityLevel: 0,
              company: { connect: { id } },
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              abbreviation: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateDiscipline(values);
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
                  <GenerateInput name="abbreviation" span={10} />
                  <GenerateInput
                    name="securityLevel"
                    span={8}
                    type="number"
                    min={"0"}
                    max={"9"}
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
