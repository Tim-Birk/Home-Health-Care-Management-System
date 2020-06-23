import { Form, Row, Col, Button, Alert, Result } from "antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from "./GenerateFields";
import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createBranchGraphQL } from "../graphql/mutations/createBranch";
import { publishBranchGraphQL } from "../graphql/mutations/publishBranch";
import { states } from "../utils/staticLists";
// import { recipesGraphQL } from "../graphql/queries/recipes";
import { UpdateBranchProfileForm } from "../components/UpdateBranchProfileForm";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  basicRequiredInput,
  basicRequiredDropdown,
} from "../utils/formValidator";

type CreateBranchProfileFormProps = {
  id: any;
  legalBusinessName: string;
};

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
        color: inherit;
        text-align: left;
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

export const CreateBranchForm = ({
  id,
  legalBusinessName,
}: CreateBranchProfileFormProps) => {
  const [createBranchMutation, { loading }] = useMutation(createBranchGraphQL);

  const [
    publishBranchMutation,
    { loading: publishBranchLoading },
  ] = useMutation(publishBranchGraphQL);
  //   const { user, loading: isFetchingUser } = useFetchUser();

  //   const [recipeState, setRecipeState] = useState({
  //     isPicUploading: false,
  //   });

  //   const owner = _.get(user, "sub") || "";

  const [isBranchAdded, setIsBranchAdded] = useState(false);

  const initiateCreateBranch = async () => {
    const result = await createBranchMutation({
      // refetchQueries: [
      //   { query: branchGraphQL, variables: { where: { id: result.id } } },
      // ],
      variables: {
        data: {
          ...inputs,
        },
      },
    });

    const { createBranch } = result.data;
    setInputs({ ...createBranch });
    await publishBranchMutation({
      variables: {
        where: { id: createBranch.id },
      },
    });
    setIsBranchAdded(true);
    // Router.push(`/company/${id}/settings/company/branches/${createBranch.id}`);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      branchName: "",
      branchCode: "",
      abbreviation: "",
      address1: "",
      address2: "",
      city: "",
      state: "Select",
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
      company: { connect: { id: id } },
    },
    initiateCreateBranch
  );

  if (loading || publishBranchLoading) return <Loading />;

  const disabled = loading || publishBranchLoading || isBranchAdded;
  return (
    <>
      {isBranchAdded ? (
        <>
          <StyledAlert
            message={`${inputs.branchName} has been added`}
            type="success"
          />
          <UpdateBranchProfileForm
            id={id}
            branchId={inputs.id}
            legalBusinessName={legalBusinessName}
          />
        </>
      ) : (
        <>
          <StyledPageTitle>{legalBusinessName} - Create Branch</StyledPageTitle>
          <StyledForm name="control-ref" onFinish={handleSubmit}>
            <GenerateInput
              name="branchName"
              value={inputs.branchName}
              handleInputChange={handleInputChange}
              span={18}
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
              span={18}
            />
            <GenerateInput
              name="address2"
              value={inputs.address2}
              handleInputChange={handleInputChange}
              span={18}
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
              name="phone"
              value={inputs.phone}
              handleInputChange={handleInputChange}
              span={12}
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
