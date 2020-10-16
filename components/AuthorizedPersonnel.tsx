import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { authorizedPersonnelsGraphQL } from "../graphql/queries/authorizedPersonnels";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import { TabWarning } from "./notify/Warning";
import { CreateAuthorizedPersonnelForm } from "./CreateAuthorizedPersonnelForm";
import { UpdateAuthorizedPersonnelForm } from "./UpdateAuthorizedPersonnelForm";

type AuthorizedPersonnelProps = {
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

export const AuthorizedPersonnel = ({
  id,
  legalBusinessName,
}: AuthorizedPersonnelProps) => {
  const [
    currentauthorizedPersonnelId,
    setCurrentauthorizedPersonnelId,
  ] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(
    authorizedPersonnelsGraphQL,
    {
      variables: { where: { company: { id } } },
    }
  );

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  let authorizedPersonnelList = _.map(data.authorizedPersonnels, (value) =>
    _.get(value, "authorizedPersonnels", value)
  ).map((dg) => ({
    ...dg,
    key: dg.id,
    name: `${dg.lastName}, ${dg.firstName}`,
    renderName: (
      <a
        onClick={(e) => handleEditClick(dg.id)}
      >{`${dg.lastName}, ${dg.firstName}`}</a>
    ),
    title: dg.title,
    renderCanVerify: (
      <ul style={{ paddingLeft: 0 }}>
        {dg.canVerify.map((d) => (
          <li key={d} style={{ listStyleType: "none" }}>
            {d}
          </li>
        ))}
      </ul>
    ),
  }));

  const sortedauthorizedPersonnelList = _.sortBy(authorizedPersonnelList, [
    "name",
  ]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (authorizedPersonnelId: any) => {
    setCurrentauthorizedPersonnelId(authorizedPersonnelId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface authorizedPersonnel {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const columns: ColumnsType<authorizedPersonnel> = [
    {
      title: "Name",
      dataIndex: "renderName",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["sm"],
    },
    {
      title: "Verify Items",
      dataIndex: "renderCanVerify",
      key: "id",
      responsive: ["md"],
    },
  ];

  const AuthorizedPersonnelsUI = () => {
    if (showNew) {
      return (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Add Authorized Personnel
          </StyledPageTitle>
          <CreateAuthorizedPersonnelForm
            id={id}
            handleCancel={handleCancelCreateNew}
          />
        </>
      );
    } else if (showUpdate) {
      return (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Update Authorized Personnel
          </StyledPageTitle>
          <UpdateAuthorizedPersonnelForm
            id={id}
            authorizedPersonnelId={currentauthorizedPersonnelId}
            handleCancel={handleEditCancel}
          />
        </>
      );
    } else {
      if (sortedauthorizedPersonnelList.length === 0) {
        return (
          <>
            <StyledPageTitle>
              {legalBusinessName} - Authorized Personnel
            </StyledPageTitle>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add New
            </StyledNewButton>
            <TabWarning
              warningHeader="No Authorized Personnel"
              warningText="This company has not had any Authorized Personnel added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Authorized Personnel
          </StyledPageTitle>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add New
          </StyledNewButton>
          <StyledTable
            dataSource={sortedauthorizedPersonnelList}
            columns={columns}
          />
        </>
      );
    }
  };

  return (
    <>
      <AuthorizedPersonnelsUI />
    </>
  );
};
