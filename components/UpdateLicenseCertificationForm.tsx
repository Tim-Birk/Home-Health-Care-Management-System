import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { licenseCertificationGraphQL } from "../graphql/queries/licenseCertification";
import { updateLicenseCertificationGraphQL } from "../graphql/mutations/updateLicenseCertification";
import { publishLicenseCertificationGraphQL } from "../graphql/mutations/publishLicenseCertification";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { createLicenseCertificationUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateCheckbox,
  GenerateObjectDropdownMultiple,
  GenerateDropdown,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";
import {
  licenseCertificationTypes,
  licenseCertificationRequirements,
} from "../utils/staticLists";

type UpdateLicenseCertificationFormProps = {
  id: any;
  licenseCertificationId: string;
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

export const UpdateLicenseCertificationForm = ({
  id,
  licenseCertificationId,
  handleCancel,
}: UpdateLicenseCertificationFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(
    licenseCertificationGraphQL,
    {
      variables: { where: { id: licenseCertificationId } },
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
    updateLicenseCertificationMutation,
    { loading: updateLicenseCertificationLoading },
  ] = useMutation(updateLicenseCertificationGraphQL);

  const [
    publishLicenseCertificationMutation,
    { loading: publishLicenseCertificationLoading },
  ] = useMutation(publishLicenseCertificationGraphQL);

  const initiateUpdateLicenseCertification = async (values) => {
    const connectDisplines = values.disciplines.map((d) => {
      return { id: d.value };
    });
    const updateObj = createLicenseCertificationUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateLicenseCertificationMutation({
        variables: {
          data: {
            ...updateObj,
            disciplines: { set: connectDisplines },
          },
          where: { id: licenseCertificationId },
        },
      });
      const { updateLicenseCertification } = result.data;

      await publishLicenseCertificationMutation({
        variables: {
          where: { id: licenseCertificationId },
        },
      });

      setInputs({ ...updateLicenseCertification });

      Router.replace(`/company/${id}/settings/employees/credentials`);
      return updateLicenseCertification;
    } else {
      const updateLicenseCertification = _.get(data, "licenseCertification");
      return updateLicenseCertification;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: licenseCertificationId,
      company: { connect: { id } },
      name: "",
      code: "",
      type: "Select",
      requirement: "Select",
      validateDoh: false,
      disciplines: [],
    },
    initiateUpdateLicenseCertification
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [licenseCertificationState, setLicenseCertificationState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && licenseCertificationState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedLicenseCertification } = _.get(
      data,
      "licenseCertification",
      {}
    );

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedLicenseCertification }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setLicenseCertificationState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateLicenseCertificationLoading ||
    publishLicenseCertificationLoading ||
    isDisciplinesLoading;

  if (disabled) return <Loading />;
  // create iterable list for dropdown options
  let listDisciplines = disciplinesData.disciplines.map((dg) => {
    const item = { id: dg.id, name: dg.name };
    return item;
  });

  const { licenseCertification } = data;
  const existingDisciplines = licenseCertification.disciplines.map((d) => {
    return { key: d.id, label: d.name, value: d.id };
  });
  return (
    <>
      <Formik
        initialValues={{
          ...licenseCertification,
          disciplines: existingDisciplines,
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
            initiateUpdateLicenseCertification(values);
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
