import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { disciplineGroupGraphQL } from "../graphql/queries/disciplineGroup";
import { updateDisciplineGroupGraphQL } from "../graphql/mutations/updateDisciplineGroup";
import { publishDisciplineGroupGraphQL } from "../graphql/mutations/publishDisciplineGroup";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { createDisciplineGroupUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCheckbox,
  GenerateObjectDropdownMultiple,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";

type UpdateDisciplineGroupFormProps = {
  id: any;
  disciplineGroupId: string;

  handleCancel: any;
};

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

export const UpdateDisciplineGroupForm = ({
  id,
  disciplineGroupId,
  handleCancel,
}: UpdateDisciplineGroupFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(
    disciplineGroupGraphQL,
    {
      variables: { where: { id: disciplineGroupId } },
    }
  );

  const {
    loading: isDisciplinesLoading,
    data: disciplinesData,
    error: disciplineError,
  } = useQuery(disciplinesGraphQL, {
    variables: { where: { company: { id } } },
  });

  const [
    updateDisciplineGroupMutation,
    { loading: updateDisciplineGroupLoading },
  ] = useMutation(updateDisciplineGroupGraphQL);

  const [
    publishDisciplineGroupMutation,
    { loading: publishDisciplineGroupLoading },
  ] = useMutation(publishDisciplineGroupGraphQL);

  const initiateUpdateDisciplineGroup = async (values) => {
    const connectDisplines = values.disciplines.map((d) => {
      return { id: d.value };
    });
    const updateObj = createDisciplineGroupUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateDisciplineGroupMutation({
        variables: {
          data: {
            ...updateObj,
            disciplines: { set: connectDisplines },
          },
          where: { id: disciplineGroupId },
        },
      });
      const { updateDisciplineGroup } = result.data;

      await publishDisciplineGroupMutation({
        variables: {
          where: { id: disciplineGroupId },
        },
      });

      setInputs({ ...updateDisciplineGroup });

      Router.replace(
        `/company/${id}/settings/employees/disciplines?currentTab=2`
      );
      return updateDisciplineGroup;
    } else {
      const updateDisciplineGroup = _.get(data, "disciplineGroup");
      return updateDisciplineGroup;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: disciplineGroupId,
      name: "",
      company: { connect: { id } },
      isAdmin: false,
      allowOverlap: false,
    },
    initiateUpdateDisciplineGroup
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [disciplineGroupState, setDisciplineGroupState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && disciplineGroupState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedDisciplineGroup } = _.get(
      data,
      "disciplineGroup",
      {}
    );

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedDisciplineGroup }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setDisciplineGroupState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateDisciplineGroupLoading ||
    publishDisciplineGroupLoading ||
    isDisciplinesLoading;

  if (disabled) return <Loading />;
  // create iterable list for dropdown options
  let listDisciplines = disciplinesData.disciplines.map((dg) => {
    const item = { id: dg.id, name: dg.name };
    return item;
  });

  const { disciplineGroup } = data;
  const existingDisciplines = disciplineGroup.disciplines.map((d) => {
    return { key: d.id, label: d.name, value: d.id };
  });
  return (
    <>
      <Formik
        initialValues={{
          ...disciplineGroup,
          disciplines: existingDisciplines,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          disciplines: Yup.array().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            initiateUpdateDisciplineGroup(values);
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
