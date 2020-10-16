import { MainLayout } from "../../../../components/layout/MainLayout";
import styled from "styled-components";
import { CreateEmployeeForm } from "../../../../components/CreateEmployeeForm";
import { useQuery } from "@apollo/react-hooks";
import { companyGraphQL } from "../../../../graphql/queries/company";
import { useFetchUser } from "../../../../utils/user";
import { Loading } from "../../../../components/notify/Loading";
import { Error } from "../../../../components/notify/Error";
import { LandingLayout } from "../../../../components/layout/LandingLayout";
import isValidUser from "../../../../utils/isValidUser";
import Router from "next/router";

const StyledHeader = styled.h1`
  ${({ theme }) => `
        padding: ${theme["padding-small"]} ${theme["padding-small"]};
    `}
`;

const CreateEmployee = ({ id }) => {
  const { user, loading: isFetchUser } = useFetchUser();

  const { loading: isQueryLoading, data, error: isEmployeeError } = useQuery(
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

  const { company } = data;

  return (
    <MainLayout title="Create New Employee" companyId={id} defaultSelectedKeys="2">
      <CreateEmployeeForm id={id} legalBusinessName={company.legalBusinessName} branches={company.companyBranches} />
    </MainLayout>
  );
};

CreateEmployee.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default CreateEmployee;
