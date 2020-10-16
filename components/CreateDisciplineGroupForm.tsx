import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createDisciplineGroupGraphQL } from "../graphql/mutations/createDisciplineGroup";
import { publishDisciplineGroupGraphQL } from "../graphql/mutations/publishDisciplineGroup";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCheckbox,
  GenerateObjectDropdownMultiple,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";

type CreateDisciplineGroupFormProps = {
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

export const CreateDisciplineGroupForm = ({
  id,
  handleCancel,
}: CreateDisciplineGroupFormProps) => {
  const {
    loading: isDisciplinesLoading,
    data: disciplinesData,
    error: disciplineError,
  } = useQuery(disciplinesGraphQL, {
    variables: { where: { company: { id } } },
  });

  const [createDisciplineGroupMutation, { loading }] = useMutation(
    createDisciplineGroupGraphQL
  );

  const [
    publishDisciplineGroupMutation,
    { loading: publishDisciplineGroupLoading },
  ] = useMutation(publishDisciplineGroupGraphQL);

  const [isDisciplineGroupAdded, setIsDisciplineGroupAdded] = useState(false);

  const initiateCreateDisciplineGroup = async (values) => {
    const connectDisplines = values.disciplines.map((d) => {
      return { id: d.value };
    });
    const result = await createDisciplineGroupMutation({
      variables: {
        data: {
          ...values,
          disciplines: { connect: connectDisplines },
        },
      },
    });

    const { createDisciplineGroup } = result.data;

    setInputs({ ...createDisciplineGroup });
    await publishDisciplineGroupMutation({
      variables: {
        where: { id: createDisciplineGroup.id },
      },
    });
    setIsDisciplineGroupAdded(true);

    Router.replace(
      `/company/${id}/settings/employees/disciplines?currentTab=2`
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
      isAdmin: false,
      allowOverlap: false,
    },
    initiateCreateDisciplineGroup
  );

  if (loading || publishDisciplineGroupLoading || isDisciplinesLoading)
    return <Loading />;

  // create iterable list for dropdown options
  let listDisciplines = disciplinesData.disciplines.map((dg) => {
    const item = { id: dg.id, name: dg.name };
    return item;
  });

  const disabled =
    loading ||
    publishDisciplineGroupLoading ||
    isDisciplineGroupAdded ||
    isDisciplinesLoading;

  return (
    <>
      {isDisciplineGroupAdded ? (
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
              company: { connect: { id } },
              isAdmin: false,
              allowOverlap: false,
              disciplines: [],
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              disciplines: Yup.array().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateDisciplineGroup(values);
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
                  <GenerateObjectDropdownMultiple
                    name="disciplines"
                    objList={listDisciplines}
                    value={values.disciplines}
                    span={18}
                    handleDropdownChange={(e) => handleDropdownChange}
                  />
                  <GenerateCheckbox name="isAdmin" span={18} />
                  <GenerateCheckbox name="allowOverlap" span={18} />

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
