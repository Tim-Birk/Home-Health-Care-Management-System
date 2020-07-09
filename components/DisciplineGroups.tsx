import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { disciplineGroupsGraphQL } from "../graphql/queries/disciplinesGroups";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import Link from "next/link";
import { formatDateMMDDYYYY } from "../utils/format";
import { TabWarning } from "./notify/Warning";
import Media from "react-media";
import { UpdateDisciplineGroupForm } from "./UpdateDisciplineGroupForm";
import { CreateDisciplineGroupForm } from "./CreateDisciplineGroupForm";
// import { CreateEmployeeDisciplineForm } from "../components/CreateEmployeeDisciplineForm";
// import { UpdateEmployeeDisciplineForm } from "./UpdateEmployeeDisciplineForm";

type DisciplineGroupsProps = {
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
        width: auto;
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

const StyledCheck = styled(CheckOutlined)`
  ${({ theme }) => `

    `}
`;


export const DisciplineGroups = ({
  id,
  legalBusinessName,
}: DisciplineGroupsProps) => {
  const [currentDisciplineGroupId, setCurrentDisciplineGroupId] = useState(
    null
  );
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(
    disciplineGroupsGraphQL,
    {
      variables: { where: { company: { id } } },
    }
  );

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  
  let disciplineGroupList = _.map(data.disciplineGroups, (value) =>
    _.get(value, "disciplineGroups", value)
  ).map((dg) => ({
    ...dg,
    key: dg.id,
    name: dg.name,
    renderName: <a onClick={(e) => handleEditClick(dg.id)}>{dg.name}</a>,
    renderIsAdmin: dg.isAdmin ? <StyledCheck /> : null,
    renderAllowOverlap: dg.allowOverlap ? <StyledCheck /> : null,
  }));

  const sortedDisciplineGroupList = _.sortBy(disciplineGroupList, ["name"]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (disciplineGroupId: any) => {
    setCurrentDisciplineGroupId(disciplineGroupId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface DisciplineGroup {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const columns: ColumnsType<DisciplineGroup> = [
    {
      title: "Discipline Group",
      dataIndex: "renderName",
      key: "name",
    },
    {
      title: "Admin",
      dataIndex: "renderIsAdmin",
      key: "isAdmin",
      responsive: ["sm"],
    },
    {
      title: "Allow Overlap",
      dataIndex: "renderAllowOverlap",
      key: "allowOverlap",
      responsive: ["sm"],
    },
  ];

  const DisciplineGroupsUI = () => {
    if (showNew) {
      return (
        // <CreateEmployeeDisciplineForm
        //   id={id}
        //   employeeId={employeeId}
        //   handleCancel={handleCancelCreateNew}
        // />
        <CreateDisciplineGroupForm id={id} handleCancel={handleCancelCreateNew} />
      );
    } else if (showUpdate) {
      return (
        <UpdateDisciplineGroupForm
          id={id}
          disciplineGroupId={currentDisciplineGroupId}
          handleCancel={handleEditCancel}
        />

        
      );
    } else {
      if (sortedDisciplineGroupList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add Discipline Group
            </StyledNewButton>
            <TabWarning
              warningHeader="No Discipline Groups"
              warningText="This company has not had any Discipline Groups added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add Discipline Group
          </StyledNewButton>
          <StyledTable
            dataSource={sortedDisciplineGroupList}
            columns={columns}

          />
        </>
      );
    }
  };

  return (
    <>
      <DisciplineGroupsUI />
    </>
  );
};
