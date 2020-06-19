import { Form, Col, Button, Alert } from "antd";
import * as _ from "lodash";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GeneratePasswordInput,
  GenerateDropdown,
  GenerateDateInput,
  GenerateObjectDropdown,
  GenerateCheckbox,
} from "./GenerateFields";
import { useMutation } from "@apollo/react-hooks";
import { createEmployeeGraphQL } from "../graphql/mutations/createEmployee";
import { publishEmployeeGraphQL } from "../graphql/mutations/publishEmployee";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { states, gender, earningsType, phoneType } from "../utils/staticLists"; // import { recipesGraphQL } from "../graphql/queries/recipes";
import { UpdateEmployeeProfileForm } from "../components/UpdateEmployeeForm";
import { Loading } from "./notify/Loading";
import { useState } from "react";
import styled from "styled-components";
import {
  basicRequiredInput,
  basicRequiredDropdown,
} from "../utils/formValidator";
import { formatSS } from "../utils/format";
import { PictureUploader } from "./PictureUploader";
import GraphImg from "graphcms-image";
import Router from "next/router";
import { UpdateCompanyProfileForm } from "./UpdateCompanyProfileForm";

type CreateEmployeeFormProps = {
  id: any;
  legalBusinessName: string;
  branches: any;
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

export const CreateEmployeeForm = ({
  id,
  legalBusinessName,
  branches,
}: CreateEmployeeFormProps) => {
  const [createEmployeeMutation, { loading }] = useMutation(
    createEmployeeGraphQL
  );

  const [
    publishEmployeeMutation,
    { loading: publishEmployeeLoading },
  ] = useMutation(publishEmployeeGraphQL);

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });

  const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);

  const initiateCreateEmployee = async () => {
    const result = await createEmployeeMutation({
      variables: {
        data: {
          ...inputs,
        },
      },
    });

    const { createEmployee } = result.data;
    setInputs({ ...createEmployee });
    await publishEmployeeMutation({
      variables: {
        where: { id: createEmployee.id },
      },
    });

    if (createEmployee.images) {
      await publishAssetMutation({
        variables: {
          where: { id: createEmployee.images.id },
        },
      });
    }

    setIsEmployeeAdded(true);
    Router.replace(`/company/${id}/employees/${createEmployee.id}`);
  };

  const [currentBranch, setCurrentBranch] = useState({
    id: "0",
    branchName: "Select",
  });

  const [confirmSocial, setConfirmSocial] = useState("");

  const {
    inputs,
    handleDateChange,
    handleInputChange,
    handleCheckBoxChange,
    handleDropdownChange,
    handleSetImages,
    handleSubmit,
    setInputs,
  } = submitForm(
    {
      firstName: "",
      lastName: "",
      middleInitial: "",
      maidenName: "",
      alsoKnownAs: "",
      gender: "Select",
      birthdate: null,
      social: "",
      sharedEmployee: false,
      earningsType: "Select",
      originalHireDate: null,
      orientationDate: null,
      address1: "",
      address2: "",
      city: "",
      state: "Select",
      zip: "",
      country: "",
      phone1: "",
      phone1Type: "Select",
      phone1Ext: "",
      phone2: "",
      phone2Type: "Select",
      phone2Ext: "",
      phone3: "",
      phone3Type: "Select",
      phone3Ext: "",
      otherPhone: "",
      otherPhoneType: "Select",
      otherPhoneExt: "",
      fax: "",
      email: "",
      currentStatus: "Pending",
      isArchived: false,
      company: { connect: { id } },
      branch: { connect: { id: currentBranch.id } },
    },
    initiateCreateEmployee
  );

  if (loading || publishEmployeeLoading) return <Loading />;

  const disabled =
    loading || publishEmployeeLoading || publishAssetLoading || isEmployeeAdded;

  // create iterable list for dropdown options
  let listBranches = branches.map((b) => {
    const item = { id: b.id, name: b.branchName };
    return item;
  });
  // add select option to iterable list
  listBranches = [{ id: "0", name: "Select" }].concat(listBranches);

  // add select option to actual List
  branches = [{ id: "0", branchName: "Select" }].concat(branches);

  const handleBranchDropdownChange = (event) => {
    setInputs((inputs) => {
      const newInputs = _.cloneDeep(inputs);
      const newBranch = _.find(branches, function (o) {
        return o.id === event.key;
      });
      _.set(newInputs, "branch", {
        connect: { id: newBranch.id },
      });

      setCurrentBranch((state) => ({ ...state, ...newBranch }));
      return newInputs;
    });
  };

  const handleConfirmSocialChange = (event) => {
    event.persist();
    setConfirmSocial(formatSS({ strSS: event.target.value }));
  };

  return (
    <>
      {isEmployeeAdded ? (
        <>
          <StyledAlert
            message={`${inputs.lastName}, ${inputs.firstName} has been added`}
            type="success"
          />
          <UpdateEmployeeProfileForm
            id={id}
            employeeId={inputs.id}
            legalBusinessName={legalBusinessName}
            branches={branches}
          />
        </>
      ) : (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Create Employee
          </StyledPageTitle>
          <StyledForm name="control-ref" onFinish={handleSubmit}>
            <GenerateInput
              name="firstName"
              value={inputs.firstName}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="lastName"
              value={inputs.lastName}
              handleInputChange={handleInputChange}
              span={18}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="middleInitial"
              value={inputs.middleInitial}
              handleInputChange={handleInputChange}
              span={8}
              maxLength={1}
            />
            <GenerateInput
              name="maidenName"
              value={inputs.maidenName}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateInput
              name="alsoKnownAs"
              value={inputs.alsoKnownAs}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateDropdown
              name="gender"
              value={inputs.gender}
              handleDropdownChange={handleDropdownChange}
              list={gender}
              span={18}
              rules={basicRequiredDropdown(inputs.gender)}
            />
            <GenerateObjectDropdown
              name="branch"
              objList={listBranches}
              value={currentBranch.branchName}
              handleDropdownChange={handleBranchDropdownChange}
              span={18}
              rules={basicRequiredDropdown(currentBranch.branchName)}
            />
            <GenerateCheckbox
              name="sharedEmployee"
              checked={inputs.sharedEmployee}
              handleInputChange={handleCheckBoxChange}
              span={18}
            />
            <GenerateDateInput
              name="birthdate"
              value={inputs.birthdate}
              handleDateChange={handleDateChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GeneratePasswordInput
              name="social"
              value={formatSS({ strSS: inputs.social })}
              handleInputChange={handleInputChange}
              span={12}
              rules={basicRequiredInput}
              // maxLength={9}
            />
            {inputs.social ? (
              <GeneratePasswordInput
                name="confirmSocial"
                value={confirmSocial}
                handleInputChange={handleConfirmSocialChange}
                span={12}
                maxLength={9}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (
                        !value ||
                        !value.target ||
                        !getFieldValue("social").target ||
                        getFieldValue("social").target.value ===
                          formatSS({ strSS: value.target.value })
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two socials that you entered do not match!"
                      );
                    },
                  }),
                ]}
              />
            ) : null}

            <GenerateDropdown
              name="earningsType"
              value={inputs.earningsType}
              handleDropdownChange={handleDropdownChange}
              list={earningsType}
              span={18}
              rules={basicRequiredDropdown(inputs.earningsType)}
            />
            <GenerateDateInput
              name="originalHireDate"
              value={inputs.originalHireDate}
              handleDateChange={handleDateChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GenerateDateInput
              name="orientationDate"
              value={inputs.orientationDate}
              handleDateChange={handleDateChange}
              span={12}
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
              span={8}
              rules={basicRequiredDropdown(inputs.state)}
            />
            <GenerateInput
              name="zip"
              value={inputs.zip}
              handleInputChange={handleInputChange}
              span={8}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="email"
              value={inputs.email}
              handleInputChange={handleInputChange}
              span={18}
            />
            <GenerateInput
              name="phone1"
              value={inputs.phone1}
              handleInputChange={handleInputChange}
              span={12}
              rules={basicRequiredInput}
            />
            <GenerateInput
              name="phone1Ext"
              value={inputs.phone1Ext}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateDropdown
              name="phone1Type"
              value={inputs.phone1Type ? inputs.phone1Type : "Select"}
              handleDropdownChange={handleDropdownChange}
              list={phoneType}
              span={18}
            />
            <GenerateInput
              name="phone2"
              value={inputs.phone2}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="phone2Ext"
              value={inputs.phone2Ext}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateDropdown
              name="phone2Type"
              value={inputs.phone2Type ? inputs.phone2Type : "Select"}
              handleDropdownChange={handleDropdownChange}
              list={phoneType}
              span={18}
            />
            <GenerateInput
              name="phone3"
              value={inputs.phone3}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="phone3Ext"
              value={inputs.phone3Ext}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateDropdown
              name="phone3Type"
              value={inputs.phone3Type ? inputs.phone3Type : "Select"}
              handleDropdownChange={handleDropdownChange}
              list={phoneType}
              span={18}
            />
            <GenerateInput
              name="otherPhone"
              value={inputs.otherPhone}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateInput
              name="otherPhoneExt"
              value={inputs.otherPhoneExt}
              handleInputChange={handleInputChange}
              span={12}
            />
            <GenerateDropdown
              name="otherPhoneType"
              value={inputs.otherPhoneType ? inputs.otherPhoneType : "Select"}
              handleDropdownChange={handleDropdownChange}
              list={phoneType}
              span={18}
            />
            <Col span={4} offset={1}>
              <Form.Item label="Profile Picture">
                <PictureUploader
                  setPictureState={setPictureState}
                  handleSetImages={handleSetImages}
                />
              </Form.Item>
            </Col>
            <Col span={6} offset={1}>
              <Button
                block
                disabled={disabled}
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Col>
          </StyledForm>
        </>
      )}
    </>
  );
};
