import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeesGraphQL } from "../graphql/queries/employees";
import { Table, Button, Col, Avatar } from "antd";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import { Warning } from "./notify/Warning";
import { ColumnsType } from "antd/lib/table";
import Link from "next/link";
import { UserOutlined, CheckCircleOutlined } from "@ant-design/icons";

type EmployeeListProps = {
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

const StyledNewButton = styled(Button)`
  ${({ theme }) => `
        margin-bottom: ${theme["margin-small"]};
        width: 125px;
    `}
`;

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
        display: none;
        margin-right: ${theme["margin-small"]};
        @media ${theme.device.mobileL} { 
          display: inline-block;
        }
    `}
`;

const StyledTable = styled(Table)`
  ${({ theme }) => `
        max-width: 1800px
    `}
`;

const StyledCheck = styled(CheckCircleOutlined)`
  ${({ theme }) => `
        // margin: auto;
        text-align: center;
    `}
`;

export const EmployeeList = ({ id, legalBusinessName }: EmployeeListProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(employeesGraphQL, {
    variables: { where: { company: { id } } },
  });

  if (isQueryLoading) return <Loading />;

  let employeesList = _.map(data.employees, (value) =>
    _.get(value, "employees", value)
  ).map((employee) => ({
    ...employee,
    key: employee.id,
    renderEmployee: (
      <Link href={`/company/${id}/employees/${employee.id}`}>
        <a>
          <StyledAvatar
            size="large"
            icon={<UserOutlined />}
            src={employee.images ? employee.images.url : null}
          />
          {`${employee.lastName}, ${employee.firstName}`}
        </a>
      </Link>
    ),
    branch: `${employee.branch.branchName}`,
    renderBranch: (
      <Link
        href={`/company/${id}/settings/company/branches/${employee.branch.id}`}
      >
        <a>{`${employee.branch.branchName}`}</a>
      </Link>
    ),
    shared: employee.sharedEmployee ? <StyledCheck /> : null,
    phone: `${employee.phone1}`,
    status: `${employee.currentStatus}`,
  }));

  const sortedEmployeesList = _.sortBy(employeesList, ["branch", "lastName"]);

  if (error || !sortedEmployeesList) return <Error errorText={`${error}`} />;
  if (sortedEmployeesList.length === 0)
    return (
      <>
        <StyledNewButton block type="primary">
          <Link href={`/company/${id}/settings/employee/employees/create`}>
            <a>New Employee</a>
          </Link>
        </StyledNewButton>
        <Warning
          warningHeader="No Employees"
          warningText="This company has not had any employees added yet."
        />
      </>
    );

  interface Employee {
    key: "name";
    title: "Name";
    dataIndex: "name";
  }
  const columns: ColumnsType<Employee> = [
    {
      title: "Employee",
      dataIndex: "renderEmployee",
      key: "id",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "id",
    },
    {
      title: "Shared",
      dataIndex: "shared",
      key: "id",
      align: "center",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "id",
      responsive: ["lg"],
    },
  ];

  return (
    <>
      <StyledPageTitle>{`${legalBusinessName} - Employees`}</StyledPageTitle>
      <Col span={6}>
        <StyledNewButton block type="primary">
          <Link href={`/company/${id}/employees/create`}>
            <a>New Employee</a>
          </Link>
        </StyledNewButton>
      </Col>
      <StyledTable
        columns={columns}
        dataSource={sortedEmployeesList}
        pagination={{ position: ["topLeft", "bottomRight"] }}
      />
    </>
  );
};
