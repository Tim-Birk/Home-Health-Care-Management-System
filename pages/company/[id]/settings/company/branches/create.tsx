import { MainLayout } from "../../../../../../components/layout/MainLayout";
import styled from "styled-components";
import { CreateBranchForm } from "../../../../../../components/CreateBranchForm";
import { useQuery } from "@apollo/react-hooks";
import { companyGraphQL } from "../../../../../../graphql/queries/company";
import { useFetchUser } from "../../../../../../utils/user";
import { Loading } from "../../../../../../components/notify/Loading";
import { Error } from "../../../../../../components/notify/Error";
import { LandingLayout } from "../../../../../../components/layout/LandingLayout";
import isValidUser from "../../../../../../utils/isValidUser";
import Router from "next/router";

const StyledHeader = styled.h1`
  ${({ theme }) => `
        padding: ${theme["padding-small"]} ${theme["padding-small"]};
    `}
`;

const CreateBranch = ({ id }) => {
  const { user, loading: isFetchUser } = useFetchUser();

  const { loading: isQueryLoading, data, error: isCompanyError } = useQuery(
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
    <MainLayout title="Create New Branch" companyId={id} defaultSelectedKeys="8">
      <CreateBranchForm id={id} legalBusinessName={company.legalBusinessName} />
    </MainLayout>
  );
};

CreateBranch.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default CreateBranch;
