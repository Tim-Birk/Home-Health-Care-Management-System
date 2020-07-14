import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeeCredentialGraphQL } from "../graphql/queries/employeeCredential";
import { updateEmployeeCredentialGraphQL } from "../graphql/mutations/updateEmployeeCredential";
import { publishEmployeeCredentialGraphQL } from "../graphql/mutations/publishEmployeeCredential";
import { authorizedPersonnelsGraphQL } from "../graphql/queries/authorizedPersonnels";
import { licenseCertificationsGraphQL } from "../graphql/queries/licenseCertifications";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { deleteAssetGraphQL } from "../graphql/mutations/deleteAsset";

import { createEmployeeCredentialUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Col, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateObjectDropdown,
  GenerateDateInput,
  GenerateTextArea,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import { Loading } from "./notify/Loading";
import Router from "next/router";
import { FileUploader } from "./FileUploader";
import GraphImg from "graphcms-image";
import { PictureUploader } from "./PictureUploader";

type UpdateEmployeeCredentialFormProps = {
  id: any;
  employeeId: any;
  employeeCredentialId: string;

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

export const UpdateEmployeeCredentialForm = ({
  id,
  employeeId,
  employeeCredentialId,
  handleCancel,
}: UpdateEmployeeCredentialFormProps) => {
  const {
    loading: isAuthorizedPersonnelsLoading,
    data: authorizedPersonnelsData,
    error: authorizedPersonnelsError,
  } = useQuery(authorizedPersonnelsGraphQL, {
    variables: { where: { company: { id } } },
  });

  const {
    loading: isaLicenseCertificationsLoading,
    data: licenseCertificationsData,
    error: licenseCertificationsError,
  } = useQuery(licenseCertificationsGraphQL, {
    variables: { where: { company: { id } } },
  });

  const { loading: isQueryLoading, data, error } = useQuery(
    employeeCredentialGraphQL,
    {
      variables: { where: { id: employeeCredentialId } },
    }
  );

  const [
    updateEmployeeCredentialMutation,
    { loading: updateEmployeeCredentialLoading },
  ] = useMutation(updateEmployeeCredentialGraphQL);

  const [
    publishEmployeeCredentialMutation,
    { loading: publishEmployeeCredentialLoading },
  ] = useMutation(publishEmployeeCredentialGraphQL);

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [deleteAssetMutation, { loading: deleteAssetLoading }] = useMutation(
    deleteAssetGraphQL
  );

  const initiateUpdateEmployeeCredential = async (values) => {
    const queryImagesHandle = _.get(data, "employeeCredential.images.handle");
    const queryImagesId = _.get(data, "employeeCredential.images.id");
    const inputsImagesHandle = _.get(inputs, "images.create.handle");

    if (!_.isNil(_.get(data, "employeeCredential.images"))) {
      if (
        queryImagesHandle !== inputsImagesHandle &&
        !_.isNil(inputsImagesHandle)
      ) {
        await deleteAssetMutation({
          variables: {
            where: {
              id: queryImagesId,
            },
          },
        });
      }
    }
    

    const updateObj = createEmployeeCredentialUpdateObj(data, values);

    let images;
    if (inputs.images) {
      images = { create: inputs.images.create };
    
    }
    
    if (!_.isEmpty(updateObj)) {
      const result = await updateEmployeeCredentialMutation({
        variables: {
          data: {
            ...updateObj,
            licenseCertification: {
              connect: { id: values.licenseCertification.value },
            },
            verifiedBy: { connect: { id: values.verifiedBy.value } },
            images: images,
          },
          where: { id: employeeCredentialId },
        },
      });
      const { updateEmployeeCredential } = result.data;

     if (updateEmployeeCredential.images) {
        await publishAssetMutation({
          variables: {
            where: { id: updateEmployeeCredential.images.id },
          },
        });
      }
      await publishEmployeeCredentialMutation({
        variables: {
          where: { id: employeeCredentialId },
        },
      });

      setInputs({ ...updateEmployeeCredential });

    //   Router.replace(`/company/${id}/employees/${employeeId}?currentTab=3`);
      return updateEmployeeCredential;
    } else {
      const updateEmployeeCredential = _.get(data, "employeeCredential");
      return updateEmployeeCredential;
    }
  };

  const {
    inputs,
    setInputs,
    handleDropdownChange,
    handleSetImages,
  } = submitForm(
    {
      id: employeeCredentialId,
      employee: { connect: { id: employeeId } },
      licenseCertification: { key: "0", label: "Select", value: "0" },
      verifiedBy: { key: "0", label: "Select", value: "0" },
      
    },
    initiateUpdateEmployeeCredential
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [employeeCredentialState, setEmployeeCredentialState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && employeeCredentialState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedEmployeeCredential } = _.get(
      data,
      "employeeCredential",
      {}
    );

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedEmployeeCredential }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setEmployeeCredentialState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateEmployeeCredentialLoading ||
    publishEmployeeCredentialLoading ||
    isAuthorizedPersonnelsLoading ||
    isaLicenseCertificationsLoading ||
    publishAssetLoading; 

  if (disabled) return <Loading />;
  const { employeeCredential } = data;

  // create iterable list for dropdown options
  let listAuthorizedPersonnel = authorizedPersonnelsData.authorizedPersonnels.map(
    (dg) => {
      const item = { id: dg.id, name: `${dg.lastName}, ${dg.firstName}` };
      return item;
    }
  );
  let listLicenseCertifications = licenseCertificationsData.licenseCertifications.map(
    (dg) => {
      const item = { id: dg.id, name: dg.name };
      return item;
    }
  );

  return (
    <>
      <Formik
        initialValues={{
          ...employeeCredential,
          licenseCertification: {
            key: employeeCredential.licenseCertification.id,
            label: employeeCredential.licenseCertification.name,
            value: employeeCredential.licenseCertification.id,
          },
          verifiedBy: {
            key: employeeCredential.verifiedBy.id,
            label: `${employeeCredential.verifiedBy.lastName}, ${employeeCredential.verifiedBy.firstName}`,
            value: employeeCredential.verifiedBy.id,
          },
          employee: { connect: { id: employeeId } },
        }}
        validationSchema={Yup.object({
          licenseCertification: Yup.object().test(
            "select",
            "Required",
            (value) => {
              return value.value !== "0" && value;
            }
          ),
          licenseCertificationNumber: Yup.string().required("Required"),
          homeCareRegistryNumber: Yup.string().required("Required"),
          issueDate: Yup.date().required("Required").nullable(),
          institutionProvidingCredential: Yup.string().required("Required"),
          verifiedBy: Yup.object().test("select", "Required", (value) => {
            return value.value !== "0" && value;
          }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            initiateUpdateEmployeeCredential(values);
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
                name="licenseCertification"
                objList={listLicenseCertifications}
                value={values.licenseCertification}
                span={18}
                handleDropdownChange={(e) => handleDropdownChange}
              />
              <GenerateInput name="licenseCertificationNumber" span={18} />
              <GenerateInput name="homeCareRegistryNumber" span={18} />
              <GenerateDateInput name="issueDate" span={12} />
              <GenerateDateInput name="expirationDate" span={12} />

              <GenerateInput name="institutionProvidingCredential" span={18} />

              <GenerateTextArea name="comment" span={18} />
              <GenerateObjectDropdown
                name="verifiedBy"
                objList={listAuthorizedPersonnel}
                value={values.verifiedBy}
                span={18}
                handleDropdownChange={(e) => handleDropdownChange}
              />
              <Col span={4} offset={1}>
                <Form.Item name="images" label="Upload File">
                  {values.images ? <GraphImg image={values.images} /> : null}
                  <PictureUploader
                    setPictureState={setPictureState}
                    handleSetImages={handleSetImages}
                  />
                </Form.Item>
              </Col>
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
