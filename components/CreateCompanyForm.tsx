import { Form, Row, Col, Button, Alert } from "antd";

import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from "./GenerateFields";
import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createCompanyGraphQL } from "../graphql/mutations/createCompany";
import { createUserCompanyGraphQL } from "../graphql/mutations/createUserCompany";
import { publishCompanyGraphQL } from "../graphql/mutations/publishCompany";
import { publishUserCompanyGraphQL } from "../graphql/mutations/publishUserCompany";
import { states, businessType } from "../utils/staticLists";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import {
  basicRequiredInput,
  basicRequiredDropdown,
} from "../utils/formValidator";

type CreateCompanyProfileFormProps = {};

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
        color: inherit;
        text-align: left;
        margin-top: ${theme["margin-small"]};
        margin-left: ${theme["margin-small"]};
        margin-bottom: ${theme["margin-medium"]};
    `}
`;

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

export const CreateCompanyForm = () => {
  const [createCompanyMutation, { loading }] = useMutation(
    createCompanyGraphQL
  );

  const [
    createUserCompanyMutation,
    { loading: createUserCompanyLoading },
  ] = useMutation(createUserCompanyGraphQL);

  const [
    publishCompanyMutation,
    { loading: publishCompanyLoading },
  ] = useMutation(publishCompanyGraphQL);

  const [
    publishUserCompanyMutation,
    { loading: publishUserCompanyLoading },
  ] = useMutation(publishUserCompanyGraphQL);

  const { user, loading: isFetchingUser } = useFetchUser();

  const [isCompanyAdded, setIsCompanyAdded] = useState(false);

  const initiateCreateCompany = async () => {
    const result = await createCompanyMutation({
      variables: {
        data: {
          ...inputs,
        },
      },
    });

    const { createCompany } = result.data;

    setInputs({ ...createCompany });

    const userCompanyResult = await createUserCompanyMutation({
      variables: {
        data: {
          user: user.sub,
          company: { connect: { id: createCompany.id } },
        },
      },
    });

    const { createUserCompany } = userCompanyResult.data;

    await publishCompanyMutation({
      variables: {
        where: { id: createCompany.id },
      },
    });

    await publishUserCompanyMutation({
      variables: {
        where: { id: createUserCompany.id },
      },
    });
    setIsCompanyAdded(true);
    Router.push(`/company/${createCompany.id}`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      legalBusinessName: "",
      companyId: "",
      doingBusinessAs: "",
      abbreviation: "",
      companyCode: "",
      taxId: "",
      nationalProviderIdentifier: "",
      businessType: "Select",
      address1: "",
      address2: "",
      zip: "",
      zipExt: "",
      city: "",
      state: "Select",
      phone: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactEmail: "",
    },
    initiateCreateCompany
  );

  if (
    loading ||
    publishCompanyLoading ||
    isFetchingUser ||
    createUserCompanyLoading ||
    publishUserCompanyLoading
  )
    return <Loading />;

  const disabled =
    loading ||
    publishCompanyLoading ||
    isCompanyAdded ||
    createUserCompanyLoading ||
    publishUserCompanyLoading;
  return (
    <>
      {isCompanyAdded ? (
        <>
          {/* <StyledAlert
            message={`${inputs.branchName} has been added`}
            type="success"
          />
          <UpdateBranchProfileForm
            id={id}
            branchId={inputs.id}
            legalBusinessName={legalBusinessName}
          /> */}
        </>
      ) : (
        <>
          {isCompanyAdded ? (
            <StyledAlert
              message={`${inputs.legalBusinessName} has been added`}
              type="success"
            />
          ) : null}
          <StyledPageTitle>Create New Company</StyledPageTitle>
          <StyledForm name="control-ref" onFinish={handleSubmit}>
            <GenerateInput
              name="legalBusinessName"
              value={inputs.legalBusinessName}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="companyId"
              value={inputs.companyId}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="doingBusinessAs"
              value={inputs.doingBusinessAs}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateInput
              name="abbreviation"
              value={inputs.abbreviation}
              handleInputChange={handleInputChange}
              span={8}
            />
            <GenerateInput
              name="companyCode"
              value={inputs.companyCode}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="taxId"
              value={inputs.taxId}
              handleInputChange={handleInputChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="nationalProviderIdentifier"
              value={inputs.nationalProviderIdentifier}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateDropdown
              name="businessType"
              value={inputs.businessType}
              handleDropdownChange={handleDropdownChange}
              list={businessType}
              span={18}
              rules={basicRequiredDropdown(inputs.businessType)}
            />

            <GenerateInput
              name="address1"
              value={inputs.address1}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="address2"
              value={inputs.address2}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateInput
              name="zip"
              value={inputs.zip}
              handleInputChange={handleInputChange}
              span={8}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="zipExt"
              value={inputs.zipExt}
              handleInputChange={handleInputChange}
              span={8}
            />
            <GenerateInput
              name="city"
              value={inputs.city}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateDropdown
              name="state"
              value={inputs.state}
              handleDropdownChange={handleDropdownChange}
              list={states}
              span={18}
              rules={basicRequiredDropdown(inputs.state)}
            />
            <GenerateInput
              name="phone"
              value={inputs.phone}
              handleInputChange={handleInputChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="fax"
              value={inputs.fax}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="contactName"
              value={inputs.contactName}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="contactTitle"
              value={inputs.contactTitle}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateInput
              name="contactPhone"
              value={inputs.contactPhone}
              handleInputChange={handleInputChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="contactExt"
              value={inputs.contactExt}
              handleInputChange={handleInputChange}
              span={8}
            />
            <GenerateInput
              name="contactEmail"
              value={inputs.contactEmail}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />

            <Col span={6} offset={3}>
              <Button
                block
                disabled={disabled}
                type="primary"
                htmlType="submit"
              >
                Create
              </Button>
            </Col>
          </StyledForm>
        </>
      )}
    </>
  );
};
