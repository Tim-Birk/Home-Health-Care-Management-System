import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { authorizedPersonnelGraphQL } from "../graphql/queries/authorizedPersonnel";
import { updateAuthorizedPersonnelGraphQL } from "../graphql/mutations/updateAuthorizedPersonnel";
import { publishAuthorizedPersonnelGraphQL } from "../graphql/mutations/publishAuthorizedPersonnel";
import { canVerifyTypes } from "../utils/staticLists";
import { createAuthorizedPersonnelUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateObjectDropdownMultiple,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";

type UpdateAuthorizedPersonnelFormProps = {
  id: any;
  authorizedPersonnelId: string;

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

export const UpdateAuthorizedPersonnelForm = ({
  id,
  authorizedPersonnelId,
  handleCancel,
}: UpdateAuthorizedPersonnelFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(
    authorizedPersonnelGraphQL,
    {
      variables: { where: { id: authorizedPersonnelId } },
    }
  );

  const [
    updateAuthorizedPersonnelMutation,
    { loading: updateAuthorizedPersonnelLoading },
  ] = useMutation(updateAuthorizedPersonnelGraphQL);

  const [
    publishAuthorizedPersonnelMutation,
    { loading: publishAuthorizedPersonnelLoading },
  ] = useMutation(publishAuthorizedPersonnelGraphQL);

  const initiateUpdateAuthorizedPersonnel = async (values) => {
    const canVerifyValues = values.canVerify.map((val) => val.value);
    const updateObj = createAuthorizedPersonnelUpdateObj(data, values);

    if (!_.isEmpty(updateObj)) {
      const result = await updateAuthorizedPersonnelMutation({
        variables: {
          data: {
            ...updateObj,
            canVerify: canVerifyValues,
          },
          where: { id: authorizedPersonnelId },
        },
      });
      const { updateAuthorizedPersonnel } = result.data;

      await publishAuthorizedPersonnelMutation({
        variables: {
          where: { id: authorizedPersonnelId },
        },
      });

      setInputs({ ...updateAuthorizedPersonnel });

      Router.replace(`/company/${id}/settings/company/personnel`);
      return updateAuthorizedPersonnel;
    } else {
      const updateAuthorizedPersonnel = _.get(data, "authorizedPersonnel");
      return updateAuthorizedPersonnel;
    }
  };

  const { inputs, setInputs, handleDropdownChange } = submitForm(
    {
      id: authorizedPersonnelId,
      firstName: "",
      lastName: "",
      title: "",
      company: { connect: { id } },
      canVerify: [],
    },
    initiateUpdateAuthorizedPersonnel
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [authorizedPersonnelState, setAuthorizedPersonnelState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && authorizedPersonnelState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedAuthorizedPersonnel } = _.get(
      data,
      "authorizedPersonnel",
      {}
    );

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedAuthorizedPersonnel }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setAuthorizedPersonnelState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateAuthorizedPersonnelLoading ||
    publishAuthorizedPersonnelLoading;

  if (disabled) return <Loading />;
  // create iterable list for dropdown options
  let listCanVerifyTypes = canVerifyTypes.map((type) => {
    const item = { id: type, name: type };
    return item;
  });

  const { authorizedPersonnel } = data;
  const existingCanVerify = authorizedPersonnel.canVerify.map((val) => {
    return { key: val, label: val, value: val };
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: authorizedPersonnel.firstName,
          lastName: authorizedPersonnel.lastName,
          title: authorizedPersonnel.title,
          company: { connect: { id } },
          canVerify: existingCanVerify,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          canVerify: Yup.array().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            initiateUpdateAuthorizedPersonnel(values);
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize={true}
      >
        {(props) => {
          const { values, setFieldValue } = props;
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
