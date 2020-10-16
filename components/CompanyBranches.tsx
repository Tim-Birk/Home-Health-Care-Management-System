import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { companyGraphQL } from "../graphql/queries/company";
import { Table, Button, Col } from "antd";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import { Warning } from "./notify/Warning";
import { ColumnsType } from "antd/lib/table";
import Link from "next/link";

type CompanyBranchesProps = {
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

const StyledNewBranchButton = styled(Button)`
  ${({ theme }) => `
    margin-bottom: ${theme["margin-small"]};
    width: 125px;
  `}
`;

export const CompanyBranches = ({
  id,
  legalBusinessName,
}: CompanyBranchesProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(companyGraphQL, {
    variables: { where: { id } },
  });

  if (isQueryLoading) return <Loading />;

  let branchesList = _.map(data.company.companyBranches, (value) =>
    _.get(value, "company.companyBranches", value)
  ).map((branch) => ({
    ...branch,
    key: branch.id,
    cityState: `${branch.city}, ${branch.state}`,
    render: (
      <Link href={`/company/${id}/settings/company/branches/${branch.id}`}>
        <a>{branch.branchName}</a>
      </Link>
    ),
  }));

  if (error || !branchesList) return <Error errorText={`${error}`} />;
  if (branchesList.length === 0)
    return (
      <>
        <StyledNewBranchButton block type="primary">
          <Link href={`/company/${id}/settings/company/branches/create`}>
            <a>New Branch</a>
          </Link>
        </StyledNewBranchButton>
        <Warning
          warningHeader="No Branches"
          warningText="This company has not had any branches added yet."
        />
      </>
    );

  interface Branch {
    key: "name";
    title: "Name";
    dataIndex: "name";
  }
  const columns: ColumnsType<Branch> = [
    {
      title: "Branch",
      dataIndex: "render",
      key: "id",
    },
    {
      title: "Location",
      dataIndex: "cityState",
      key: "cityState",
      responsive: ["md"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["lg"],
    },
  ];

  return (
    <>
      <StyledPageTitle>{`${legalBusinessName} - Branches`}</StyledPageTitle>
      <Col span={6}>
        <StyledNewBranchButton block type="primary">
          <Link href={`/company/${id}/settings/company/branches/create`}>
            <a>New Branch</a>
          </Link>
        </StyledNewBranchButton>
      </Col>
      <Table
        columns={columns}
        dataSource={branchesList}
        pagination={{ position: ["topLeft", "bottomRight"] }}
      />
    </>
  );
};
