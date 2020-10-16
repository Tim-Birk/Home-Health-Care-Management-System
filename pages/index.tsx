import styled from "styled-components";
import { LandingLayout } from "../components/layout/LandingLayout";
import * as _ from "lodash";
import { CompaniesList, queryEnum } from "../components/CompanyList";
import { useFetchUser } from "../utils/user";
import { LoginRequired } from "../components/notify/LoginRequired";
import { Loading } from "../components/notify/Loading";
import { Button } from "antd";
import Link from "next/link";

const StyledHeader = styled.h2`
  ${({ theme }) => `
    text-align: left;
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
  `}
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin-left: ${theme["margin-small"]};
    margin-top: ${theme["margin-small"]};
    margin-bottom: ${theme["margin-small"]};
  `}
`;

const Index = () => {
  let { user, loading: isFetchUser } = useFetchUser();
  const userCompany = _.get(user, "sub");
  const options = userCompany
    ? { variables: { where: { user: userCompany } } }
    : {};

  if (isFetchUser) return <Loading />;

  return (
    <LandingLayout title="Home Health Care Managment System">
      {user ? (
        <>
          <StyledButton type="primary">
            <Link href={`/company/create`}>
              <a>New Company</a>
            </Link>
          </StyledButton>
          <StyledHeader>Your Existing Companies:</StyledHeader>
          <CompaniesList
            parentRoute="company"
            queryType={queryEnum.userCompanies}
            options={options}
          />
        </>
      ) : (
        <LoginRequired />
      )}
    </LandingLayout>
  );
};

export default Index;
