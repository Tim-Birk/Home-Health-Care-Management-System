import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { companyGraphQL } from "../graphql/queries/company";
import { updateCompanyGraphQL } from "../graphql/mutations/updateCompany";
import { publishCompanyGraphQL } from "../graphql/mutations/publishCompany";
import { useFetchUser } from "../utils/user";
import { businessType, states } from "../utils/staticLists";
import { createCompanyUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Form, Col, Button } from "antd";
import { GenerateInput, GenerateDropdown } from "./GenerateFields";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import Router from "next/router";

type UpdateCompanyProfileFormProps = {
  id: any;
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

export const UpdateCompanyProfileForm = ({
  id,
}: UpdateCompanyProfileFormProps) => {
  const { user, loading: isFetchUser } = useFetchUser();

  const { loading: isQueryLoading, data, error } = useQuery(companyGraphQL, {
    variables: { where: { id } },
  });

  const [updateComanyMutation, { loading: updateCompanyLoading }] = useMutation(
    updateCompanyGraphQL
  );

  const [
    publishComanyMutation,
    { loading: publishCompanyLoading },
  ] = useMutation(publishCompanyGraphQL);

  const initiateUpdateCompany = async () => {
    const updateObj = createCompanyUpdateObj(data, inputs);

    if (!_.isEmpty(updateObj)) {
      const result = await updateComanyMutation({
        refetchQueries: [
          { query: companyGraphQL, variables: { where: { id } } },
        ],
        variables: {
          data: {
            ...updateObj,
          },
          where: { id },
        },
      });
      await publishComanyMutation({
        variables: {
          where: { id },
        },
      });
      const updateCompany = _.get(result, "data.updateCompany");
      return updateCompany;
    } else {
      const company = _.get(data, "company");
      return company;
    }
  };

  const {
    inputs,
    setInputs,
    handleInputChange,
    handleDropdownChange,
    handleUpdateCompany,
  } = submitForm(
    {
      legalBusinessName: "",
      companyId: "",
      doingBusinessAs: "",
      abbreviation: "",
      companyCode: "",
      taxId: "",
      nationalProviderIdentifier: "",
      businessType: "",
      address1: "",
      address2: "",
      zip: "",
      zipExt: "",
      city: "",
      state: "",
      phone: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactEmail: "",
      stage: "PUBLISHED",
    },
    initiateUpdateCompany
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [companyState, setCompanyState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && companyState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedCompany } = _.get(data, "company", {});

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedCompany }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setCompanyState((state) => ({ ...state, isQueryLoading }));
  }

  if (!data || isFetchUser) return <Loading />;
  const owner = _.get(user, "sub") || "";
  const foundCompanyUser = _.find(
    _.get(data, "company.companyUsers"),
    function (o) {
      return o.user === owner;
    }
  );

  if (!user) {
    Router.push("/");
  } else if (!foundCompanyUser) {
    return (
      <Error errorText="The current user does not have permission to view this company" />
    );
  }

  const disabled =
    isQueryLoading || updateCompanyLoading || publishCompanyLoading;
  return (
    <>
      <StyledPageTitle>
        {data.company.legalBusinessName} - Company Profile
      </StyledPageTitle>
      <StyledForm name="control-ref" onSubmitCapture={handleUpdateCompany}>
        <GenerateInput
          name="legalBusinessName"
          value={inputs.legalBusinessName}
          handleInputChange={handleInputChange}
          span={18}
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
        />

        <GenerateInput
          name="address1"
          value={inputs.address1}
          handleInputChange={handleInputChange}
          span={18}
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
        />
        <GenerateDropdown
          name="state"
          value={inputs.state}
          handleDropdownChange={handleDropdownChange}
          list={states}
          span={18}
        />
        <GenerateInput
          name="phone"
          value={inputs.phone}
          handleInputChange={handleInputChange}
          span={12}
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
        />

        <Col span={6} offset={3}>
          <Button block disabled={disabled} type="primary" htmlType="submit">
            Save
          </Button>
        </Col>
      </StyledForm>
    </>
  );
};
