import styled from "styled-components";
import { CreateCompanyForm } from "../../components/CreateCompanyForm";
import { useQuery } from "@apollo/react-hooks";
import { useFetchUser } from "../../utils/user";
import { Loading } from "../../components/notify/Loading";
import { Error } from "../../components/notify/Error";
import { LandingLayout } from "../../components/layout/LandingLayout";
import Router from "next/router";

const StyledHeader = styled.h1`
  ${({ theme }) => `
        padding: ${theme["padding-small"]} ${theme["padding-small"]};
    `}
`;

const CreateCompany = ({ id }) => {
  const { user, loading: isFetchUser } = useFetchUser();

  if (isFetchUser) return <Loading />;

  if (!user) {
    Router.push("/");
  } 

  
  return (
    <LandingLayout title="Create New Company">
      <CreateCompanyForm />
    </LandingLayout>
  );
};

export default CreateCompany;
