import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { companiesGraphQL } from "../graphql/queries/companies";
import { userCompaniesGraphQL } from "../graphql/queries/userCompanies";
import { Row } from "antd";
import { Company } from "../generated/apollo-components";
import { Error } from "./notify/Error";
import { Loading } from "./notify/Loading";
import { Warning } from "./notify/Warning";
import { CompanyListItem } from "./CompanyListItem";
import styled from "styled-components"

const StyledCompanyList = styled(Row)`
  ${({ theme }) => `
        display: flex;
        justify-content: center;
        margin: 0 ${theme["margin-medium"]};

        @media ${theme.device.tablet} { 
          justify-content: flex-start;
          
          
        }
    `}
`;

export enum queryEnum {
  userCompanies = "userCompanies",
  companies = "companies",
}

type CompaniesListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};

export const CompaniesList = ({
  options,
  parentRoute,
  queryType,
}: CompaniesListProps) => {
  const query =
    queryType === queryEnum.companies ? companiesGraphQL : userCompaniesGraphQL;
  const { loading, data, error } = useQuery(query, options);

  const parentArray = _.get(data, queryType);
  const companiesList = _.map(parentArray, (value) =>
    _.get(value, "company", value)
  );

  if (loading) return <Loading />;
  if (error || !companiesList) return <Error errorText={`${error}`} />;
  if (companiesList.length === 0)
    return (
      <Warning
        warningHeader="No Companies"
        warningText="This user is not currently assigned to any companies."
      />
    );

  return (
    <StyledCompanyList>
      {companiesList.map((company: Company) => (
        <CompanyListItem
          company={company}
          key={`${company.id}-${queryType}`}
          parentRoute={parentRoute}
        />
      ))}
    </StyledCompanyList>
  );
};
