import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createEmployeeDisciplineGraphQL } from "../graphql/mutations/createEmployeeDiscipline";
import { publishEmployeeDisciplineGraphQL } from "../graphql/mutations/publishEmployeeDiscipline";
import { disciplineGroupsGraphQL } from "../graphql/queries/disciplinesGroups";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateObjectDropdown,
  GenerateDateInput,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";

type CreateEmployeeDisciplineFormProps = {
  id: any;
  employeeId: any;

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

const StyledResetButton = styled(ResetButton)`
  ${({ theme }) => `
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

const StyledCancelButton = styled(Button)`
  ${({ theme }) => `
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

export const CreateEmployeeDisciplineForm = ({
  id,
  employeeId,
  handleCancel,
}: CreateEmployeeDisciplineFormProps) => {
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

  const [createEmployeeDisciplineMutation, { loading }] = useMutation(
    createEmployeeDisciplineGraphQL
  );

  const [
    publishEmployeeDisciplineMutation,
    { loading: publishEmployeeDisciplineLoading },
  ] = useMutation(publishEmployeeDisciplineGraphQL);

  const [isDisciplineAdded, setIsDisciplineAdded] = useState(false);

  const initiateCreateEmployeeDiscipline = async (values) => {
    const result = await createEmployeeDisciplineMutation({
      variables: {
        data: {
          ...values,
          disciplineGroup: { connect: { id: values.disciplineGroup.value } },
          discipline: { connect: { id: values.discipline.value } },
        },
      },
    });

    const { createEmployeeDiscipline } = result.data;

    setInputs({ ...createEmployeeDiscipline });
    await publishEmployeeDisciplineMutation({
      variables: {
        where: { id: createEmployeeDiscipline.id },
      },
    });

    setIsDisciplineAdded(true);

    Router.replace(`/company/${id}/employees/${employeeId}?currentTab=2`);
  };

  const { handleDropdownChange, setInputs } = submitForm(
    {
      employee: { connect: { id: employeeId } },
      disciplineGroup: { key: "0", label: "Select", value: "0" },
      discipline: { key: "0", label: "Select", value: "0" },
      startDate: null,
      endDate: null,
    },
    initiateCreateEmployeeDiscipline
  );

  if (loading || publishEmployeeDisciplineLoading || isDisciplineGroupsLoading)
    return <Loading />;

  const disabled =
    loading ||
    publishEmployeeDisciplineLoading ||
    isDisciplineAdded ||
    isDisciplineGroupsLoading;

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
      {isDisciplineAdded ? (
        <StyledAlert
          message={`Employee Discipline has been added`}
          type="success"
        />
      ) : (
        <>
          <Formik
            initialValues={{
              employee: { connect: { id: employeeId } },
              disciplineGroup: { key: "0", label: "Select", value: "0" },
              discipline: { key: "0", label: "Select", value: "0" },
              startDate: null,
              endDate: null,
            }}
            validationSchema={Yup.object({
              disciplineGroup: Yup.object().test(
                "select",
                "Required",
                (value) => {
                  return value.value !== "0" && value;
                }
              ),
              discipline: Yup.object().test("select", "Required", (value) => {
                return value.value !== "0" && value;
              }),
              startDate: Yup.date().required("Required").nullable(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                initiateCreateEmployeeDiscipline(values);
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
                      Add
                    </SubmitButton>
                    <StyledResetButton
                      disabled={disabled}
                      type="primary"
                      danger
                    >
                      Reset
                    </StyledResetButton>
                    <StyledCancelButton danger onClick={handleCancel}>
                      Cancel
                    </StyledCancelButton>
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
