import { useState } from "react";
import * as _ from "lodash";
import { MainLayout } from "../../../../components/layout/MainLayout";
import { UpdateEmployeeProfileForm } from "../../../../components/UpdateEmployeeForm";
import { Tabs, Button } from "antd";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { companyGraphQL } from "../../../../graphql/queries/company";
import { useFetchUser } from "../../../../utils/user";
import { Loading } from "../../../../components/notify/Loading";
import { Error } from "../../../../components/notify/Error";
import { LandingLayout } from "../../../../components/layout/LandingLayout";
import isValidUser from "../../../../utils/isValidUser";
import Router from "next/router";
import styled from "styled-components";
import { EmployeeProfileHeader } from "../../../../components/EmployeeProfileHeader";
import { EmployeeDisciplines } from "../../../../components/EmployeeDisciplines";
import { EmployeeCredentials } from "../../../../components/EmployeeCredentials";

const { TabPane } = Tabs;

const StyledPageTitle = styled.h3`
  ${({ theme }) => `
        color: inherit;
        text-align: center;
        line-height: 1.5em;
        margin-bottom: ${theme["margin-xsmall"]};
        @media ${theme.device.tablet} { 
          text-align: left;
        }
    `}
`;

const StyledTabs = styled(Tabs)`
  ${({ theme }) => `
      div.ant-tabs-nav-list {
        // background-color: #fff;
        // padding-left: ${theme["padding-small"]};
        // padding-right: ${theme["padding-small"]};
        @media ${theme.device.tablet} { 
          // padding-left: ${theme["padding-zero"]};
          // padding-right: ${theme["padding-zero"]};
        }
      }
    `}
`;

const EmployeeProfile = ({
  id,
  employeeId,
  currentTab,
  currentTabDescription,
}) => {
  const { user, loading: isFetchUser } = useFetchUser();
  const [selectedTab, SetSelectedTab] = useState(currentTabDescription);

  const { loading: isQueryLoading, data, error: isCompanyError } = useQuery(
    companyGraphQL,
    {
      variables: { where: { id } },
    }
  );

  if (!data || isQueryLoading || isFetchUser) return <Loading />;

  if (!user) {
    Router.push("/");
  } else if (!isValidUser(user, data)) {
    return (
      <LandingLayout title="No Company Access">
        <Error errorText="The current user does not have permission to view this company" />
      </LandingLayout>
    );
  }
  const handleTabChange = (key) => {
    switch (key) {
      case "1":
        SetSelectedTab("Employee Profile");
        break;
      case "2":
        SetSelectedTab("Employee Disciplines");
        break;
      case "3":
        SetSelectedTab("Employee Credentials");
        break;
      case "4":
        SetSelectedTab("Employee Criteria");
        break;
      case "5":
        SetSelectedTab("Employee I-9");
        break;
      case "6":
        SetSelectedTab("Employee History");
        break;
    }
    // Router.replace(`/company/${id}/employees/${employeeId}?currentTab=${key}`);
  };

  const { company } = data;

  return (
    <MainLayout
      title={`${company.legalBusinessName} - Employee`}
      companyId={id}
      defaultSelectedKeys="8"
    >
      <StyledPageTitle>
        {`${company.legalBusinessName} - ${selectedTab}`}
      </StyledPageTitle>
      <EmployeeProfileHeader employeeId={employeeId} />
      <StyledTabs
        type="card"
        onChange={handleTabChange}
        defaultActiveKey={currentTab}
      >
        <TabPane tab="Profile" key="1">
          <UpdateEmployeeProfileForm
            id={id}
            employeeId={employeeId}
            legalBusinessName={company.legalBusinessName}
            branches={company.companyBranches}
          />
        </TabPane>
        <TabPane tab="Disciplines" key="2">
          <EmployeeDisciplines
            id={id}
            employeeId={employeeId}
            legalBusinessName={company.legalBusinessName}
          />
        </TabPane>
        <TabPane tab="Credentials" key="3">
          <EmployeeCredentials
            id={id}
            employeeId={employeeId}
            legalBusinessName={company.legalBusinessName}
          />
        </TabPane>
        <TabPane tab="Criteria" key="4" disabled>
          Content of Criteria tab
        </TabPane>
        <TabPane tab="I-9" key="5" disabled>
          Content of I-9 tab
        </TabPane>
        <TabPane tab="History" key="6" disabled>
          Content of History tab
        </TabPane>
      </StyledTabs>
    </MainLayout>
  );
};

EmployeeProfile.getInitialProps = ({ query }) => {
  const { id, employeeId, currentTab } = query;

  let currentTabDescription = "Employee Profile";
  switch (currentTab) {
    case "1":
      currentTabDescription = "Employee Profile";
      break;
    case "2":
      currentTabDescription = "Employee  Disciplines";
      break;
    case "3":
      currentTabDescription = "Employee Credentials";
      break;
    case "4":
      currentTabDescription = "Employee Criteria";
      break;
    case "5":
      currentTabDescription = "Employee I-9";
      break;
    case "6":
      currentTabDescription = "Employee History";
      break;
  }

  return { id, employeeId, currentTab, currentTabDescription };
};

export default EmployeeProfile;
