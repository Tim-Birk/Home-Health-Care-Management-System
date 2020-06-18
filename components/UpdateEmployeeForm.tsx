import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeeGraphQL } from "../graphql/queries/employee";
import { updateEmployeeGraphQL } from "../graphql/mutations/updateEmployee";
import { publishEmployeeGraphQL } from "../graphql/mutations/publishEmployee";
import { publishAssetGraphQL } from "../graphql/mutations/publishAsset";
import { deleteAssetGraphQL } from "../graphql/mutations/deleteAsset";
import { states, gender, earningsType, phoneType } from "../utils/staticLists";
import { createEmployeeUpdateObj } from "../utils/createUpdateObj";
import { submitForm } from "../utils/submitForm";
import {
  basicRequiredInput,
  basicRequiredDropdown,
} from "../utils/formValidator";
import { Form, Col, Button } from "antd";
import {
  GenerateInput,
  GeneratePasswordInput,
  GenerateDropdown,
  GenerateDateInput,
  GenerateObjectDropdown,
} from "./GenerateFields";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { formatSS } from "../utils/format";
import Router from "next/router";
import { PictureUploader } from "./PictureUploader";
import GraphImg from "graphcms-image";

type UpdateEmployeeProfileFormProps = {
  id: any;
  employeeId: any;
  legalBusinessName: string;
  branches: any;
};

const StyledForm = styled(Form)`
  ${({ theme }) => `
        max-width: 900px;
    `}
`;

export const UpdateEmployeeProfileForm = ({
  id,
  employeeId,
  legalBusinessName,
  branches,
}: UpdateEmployeeProfileFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(employeeGraphQL, {
    variables: { where: { id: employeeId } },
  });

  const [
    updateEmployeeMutation,
    { loading: updateEmoloyeeLoading },
  ] = useMutation(updateEmployeeGraphQL);

  const [
    publishEmployeeMutation,
    { loading: publishEmployeeLoading },
  ] = useMutation(publishEmployeeGraphQL);

  const [publishAssetMutation, { loading: publishAssetLoading }] = useMutation(
    publishAssetGraphQL
  );

  const [deleteAssetMutation, { loading: deleteAssetLoading }] = useMutation(
    deleteAssetGraphQL
  );

  const initiateUpdateEmployee = async () => {
    const queryImagesHandle = _.get(data, "employee.images.handle");
    const inputsImagesHandle = _.get(inputs, "images.create.handle");
    const queryImagesId = _.get(data, "employee.images.id");

    if (!_.isNil(_.get(data, "employee.images"))) {
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

    const updateObj = createEmployeeUpdateObj(data, inputs);

    if (!_.isEmpty(updateObj)) {
      const result = await updateEmployeeMutation({
        refetchQueries: [
          { query: employeeGraphQL, variables: { where: { id: employeeId } } },
        ],
        variables: {
          data: {
            ...updateObj,
          },
          where: { id: employeeId },
        },
      });
      await publishEmployeeMutation({
        variables: {
          where: { id: employeeId },
        },
      });
      const updateEmployee = _.get(result, "data.updateEmployee");
      if (updateEmployee.images) {
        await publishAssetMutation({
          variables: {
            where: { id: updateEmployee.images.id },
          },
        });
      }

      Router.replace(window.location.pathname);
      return updateEmployee;
    } else {
      const employee = _.get(data, "employee");
      return employee;
    }
  };

  const [currentBranch, setCurrentBranch] = useState({
    id: "0",
    branchName: "Select",
  });

  const [confirmSocial, setConfirmSocial] = useState("");

  const [pictureState, setPictureState] = useState({
    isPicUploading: false,
  });

  const {
    inputs,
    setInputs,
    handleInputChange,
    handleDropdownChange,
    handleDateChange,
    handleUpdateEmployee,
    handleSetImages,
  } = submitForm(
    {
      id: "",
      firstName: "",
      lastName: "",
      middleInitial: "",
      maidenName: "",
      alsoKnownAs: "",
      gender: "Select",
      birthdate: null,
      social: "",
      sharedEmployee: "",
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
      currentStatus: "",
      isArchived: "",
      company: { connect: { id } },
      branch: { connect: { id: currentBranch.id } },
    },
    initiateUpdateEmployee
  );

  // create a "form state" for the company that is coming in from the server (initiate with object that has property isQueryLoading)
  const [employeeState, setEmployeeState] = useState({
    isQueryLoading,
  });

  if (!isQueryLoading && employeeState.isQueryLoading) {
    //   format data from server to match inputs object
    const { __typename, ...loadedEmployee } = _.get(data, "employee", {});

    // initiate current branch with employee's branch
    setCurrentBranch((state) => ({ ...state, ...loadedEmployee.branch }));

    setConfirmSocial(loadedEmployee.social);

    // update inputs object to have new data
    setInputs((state) => ({ ...state, ...loadedEmployee }));

    // set companyState.isQueryLoading = isQueryLoading (false)
    setEmployeeState((state) => ({ ...state, isQueryLoading }));
  }

  const disabled =
    isQueryLoading ||
    updateEmoloyeeLoading ||
    publishEmployeeLoading ||
    pictureState.isPicUploading;

  if (
    isQueryLoading ||
    updateEmoloyeeLoading ||
    publishEmployeeLoading ||
    deleteAssetLoading ||
    publishAssetLoading
  ) {
    return <Loading />;
  }

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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <StyledForm
        name="control-ref"
        onFinish={handleUpdateEmployee}
        onFinishFailed={onFinishFailed}
      >
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
            {inputs.images ? <GraphImg image={inputs.images} /> : null}
            <PictureUploader
              setPictureState={setPictureState}
              handleSetImages={handleSetImages}
            />
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Button block disabled={disabled} type="primary" htmlType="submit">
            Save
          </Button>
        </Col>
      </StyledForm>
    </>
  );
};
