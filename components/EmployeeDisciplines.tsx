import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { employeeGraphQL } from "../graphql/queries/employee";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import Link from "next/link";
import { formatDateMMDDYYYY } from "../utils/format";
import { TabWarning } from "./notify/Warning";
import Media from "react-media";
import { CreateEmployeeDisciplineForm } from "../components/CreateEmployeeDisciplineForm";
import { UpdateEmployeeDisciplineForm } from "./UpdateEmployeeDisciplineForm";
import { employeeDisciplineGraphQL } from "../graphql/queries/employeeDispline";

type EmployeeDisciplineProps = {
  id: any;
  employeeId: any;
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

const StyledError = styled(Error)`
  ${({ theme }) => `
        .ant-col {
          margin-top: 0;
        }
    `}
`;

const StyledTable = styled(Table)`
  ${({ theme }) => `
        max-width: 1000px;
    `}
`;

export const EmployeeDisciplines = ({
  id,
  employeeId,
  legalBusinessName,
}: EmployeeDisciplineProps) => {
  const [
    currentEmployeeDisciplineId,
    setCurrentEmployeeDisciplineId,
  ] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(employeeGraphQL, {
    variables: { where: { id: employeeId } },
  });

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  const EditButton = (employeeDisciplineId: any) => {
    return <a onClick={(e) => handleEditClick(employeeDisciplineId)}>Edit</a>;
  };

  let employeeDisciplineList = _.map(
    data.employee.employeeDiscipline,
    (value) => _.get(value, "employee.employeeDiscipline", value)
  ).map((ed) => ({
    ...ed,
    key: ed.id,
    discipline: ed.discipline.name,
    disciplineAbbreviation: ed.discipline.abbreviation,
    group: ed.disciplineGroup.name,
    startDate: formatDateMMDDYYYY(ed.startDate),
    endDate: ed.endDate ? formatDateMMDDYYYY(ed.endDate) : "present",
    edit: <EditButton employeeDisciplineId={ed.id} />,
  }));

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (employeeDisciplineId: any) => {
    setCurrentEmployeeDisciplineId(employeeDisciplineId.employeeDisciplineId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface EmployeeDiscipline {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const DisciplinesTable = () => (
    <Media query="(max-width: 350px)">
      {(matches) => {
        let columns: ColumnsType<EmployeeDiscipline> = [];
        if (matches) {
          columns = [
            {
              title: "Disc.",
              dataIndex: "disciplineAbbreviation",
              key: "id",
            },
            {
              title: "Start Date",
              dataIndex: "startDate",
              key: "id",
            },
            {
              title: "End Date",
              dataIndex: "endDate",
              key: "id",
            },
            {
              title: "",
              dataIndex: "edit",
              key: "edit",
            },
          ];
        } else {
          columns = [
            {
              title: "Discipline",
              dataIndex: "discipline",
              key: "id",
            },
            {
              title: "Group",
              dataIndex: "group",
              key: "id",
              responsive: ["md"],
            },
            {
              title: "Start Date",
              dataIndex: "startDate",
              key: "id",
            },
            {
              title: "End Date",
              dataIndex: "endDate",
              key: "id",
            },
            {
              title: "",
              dataIndex: "edit",
              key: "edit",
            },
          ];
        }

        return (
          <StyledTable
            dataSource={employeeDisciplineList}
            columns={columns}
            size="middle"
            scroll={{ x: 340 }}
          />
        );
      }}
    </Media>
  );

  const DisciplinesUI = () => {
    if (showNew) {
      return (
        <CreateEmployeeDisciplineForm
          id={id}
          employeeId={employeeId}
          handleCancel={handleCancelCreateNew}
        />
      );
    } else if (showUpdate) {
      return (
        <UpdateEmployeeDisciplineForm
          id={id}
          employeeId={employeeId}
          employeeDisciplineId={currentEmployeeDisciplineId}
          handleCancel={handleEditCancel}
        />
      );
    } else {
      if (employeeDisciplineList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add Discipline
            </StyledNewButton>
            <TabWarning
              warningHeader="No Disciplines"
              warningText="This employee has not had any disciplines added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add Discipline
          </StyledNewButton>
          <DisciplinesTable />
        </>
      );
    }
  };

  return (
    <>
      <DisciplinesUI />
    </>
  );
};
