import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeeDisciplineGraphQL } from "../graphql/queries/employeeDispline";
import { updateEmployeeDisciplineGraphQL } from "../graphql/mutations/updateEmployeeDiscipline";
import { publishEmployeeDisciplineGraphQL } from "../graphql/mutations/publishEmployeeDiscipline";
import { deleteEmployeeDisciplineGraphQL } from "../graphql/mutations/deleteEmployeeDiscipline";
import { disciplineGroupsGraphQL } from "../graphql/queries/disciplinesGroups";
import { createEmployeeDisciplineUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateObjectDropdown,
  GenerateDateInput,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";

type UpdateEmployeeDisciplineFormProps = {
  id: any;
  employeeId: any;
  employeeDisciplineId: string;

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

export const UpdateEmployeeDisciplineForm = ({
  id,
  employeeId,
  employeeDisciplineId,
  handleCancel,
}: UpdateEmployeeDisciplineFormProps) => {
  const [disciplinesList, setDisciplinesList] = useState([
    { id: "0", name: "Select" },
  ]);

  const {
    loading: isDisciplineGroupsLoading,
    data: disciplineGroupsData,
    error: disciplineGroupsError,
  } = useQuery(disciplineGroupsGraphQL, {
    variables: { where: { company: { id } } },
  });

  const { loading: isQueryLoading, data, error } = useQuery(
    employeeDisciplineGraphQL,
    {
      variables: { where: { id: employeeDisciplineId } },
    }
  );

  const [
    updateEmployeeDisciplineMutation,
    { loading: updateEmployeeDisciplineLoading },
  ] = useMutation(updateEmployeeDisciplineGraphQL);

  const [
    publishEmployeeDisciplineMutation,
    { loading: publishEmployeeDisciplineLoading },
  ] = useMutation(publishEmployeeDisciplineGraphQL);

  const [
    deleteEmployeeDisciplineMutation,
    { loading: deleteEmployeeDisciplineLoading },
  ] = useMutation(deleteEmployeeDisciplineGraphQL);

  const initiateUpdateEmployeeDiscipline = async (values) => {
    const updateObj = createEmployeeDisciplineUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateEmployeeDisciplineMutation({
        variables: {
          data: {
            ...updateObj,
            disciplineGroup: { connect: { id: values.disciplineGroup.value } },
            discipline: { connect: { id: values.discipline.value } },
          },
          where: { id: employeeDisciplineId },
        },
      });
      const { updateEmployeeDiscipline } = result.data;

      await publishEmployeeDisciplineMutation({
        variables: {
          where: { id: employeeDisciplineId },
        },
      });

      setInputs({ ...updateEmployeeDiscipline });

      Router.replace(`/company/${id}/employees/${employeeId}?currentTab=2`);
      return updateEmployeeDiscipline;
    } else {
      const updateEmployeeDiscipline = _.get(data, "employeeDiscipline");
      return updateEmployeeDiscipline;
    }
  };

  const handleDelete = async () => {
    const result = await deleteEmployeeDisciplineMutation({
      variables: {
        where: { id: employeeDisciplineId },
      },
    });

    Router.replace(`/company/${id}/employees/${employeeId}?currentTab=2`);
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: employeeDisciplineId,
      employee: { connect: { id: employeeId } },
      disciplineGroup: { key: "0", label: "Select", value: "0" },
      discipline: { key: "0", label: "Select", value: "0" },
      startDate: null,
      endDate: null,
    },
    initiateUpdateEmployeeDiscipline
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [employeeDisciplineState, setEmployeeDisciplineState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && employeeDisciplineState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedEmployeeDiscipline } = _.get(
      data,
      "employeeDiscipline",
      {}
    );

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedEmployeeDiscipline }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setEmployeeDisciplineState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateEmployeeDisciplineLoading ||
    publishEmployeeDisciplineLoading ||
    deleteEmployeeDisciplineLoading ||
    isDisciplineGroupsLoading;

  if (disabled) return <Loading />;
  const { employeeDiscipline } = data;

  // create iterable list for dropdown options
  let listDisciplineGroups = disciplineGroupsData.disciplineGroups.map((dg) => {
    const item = { id: dg.id, name: dg.name };
    return item;
  });
  // add select option to iterable list
  listDisciplineGroups = [{ id: "0", name: "Select" }].concat(
    listDisciplineGroups
  );

  const handleDisciplineGroupChange = (
    defaultHandler: any,
    event: any,
    setFieldValue: any
  ) => {
    defaultHandler();
    let selectedGroup = disciplineGroupsData.disciplineGroups.filter((dg) => {
      if (dg.id === event.value) {
        return dg;
      }
    });

    if (selectedGroup[0]) {
      const disciplineOptions = selectedGroup[0].disciplines;

      let listDisciplines = [];
      if (disciplineOptions) {
        // create iterable list for dropdown options
        listDisciplines = disciplineOptions.map((d) => {
          const item = { id: d.id, name: d.name };
          return item;
        });
      }
      // add select option to iterable list
      listDisciplines = [{ id: "0", name: "Select" }].concat(listDisciplines);

      setDisciplinesList(listDisciplines);
    } else {
      setDisciplinesList([{ id: "0", name: "Select" }]);
    }

    setFieldValue(
      "discipline",
      { key: "0", label: "Select", value: "0" },
      false
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          ...employeeDiscipline,
          disciplineGroup: {
            key: employeeDiscipline.disciplineGroup.id,
            label: employeeDiscipline.disciplineGroup.name,
            value: employeeDiscipline.disciplineGroup.id,
          },
          discipline: {
            key: employeeDiscipline.discipline.id,
            label: employeeDiscipline.discipline.name,
            value: employeeDiscipline.discipline.id,
          },
        }}
        validationSchema={Yup.object({
          disciplineGroup: Yup.object().test("select", "Required", (value) => {
            return value.value !== "0" && value;
          }),
          discipline: Yup.object().test("select", "Required", (value) => {
            return value.value !== "0" && value;
          }),
          startDate: Yup.date().required("Required").nullable(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            initiateUpdateEmployeeDiscipline(values);
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize={true}
      >
        {(props) => {
          const { values, setFieldValue } = props;
          return (
            <StyledForm>
              <GenerateObjectDropdown
                name="disciplineGroup"
                objList={listDisciplineGroups}
                value={values.disciplineGroup}
                span={18}
                handleDropdownChange={(e) => {
                  handleDisciplineGroupChange(
                    handleDropdownChange,
                    e,
                    setFieldValue
                  );
                }}
              />
              <GenerateObjectDropdown
                name="discipline"
                objList={disciplinesList}
                value={values.discipline}
                span={18}
                handleDropdownChange={(e) => handleDropdownChange}
              />
              <GenerateDateInput name="startDate" span={12} />
              <GenerateDateInput name="endDate" span={12} />

              <Col span={24} offset={1}>
                <SubmitButton disabled={disabled} type="primary">
                  Update
                </SubmitButton>
                <StyledButton danger onClick={handleDelete} type="primary">
                  Delete
                </StyledButton>
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
