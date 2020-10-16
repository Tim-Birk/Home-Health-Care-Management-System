import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeesGraphQL } from "../graphql/queries/employees";
import { Table, Button, Col, Avatar, Input, Space, Badge } from "antd";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import { Warning } from "./notify/Warning";
import { ColumnsType } from "antd/lib/table";
import Link from "next/link";
import { UserOutlined, CheckOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

type EmployeeListProps = {
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

const StyledCheck = styled(CheckOutlined)`
  ${({ theme }) => `
    text-align: center;
  `}
`;

export const EmployeeList = ({
  id,
  legalBusinessName,
  branches,
}: EmployeeListProps) => {
  const [filter, setFilter] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });
  const [employeeListInfo, setEmployeeListInfo] = useState({
    isInitialized: true,
    employeeList: [],
  });
  const [search, setSearch] = useState({ searchText: "", searchedColumn: "" });
  const { loading: isQueryLoading, data, error } = useQuery(employeesGraphQL, {
    variables: { where: { company: { id } } },
  });

  if (isQueryLoading) return <Loading />;

  // create iterable list for dropdown options
  let listBranches = branches.map((b) => {
    const item = { text: b.branchName, value: b.branchName };
    return item;
  });

  let searchInput = null;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      let searchIndex = dataIndex;
      if (dataIndex === "renderEmployee") {
        searchIndex = "name";
      }
      return record[searchIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text) => {
      return search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      );
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    let searchIndex = dataIndex;
    if (dataIndex === "renderEmployee") {
      searchIndex = "name";
    }

    setEmployeeListInfo((state) => ({
      ...state,
      isInitialized: false,
      employeeList: [
        ...(sortedEmployeesList = sortedEmployeesList.filter((employee) => {
          if (
            searchIndex === "name" &&
            employee.name.toUpperCase().includes(selectedKeys[0].toUpperCase())
          ) {
            return employee;
          }
        })),
      ],
    }));
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setEmployeeListInfo((state) => ({
      ...state,
      employeeList: [...sortedEmployeesList],
    }));
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilter((state) => ({
      ...state,
      filteredInfo: filters,
      sortedInfo: sorter,
    }));
  };

  let employeesList = _.map(data.employees, (value) =>
    _.get(value, "employees", value)
  ).map((employee) => {
    let statusBadge = {};
    if (employee.currentStatus === "Active") {
      statusBadge = <Badge status="success" text={employee.currentStatus} />;
    } else if (employee.currentStatus === "Pending") {
      statusBadge = <Badge status="warning" text={employee.currentStatus} />;
    } else {
      statusBadge = <Badge status="error" text={employee.currentStatus} />;
    }
    return {
      ...employee,
      key: employee.id,
      name: `${employee.lastName}, ${employee.firstName}`,
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
      shared: employee.sharedEmployee,
      renderShared: employee.sharedEmployee ? <StyledCheck /> : null,
      phone: `${employee.phone1}`,
      status: `${employee.currentStatus}`,
      renderStatus: statusBadge,
    };
  });

  let sortedEmployeesList = _.sortBy(employeesList, ["lastName"]);

  if (error || !sortedEmployeesList) return <Error errorText={`${error}`} />;
  if (sortedEmployeesList.length === 0)
    return (
      <>
        <StyledNewButton block type="primary">
          <Link href={`/company/${id}/employees/create`}>
            <a>New Employee</a>
          </Link>
        </StyledNewButton>
        <Warning
          warningHeader="No Employees"
          warningText="This company has not had any employees added yet."
        />
      </>
    );

  let { sortedInfo, filteredInfo } = filter;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  interface Employee {
    key: "name";
    title: "Name";
    dataIndex: "name";
    name: "name";
    branch: "branch";
    status: "status";
    shared: "shared";
  }
  const columns: ColumnsType<Employee> = [
    {
      title: "Employee",
      dataIndex: "renderEmployee",
      key: "name",
      ...getColumnSearchProps("renderEmployee"),
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      filters: listBranches,
      filteredValue: filteredInfo.branch || null,
      onFilter: (value, record) => record.branch === value,
    },
    {
      title: "Shared",
      dataIndex: "renderShared",
      key: "shared",
      align: "center",
      responsive: ["md"],
      filters: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      filteredValue: filteredInfo.shared || null,
      onFilter: (value, record) => record.shared === value,
    },
    {
      title: "Status",
      dataIndex: "renderStatus",
      key: "status",
      responsive: ["md"],
      filters: [
        { text: "Active", value: "Active" },
        { text: "Pending", value: "Pending" },
        { text: "Permanently Terminated", value: "Permanently Terminated" },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status === value,
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
        dataSource={
          employeeListInfo.isInitialized
            ? sortedEmployeesList
            : employeeListInfo.employeeList
        }
        pagination={{ position: ["topLeft", "bottomRight"] }}
        onChange={handleChange}
      />
    </>
  );
};
