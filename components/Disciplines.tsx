import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";

import { TabWarning } from "./notify/Warning";

// import { UpdateDisciplineForm } from "./UpdateDisciplineForm";
import { CreateDisciplineForm } from "./CreateDisciplineForm";
import { UpdateDisciplineForm } from "./UpdateDisciplineForm";
// import { CreateEmployeeDisciplineForm } from "../components/CreateEmployeeDisciplineForm";
// import { UpdateEmployeeDisciplineForm } from "./UpdateEmployeeDisciplineForm";

type DisciplinesProps = {
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

export const Disciplines = ({ id, legalBusinessName }: DisciplinesProps) => {
  const [currentDisciplineId, setCurrentDisciplineId] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(
    disciplinesGraphQL,
    {
      variables: { where: { company: { id } } },
    }
  );

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  let disciplinesList = _.map(data.disciplines, (value) =>
    _.get(value, "disciplines", value)
  ).map((dg) => ({
    ...dg,
    key: dg.id,
    name: dg.name,
    renderName: <a onClick={(e) => handleEditClick(dg.id)}>{dg.name}</a>,
    abbreaviation: dg.abbreviation,
  }));

  const sortedDisciplinesList = _.sortBy(disciplinesList, ["name"]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (disciplineId: any) => {
    setCurrentDisciplineId(disciplineId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface Discipline {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const columns: ColumnsType<Discipline> = [
    {
      title: "Discipline ",
      dataIndex: "renderName",
      key: "name",
    },
    {
      title: "Abbreviation",
      dataIndex: "abbreviation",
      key: "abbreviation",
      responsive: ["sm"],
    },
  ];

  const DisciplinesUI = () => {
    if (showNew) {
      return (
        <CreateDisciplineForm id={id} handleCancel={handleCancelCreateNew} />
      );
    } else if (showUpdate) {
      return (
        <UpdateDisciplineForm
          id={id}
          disciplineId={currentDisciplineId}
          handleCancel={handleEditCancel}
        />
      );
    } else {
      if (sortedDisciplinesList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add Discipline
            </StyledNewButton>
            <TabWarning
              warningHeader="No Discipline "
              warningText="This company has not had any Disciplines added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add Discipline
          </StyledNewButton>
          <StyledTable dataSource={sortedDisciplinesList} columns={columns} />
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
