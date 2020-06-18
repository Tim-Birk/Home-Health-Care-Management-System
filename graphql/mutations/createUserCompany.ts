import gql from "graphql-tag";

export const createUserCompanyGraphQL = gql`
  mutation($data: UserCompanyCreateInput!) {
    createUserCompany(data: $data) {
      id
      user
      company {
        id
        legalBusinessName
      }
    }
  }
`;
