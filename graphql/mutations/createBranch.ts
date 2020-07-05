import gql from "graphql-tag";

export const createBranchGraphQL = gql`
  mutation($data: BranchCreateInput!) {
    createBranch(data: $data) {
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
