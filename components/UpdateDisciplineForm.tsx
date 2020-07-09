import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { disciplineGraphQL } from "../graphql/queries/discipline";
import { updateDisciplineGraphQL } from "../graphql/mutations/updateDiscipline";
import { publishDisciplineGraphQL } from "../graphql/mutations/publishDiscipline";
import { createDisciplineUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import { GenerateInput, GenerateCheckbox } from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";

type UpdateDisciplineFormProps = {
  id: any;
  disciplineId: string;

  handleCancel: any;
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

const StyledButton = styled(Button)`
  ${({ theme }) => `
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

export const UpdateDisciplineForm = ({
  id,
  disciplineId,
  handleCancel,
}: UpdateDisciplineFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(disciplineGraphQL, {
    variables: { where: { id: disciplineId } },
  });

  const [
    updateDisciplineMutation,
    { loading: updateDisciplineLoading },
  ] = useMutation(updateDisciplineGraphQL);

  const [
    publishDisciplineMutation,
    { loading: publishDisciplineLoading },
  ] = useMutation(publishDisciplineGraphQL);

  const initiateUpdateDiscipline = async (values) => {
    const updateObj = createDisciplineUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateDisciplineMutation({
        variables: {
          data: {
            ...updateObj,
          },
          where: { id: disciplineId },
        },
      });
      const { updateDiscipline } = result.data;

      await publishDisciplineMutation({
        variables: {
          where: { id: disciplineId },
        },
      });

      setInputs({ ...updateDiscipline });

      Router.replace(`/company/${id}/settings/employees/disciplines`);
      return updateDiscipline;
    } else {
      const updateDiscipline = _.get(data, "discipline");
      return updateDiscipline;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: disciplineId,
      name: "",
      abbreviation: "",
      securityLevel: 0,
      company: { connect: { id } },
    },
    initiateUpdateDiscipline
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [disciplineState, setDisciplineState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && disciplineState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedDiscipline } = _.get(data, "discipline", {});

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedDiscipline }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setDisciplineState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading || updateDisciplineLoading || publishDisciplineLoading;

  if (disabled) return <Loading />;
  const { discipline } = data;

  return (
    <>
      <Formik
        initialValues={{
          ...discipline,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          abbreviation: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            initiateUpdateDiscipline(values);
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize={true}
      >
        {(props) => {
          const { values, setFieldValue } = props;
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
                  Update
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
  );
};
