import { useState } from "react";
import * as _ from "lodash";
import { MainLayout } from "../../../../../components/layout/MainLayout";
import { Tabs, Button } from "antd";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { companyGraphQL } from "../../../../../graphql/queries/company";
import { useFetchUser } from "../../../../../utils/user";
import { DisciplineGroups } from "../../../../../components/DisciplineGroups";
import { Loading } from "../../../../../components/notify/Loading";
import { Error } from "../../../../../components/notify/Error";
import { LandingLayout } from "../../../../../components/layout/LandingLayout";
import isValidUser from "../../../../../utils/isValidUser";
import Router from "next/router";
import styled from "styled-components";
import { Disciplines } from "../../../../../components/Disciplines";

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

const DisciplineSettings = ({ id, currentTab, currentTabDescription }) => {
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
        SetSelectedTab("Discipline Groups");
        break;
      case "2":
        SetSelectedTab("Disciplines");
        break;
      case "3":
        SetSelectedTab("Assign Disciplines");
        break;
    }
  };

  const { company } = data;

  return (
    <MainLayout
      title={`${company.legalBusinessName} - Displine Settings`}
      companyId={id}
      defaultSelectedKeys="8"
    >
      <StyledPageTitle>
        {`${company.legalBusinessName} - ${selectedTab}`}
      </StyledPageTitle>
      <StyledTabs
        type="card"
        onChange={handleTabChange}
        defaultActiveKey={currentTab}
      >
        <TabPane tab="Discplines" key="1">
          <Disciplines id={id} legalBusinessName={company.legalBusinessName} />
        </TabPane>

        <TabPane tab="Disciplines Groups" key="2">
          <DisciplineGroups
            id={id}
            legalBusinessName={company.legalBusinessName}
          />
        </TabPane>
{/* 
        <TabPane tab="Assign Disciplines" key="3">
          <h1>Assign Disciplines</h1>
        </TabPane> */}
      </StyledTabs>
    </MainLayout>
  );
};

DisciplineSettings.getInitialProps = ({ query }) => {
  const { id, currentTab } = query;
  let currentTabDescription = "Disciplines";
  switch (currentTab) {
    case "1":
      currentTabDescription = "Disciplines";
      break;
    case "2":
      currentTabDescription = "Discipline Groups";
      break;
  }
  return { id, currentTab, currentTabDescription };
};

export default DisciplineSettings;
