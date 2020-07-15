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
import { CreateEmployeeCredentialForm } from "./CreateEmployeeCredentialForm";
import { UpdateEmployeeCredentialForm } from "./UpdateEmployeeCredentialForm";
// import { CreateEmployeeCredentialForm } from "../components/CreateEmployeeCredentialForm";
// import { UpdateEmployeeCredentialForm } from "./UpdateEmployeeCredentialForm";

type EmployeeCredentialProps = {
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

export const EmployeeCredentials = ({
  id,
  employeeId,
  legalBusinessName,
}: EmployeeCredentialProps) => {
  const [
    currentEmployeeCredentialId,
    setCurrentEmployeeCredentialId,
  ] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(employeeGraphQL, {
    variables: { where: { id: employeeId } },
  });

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  const EditButton = (employeeCredentialId: any) => {
    return <div style={{minWidth: "75px", textAlign: "center"}}><a onClick={(e) => handleEditClick(employeeCredentialId)}>Edit</a></div>;
  };

  let employeeCredentialList = _.map(
    data.employee.employeeCredential,
    (value) => _.get(value, "employee.employeeCredential", value)
  ).map((ec) => ({
    ...ec,
    key: ec.id,
    credential: ec.licenseCertification.name ? ec.licenseCertification.name : null,
    licenseCertificationNumber: ec.licenseCertificationNumber,
    issueDate: <div style={{minWidth: "80px"}}>{ec.issueDate}</div>,
    expirationDate: <div style={{minWidth: "80px"}}>{ec.expirationDate}</div>,
    // file:
    //   ec.images.length === 0 ? null : (
    //     <a href={ec.images[0].url} target="_blank"></a>
    //   ),
    renderFiles: ec.images ? <a href={ec.images.url} target="_blank">View</a> : null,
    edit: <EditButton employeeCredentialId={ec.id} />,
  }));
console.log(employeeCredentialList)
  const sortedEmployeeCredentialLIst = _.sortBy(employeeCredentialList, [
    { sortStartDate: "desc" },
  ]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (employeeCredentialId: any) => {
    setCurrentEmployeeCredentialId(employeeCredentialId.employeeCredentialId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface EmployeeCredential {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const CredentialsTable = () => (
    <Media query="(max-width: 350px)">
      {(matches) => {
        let columns: ColumnsType<EmployeeCredential> = [];
        if (matches) {
          columns = [
            {
              title: "Credential",
              dataIndex: "credential",
              key: "id",
            },
            {
              title: "Issued",
              dataIndex: "issueDate",
              key: "id",
            },
            {
              title: "Expiration",
              dataIndex: "expirationDate",
              key: "id",
              responsive: ["md"],
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
              title: "Credential",
              dataIndex: "credential",
              key: "id",
            },
            {
              title: "Issued",
              dataIndex: "issueDate",
              key: "id",
            },
            {
              title: "Expiration",
              dataIndex: "expirationDate",
              key: "id",
              responsive: ["md"],
            },
            {
              title: "File",
              dataIndex: "renderFiles",
              key: "id",
              responsive: ["md"],
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
            dataSource={sortedEmployeeCredentialLIst}
            columns={columns}
            size="middle"
            scroll={{ x: 340 }}
          />
        );
      }}
    </Media>
  );

  const CredentialsUI = () => {
    if (showNew) {
      return (
        <CreateEmployeeCredentialForm
          id={id}
          employeeId={employeeId}
          handleCancel={handleCancelCreateNew}
        />
      );
    } else if (showUpdate) {
      return (
        <UpdateEmployeeCredentialForm
          id={id}
          employeeId={employeeId}
          employeeCredentialId={currentEmployeeCredentialId}
          handleCancel={handleEditCancel}
        />
      );
    } else {
      if (employeeCredentialList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add Credential
            </StyledNewButton>
            <TabWarning
              warningHeader="No Credentials"
              warningText="This employee has not had any Credentials added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add Credential
          </StyledNewButton>
          <CredentialsTable />
        </>
      );
    }
  };

  return (
    <>
      <CredentialsUI />
    </>
  );
};
