import { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { branchGraphQL } from "../graphql/queries/branch";
import { updateBranchGraphQL } from "../graphql/mutations/updateBranch";
import { publishBranchGraphQL } from "../graphql/mutations/publishBranch";
import { states } from "../utils/staticLists";
import { createBranchUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import { Form, Col, Button } from "antd";
import { GenerateInput, GenerateDropdown } from "./GenerateFields";
import styled from "styled-components";
// import {
//   basicRequiredInput,
//   basicRequiredDropdown,
// } from "../utils/formValidator";

type UpdateBranchProfileFormProps = {
  id: any;
  branchId: any;
  legalBusinessName: string;
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

export const UpdateBranchProfileForm = ({
  id,
  branchId,
  legalBusinessName,
}: UpdateBranchProfileFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(branchGraphQL, {
    variables: { where: { id: branchId } },
  });

  const [updateBranchMutation, { loading: updateBranchLoading }] = useMutation(
    updateBranchGraphQL
  );

  const [
    publishBranchMutation,
    { loading: publishBranchLoading },
  ] = useMutation(publishBranchGraphQL);

  const initiateUpdateBranch = async () => {
    const updateObj = createBranchUpdateObj(data, inputs);

    if (!_.isEmpty(updateObj)) {
      const result = await updateBranchMutation({
        refetchQueries: [
          { query: branchGraphQL, variables: { where: { id: branchId } } },
        ],
        variables: {
          data: {
            ...updateObj,
          },
          where: { id: branchId },
        },
      });
      await publishBranchMutation({
        variables: {
          where: { id: branchId },
        },
      });
      const updateBranch = _.get(result, "data.updateBranch");
      return updateBranch;
    } else {
      const branch = _.get(data, "branch");
      return branch;
    }
  };

  const {
    inputs,
    setInputs,
    handleInputChange,
    handleDropdownChange,
    handleUpdateBranch,
  } = submitForm(
    {
      id: "",
      branchName: "",
      branchCode: "",
      abbreviation: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      zipExt: "",
      phone: "",
      phoneExt: "",
      fax: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactPhoneExt: "",
      contactEmail: "",
    },
    initiateUpdateBranch
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [branchState, setBranchState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && branchState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedBranch } = _.get(data, "branch", {});
    
    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedBranch }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setBranchState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading || updateBranchLoading || publishBranchLoading;
  return (
    <>
      <StyledPageTitle>
        {legalBusinessName} - Branch Profile: {inputs.branchName}
      </StyledPageTitle>
      <StyledForm name="control-ref" onFinish={handleUpdateBranch}>
        <GenerateInput
          name="branchName"
          value={inputs.branchName}
          handleInputChange={handleInputChange}
          span={18}
          // rules={basicRequiredInput}
        />
        <GenerateInput
          name="branchCode"
          value={inputs.branchCode}
          handleInputChange={handleInputChange}
          span={12}
        />
        <GenerateInput
          name="abbreviation"
          value={inputs.abbreviation}
          handleInputChange={handleInputChange}
          span={18}
        />
        <GenerateInput
          name="address1"
          value={inputs.address1}
          handleInputChange={handleInputChange}
          span={8}
          // rules={basicRequiredInput}
        />
        <GenerateInput
          name="address2"
          value={inputs.address2}
          handleInputChange={handleInputChange}
          span={12}
        />
        <GenerateInput
          name="city"
          value={inputs.city}
          handleInputChange={handleInputChange}
          span={18}
          // rules={basicRequiredInput}
        />
        <GenerateDropdown
          name="state"
          value={inputs.state}
          handleDropdownChange={handleDropdownChange}
          list={states}
          span={18}
          // rules={basicRequiredDropdown(inputs.state)}
        />
        <GenerateInput
          name="zip"
          value={inputs.zip}
          handleInputChange={handleInputChange}
          span={8}
          // rules={basicRequiredInput}
        />
        <GenerateInput
          name="zipExt"
          value={inputs.zipExt}
          handleInputChange={handleInputChange}
          span={8}
        />
        <GenerateInput
          name="phone"
          value={inputs.phone}
          handleInputChange={handleInputChange}
          span={12}
          // rules={basicRequiredInput}
        />
        <GenerateInput
          name="phoneExt"
          value={inputs.phoneExt}
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
          // rules={basicRequiredInput}
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
          // rules={basicRequiredInput}
        />
        <GenerateInput
          name="contactPhoneExt"
          value={inputs.contactPhoneExt}
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
