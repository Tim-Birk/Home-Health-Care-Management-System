import gql from "graphql-tag";

export const branchGraphQL = gql`
  query($where: BranchWhereUniqueInput!) {
    branch(where: $where) {
      id
      branchName
      branchCode
      abbreviation
      address1
      address2
      city
      state
      zip
      zipExt
      phone
      phoneExt
      fax
      contactName
      contactTitle
      contactPhone
      contactPhoneExt
      contactEmail
      company {
        id
        companyUsers {
          user
        }
      }
    }
  }
`;
