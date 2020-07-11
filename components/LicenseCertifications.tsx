import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { licenseCertificationsGraphQL } from "../graphql/queries/licenseCertifications";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";

import { TabWarning } from "./notify/Warning";

import { CreateDisciplineForm } from "./CreateDisciplineForm";
import { UpdateDisciplineForm } from "./UpdateDisciplineForm";
import { CreateLicenseCertificationForm } from "./CreateLicenseCertificationForm";
import { UpdateLicenseCertificationForm } from "./UpdateLicenseCertificationForm";

type LicenseCertificationsProps = {
  id: any;
  legalBusinessName: any;
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

export const LicenseCertifications = ({
  id,
  legalBusinessName,
}: LicenseCertificationsProps) => {
  const [currentLicenseCertificationId, setLicenseCertificationId] = useState(
    null
  );
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(
    licenseCertificationsGraphQL,
    {
      variables: { where: { company: { id } } },
    }
  );

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  let licenseCertificationsList = _.map(data.licenseCertifications, (value) =>
    _.get(value, "licenseCertifications", value)
  ).map((dg) => ({
    ...dg,
    key: dg.id,
    name: dg.name,
    renderName: <a onClick={(e) => handleEditClick(dg.id)}>{dg.name}</a>,
    code: dg.code,
    type: dg.type,
    renderDisciplines: (
      <ul style={{ paddingLeft: 0 }}>
        {dg.disciplines.map((d) => (
          <li key={d.id} style={{ listStyleType: "none" }}>
            {d.name}
          </li>
        ))}
      </ul>
    ),
  }));

  const sortedLicenseCertificationsList = _.sortBy(licenseCertificationsList, [
    "name",
  ]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (licenseCertificationId: any) => {
    setLicenseCertificationId(licenseCertificationId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface LicenseCertification {
    key: "id";
    title: "name";
    dataIndex: "id";
  }

  const columns: ColumnsType<LicenseCertification> = [
    {
      title: "Name ",
      dataIndex: "renderName",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      responsive: ["sm"],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      responsive: ["sm"],
    },
    {
      title: "Disciplines",
      dataIndex: "renderDisciplines",
      key: "id",
      responsive: ["md"],
    },
  ];

  const LicenseCertificationsUI = () => {
    if (showNew) {
      return (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Create License/Certification
          </StyledPageTitle>
          <CreateLicenseCertificationForm
            id={id}
            handleCancel={handleCancelCreateNew}
          />
        </>
      );
    } else if (showUpdate) {
      return (
        <>
          <StyledPageTitle>
            {legalBusinessName} - Update License/Certification
          </StyledPageTitle>
          <UpdateLicenseCertificationForm
            id={id}
            licenseCertificationId={currentLicenseCertificationId}
            handleCancel={handleEditCancel}
          />
        </>
      );
    } else {
      if (sortedLicenseCertificationsList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add License/Certification
            </StyledNewButton>
            <TabWarning
              warningHeader="No License/Certifications "
              warningText="This company has not had any License/Certifications added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledPageTitle>{`${legalBusinessName} - License/Certifications`}</StyledPageTitle>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add License/Certification
          </StyledNewButton>
          <StyledTable
            dataSource={sortedLicenseCertificationsList}
            columns={columns}
          />
        </>
      );
    }
  };

  return (
    <>
      <LicenseCertificationsUI />
    </>
  );
};
