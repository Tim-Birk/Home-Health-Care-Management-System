import { Col, Alert, Button } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton } from "formik-antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createEmployeeCredentialGraphQL } from "../graphql/mutations/createEmployeeCredential";
import { publishEmployeeCredentialGraphQL } from "../graphql/mutations/publishEmployeeCredential";
import { authorizedPersonnelsGraphQL } from "../graphql/queries/authorizedPersonnels";
import { licenseCertificationsGraphQL } from "../graphql/queries/licenseCertifications";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  GenerateInput,
  GenerateObjectDropdown,
  GenerateDateInput,
  GenerateTextArea,
} from "./GenerateFormikFields";
import * as Yup from "yup";
import Router from "next/router";
import { PictureUploader } from "./PictureUploader";

type CreateEmployeeCredentialFormProps = {
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

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin-left: ${theme["margin-xsmall"]};
  `}
`;

export const CreateEmployeeCredentialForm = ({
  id,
  employeeId,
  handleCancel,
}: CreateEmployeeCredentialFormProps) => {
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

  const [createEmployeeCredentialMutation, { loading }] = useMutation(
    createEmployeeCredentialGraphQL
  );

  const [
    publishEmployeeCredentialMutation,
    { loading: publishEmployeeCredentialLoading },
  ] = useMutation(publishEmployeeCredentialGraphQL);

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });
  const [isEmployeeCredentialAdded, setIsEmployeeCredentialAdded] = useState(
    false
  );

  const initiateCreateEmployeeCredential = async (values) => {
    const result = await createEmployeeCredentialMutation({
      variables: {
        data: {
          ...values,
          licenseCertification: {
            connect: { id: values.licenseCertification.value },
          },
          verifiedBy: { connect: { id: values.verifiedBy.value } },
          images: inputs.images,
        },
      },
    });

    const { createEmployeeCredential } = result.data;

    setInputs({ ...createEmployeeCredential });

    if (createEmployeeCredential.images) {
      await publishAssetMutation({
        variables: {
          where: { id: createEmployeeCredential.images.id },
        },
      });
    }
    console.log(createEmployeeCredential);
    await publishEmployeeCredentialMutation({
      variables: {
        where: { id: createEmployeeCredential.id },
      },
    });
    setIsEmployeeCredentialAdded(true);

    Router.replace(`/company/${id}/employees/${employeeId}?currentTab=3`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
    handleSetImages,
    handleSetFiles,
  } = submitForm(
    {
      licenseCertification: { key: "0", label: "Select", value: "0" },
      verifiedBy: { key: "0", label: "Select", value: "0" },
    },
    initiateCreateEmployeeCredential
  );

  if (
    loading ||
    publishEmployeeCredentialLoading ||
    isAuthorizedPersonnelsLoading ||
    isaLicenseCertificationsLoading ||
    publishAssetLoading
  )
    return <Loading />;

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

  const disabled =
    loading ||
    publishEmployeeCredentialLoading ||
    isEmployeeCredentialAdded ||
    isAuthorizedPersonnelsLoading ||
    isaLicenseCertificationsLoading ||
    publishAssetLoading ||
    pictureState.isPicUploading;

  return (
    <>
      {isEmployeeCredentialAdded ? (
        <>
          <StyledAlert
            message={`Employee Credential has been added`}
            type="success"
          />
        </>
      ) : (
        <>
          <Formik
            initialValues={{
              licenseCertification: { key: "0", label: "Select", value: "0" },
              licenseCertificationNumber: "",
              homeCareRegistryNumber: "",
              issueDate: null,
              expirationDate: null,
              institutionProvidingCredential: "",
              comment: "",
              verifiedBy: { key: "0", label: "Select", value: "0" },
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
                initiateCreateEmployeeCredential(values);
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

                  <GenerateInput
                    name="institutionProvidingCredential"
                    span={18}
                  />

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
                      <PictureUploader
                        setPictureState={setPictureState}
                        handleSetImages={handleSetImages}
                      />
                    </Form.Item>
                  </Col>
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
