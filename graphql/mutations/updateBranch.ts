import gql from "graphql-tag";

export const updateBranchGraphQL = gql`
  mutation($data: BranchUpdateInput!, $where: BranchWhereUniqueInput!) {
    updateBranch(data: $data, where: $where) {
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
      stage
      company {
        id
        companyUsers {
          id
        }
      }
    }
  }
`;
